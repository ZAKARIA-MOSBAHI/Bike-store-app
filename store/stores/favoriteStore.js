import {create} from 'zustand';

export const useFavoriteStore = create(set => ({
  favorites: [],
  addFavorite: payload =>
    set(state => {
      return {favorites: [...state.favorites, payload]};
    }),
  removeFavorite: payload =>
    set(state => ({
      favorites: state.favorites.filter(f => f.id !== payload.id),
    })),
  resetFavorites: () => set({favorites: []}),
}));
