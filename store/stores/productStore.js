import {create} from 'zustand';
import {api} from '../../api/axios';

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  filteredProducts: [],
  getProducts: async () => {
    const state = get();
    try {
      set({...state, loading: true});
      const response = await api.get('/Products');
      set({...state, loading: false});
      const products = response.data;
      set(state => ({...state, products: products}));
      return products;
    } catch (error) {
      console.error(error);
    }
  },
  filterProducts: category => {
    set(state => {
      if (category === 'All') {
        return {...state, filteredProducts: state.products};
      } else {
        const filtered = state.products.filter(item =>
          item.category.name.toLowerCase().includes(category.toLowerCase()),
        );
        return {...state, filteredProducts: filtered};
      }
    });
  },
}));
