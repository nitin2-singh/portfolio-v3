"use client";
import { ArrowDown, ArrowUp, Plus } from "lucide-react";
import Image from "next/image";
import { PiGitMergeLight } from "react-icons/pi";
import { FILES } from "../common/files";
import { useFileStore } from "@/store/files.store";
import { cn } from "@/lib/utils";

export function Files() {
  const { activeFile, onClick } = useFileStore();
  return (
    <div className="bg-brand-filesdeck w-full h-full flex flex-col justify-between">
      <div>
        <p className="text-[11px] p-2 px-5">PORTFOLIO</p>
        {FILES.map((file) => (
          <div
            onClick={() => {
              onClick(file);
              if (file.isFile) {
                window.open(file.location, "_blank");
              }
            }}
            key={file.id}
            className={cn(
              "group flex  items-center gap-2 px-5 py-1.5 hover:bg-brand-accent border-l-2 hover:border-brand-primary border-transparent cursor-pointer text-xs",
              activeFile.id !== file.id && "text-brand-dim",
              activeFile.id === file.id &&
                "bg-brand-accent border-brand-primary",
            )}
          >
            <Image width={16} height={16} src={file.logo} alt={file.name} />
            <p className="mx-auto truncate">{file.name}</p>
            {file.isFile && (
              <ArrowDown
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity text-brand-dim"
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-3 py-1 border-t">
        <div className="flex items-center gap-1 text-xs">
          <PiGitMergeLight size={12} />
          <p>main</p>
        </div>
        <div className="flex gap-3 text-xs">
          <div className="flex items-center text-xs text-green-400">
            <ArrowUp size={12} />
            {"1"}
          </div>
          <div className="flex items-center text-xs text-red-400">
            <Plus size={12} />
            {"3"}
          </div>
        </div>
      </div>
    </div>
  );
}
