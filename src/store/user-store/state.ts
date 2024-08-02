import { create } from "zustand";
import { StateType } from "./types/state";
import { User } from "./types/user";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create<StateType>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      user: null,
      toggleIsLoggedIn: (value: boolean) => set(() => ({ isLoggedIn: value })),
      setUser: (user: User | null) => set(() => ({ user })),
    }),
    { name: "user-storage", storage: createJSONStorage(() => sessionStorage) },
  ),
);
