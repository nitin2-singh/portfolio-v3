"use client";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useModalStore } from "@/store/search-bar-store.store";
import { Input } from "../ui/input";
import { FaChevronRight } from "react-icons/fa";
import { Kbd, KbdGroup } from "../ui/kbd";
import SearchFooter from "./footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { FILES } from "../common/files";
import { useFileStore } from "@/store/files.store";

export default function SearchPopup() {
  const [filteredFiles, setFilteredFiles] = useState(FILES);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { openSearchBar, setOpenSearchBar } = useModalStore();
  const { onClick } = useFileStore();
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = FILES.filter((file) =>
      file.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredFiles(filtered);
    setSelectedIndex(filtered.length > 0 ? 0 : -1);
  };

  const handleFileClick = (file: (typeof FILES)[number]) => {
    setOpenSearchBar(false);
    onClick(file);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!openSearchBar || filteredFiles.length === 0) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setIsKeyboardNavigation(true);
        setSelectedIndex((prev) =>
          prev < filteredFiles.length - 1 ? prev + 1 : 0,
        );
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        setIsKeyboardNavigation(true);
        setSelectedIndex((prev) =>
          prev > 0 ? prev - 1 : filteredFiles.length - 1,
        );
      }

      if (e.key === "Enter" && selectedIndex >= 0) {
        e.preventDefault();

        const selectedFile = filteredFiles[selectedIndex];

        setOpenSearchBar(false);
        onClick(selectedFile);
        setFilteredFiles(FILES);
        setSearchTerm("");
        setSelectedIndex(-1);
      }

      if (e.key === "Escape") {
        setOpenSearchBar(false);
        setSelectedIndex(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredFiles, selectedIndex, openSearchBar, setOpenSearchBar, onClick]);

  return (
    <Dialog open={openSearchBar} onOpenChange={setOpenSearchBar}>
      <DialogContent
        showCloseButton={false}
        className="rounded-sm p-0 sm:min-w-137.5"
      >
        <div>
          <div
            className={cn(
              "flex items-center gap-2 border-b px-4 py-2",
              FILES.length === filteredFiles.length ? "mb-3" : "mb-0",
            )}
          >
            <FaChevronRight size={10} />
            <Input
              placeholder="Go to file or run command..."
              className="w-full outline-none border-none ring-0! p-0"
              onChange={handleInputChange}
            />
            <KbdGroup className="max-md:hidden">
              <Kbd>Esc</Kbd>
            </KbdGroup>
          </div>

          {filteredFiles.length > 0 && (
            <div className="px-4 py-2 border-b">
              <p className="text-stone-500 text-[10px]">FILES</p>
            </div>
          )}

          <div className="">
            {filteredFiles.length === 0 && (
              <p className="w-full flex justify-center text-stone-500 py-7 mx-auto">
                No results for &quot;{searchTerm}&quot;
              </p>
            )}

            {filteredFiles.map((file, index) => (
              <div
                key={file.id}
                onMouseEnter={() => setSelectedIndex(index)}
                onClick={() => handleFileClick(file)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 border-l-2 border-transparent cursor-pointer",
                  !isKeyboardNavigation &&
                    "hover:bg-brand-accent hover:border-brand-primary",
                  index === selectedIndex &&
                    "bg-brand-accent border-brand-primary",
                )}
              >
                <Image
                  width={16}
                  height={16}
                  src={file.logo}
                  alt={file.name}
                  className="w-4 h-4"
                />
                <p className="text-xs">{file.name}</p>
                <p className="text-stone-500 text-xs ml-auto">
                  {file.location}
                </p>
              </div>
            ))}
          </div>

          <SearchFooter />
        </div>
      </DialogContent>
    </Dialog>
  );
}
