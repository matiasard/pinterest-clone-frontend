import { create } from "zustand";
import { PhotoSave } from "../../types/Photo";

interface BookState {
  value: string;
  favorites: PhotoSave[];
  updateValue: (newValue: string) => void;
  addToFavorites: (item: PhotoSave) => void;
  removeFromFavorites: (item: PhotoSave) => void;
}

export const useBookStore = create<BookState>((set) => ({
  value: "mario",
  favorites: [],
  updateValue: (newValue: string) => set({ value: newValue }),
  addToFavorites: (item) =>
    set((state) => ({ favorites: [...state.favorites, item] })),
  removeFromFavorites: (item) => {
    set((state) => ({
      favorites: state.favorites.filter((favItem) => favItem !== item),
    }));
  },
}));
