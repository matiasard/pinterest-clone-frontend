/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";
import { persist } from "zustand/middleware";

type State = {
  token: string;
  profile: any;
  isAuth: boolean;
};

type Actions = {
  setToken: (token: string) => void;
  setProfile: (token: string) => void;
  logout: () => void;
};

// interface AuthState {
//   token: string | null;
//   setToken: (toekn: string) => void;
// }

export const useAuthStore = create(
  persist<State & Actions>((set) => ({
      token: "",
      profile: null,
      isAuth: false,
      setToken: (token: string) =>
        set((state) => ({
          token,
          isAuth: true
        })),
      setProfile: (profile: any) => 
          set((state) => ({ 
            profile
        })),
      logout: () => set((state) => ({
          token: "",
          isAuth: false,
          profile: null,
      })),
    }), {
    name: "auth"
  })
);
