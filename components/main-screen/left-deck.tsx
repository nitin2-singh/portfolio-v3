import { Folder, Search, FileDown } from "lucide-react";
import { PiGitMergeLight } from "react-icons/pi";
import { SettingPopup } from "../settings/setting-popup";
import { useModalStore } from "@/store/search-bar-store.store";
import { cn } from "@/lib/utils";
import { SourceControlPopup } from "./git-card-hover";

interface LeftDeckProps {
  onFolderClick: () => void;
}

export function LeftDeck({ onFolderClick }: LeftDeckProps) {
  const { setOpenSearchBar } = useModalStore();

  const options = [
    { id: 1, icon: Folder, action: onFolderClick },
    { id: 2, icon: Search, action: () => setOpenSearchBar(true) },
    {
      id: 4,
      icon: FileDown,
      action: () => window.open("/resume.pdf", "_blank"),
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between items-center p-2 shrink-0 bg-brand-leftdeck">
      <div className="flex flex-col gap-4">
        {/* First two icons */}
        {options.slice(0, 2).map((option) => (
          <div
            key={option.id}
            onClick={option.action}
            className={cn(
              "cursor-pointer opacity-80 hover:opacity-100 hover:bg-brand-dim/30 rounded-md",
              "p-1.5",
            )}
          >
            <option.icon size={20} />
          </div>
        ))}

        {/* Git icon with source control popup */}
        <SourceControlPopup
          branch="main"
          commitsAhead={1}
          modified={3}
          added={1}
          deleted={0}
          githubUrl="https://github.com/nitin2-singh"
        >
          <div className="cursor-pointer opacity-80 hover:opacity-100 hover:bg-brand-dim/30 rounded-md p-1.5">
            <PiGitMergeLight size={20} />
          </div>
        </SourceControlPopup>

        {/* Last icon */}
        {options.slice(2).map((option) => (
          <div
            key={option.id}
            onClick={option.action}
            className={cn(
              "cursor-pointer opacity-80 hover:opacity-100 hover:bg-brand-dim/30 rounded-md",
              "p-1.5",
            )}
          >
            <option.icon size={20} />
          </div>
        ))}
      </div>
      <SettingPopup />
    </div>
  );
}
