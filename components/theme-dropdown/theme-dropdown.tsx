"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check, Palette } from "lucide-react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

const themes = [
  {
    label: "Aahana Dark",
    value: "aahana-dark",
    icon: "💜",
  },
  {
    label: "Rosé Pine",
    value: "rose-pine",
    icon: "🌸",
  },
  {
    label: "Tokyo Night",
    value: "tokyo-night",
    icon: "🌃",
  },
  {
    label: "Catppuccin",
    value: "catppuccin",
    icon: "🐱",
  },
  {
    label: "Nord",
    value: "nord",
    icon: "🧊",
  },
  {
    label: "Gruvbox",
    value: "gruvbox",
    icon: "🔥",
  },
];

export function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("aahana-dark");

  return (
    <DropdownMenu open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="gap-2 rounded-sm text-xs py-0.5 h-fit"
        >
          <Palette className="size-3.5" />
          {selectedTheme}
          {isOpen ? (
            <BsFillCaretUpFill className="size-3.5 transition-all ease-in-out" />
          ) : (
            <BsFillCaretDownFill className="size-3.5 transition-all ease-in-out" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-45 rounded-xs">
        <DropdownMenuLabel className="px-3 py-2 text-xs">
          COLOR THEME
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {themes.map((theme) => {
          const isSelected = selectedTheme === theme.value;

          return (
            <DropdownMenuItem
              key={theme.value}
              onClick={() => setSelectedTheme(theme.value)}
              className={cn(
                "flex items-center justify-between rounded-none px-3 py-2 text-xs cursor-pointer",
              )}
            >
              <div className="flex items-center gap-2">
                <span>{theme.icon}</span>
                <span>{theme.label}</span>
              </div>

              {isSelected && <Check className="size-3.5" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
