import { FILES } from "@/components/common/files";
import { create } from "zustand";

export type File = {
  id: number;
  name: string;
  logo: string;
  location: string;
  tags?: string;
  isFile?: boolean;
};

const HOME_FILE = FILES[0];

type FileStoreState = {
  activeFile: File;
  activeTabs: File[];

  setActiveFile: (file: File) => void;
  setActiveTabs: (tabs: File[]) => void;

  onClick: (file: File) => void;
  closeTab: (fileId: number) => void;
  closeAllTabs: () => void;
};

export const useFileStore = create<FileStoreState>()((set, get) => ({
  activeFile: HOME_FILE,

  activeTabs: [HOME_FILE],

  setActiveFile: (file) => set({ activeFile: file }),

  setActiveTabs: (tabs) => set({ activeTabs: tabs }),

  onClick: (file) => {
    if (file.isFile) return;

    const { activeTabs } = get();

    const exists = activeTabs.some((tab) => tab.id === file.id);

    if (!exists) {
      set({
        activeTabs: [...activeTabs, file],
        activeFile: file,
      });
      return;
    }

    set({ activeFile: file });
  },

  closeTab: (fileId) => {
    const { activeTabs, activeFile } = get();

    const tabIndex = activeTabs.findIndex((t) => t.id === fileId);

    if (tabIndex === -1) return;

    const closingActiveTab = activeFile.id === fileId;

    const newTabs = activeTabs.filter((t) => t.id !== fileId);

    // No tabs left -> reopen home
    if (newTabs.length === 0) {
      set({
        activeTabs: [HOME_FILE],
        activeFile: HOME_FILE,
      });
      return;
    }

    // Closing inactive tab
    if (!closingActiveTab) {
      set({
        activeTabs: newTabs,
      });
      return;
    }

    // Closing active tab
    const nextActive =
      activeTabs[tabIndex + 1] || // right
      activeTabs[tabIndex - 1] || // left
      HOME_FILE;

    set({
      activeTabs: newTabs,
      activeFile: nextActive,
    });
  },

  closeAllTabs: () => {
    set({ activeTabs: [HOME_FILE], activeFile: HOME_FILE });
  },
}));
