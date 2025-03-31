import { create } from "zustand";
import { GlobalStateType } from "./types/state";
import { createJSONStorage, persist } from "zustand/middleware";

export const useGlobalStore = create<GlobalStateType>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      toggleIsLoggedIn: (value: boolean) => set(() => ({ isLoggedIn: value })),
    }),
    { name: "global-storage", storage: createJSONStorage(() => sessionStorage) },
  ),
);
