"use client";

import HomeFile from "../files-content/home";
import FileTabs from "./file-tabs";
import { Files } from "./files";
import { LeftDeck } from "./left-deck";
import { useState } from "react";

export default function MainScreen() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex w-full h-full flex-1 overflow-hidden">
      <div className="flex h-full shrink-0 max-lg:hidden">
        <LeftDeck onFolderClick={() => setSidebarOpen((o) => !o)} />

        {/* animated files panel */}
        <div
          className="h-full overflow-hidden transition-all duration-300 ease-in-out border-r border-stone-700"
          style={{ width: sidebarOpen ? "220px" : "0px" }}
        >
          <div className="w-55 h-full">
            <Files />
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 min-w-0 h-full">
        <FileTabs />
        <div className="flex-1 overflow-auto">
          <HomeFile />
        </div>
      </div>
    </div>
  );
}
