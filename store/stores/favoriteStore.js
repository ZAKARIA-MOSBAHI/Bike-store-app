import {create} from 'zustand';

export const useFavoriteStore = create(set => ({
  favorites: [],
  addFavorite: payload =>
    set(state => ({favorites: [...state.favorites, payload]})),
  removeFavorite: payload =>
    set(state => ({...state.favorites.filter(f => f.id !== payload.id)})),
}));
