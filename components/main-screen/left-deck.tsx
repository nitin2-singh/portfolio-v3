import { Folder, Search, FileDown, Settings } from "lucide-react";
import { PiGitMergeLight } from "react-icons/pi";
export function LeftDeck() {
  const options = [
    { id: 1, icon: Folder },
    { id: 2, icon: Search },
    { id: 3, icon: PiGitMergeLight },
    { id: 4, icon: FileDown },
  ];
  return (
    <div className="border-r h-full flex flex-col justify-between items-center p-3">
      <div className="flex flex-col gap-6">
        {options.map((option) => (
          <div key={option.id}>{<option.icon size={20} />}</div>
        ))}
      </div>
      <div>
        <Settings size={20} />
      </div>
    </div>
  );
}
