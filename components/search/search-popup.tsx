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

export default function SearchPopup() {
  const files = [
    {
      id: 1,
      name: "home.tsx",
      logo: "https://dl.svgcdn.com/svg/logos/react.svg",
      location: "src/",
    },
    {
      id: 2,
      name: "about.html",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_html.svg",
      location: "src/",
    },
    {
      id: 3,
      name: "projects.js",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js.svg",
      location: "src/",
    },
    {
      id: 4,
      name: "skills.json",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_json.svg",
      location: "src/",
    },
    {
      id: 5,
      name: "experience.ts",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_typescript.svg",
      location: "src/",
    },
    {
      id: 6,
      name: "contact.css",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_css.svg",
      location: "src/",
    },
    {
      id: 7,
      name: "README.md",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_markdown.svg",
      location: "./",
    },
    {
      id: 8,
      name: "Resume.pdf",
      logo: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_pdf.svg",
      location: "./",
      isFile: true,
    },
  ];
  const [filteredFiles, setFilteredFiles] = useState(files);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const { openSearchBar, setOpenSearchBar } = useModalStore();
  const [isKeyboardNavigation, setIsKeyboardNavigation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = files.filter((file) =>
      file.name.toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredFiles(filtered);
    setSelectedIndex(filtered.length > 0 ? 0 : -1);
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

        console.log("Open file:", selectedFile);
        // navigate/open file here
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
  }, [filteredFiles, selectedIndex, openSearchBar, setOpenSearchBar]);

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
              files.length === filteredFiles.length ? "mb-3" : "mb-0",
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
                className={cn(
                  "flex items-center gap-2 px-4 py-2 border-l-2 border-transparent cursor-pointer",
                  !isKeyboardNavigation &&
                    "hover:bg-stone-400 hover:border-blue-500",
                  index === selectedIndex && "bg-stone-400 border-blue-500",
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
