import { create } from "zustand";

type TerminalState = {
  openTerminal: boolean;
  setOpenTerminal: (open: boolean) => void;
};

export const useTerminalStore = create<TerminalState>()((set) => ({
  openTerminal: false,
  setOpenTerminal: (open: boolean) => set({ openTerminal: open }),
}));
