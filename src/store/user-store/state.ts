import { create } from "zustand";
import { UserStateType } from "./types/state";
import { User } from "./types/user";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create<UserStateType>()(
  persist(
    (set) => ({
      user: null,
      setUser: (user: User) => set(() => ({ user })),
    }),
    { name: "user-storage", storage: createJSONStorage(() => sessionStorage) },
  ),
);
