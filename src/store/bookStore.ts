import { create } from "zustand";
import { PhotoSave } from "../types/Photo";

interface BookState {
  query: string;
  favorites: PhotoSave[];
  updateValue: (newValue: string) => void;
  addToFavorites: (item: PhotoSave) => void;
  removeFromFavorites: (item: PhotoSave) => void;
}

export const useBookStore = create<BookState>((set) => ({
  query: "mario",
  favorites: [],
  updateValue: (newValue: string) => set({ query: newValue }),
  addToFavorites: (item) => {
    set((state) => {
      if (!state.favorites.some((favItem) => favItem.id === item.id)) {
        return { favorites: [...state.favorites, item] }
      }
      return state;
    })
  },
  removeFromFavorites: (item) => {
    set((state) => ({
      favorites: state.favorites.filter((favItem) => favItem !== item),
    }));
  },
}));
