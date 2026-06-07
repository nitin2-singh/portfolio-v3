"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTerminalStore } from "@/store/terminal.store";
import { useFileStore } from "@/store/files.store";
import { FILES } from "../common/files";

type LineType = "input" | "output" | "error" | "highlight" | "ls";

interface TerminalLine {
  id: number;
  type: LineType;
  content: string;
  prompt?: string;
}

const FS: Record<string, Record<string, string>> = {
  "~": {
    "home.tsx": "// home page",
    "about.html": "// about page — readme",
    "projects.js": "// projects showcase",
    "skills.json":
      '{ "backend": ["Node.js", "NestJS"], "db": ["PostgreSQL", "Redis"] }',
    "experience.ts": "// work experience — SlideCoach, Kognics",
    "contact.css": "// contact page",
    "README.md": "# Nitin Singh Negi — Full Stack Engineer",
    "Nitin_Singh_Negi_Resume.pdf": "[PDF] Resume",
  },
  "~/projects": {
    "next-chat.ts": "// scalable chat app — TypeScript, Kafka, Redis",
    "tweet.ts": "// tweet clone — GraphQL, Socket.IO, PostgreSQL",
    "leplit.ts": "// online IDE — Socket.IO, xterm.js, Docker",
  },
};

// color per file extension for ls output
function extColor(filename: string): string {
  const ext = filename.split(".").pop() ?? "";
  const map: Record<string, string> = {
    tsx: "#4ec9b0", // teal  — React/TS
    ts: "#4ec9b0", // teal
    js: "#dcdcaa", // yellow — JS
    json: "#ce9178", // orange — data
    html: "#e8bf6a", // gold
    css: "#c586c0", // purple
    md: "#9cdcfe", // blue  — docs
    pdf: "#f48771", // red-orange
  };
  return map[ext] ?? "#d4d4d4";
}

const USERNAME = "nitin";
const HOSTNAME = "portfolio";

interface TerminalProps {
  className?: string;
}

type Tab = "TERMINAL" | "PROBLEMS" | "OUTPUT";

// ── Prompt label ───────────────────────────────────────────────────────────
// Renders:  nitin  @portfolio : ~  $
// matching the two-tone style in the screenshot
function PromptLabel({ prompt }: { prompt: string }) {
  // prompt format: "nitin@portfolio:~"
  const atIdx = prompt.indexOf("@");
  const colonIdx = prompt.indexOf(":");
  const user = atIdx > -1 ? prompt.slice(0, atIdx) : prompt;
  const host =
    atIdx > -1 && colonIdx > -1 ? prompt.slice(atIdx + 1, colonIdx) : "";
  const path = colonIdx > -1 ? prompt.slice(colonIdx + 1) : "";

  return (
    <span className="shrink-0 flex items-center gap-0.5">
      <span className="text-teal-400 font-bold">{user}</span>
      <span className="text-[#6b7280]"> @{host}</span>
      <span className="text-[#6b7280]"> : </span>
      <span className="text-[#6b7280]">{path}</span>
      <span className="text-[#6b7280]"> $</span>
    </span>
  );
}

export function Terminal({ className }: TerminalProps) {
  const { setOpenTerminal } = useTerminalStore();
  const { onClick } = useFileStore();
  const [activeTab, setActiveTab] = useState<Tab>("TERMINAL");
  const [cwd, setCwd] = useState("~");
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const idRef = useRef(0);

  const nextId = () => ++idRef.current;

  function addLines(...newLines: Omit<TerminalLine, "id">[]) {
    setLines((prev) => [
      ...prev,
      ...newLines.map((l) => ({ ...l, id: nextId() })),
    ]);
  }

  function runCommand(raw: string) {
    const trimmed = raw.trim();
    addLines({
      type: "input",
      content: trimmed,
      prompt: `${USERNAME}@${HOSTNAME}:${cwd}`,
    });
    if (!trimmed) return;

    setHistory((h) => [trimmed, ...h]);
    setHistoryIndex(-1);

    const [cmd, ...args] = trimmed.split(/\s+/);

    switch (cmd) {
      case "clear":
        setLines([]);
        break;

      case "help":
        addLines(
          { type: "highlight", content: "Available commands:" },
          {
            type: "output",
            content: "ls              — list files in current directory",
          },
          {
            type: "output",
            content: "pwd             — print working directory",
          },
          {
            type: "output",
            content: "cd <dir>        — change directory (cd .. to go up)",
          },
          {
            type: "output",
            content: "cat <file>      — view / open a file in the editor",
          },
          { type: "output", content: "open <file>     — same as cat" },
          { type: "output", content: "whoami          — who am I?" },
          { type: "output", content: "echo <text>     — print text" },
          {
            type: "output",
            content: "date            — show current date & time",
          },
          { type: "output", content: "git log         — show recent commits" },
          { type: "output", content: "python --version — show Python version" },
          { type: "output", content: "clear           — clear the terminal" },
          { type: "output", content: "help            — show this help" },
        );
        break;

      case "echo":
        addLines({ type: "output", content: args.join(" ") });
        break;

      case "date":
        addLines({ type: "output", content: new Date().toString() });
        break;

      case "git": {
        if (args[0] === "log") {
          addLines(
            {
              type: "highlight",
              content: "commit a3f9c12 (HEAD -> main, origin/main)",
            },
            {
              type: "output",
              content: "Author: Nitin Singh Negi <nitinforjob080803@gmail.com>",
            },
            { type: "output", content: "Date:   " + new Date().toDateString() },
            {
              type: "output",
              content: "    feat: add contact page animations",
            },
            { type: "output", content: "" },
            { type: "highlight", content: "commit b1e2d45" },
            {
              type: "output",
              content: "    feat: add about page with framer-motion",
            },
            { type: "output", content: "" },
            { type: "highlight", content: "commit 9c8b321" },
            { type: "output", content: "    init: portfolio v3 setup" },
          );
        } else {
          addLines({
            type: "error",
            content: `git: '${args[0]}' is not a git command`,
          });
        }
        break;
      }

      case "python":
      case "python3":
        if (args[0] === "--version" || args[0] === "-V") {
          addLines({ type: "output", content: "Python 3.11.4" });
        } else {
          addLines({
            type: "error",
            content: "python: use --version to check version",
          });
        }
        break;

      case "whoami":
        addLines(
          { type: "highlight", content: USERNAME },
          { type: "output", content: "Full Stack Engineer @ SlideCoach" },
          {
            type: "output",
            content: "Backend Engineer · Microservices · Cloud & DevOps",
          },
          {
            type: "output",
            content: "Rajasthan, India 🇮🇳  ·  nitinforjob080803@gmail.com",
          },
        );
        break;

      case "pwd":
        addLines({
          type: "output",
          content: `/home/${USERNAME}/${cwd === "~" ? "" : cwd.replace("~/", "")}`,
        });
        break;

      case "ls": {
        const dir = FS[cwd];
        if (dir) {
          const files = Object.keys(dir);
          if (files.length === 0) {
            addLines({ type: "output", content: "(empty)" });
          } else {
            addLines({ type: "ls", content: JSON.stringify(files) });
          }
        } else {
          addLines({
            type: "error",
            content: `ls: cannot access '${cwd}': No such directory`,
          });
        }
        break;
      }

      case "cd": {
        const target = args[0];
        if (!target || target === "~") {
          setCwd("~");
        } else if (target === "..") {
          setCwd("~");
        } else {
          const next = cwd === "~" ? `~/${target}` : `${cwd}/${target}`;
          if (FS[next]) {
            setCwd(next);
          } else {
            addLines({
              type: "error",
              content: `cd: no such file or directory: ${target}`,
            });
          }
        }
        break;
      }

      case "cat":
      case "open": {
        const file = args[0];
        if (!file) {
          addLines({ type: "error", content: `${cmd}: missing file operand` });
          break;
        }
        const dir = FS[cwd];
        if (dir?.[file]) {
          const currentFile = FILES.find(
            (f) => f.name.toLocaleLowerCase() === file.toLocaleLowerCase(),
          );
          if (currentFile) {
            onClick(currentFile);
            addLines({
              content: `Opening ${file} in editor…`,
              type: "highlight",
            });
          } else {
            addLines({
              type: "error",
              content: `${cmd}: ${file}: No such file`,
            });
          }
        } else {
          addLines({ type: "error", content: `${cmd}: ${file}: No such file` });
        }
        break;
      }

      default:
        addLines({ type: "error", content: `command not found: ${cmd}` });
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIndex + 1, history.length - 1);
      setHistoryIndex(next);
      setInput(history[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIndex - 1, -1);
      setHistoryIndex(next);
      setInput(next === -1 ? "" : (history[next] ?? ""));
    }
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // listen for dispatch event
  useEffect(() => {
    const handler = () => setLines([]);
    window.addEventListener("terminal-clear", handler);
    return () => window.removeEventListener("terminal-clear", handler);
  }, []);

  const TABS: Tab[] = ["TERMINAL", "PROBLEMS", "OUTPUT"];

  return (
    <div
      className={cn(
        "flex flex-col bg-brand-mainscreenfiles border-t border-[#2a2a2a] font-mono text-sm text-[#d4d4d4] select-text min-h-40",
        className,
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {/* Tab bar */}
      <div className="flex items-center justify-between border-b bg-brand-leftdeck border-[#2a2a2a] px-2 shrink-0">
        <div className="flex">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={(e) => {
                e.stopPropagation();
                setActiveTab(tab);
              }}
              className={cn(
                "px-4 py-1.5 text-[10px] tracking-widest transition-colors duration-150",
                activeTab === tab
                  ? "text-white border-b-2 border-white"
                  : "text-[#6b7280] hover:text-[#d4d4d4]",
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Close button — always visible */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenTerminal(false);
          }}
          className="p-1 text-[#6b7280] hover:text-white transition-colors duration-150"
        >
          <X size={14} />
        </button>
      </div>

      {/* Terminal body — scrollable */}
      {activeTab === "TERMINAL" && (
        <div className="overflow-y-auto max-h-60 px-4 py-3 space-y-0.5 text-[11px] leading-5 scrollbar-thin scrollbar-thumb-[#3a3a3a] scrollbar-track-transparent">
          {lines.map((line) => (
            <div key={line.id}>
              {line.type === "input" ? (
                <div className="flex gap-1 flex-wrap">
                  <PromptLabel prompt={line.prompt ?? ""} />
                  <span className="text-white font-bold">{line.content}</span>
                </div>
              ) : line.type === "highlight" ? (
                <div className="text-teal-400">{line.content}</div>
              ) : line.type === "error" ? (
                <div className="text-red-400">{line.content}</div>
              ) : line.type === "ls" ? (
                <div className="flex flex-wrap gap-x-4 gap-y-0.5">
                  {(JSON.parse(line.content) as string[]).map((f) => (
                    <span key={f} style={{ color: extColor(f) }}>
                      {f}
                    </span>
                  ))}
                </div>
              ) : (
                <div className="text-brand-dim">{line.content}</div>
              )}
            </div>
          ))}

          {/* Active input row */}
          <div className="flex gap-1 items-center flex-wrap">
            <PromptLabel prompt={`${USERNAME}@${HOSTNAME}:${cwd}`} />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              onClick={(e) => e.stopPropagation()}
              className="flex-1 bg-transparent outline-none text-white caret-white placeholder-transparent"
              spellCheck={false}
              autoComplete="off"
              autoCorrect="off"
            />
          </div>
          <div ref={bottomRef} />
        </div>
      )}

      {activeTab === "PROBLEMS" && (
        <div className="px-4 py-3 text-xs text-[#6b7280]">
          No problems detected.
        </div>
      )}

      {activeTab === "OUTPUT" && (
        <div className="px-4 py-3 text-xs text-[#6b7280]">No output.</div>
      )}
    </div>
  );
}
