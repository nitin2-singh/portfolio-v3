import { ArrowUpDown, CircleX, CornerDownLeft } from "lucide-react";

export default function SearchFooter() {
  return (
    <div className="flex flex-wrap items-center gap-y-2 px-3 py-2 text-[10px] text-stone-400 bg-brand-mainscreenaccent rounded-b-sm">
      {/* left actions */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        <div className="flex items-center gap-1 whitespace-nowrap">
          <ArrowUpDown size={10} />
          <p>Navigate</p>
        </div>

        <span className="hidden sm:block size-0.5 rounded-full bg-stone-400" />

        <div className="flex items-center gap-1 whitespace-nowrap">
          <CornerDownLeft size={10} />
          <p>Open</p>
        </div>

        <span className="hidden sm:block size-0.5 rounded-full bg-stone-400" />

        <div className="flex items-center gap-1 whitespace-nowrap">
          <CircleX size={10} />
          <p>Esc</p>
        </div>
      </div>

      {/* tip */}
      <div className="w-full sm:w-auto sm:ml-auto">
        <p className="truncate text-[9px] sm:text-[10px] text-stone-500 sm:text-stone-400">
          Tip: type &quot;file name&quot; to open file
        </p>
      </div>
    </div>
  );
}
