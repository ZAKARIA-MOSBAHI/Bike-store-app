import {create} from 'zustand';

export const useAppStore = create(set => ({
  favorites: [],
  cart: [],
  addToCart: payload => set(state => ({cart: [...state.cart, payload]})),
  incrementQuantity: id =>
    set(state => ({
      cart: state.cart.map(item =>
        item.id === id ? {...item, quantity: item.quantity + 1} : item,
      ),
    })),
  decrementQuantity: id =>
    set(state => ({
      cart: state.cart
        .map(item =>
          item.id === id ? {...item, quantity: item.quantity - 1} : item,
        )
        .filter(item => item.quantity > 0),
    })),
  removeItem: id =>
    set(state => ({cart: state.cart.filter(item => item.id !== id)})),
}));
