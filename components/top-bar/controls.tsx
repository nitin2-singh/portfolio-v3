"use client";

import { Minus, Square } from "lucide-react";
import { CgClose } from "react-icons/cg";
export function Controls() {
  return (
    <div>
      <div className="flex items-center gap-2 max-lg:hidden">
        {/* Close */}
        <button
          className="
          group
          flex h-3 w-3 items-center justify-center
          rounded-full
          bg-[#ff5f57]
        "
        >
          <CgClose
            className="
            h-2 w-2
            opacity-0
            transition-opacity
            group-hover:opacity-100
            text-black/20
          "
            strokeWidth={3}
          />
        </button>

        {/* Minimize */}
        <button
          className="
          group
          flex h-3 w-3 items-center justify-center
          rounded-full
          bg-[#febc2e]
        "
        >
          <Minus
            className="
            h-2 w-2
            opacity-0
            transition-opacity
            group-hover:opacity-100
            text-black/20
          "
            strokeWidth={3}
          />
        </button>

        {/* Maximize */}
        <button
          className="
          group
          flex h-3 w-3 items-center justify-center
          rounded-full
          bg-[#28c840]
        "
        >
          <Square
            className="
            h-2 w-2
            opacity-0
            transition-opacity
            group-hover:opacity-100
            text-black/20
          "
            strokeWidth={3}
          />
        </button>
      </div>
    </div>
  );
}
