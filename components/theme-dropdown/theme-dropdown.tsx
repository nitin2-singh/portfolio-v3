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

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

import { useState } from "react";
import { useTheme } from "next-themes";
import { ALL_THEMES } from "../common/theme";

export function ThemeDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const { theme, setTheme } = useTheme();

  const selectedTheme =
    ALL_THEMES.find((t) => t.value === theme) ?? ALL_THEMES[0];

  return (
    <DropdownMenu open={isOpen} onOpenChange={(open) => setIsOpen(open)}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-fit gap-2 rounded-sm py-0.5 text-xs hover:bg-stone-100/20! data-[state=open]:bg-stone-100/30"
        >
          <Palette className="size-3.5" />

          {selectedTheme.label}

          {isOpen ? (
            <BsFillCaretUpFill className="size-3.5 transition-all" />
          ) : (
            <BsFillCaretDownFill className="size-3.5 transition-all" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-50 rounded-xs">
        <DropdownMenuLabel className="px-3 py-2 text-xs">
          COLOR THEME
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {ALL_THEMES.map((themeItem) => {
          const isSelected = theme === themeItem.value;

          return (
            <DropdownMenuItem
              key={themeItem.value}
              onClick={() => setTheme(themeItem.value)}
              className={cn(
                "flex cursor-pointer items-center justify-between rounded-none px-3 py-2 text-xs",
                "hover:bg-brand-accent",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className="size-4 rounded-full"
                  style={{
                    backgroundColor: themeItem.color,

                    boxShadow: `0 0 0 2px ${themeItem.color}25`,
                  }}
                />

                <span>{themeItem.icon}</span>

                <span>{themeItem.label}</span>
              </div>

              {isSelected && <Check className="size-3.5" />}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
