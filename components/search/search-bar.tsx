"use client";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Kbd, KbdGroup } from "../ui/kbd";
import { useModalStore } from "@/store/search-bar-store.store";

export function SearchBar() {
  const setOpenSearchBar = useModalStore((s) => s.setOpenSearchBar);
  return (
    <Button
      onClick={() => setOpenSearchBar(true)}
      variant="outline"
      className="px-8 rounded-sm text-[10px] h-fit bg-brand-searchbar hover:bg-brand-searchbar/20"
    >
      <SearchIcon height={10} width={10} /> nitin-singh : portfolio{" "}
      <KbdGroup className="text-[10px] mx-1">
        <Kbd className="text-[10px] ">Ctrl</Kbd>
        <Kbd className="text-[10px] ">P</Kbd>
      </KbdGroup>
    </Button>
  );
}
