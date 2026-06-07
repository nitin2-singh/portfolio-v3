import { FILES } from "@/components/common/files";
import { create } from "zustand";

export type File = {
  id: number;
  name: string;
  logo: string;
  location: string;
  isFile?: undefined | boolean;
};

type FileStoreState = {
  activeFile: File;
  setActiveFile: (file: File) => void;

  activeTabs: File[];
  setActiveTabs: (activeTabs: File[]) => void;

  onClick: (file: File) => void;
};

export const useFileStore = create<FileStoreState>()((set, get) => ({
  activeFile: FILES[0],
  setActiveFile: (file: File) => set({ activeFile: file }),

  activeTabs: [FILES[0]],
  setActiveTabs: (file: File[]) => set({ activeTabs: file }),

  onClick: (file: File) => {
    const { activeTabs } = get();

    // set active file
    set({ activeFile: file });

    // prevent duplicate tabs
    const exists = activeTabs.some((tab) => tab.name === file.name);

    if (!exists) {
      set({
        activeTabs: [...activeTabs, file],
      });
    }
  },
}));
