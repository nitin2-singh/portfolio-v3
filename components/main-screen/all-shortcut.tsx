"use client";

import { useLeftDeckStore } from "@/store/left-deck.store";
import { useModalStore } from "@/store/search-bar-store.store";
import { useTerminalStore } from "@/store/terminal.store";
import { useEffect } from "react";

export function AllShortcut() {
  const { setOpenSearchBar } = useModalStore();
  const { setOpenTerminal, openTerminal } = useTerminalStore();
  const { openDeck, setOpenDeck } = useLeftDeckStore();

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

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setOpenDeck(!openDeck);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setOpenTerminal, openTerminal, setOpenSearchBar, setOpenDeck, openDeck]);

  return <p className="hidden"></p>;
}
