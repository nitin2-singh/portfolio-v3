"use client";

import { useModalStore } from "@/store/search-bar-store.store";
import { useTerminalStore } from "@/store/terminal.store";
import { useEffect } from "react";

export function AllShortcut() {
  const { setOpenSearchBar } = useModalStore();
  const { setOpenTerminal, openTerminal } = useTerminalStore();

  useEffect(() => {
    const handleKeyDown = async (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "p") {
        e.preventDefault();
        setOpenSearchBar(true);
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "f") {
        e.preventDefault();

        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
        } else {
          await document.exitFullscreen();
        }
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "`") {
        e.preventDefault();
        setOpenTerminal(!openTerminal);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpenTerminal, openTerminal, setOpenSearchBar]);

  return <p className="hidden"></p>;
}
