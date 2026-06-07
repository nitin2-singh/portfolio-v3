"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────

interface Project {
  icon: string;
  tags?: string[];
  category: string;
  title: string;
  description: string;
  techs: string[];
  link?: string;
  line: string;
  text: string;
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// ── Data ───────────────────────────────────────────────────────────────────

const projects: Project[] = [
  {
    icon: "💬",
    category: "REAL-TIME · FULL STACK · MESSAGING",
    title: "Next Chat",
    description:
      "Scalable chat application with real-time messaging powered by Kafka for event-driven architecture. Implemented Docker for containerization, Redis for caching and performance optimization, and PostgreSQL for persistent data storage.",
    techs: [
      "TypeScript",
      "Node.js",
      "Next.js",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "Docker",
    ],
    link: "https://github.com/nitin2-singh/next-chat-frontend",
    line: "bg-cyan-500",
    text: "text-cyan-500",
  },
  {
    icon: "🐦",
    category: "SOCIAL · AUTH · GRAPHQL",
    title: "Tweet",
    description:
      "Full-featured tweet application with Google Authentication and JWT-based secure token auth. Used GraphQL for efficient data querying, Socket.IO for real-time communication, and Redis for caching and rate limiting.",
    techs: [
      "GraphQL",
      "Socket.IO",
      "PostgreSQL",
      "Redis",
      "JWT",
      "Google Auth",
    ],
    link: "#",
    line: "bg-purple-500",
    text: "text-purple-500",
  },
  {
    icon: "💻",
    category: "DEVTOOLS · CLOUD IDE · REAL-TIME",
    title: "Leplit",
    description:
      "Online Integrated Development Environment (IDE) built with Socket.IO for file communication, Node-pty for efficient terminal process management, and xterm-js for immersive terminal emulation. Containerized with Docker.",
    techs: [
      "Socket.IO",
      "Next.js",
      "Node-pty",
      "xterm-js",
      "TypeScript",
      "Docker",
    ],
    link: "https://github.com/nitin2-singh/leplit-frontend",
    line: "bg-orange-500",
    text: "text-orange-500",
  },
];

// ── Animation ──────────────────────────────────────────────────────────────

const fadeInUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 40,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  },
});

// ── Fade Wrapper ───────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp(delay)}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ── Project Card ───────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeInUp(0.35 + index * 0.15)}
      className={`
        group
        relative
        overflow-hidden
        rounded-sm
        border
        backdrop-blur-md
        p-6
        flex
        flex-col
        gap-4
        h-full
        transition-all
        duration-300
      `}
    >
      {/* Animated Top Line */}
      <div
        className={`
    absolute
    top-0
    left-0
    h-0.5
    w-full
    origin-left
    scale-x-0
    transition-transform
    duration-500
    ease-out
    group-hover:scale-x-100
    ${project.line}
  `}
      />

      {/* Soft Glow */}
      <div
        className={`
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
          pointer-events-none
          bg-linear-to-b
          from-white/2
          to-transparent
        `}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-4 h-full">
        {/* Icon */}
        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 0.5 + index * 0.15,
          }}
          className="text-3xl"
        >
          {project.icon}
        </motion.div>

        {/* Category */}
        <div className="flex items-center justify-between gap-2 max-sm:flex-col max-sm:items-start">
          <p className="font-jetbrains text-[10px] tracking-[0.2em] text-[#888] font-bold">
            {project.category}
          </p>

          {project.link && (
            <motion.a
              href={project.link}
              whileTap={{
                scale: 0.96,
              }}
              className="
                text-[11px]
                text-[#777]
                border
                border-white/10
                rounded-sm
                px-3
                py-1
                hover:text-white
                hover:border-white/20
                transition-all
                duration-300
              "
            >
              GitHub ↗
            </motion.a>
          )}
        </div>

        {/* Title */}
        <h2
          className={`font-syne text-2xl font-extrabold ${project.text} leading-tight`}
        >
          {project.title}
        </h2>

        {/* Description */}
        <p className="font-jetbrains text-[12px] text-[#8b949e] leading-6 flex-1">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto pt-2">
          {project.techs.map((tech: string, i: number) => (
            <motion.span
              key={i}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.35,
                delay: 0.7 + index * 0.15 + i * 0.05,
              }}
              className="
                text-[11px]
                text-[#aaa]
                border
                border-white/10
                bg-white/3
                rounded-full
                px-3
                py-1
                backdrop-blur-sm
              "
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function ProjectsSection() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.4,
      }}
      className="min-h-screen p-8 font-mono"
    >
      {/* File Tag */}
      <FadeIn delay={0.05}>
        <p className="font-jetbrains text-sm text-brand-comment mb-6 italic opacity-80">
          {`// projects.ts : things I've built & shipped`}
        </p>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.15}>
        <h1 className="font-syne text-5xl font-extrabold text-[#e6edf3] tracking-tight leading-none mb-3">
          Projects
        </h1>
      </FadeIn>

      {/* Subheading */}
      <FadeIn delay={0.25}>
        <p className="font-jetbrains text-xs text-[#777] mb-10">
          const projects = [ ...shipped, ...building ]
        </p>
      </FadeIn>

      {/* Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {projects.map((project: Project, i: number) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </motion.div>
    </motion.div>
  );
}
