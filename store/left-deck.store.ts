import { create } from "zustand";

type LeftDeckStore = {
  openDeck: boolean;
  setOpenDeck: (open: boolean) => void;
};

export const useLeftDeckStore = create<LeftDeckStore>()((set) => ({
  openDeck: true,
  setOpenDeck: (open: boolean) => set({ openDeck: open }),
}));
