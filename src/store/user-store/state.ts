import { create } from "zustand";
import { StateType } from "./types/state";
import { User } from "./types/user";
import { createJSONStorage, persist } from "zustand/middleware";
import { ItemType } from "./types/item";

export const useUserStore = create<StateType>()(
  persist(
    (set, get) => ({
      isLoggedIn: false,
      user: null,
      toggleIsLoggedIn: (value: boolean) => set(() => ({ isLoggedIn: value })),
      setUser: (user: User | null) => set(() => ({ user })),
      items: [],
      addItem: (value: ItemType) => set(() => ({ items: [...get().items, value] })),
      removeItem: (item: ItemType) =>
        set(() => ({
          items: get().items.filter((value) => value.description !== item.description),
        })),

      requests: [],
      addRequest: (value: ItemType) => set(() => ({ requests: [...get().requests, value] })),
      removeRequest: (item: ItemType) =>
        set(() => ({
          requests: get().requests.filter((value) => value.description !== item.description),
        })),
    }),
    { name: "user-storage", storage: createJSONStorage(() => sessionStorage) },
  ),
);
