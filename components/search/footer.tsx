import { ArrowUpDown, CircleX, CornerDownLeft } from "lucide-react";

export default function SearchFooter() {
  return (
    <div className="flex text-stone-400 items-center px-4 py-2 text-[10px]! bg-stone-700 rounded-b-sm">
      <div className="flex items-center gap-1">
        <ArrowUpDown size={10} />
        <p>Navigate</p>
      </div>

      <span className="size-0.5 rounded-full bg-stone-400 mx-4" />

      <div className="flex items-center gap-1">
        <CornerDownLeft size={10} />
        <p>open</p>
      </div>

      <span className="size-0.5 rounded-full bg-stone-400 mx-4" />

      <div className="flex items-center gap-1">
        <CircleX size={10} />
        <p>Esc</p>
      </div>

      <div className="ml-auto">
        <p>Tip: type &quot;file name&quot; to open file</p>
      </div>
    </div>
  );
}
