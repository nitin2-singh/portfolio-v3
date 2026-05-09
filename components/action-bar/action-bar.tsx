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
export default function ActionBar() {
  const actions = [
    {
      id: 1,
      name: "File",
      options: [
        { id: 1.1, name: "New Tab", shortcut: "Ctrl+T" },
        { id: 1.2, name: "Open File", shortcut: "Ctrl+P", seperator: true },
        { id: 1.3, name: "Close Tab" },
        { id: 1.4, name: "Close All Tabs", seperator: true },
        {
          id: 1.5,
          name: "OPEN RECENT",
          seperator: true,
          suboptions: [
            { id: 1.51, name: "home.tsx" },
            { id: 1.52, name: "about.html" },
            { id: 1.53, name: "projects.js" },
            { id: 1.54, name: "skills.json" },
          ],
        },
        { id: 1.6, name: "Download Resume" },
      ],
    },
    {
      id: 2,
      name: "Edit",
      options: [
        { id: 2.1, name: "Find...", shortcut: "Ctrl+P", seperator: true },
        { id: 2.2, name: "Select All", shortcut: "Ctrl+A" },
        { id: 2.3, name: "Copy", shortcut: "Ctrl+C" },
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
        },
        {
          id: 3.2,
          name: "Toggle Sidebar",
          shortcut: "Ctrl+B",
        },
        {
          id: 3.3,
          name: "Toggle Terminal",
          shortcut: "Ctrl+`",
          seperator: true,
        },
        { id: 3.4, name: "Enter Full Screen", shortcut: "F11" },
        { id: 3.5, name: "Zoom In", shortcut: "Ctrl++" },
        { id: 3.6, name: "Zoom Out", shortcut: "Ctrl+-" },
        { id: 3.7, name: "Reset Zoom" },
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
        },
        {
          id: 4.2,
          name: "FILES",
          suboptions: [
            { id: 4.21, name: "home.tsx" },
            { id: 4.22, name: "about.html" },
            { id: 4.23, name: "projects.js" },
            { id: 4.24, name: "skills.json" },
            { id: 4.25, name: "experience.ts" },
            { id: 4.26, name: "contact.css" },
            { id: 4.27, name: "README.md" },
            { id: 4.28, name: "Resume.pdf" },
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
        },
        {
          id: 5.2,
          name: "Toggle Terminal",
          shortcut: "Ctrl+`",
          seperator: true,
        },
        {
          id: 5.3,
          name: "Clear Terminal",
        },
      ],
    },
  ];

  return (
    <div className="border-b px-2 flex items-center pt-0.5">
      {actions.map((action) => (
        <DropdownMenu key={action.id}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="ring-0! text-[10px] rounded-sm py-1 px-2 h-fit border-none"
            >
              {action.name}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-full rounded-xs px-0">
            {action.options.map((option) => (
              <DropdownMenuGroup key={option.id}>
                {(option?.suboptions?.length ?? 0) > 0 ? (
                  <DropdownMenuLabel className="rounded-none space-x-5 gap-20 text-xs px-3 py-2">
                    {option.name}
                  </DropdownMenuLabel>
                ) : (
                  <DropdownMenuItem className="rounded-none space-x-5 gap-20 text-xs px-3 py-2">
                    {option.name}{" "}
                    {option.shortcut && (
                      <span className="ml-auto text-[10px] opacity-60">
                        {option.shortcut}
                      </span>
                    )}
                  </DropdownMenuItem>
                )}
                {option?.suboptions &&
                  option.suboptions.map((suboption) => (
                    <DropdownMenuItem
                      key={suboption.id}
                      className="rounded-none space-x-5 gap-20 text-xs px-3 py-2"
                    >
                      {suboption.name}
                    </DropdownMenuItem>
                  ))}
                {option?.seperator && <DropdownMenuSeparator />}
              </DropdownMenuGroup>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ))}
    </div>
  );
}
