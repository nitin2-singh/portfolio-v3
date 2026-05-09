import { create } from "zustand";

type ModalState = {
  openSearchBar: boolean;
  setOpenSearchBar: (open: boolean) => void;
};

export const useModalStore = create<ModalState>()((set) => ({
  openSearchBar: false,
  setOpenSearchBar: (open: boolean) => set({ openSearchBar: open }),
}));
