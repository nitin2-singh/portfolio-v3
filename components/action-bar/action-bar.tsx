"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useModalStore } from "@/store/search-bar-store.store";
import { useFileStore } from "@/store/files.store";
import { FILES } from "../common/files";
import { useLeftDeckStore } from "@/store/left-deck.store";
import { useTerminalStore } from "@/store/terminal.store";
import { useRef } from "react";

// ── types ──────────────────────────────────────────────────────────────────
interface SubOption {
  id: number;
  name: string;
  action?: () => void;
}

interface Option {
  id: number;
  name: string;
  shortcut?: string;
  seperator?: boolean;
  action?: () => void;
  suboptions?: SubOption[];
}

interface Action {
  id: number;
  name: string;
  options: Option[];
}

// ── component ──────────────────────────────────────────────────────────────
export default function ActionBar() {
  const { setOpenSearchBar } = useModalStore();
  const { closeTab, activeFile, closeAllTabs, onClick } = useFileStore();
  const { openDeck, setOpenDeck } = useLeftDeckStore();
  const { openTerminal, setOpenTerminal } = useTerminalStore();
  const zoomLevel = useRef(1);

  const actions: Action[] = [
    {
      id: 1,
      name: "File",
      options: [
        {
          id: 1.1,
          name: "New Tab",
          shortcut: "Ctrl+T",
          action: () => onClick(FILES[0]),
        },
        {
          id: 1.2,
          name: "Open File",
          shortcut: "Ctrl+P",
          seperator: true,
          action: () => setOpenSearchBar(true),
        },
        { id: 1.3, name: "Close Tab", action: () => closeTab(activeFile.id) },
        {
          id: 1.4,
          name: "Close All Tabs",
          seperator: true,
          action: () => closeAllTabs(),
        },
        {
          id: 1.5,
          name: "OPEN RECENT",
          seperator: true,
          suboptions: [
            {
              id: 1.51,
              name: "home.tsx",
              action: () => {
                const homeFile = FILES.find(
                  (f) => f.name.toLocaleLowerCase() === "home.tsx",
                );
                if (homeFile) onClick(homeFile);
              },
            },
            {
              id: 1.52,
              name: "about.html",
              action: () => {
                const aboutFile = FILES.find(
                  (f) => f.name.toLocaleLowerCase() === "about.html",
                );
                if (aboutFile) onClick(aboutFile);
              },
            },
            {
              id: 1.53,
              name: "projects.js",
              action: () => {
                const projectsFile = FILES.find(
                  (f) => f.name.toLocaleLowerCase() === "projects.js",
                );
                if (projectsFile) onClick(projectsFile);
              },
            },
            {
              id: 1.54,
              name: "skills.json",
              action: () => {
                const skillsFile = FILES.find(
                  (f) => f.name.toLocaleLowerCase() === "skills.json",
                );
                if (skillsFile) onClick(skillsFile);
              },
            },
          ],
        },
        {
          id: 1.6,
          name: "Download Resume",
          action: () => window.open("/resume.pdf", "_blank"),
        },
      ],
    },
    {
      id: 2,
      name: "Edit",
      options: [
        {
          id: 2.1,
          name: "Find...",
          shortcut: "Ctrl+P",
          seperator: true,
          action: () => setOpenSearchBar(true),
        },
        {
          id: 2.2,
          name: "Select All",
          shortcut: "Ctrl+A",
          action: () => {
            document.execCommand?.("selectAll");
          },
        },
        {
          id: 2.3,
          name: "Copy",
          shortcut: "Ctrl+C",
          action: async () => {
            const selectedText = window.getSelection()?.toString();

            if (!selectedText) return;

            await navigator.clipboard.writeText(selectedText);
          },
        },
      ],
    },
    {
      id: 3,
      name: "View",
      options: [
        {
          id: 3.1,
          name: "Command Palette",
          shortcut: "Ctrl+P",
          seperator: true,
          action: () => setOpenSearchBar(true),
        },
        {
          id: 3.2,
          name: "Toggle Sidebar",
          shortcut: "Ctrl+B",
          action: () => setOpenDeck(!openDeck),
        },
        {
          id: 3.3,
          name: "Toggle Terminal",
          shortcut: "Ctrl+`",
          seperator: true,
          action: () => setOpenTerminal(!openTerminal),
        },
        {
          id: 3.4,
          name: "Enter Full Screen",
          shortcut: "Ctrl+F",
          action: async () => {
            if (!document.fullscreenElement) {
              await document.documentElement.requestFullscreen();
            } else {
              await document.exitFullscreen();
            }
          },
        },
        {
          id: 3.5,
          name: "Zoom In",
          shortcut: "Ctrl++",
          action: () => {
            zoomLevel.current = Math.min(zoomLevel.current + 0.1, 2);

            document.documentElement.style.setProperty(
              "zoom",
              `${zoomLevel.current}`,
            );
          },
        },
        {
          id: 3.6,
          name: "Zoom Out",
          shortcut: "Ctrl+-",
          action: () => {
            zoomLevel.current = Math.max(zoomLevel.current - 0.1, 0.5);

            document.documentElement.style.setProperty(
              "zoom",
              `${zoomLevel.current}`,
            );
          },
        },
        {
          id: 3.7,
          name: "Reset Zoom",
          shortcut: "Ctrl+0",
          action: () => {
            zoomLevel.current = 1;
            document.documentElement.style.setProperty("zoom", "1");
          },
        },
      ],
    },
    {
      id: 4,
      name: "Go",
      options: [
        {
          id: 4.1,
          name: "Go to File",
          shortcut: "Ctrl+P",
          seperator: true,
          action: () => setOpenSearchBar(true),
        },
        {
          id: 4.2,
          name: "FILES",
          suboptions: [
            { id: 4.21, name: "home.tsx", action: () => onClick(FILES[0]) },
            { id: 4.22, name: "about.html", action: () => onClick(FILES[1]) },
            { id: 4.23, name: "projects.js", action: () => onClick(FILES[2]) },
            { id: 4.24, name: "skills.json", action: () => onClick(FILES[3]) },
            {
              id: 4.25,
              name: "experience.ts",
              action: () => onClick(FILES[4]),
            },
            { id: 4.26, name: "contact.css", action: () => onClick(FILES[5]) },
            { id: 4.27, name: "README.md", action: () => onClick(FILES[6]) },
            {
              id: 4.28,
              name: "Resume.pdf",
              action: () => window.open("/resume.pdf", "_blank"),
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "Terminal",
      options: [
        {
          id: 5.1,
          name: "New Terminal",
          shortcut: "Ctrl+`",
          action: () => setOpenTerminal(true),
        },
        {
          id: 5.2,
          name: "Toggle Terminal",
          shortcut: "Ctrl+`",
          seperator: true,
          action: () => setOpenTerminal(!openTerminal),
        },
        {
          id: 5.3,
          name: "Clear Terminal",
          action: () => {
            const terminalClearEvent = new CustomEvent("terminal-clear");
            window.dispatchEvent(terminalClearEvent);
          },
        },
      ],
    },
  ];

  return (
    <div className="border-b px-2 flex items-center pt-0.5 max-md:hidden bg-brand-actionbar h-6">
      {actions.map((action) => (
        <DropdownMenu key={action.id}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="ring-0! text-[11px] rounded-sm py-1 px-2 h-fit border-none"
            >
              {action.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full rounded-xs px-0">
            {action.options.map((option) => (
              <DropdownMenuGroup key={option.id}>
                {(option.suboptions?.length ?? 0) > 0 ? (
                  <DropdownMenuLabel className="rounded-none space-x-5 gap-20 text-xs px-3 py-2">
                    {option.name}
                  </DropdownMenuLabel>
                ) : (
                  <DropdownMenuItem
                    onClick={() => option.action?.()}
                    className="rounded-none space-x-5 gap-20 text-xs px-3 py-2 hover:bg-brand-primary!"
                  >
                    {option.name}
                    {option.shortcut && (
                      <span className="ml-auto text-[10px] opacity-60">
                        {option.shortcut}
                      </span>
                    )}
                  </DropdownMenuItem>
                )}
                {option.suboptions?.map((suboption: SubOption) => (
                  <DropdownMenuItem
                    key={suboption.id}
                    onClick={() => suboption?.action?.()}
                    className="rounded-none space-x-5 gap-20 text-xs px-3 py-2 hover:bg-brand-primary!"
                  >
                    {suboption.name}
                  </DropdownMenuItem>
                ))}
                {option.seperator && <DropdownMenuSeparator />}
              </DropdownMenuGroup>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
}
