"use client";
import { Check, Settings } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { AiFillThunderbolt } from "react-icons/ai";
import { Kbd, KbdGroup } from "../ui/kbd";
import { useTheme } from "next-themes";
import { ALL_THEMES } from "../common/theme";

const quickActions = [
  {
    id: 1,
    label: "Command Palette",
    command: "Ctrl+P",
    icon: "🔎",
  },
  {
    id: 2,
    label: "Toggle Terminal",
    command: "Ctrl+`",
    icon: "📟",
  },
  {
    id: 3,
    label: "Toggle FullScreen",
    command: "F11",
    icon: "💻",
  },
  {
    id: 4,
    label: "Download Resume",
    icon: "📄",
  },
];

const keyboardShortcuts = [
  {
    id: 1,
    label: "Go to file (command palette)",
    command: "Ctrl P",
  },
  {
    id: 2,
    label: "Toggle terminal",
    command: "Ctrl `",
  },
  {
    id: 3,
    label: "Toggle sidebar",
    command: "Ctrl B",
  },
  {
    id: 4,
    label: "Close overlay",
    command: "Esc",
  },
  {
    id: 5,
    label: "Terminal history",
    command: "↑ / ↓",
  },
];

export function SettingPopup() {
  const { theme, setTheme } = useTheme();

  const selectedTheme =
    ALL_THEMES.find((t) => t.value === theme) ?? ALL_THEMES[0];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Settings size={16} />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="w-fit max-h-[70vh] px-0 rounded-xs bg-popover"
      >
        <DropdownMenuLabel className="px-3 py-1 text-xs">
          SETTINGS
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* Theme Dropdown */}
        <DropdownMenuLabel className="px-3 py-1 text-[11px]">
          🎨 COLOR THEME
        </DropdownMenuLabel>
        {ALL_THEMES.map((theme) => {
          const isSelected = selectedTheme.value === theme.value;

          return (
            <DropdownMenuItem
              key={theme.value}
              onClick={() => setTheme(theme.value)}
              className={cn(
                "flex items-center justify-between rounded-none px-3 py-2 text-xs cursor-pointer border-l-2 border-transparent",
                isSelected && "border-brand-primary bg-brand-accent",
                "hover:bg-brand-accent!",
              )}
            >
              <div className="flex items-center gap-3">
                <div
                  className="size-4 rounded-full"
                  style={{
                    backgroundColor: theme.color,
                    boxShadow: `0 0 0 2px ${theme.color}25`,
                  }}
                />
                <span>{theme.icon}</span>
                <span>{theme.label}</span>
              </div>

              {isSelected && <Check className="size-3.5" />}
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator className="mx-2" />
        <DropdownMenuLabel className="px-3 py-1 text-[11px] flex items-center gap-1">
          <AiFillThunderbolt /> QUICK ACTIONS
        </DropdownMenuLabel>
        {quickActions.map((action) => (
          <DropdownMenuItem
            key={action.id}
            className="flex items-center justify-between rounded-none px-3 py-2 text-xs cursor-pointer border-l-2 border-transparent hover:bg-brand-accent!"
          >
            <div className="flex items-center gap-3 w-full">
              <span>{action.icon}</span>
              <span>{action.label}</span>
              <span className="ml-auto text-[10px] text-stone-500">
                {action.command}
              </span>
            </div>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="mx-2" />
        <DropdownMenuLabel className="px-3 py-1 text-[11px] flex items-center gap-1">
          ⌨️ Keyboard Shortcuts
        </DropdownMenuLabel>
        {keyboardShortcuts.map((shortcut) => (
          <DropdownMenuItem
            key={shortcut.id}
            className="flex items-center gap-2 rounded-none px-3 py-2 text-xs cursor-pointer border-l-2 border-transparent hover:bg-brand-accent!"
          >
            <KbdGroup>
              <Kbd>{shortcut.command}</Kbd>
            </KbdGroup>
            <span>{shortcut.label}</span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator className="mx-2" />
        <div className="px-3 py-2 text-xs text-center text-stone-500">
          <p>Portfolio v3.0 · Made with 💜 by Nitin</p>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
