"use client";
import { ChevronRight, X } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useFileStore } from "@/store/files.store";
import { cn } from "@/lib/utils";

export default function FileTabs() {
  const { activeFile, activeTabs } = useFileStore();

  return (
    <div className="max-md:hidden">
      <div className="flex w-full items-center gap-2 border-b border-border bg-brand-mainscreenfiles">
        <div className="flex items-center">
          {activeTabs.map((file) => (
            <div
              key={file.id}
              className={cn(
                "font-medium flex items-center gap-2 text-[11px] border-r border-r-border border-t-2 px-3 py-1 bg-brand-filesdeck border-t-brand-filesdeck text-brand-dim",
                file.id === activeFile.id &&
                  "border-t-brand-primary  bg-brand-mainscreenaccent text-white",
              )}
            >
              <Image
                width={16}
                height={16}
                src={file.logo}
                alt={file.name}
                className="w-4 h-4"
              />
              {file.name}
              <Button variant="ghost" className="p-1! h-fit rounded-sm">
                <X size={6} className="size-2.5" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      <p className="flex text-[11px] items-center gap-1 border-b border-border px-3 py-1 bg-brand-mainscreenaccent text-brand-dim">
        nitin <ChevronRight size={10} /> src <ChevronRight size={10} />{" "}
        <span className="text-white">{activeFile.name}</span>
      </p>
    </div>
  );
}
