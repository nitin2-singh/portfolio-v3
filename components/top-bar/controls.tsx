"use client";

import { useEffect, useState } from "react";
import { Minus, Square, Minimize2 } from "lucide-react";
import { CgClose } from "react-icons/cg";

const MESSAGES = [
  "nice try 😄 you can't close a portfolio!",
  "error 403: closing not permitted 🚫",
  "lol. it's a portfolio, not a tab 😂",
  "close button? on MY portfolio? bold move.",
  "nope. i worked too hard for this. 💪",
];

export function Controls({
  onShowMessage,
}: {
  onShowMessage?: (msg: string) => void;
}) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", handler);
    return () => document.removeEventListener("fullscreenchange", handler);
  }, []);

  function handleClose() {
    const msg = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
    onShowMessage?.(msg);
  }

  function handleMinimize() {
    window.blur();
  }

  function handleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  }

  return (
    <div className="flex items-center gap-2 max-lg:hidden">
      {/* Close */}
      <button
        onClick={handleClose}
        className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#ff5f57]"
      >
        <CgClose
          className="h-2 w-2 opacity-0 transition-opacity group-hover:opacity-100 text-black/20"
          strokeWidth={3}
        />
      </button>

      {/* Minimize */}
      <button
        onClick={handleMinimize}
        className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#febc2e]"
      >
        <Minus
          className="h-2 w-2 opacity-0 transition-opacity group-hover:opacity-100 text-black/20"
          strokeWidth={3}
        />
      </button>

      {/* Fullscreen / Exit Fullscreen */}
      <button
        onClick={handleFullscreen}
        className="group flex h-3 w-3 items-center justify-center rounded-full bg-[#28c840]"
      >
        {isFullscreen ? (
          <Minimize2
            className="h-2 w-2 opacity-0 transition-opacity group-hover:opacity-100 text-black/20"
            strokeWidth={3}
          />
        ) : (
          <Square
            className="h-2 w-2 opacity-0 transition-opacity group-hover:opacity-100 text-black/20"
            strokeWidth={3}
          />
        )}
      </button>
    </div>
  );
}
