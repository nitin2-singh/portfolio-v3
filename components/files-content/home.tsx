"use client";

import { useState, useEffect, useRef } from "react";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function useTypewriter(words: string[], speed = 75, pause = 2000) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const ref = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const word = words[wordIdx];
    if (!deleting) {
      if (charIdx < word.length) {
        ref.current = setTimeout(() => {
          setDisplay(word.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, speed);
      } else {
        ref.current = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        ref.current = setTimeout(() => {
          setDisplay(word.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, speed / 2);
      } else {
        ref.current = setTimeout(() => {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
        }, speed);
      }
    }
    return () => clearTimeout(ref.current);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const ROLES = [
  "Full Stack Engineer",
  "Backend Engineer",
  "Frontend Developer",
  "CI/CD & DevOps",
];

const PILLS = [
  {
    label: "Full Stack Engineer",
    color: "text-green-400 border-green-400/30 bg-green-400/5",
  },
  {
    label: "Backend Engineer",
    color: "text-purple-400 border-purple-400/30 bg-purple-400/5",
  },
  {
    label: "Frontend Dev",
    color: "text-cyan-400 border-cyan-400/30 bg-cyan-400/5",
  },
  {
    label: "@ SlideCoach",
    color: "text-orange-400 border-orange-400/30 bg-orange-400/5",
  },
];

const STATS = [
  { value: "2.5+", label: "YEARS" },
  { value: "10+", label: "PROJECTS" },
  { value: "∞", label: "CURIOSITY" },
  { value: "↑", label: "ALWAYS LEARNING" },
];

const SOCIAL = [
  { label: "GitHub", href: "#", icon: FaGithub },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "Email", href: "mailto:nitinforcoding@gmail.com", icon: Mail },
];

export default function Home() {
  const role = useTypewriter(ROLES);

  return (
    <main className="h-full bg-[#111213] text-zinc-200">
      {/* grid bg */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.022) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.022) 1px,transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative w-full h-full mx-auto px-4 pt-10 pb-12 sm:px-6 sm:pt-14 sm:pb-16 overflow-auto max-h-[calc(100vh-153.5px)]">
        {/* greeting */}
        <p className="font-mono text-[11px] text-zinc-600 mb-3 tracking-wide">
          {"// hello world !! Welcome to my portfolio"}
        </p>

        {/* name */}
        <h1
          className="font-black leading-[0.88] mb-5"
          style={{
            fontFamily: "'Arial Black','Helvetica Neue',sans-serif",
            fontSize: "clamp(2.6rem, 9vw, 5.5rem)",
            letterSpacing: "-0.03em",
          }}
        >
          <span className="text-[#e8e0d0]">Nitin</span>
          <br />
          <span className="text-orange-500">Singh Negi</span>
        </h1>

        {/* pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {PILLS.map((p) => (
            <span
              key={p.label}
              className={`inline-flex items-center gap-1.5 font-mono text-[11px] px-2.5 py-0.75 rounded-full border ${p.color}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current opacity-80 shrink-0" />
              {p.label}
            </span>
          ))}
        </div>

        {/* typewriter */}
        <p className="font-mono text-[11px] text-zinc-500 mb-5 h-4">
          Building scalable systems &mdash;{" "}
          <span className="text-orange-400">{role}</span>
          <span className="animate-pulse text-orange-400">_</span>
        </p>

        {/* bio line 1 */}
        <p className="text-sm text-zinc-300 leading-relaxed max-w-lg mb-2">
          Full stack engineer with{" "}
          <span className="text-white font-semibold">2.5+ years</span> shipping
          production systems end-to-end —{" "}
          <span className="text-green-400">NestJS / Node.js</span> on the
          backend, <span className="text-cyan-400">React / Next.js</span> on the
          frontend, and{" "}
          <span className="text-purple-400">AWS + Docker + CI/CD</span> holding
          it all together.
        </p>

        {/* bio line 2 */}
        <p className="text-sm text-zinc-500 leading-relaxed max-w-lg mb-8">
          Deep in <span className="text-zinc-400">microservices</span>,{" "}
          <span className="text-zinc-400">BullMQ / Kafka queues</span>,{" "}
          <span className="text-zinc-400">Redis caching</span>, and{" "}
          <span className="text-zinc-400">PostgreSQL / MongoDB</span> data
          layers. Currently at{" "}
          <span className="text-orange-400">SlideCoach</span>, prev.{" "}
          <span className="text-zinc-300">Kognics</span>. B.Tech IT — CGPA 8.1.
        </p>

        {/* CTA */}
        <div className="flex flex-wrap gap-2 mb-8">
          <a
            href="/projects"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-orange-500 hover:bg-orange-400 text-white text-xs font-semibold rounded-lg transition-colors"
          >
            🗂 Projects
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-semibold rounded-lg border border-zinc-700 transition-colors"
          >
            👤 About Me
          </a>
          <a
            href="mailto:nitinforcoding@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2 hover:bg-zinc-800 text-zinc-400 text-xs font-semibold rounded-lg border border-zinc-700 transition-colors"
          >
            ✉ Contact
          </a>
        </div>

        {/* stats */}
        <div className="grid grid-cols-4 bg-zinc-900/60 border border-zinc-800 rounded-xl overflow-hidden mb-7">
          {STATS.map(({ value, label }, i) => (
            <div
              key={label}
              className={`flex flex-col items-center justify-center py-3 ${
                i !== STATS.length - 1 ? "border-r border-zinc-800" : ""
              }`}
            >
              <span
                className="text-lg font-black text-zinc-100 leading-none mb-0.5"
                style={{ fontFamily: "'Arial Black',sans-serif" }}
              >
                {value}
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] text-zinc-600 tracking-widest text-center px-1">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* social */}
        <div className="flex flex-wrap gap-1.5">
          {SOCIAL.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-600 rounded-lg text-zinc-400 hover:text-zinc-200 font-mono text-[11px] transition-all"
            >
              <Icon size={12} />
              {label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
