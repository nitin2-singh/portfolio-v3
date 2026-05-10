import { Folder, Search, FileDown } from "lucide-react";
import { PiGitMergeLight } from "react-icons/pi";
import { SettingPopup } from "../settings/setting-popup";

interface LeftDeckProps {
  onFolderClick: () => void;
}

export function LeftDeck({ onFolderClick }: LeftDeckProps) {
  const options = [
    { id: 1, icon: Folder, action: onFolderClick },
    { id: 2, icon: Search, action: undefined },
    { id: 3, icon: PiGitMergeLight, action: undefined },
    { id: 4, icon: FileDown, action: undefined },
  ];

  return (
    <div className="h-full flex flex-col justify-between items-center p-3 shrink-0">
      <div className="flex flex-col gap-6">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={option.action}
            className={
              option.action
                ? "cursor-pointer opacity-80 hover:opacity-100"
                : "opacity-50"
            }
          >
            <option.icon size={20} />
          </div>
        ))}
      </div>
      <SettingPopup />
    </div>
  );
}
