import { GitBranch, ArrowUp, ExternalLink } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

type SourceControlPopupProps = {
  branch?: string;
  commitsAhead?: number;
  modified?: number;
  added?: number;
  deleted?: number;
  githubUrl?: string;
  children: React.ReactNode;
};

export function SourceControlPopup({
  branch = "main",
  commitsAhead = 1,
  modified = 3,
  added = 1,
  deleted = 0,
  githubUrl = "https://github.com/nitin2-singh",
  children,
}: SourceControlPopupProps) {
  return (
    <HoverCard openDelay={100} closeDelay={150}>
      <HoverCardTrigger asChild>{children}</HoverCardTrigger>
      <HoverCardContent
        side="bottom"
        align="start"
        className="w-72 p-0 border border-[#3a3a3a] bg-[#1e1e1e] text-white font-mono shadow-2xl rounded-sm"
      >
        {/* Header */}
        <div className="px-4 pt-3 pb-2 border-b border-[#2a2a2a]">
          <span className="text-[10px] tracking-[0.2em] text-[#9ca3af] uppercase">
            Source Control
          </span>
        </div>

        {/* Branch row */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2a2a2a]">
          <div className="flex items-center gap-2">
            <GitBranch className="w-4 h-4 text-[#e9b84a]" />
            <span className="text-sm font-bold text-white">{branch}</span>
          </div>
          {commitsAhead > 0 && (
            <div className="flex items-center gap-1 text-xs text-green-400">
              <ArrowUp className="w-3 h-3" />
              <span>{commitsAhead} commit ahead</span>
            </div>
          )}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 divide-x divide-[#2a2a2a] border-b border-[#2a2a2a]">
          <div className="flex flex-col items-center py-3 gap-0.5">
            <span className="text-xl font-bold text-orange-400">
              {modified}
            </span>
            <span className="text-[11px] text-[#6b7280]">Modified</span>
          </div>
          <div className="flex flex-col items-center py-3 gap-0.5">
            <span className="text-xl font-bold text-teal-400">{added}</span>
            <span className="text-[11px] text-[#6b7280]">Added</span>
          </div>
          <div className="flex flex-col items-center py-3 gap-0.5">
            <span className="text-xl font-bold text-red-400">{deleted}</span>
            <span className="text-[11px] text-[#6b7280]">Deleted</span>
          </div>
        </div>

        {/* Footer link */}
        <div className="px-4 py-3">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex text-xs items-center gap-1.5 text-[#4ec9b0] hover:text-teal-300 transition-colors duration-150"
          >
            View on GitHub
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

// Demo usage
export default function Demo() {
  return (
    <div className="min-h-screen bg-[#1c1c1c] flex items-center justify-center p-8">
      <SourceControlPopup
        branch="main"
        commitsAhead={1}
        modified={3}
        added={1}
        deleted={0}
        githubUrl="https://github.com/nitin2-singh"
      >
        <button className="flex items-center gap-2 px-3 py-1.5 rounded text-xs font-mono bg-[#252526] border border-[#3a3a3a] text-[#d4d4d4] hover:bg-[#2d2d2d] transition-colors">
          <GitBranch className="w-3.5 h-3.5 text-[#e9b84a]" />
          main
        </button>
      </SourceControlPopup>
    </div>
  );
}
