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
      className="px-8 rounded-sm text-xs"
    >
      <SearchIcon /> nitin-singh : portfolio{" "}
      <KbdGroup className="text-xs mx-1">
        <Kbd>Ctrl</Kbd>
        <Kbd>P</Kbd>
      </KbdGroup>
    </Button>
  );
}
