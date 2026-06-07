"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// ── Types ──────────────────────────────────────────────────────────────────

interface FocusItem {
  icon: string;
  text: string;
}

interface EducationEntry {
  school: string;
  uni: string;
  degree: string;
  minor: string | null;
  score: string;
  years: string;
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

// ── Data ───────────────────────────────────────────────────────────────────

const focusItems: FocusItem[] = [
  {
    icon: "🔧",
    text: "Building scalable backend services with NestJS & TypeScript at SlideCoach",
  },
  {
    icon: "🧠",
    text: "Deep interest in event-driven systems, queues & async processing",
  },
  {
    icon: "☁️",
    text: "AWS infrastructure: EC2, ASG, S3, Target Groups, AMI",
  },
  {
    icon: "💬",
    text: "Talk to me about Node.js, PostgreSQL, Redis, Kafka",
  },
  {
    icon: "⚡",
    text: "Exploring microservices, BullMQ & Redis Streams in production",
  },
  {
    icon: "✨",
    text: "Always learning, always shipping",
  },
];

const education: EducationEntry[] = [
  {
    school: "Engineering College of Bikaner",
    uni: "Rajasthan Technical University",
    degree: "B.Tech in Information Technology",
    minor: null,
    score: "CGPA: 8.1",
    years: "Nov 2021 – Nov 2025",
  },
  {
    school: "Vidya Bharti, Bikaner",
    uni: "Rajasthan State Board",
    degree: "XII — Science",
    minor: null,
    score: "93%",
    years: "Year 2021",
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

// ── Main Component ─────────────────────────────────────────────────────────

export default function AboutSection() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen p-8 font-mono"
    >
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Syne:wght@800&display=swap');

        .font-jetbrains {
          font-family: 'JetBrains Mono', monospace;
        }

        .font-syne {
          font-family: 'Syne', sans-serif;
        }

        .card-border {
          border: 1px solid #21262d;
        }
      `}</style>

      {/* File Tag */}
      <FadeIn delay={0.1}>
        <p className="font-jetbrains text-brand-comment mb-5">
          {"<!—"} <span>about.html</span> - Nitin Singh Negi {"—>"}
        </p>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.2}>
        <h1 className="font-syne text-6xl font-extrabold text-white tracking-tight leading-none mb-2">
          About Me
        </h1>
      </FadeIn>

      {/* Sub Heading */}
      <FadeIn delay={0.3}>
        <p className="font-jetbrains text-sm text-brand-dim mb-7">
          {`// who I am · what I do · where I build`}
        </p>
      </FadeIn>

      {/* Bio Card */}
      <FadeIn delay={0.45}>
        <div className="border-[0.5px] border-brand-accent bg-brand-card-bg rounded-md p-5 mb-5 font-jetbrains text-[13px] leading-7 text-brand-dim">
          <p>
            Hi! I&apos;m{" "}
            <span className="text-brand-font-highlight font-bold">
              Nitin Singh Negi
            </span>
            , a backend engineer living at the crossroads of{" "}
            <span className="text-brand-font-highlight font-bold">
              full stack engineering
            </span>
            ,{" "}
            <span className="text-brand-font-highlight font-bold">
              cloud infrastructure
            </span>
            , and{" "}
            <span className="text-brand-font-highlight font-bold">
              distributed systems
            </span>
            . I love building systems that are not just functional but genuinely{" "}
            <span className="text-brand-font-highlight font-bold">
              scalable and production-grade
            </span>
            . Currently a{" "}
            <span className="text-brand-font-highlight font-bold">
              Full Stack Engineer at SlideCoach
            </span>
            , building async pipelines, real-time feedback systems, and AWS
            infrastructure that powers content generation at scale.
          </p>
        </div>
      </FadeIn>

      {/* Current Focus */}
      <FadeIn delay={0.6}>
        <div className="border-[0.5px] border-brand-accent bg-brand-card-bg rounded-md p-5 mb-5">
          <p className="font-jetbrains tracking-widest text-lg text-brand-font-subheading mb-4">
            CURRENT FOCUS
          </p>

          <div className="grid grid-cols-1 gap-x-6 gap-y-3">
            {focusItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.7 + i * 0.1,
                }}
                className="flex items-start gap-2 font-jetbrains text-[12px] text-brand-dim leading-snug"
              >
                <span className="mt-px text-sm shrink-0">{item.icon}</span>

                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Education Heading */}
      <FadeIn delay={1.1}>
        <p className="font-jetbrains text-lg tracking-widest text-brand-font-subheading mb-4">
          EDUCATION
        </p>
      </FadeIn>

      {/* Education Cards */}
      <div className="flex flex-col gap-3">
        {education.map((ed, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.2 + i * 0.15,
            }}
            className="border-[0.5px] border-brand-accent bg-brand-card-bg rounded-md p-5"
          >
            <div className="flex justify-between items-start mb-1">
              <p className="font-syne text-[15px] font-extrabold text-[#e6edf3] flex items-center gap-2">
                🎓 {ed.school}
              </p>

              <p className="font-jetbrains text-sm whitespace-nowrap ml-4">
                {ed.years}
              </p>
            </div>

            <p className="font-jetbrains text-xs text-brand-dim mb-1">
              {ed.uni}
            </p>

            <p className="font-jetbrains text-xs text-brand-font-highlight mb-1">
              {ed.degree}
            </p>

            {ed.minor !== null && (
              <p className="font-jetbrains text-xs text-brand-dim mb-1">
                Minors: {ed.minor}
              </p>
            )}

            <p className="font-jetbrains text-xs text-brand-font-subheading">
              {ed.score}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
