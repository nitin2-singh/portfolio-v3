"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SearchBar } from "../search/search-bar";
import { Controls } from "./controls";
import { ProjectListSheet } from "./project-list-sheet";

export function TopBar() {
  const [entry, setEntry] = useState<{ msg: string; id: number } | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countRef = useRef(0);

  function handleMessage(msg: string) {
    if (timerRef.current) clearTimeout(timerRef.current);

    // increment in event handler (not render) — no ESLint violation
    countRef.current += 1;
    setEntry({ msg, id: countRef.current });

    timerRef.current = setTimeout(() => {
      setEntry(null);
      timerRef.current = null;
    }, 1000);
  }

  return (
    <div className="relative flex items-center px-4 border-b py-1 w-full bg-brand-topbar max-lg:bg-brand-filesdeck">
      {/* Left: controls + message */}
      <div className="flex items-center gap-3 h-5 max-lg:hidden">
        <Controls onShowMessage={handleMessage} />

        <AnimatePresence mode="wait">
          {entry && (
            <motion.span
              key={entry.id}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2, ease: "easeOut" as const }}
              className="text-[11px] font-mono text-[#febc2e] whitespace-nowrap select-none"
            >
              {entry.msg}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Center — absolutely positioned so it's never pushed */}
      <div className="absolute left-1/2 -translate-x-1/2 max-lg:hidden">
        <SearchBar />
      </div>

      {/* Right */}
      <div className="max-lg:w-full">
        <ProjectListSheet />
      </div>
    </div>
  );
}
