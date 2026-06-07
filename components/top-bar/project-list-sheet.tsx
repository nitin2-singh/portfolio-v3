"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ArrowUp, FolderIcon, Menu, Plus, Search, X } from "lucide-react";
import { Button } from "../ui/button";
import { useModalStore } from "@/store/search-bar-store.store";
import Image from "next/image";
import { PiGitMergeLight } from "react-icons/pi";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { SettingPopup } from "../settings/setting-popup";
import { FILES } from "../common/files";
import { useFileStore } from "@/store/files.store";

export function ProjectListSheet() {
  const [open, setOpen] = useState(false);
  const { activeFile, onClick } = useFileStore();
  const setOpenSearchBar = useModalStore((s) => s.setOpenSearchBar);
  const handleSearchClick = () => {
    setOpenSearchBar(true);
  };

  return (
    <div className="lg:hidden h-6 flex items-center justify-between w-full">
      <div className="flex items-center gap-3">
        <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
          <SheetTrigger>
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent
            showCloseButton={false}
            side="left"
            className="gap-0 w-70!"
          >
            <div className="p-3 flex bg-brand-actionbar border-b text-xs items-center opacity-50!">
              <p>EXPLORER</p>
              <div className="flex items-center ms-auto gap-3">
                <SettingPopup />
                <X onClick={() => setOpen(false)} size={14} />
              </div>
            </div>
            <div className="h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center px-3 text-xs border-transparent cursor-pointer">
                  <FolderIcon size={16} />
                  <p className="text-xs p-2">Nitin-Singh</p>
                </div>
                {FILES.map((file) => (
                  <div
                    key={file.id}
                    onClick={() => {
                      onClick(file);
                      setOpen(false);
                    }}
                    className={cn(
                      "flex items-center gap-2 px-3 ps-7 py-2.5  border-transparent cursor-pointer text-xs",
                      "hover:bg-brand-accent border-l-2 hover:border-brand-primary",
                    )}
                  >
                    <Image
                      width={18}
                      height={18}
                      src={file.logo}
                      alt={file.name}
                    />
                    <p className="">{file.name}</p>
                    {activeFile.id === file.id && (
                      <span className="size-1.5 rounded-full bg-green-500 ms-auto me-4" />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between px-3 border-t py-3">
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
          </SheetContent>
        </Sheet>

        <p className="text-xs text-muted-foreground">~/{activeFile?.name}</p>
      </div>
      <div className="flex justify-end w-full">
        <Button
          variant="secondary"
          onClick={handleSearchClick}
          className="h-fit rounded-sm hover:bg-stone-600 w-fit px-1 py-1"
        >
          <Search size={16} />
        </Button>
      </div>
    </div>
  );
}
