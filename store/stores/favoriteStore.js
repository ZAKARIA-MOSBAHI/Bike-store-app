import {create} from 'zustand';

export const useFavoriteStore = create((set, get) => ({
  favorites: [],
  addFavorite: payload =>
    set(state => {
      return {favorites: [...state.favorites, payload]};
    }),
  removeFavorite: id => {
    const state = get();
    const newFavorites = state.favorites.filter(item => item.id !== id);
    set({favorites: newFavorites});
  },
  resetFavorites: () => set({favorites: []}),
}));
