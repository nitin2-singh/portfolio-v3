"use client";

import { useEffect, useState } from "react";
import { Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";

const ROLES = ["Full Stack Engineer", "Backend Engineer", "@ Slidecoach"];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/nitin2-singh",
    icon: BsGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nitin-singh-negi-2a5472373/",
    icon: BsLinkedin,
  },
  {
    label: "Email",
    href: "mailto:nitinforjob080803@gmail.com",
    icon: Mail,
  },
  {
    label: "Portfolio",
    href: "#",
    icon: ExternalLink,
  },
];

const STATS = [
  { value: "3+", label: "YEARS" },
  { value: "10+", label: "PROJECTS" },
  { value: "∞", label: "CURIOSITY" },
  { value: "↑", label: "ALWAYS LEARNING" },
];

const ROLE_COLORS: Record<string, string> = {
  "Full Stack Engineer": "bg-purple-400",
  "Backend Engineer": "bg-green-500",
  "@ Slidecoach": "bg-brand-font-accent",
};

const fadeInUp = (delay: number): Variants => ({
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

function TypingEffect({ words }: { words: string[] }) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1600);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 45);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % words.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return (
    <span className="text-yellow-400 font-mono">
      {displayed}
      <span className="animate-pulse text-yellow-400">|</span>
    </span>
  );
}

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="h-full font-mono lg:px-6 lg:py-6"
    >
      {/* Top Nav */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.1)}
        className="px-6 pt-4 text-brand-font-subheading"
      >
        {`// hello world !! Welcome to my portfolio`}
      </motion.div>

      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.2)}
        className="px-6 pt-4 pb-0 max-w-4xl"
      >
        {/* Name */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.3)}
          className="text-7xl md:text-8xl font-extrabold leading-none tracking-tight relative"
        >
          <span className="text-white">NITIN</span>
          <br />

          <div className="w-fit relative">
            <span className="text-brand-font-accent">SINGH NEGI</span>

            <span className="absolute left-0 bottom-0 h-0.5 w-full rounded-sm bg-linear-to-r from-brand-font-accent to-transparent" />
          </div>
        </motion.h1>

        {/* Role Badges */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.45)}
          className="flex flex-wrap gap-2 mt-5"
        >
          {ROLES.map((role, index) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.5 + index * 0.1,
              }}
              className={cn(
                "flex items-center gap-1.5 border border-[#3a3a3a] rounded-xs px-3 py-1 text-xs bg-[#2a2a2a] text-[#d4d4d4]",
                role.includes("Slidecoach") &&
                  "border-brand-font-accent text-brand-font-accent",
              )}
            >
              <span
                className={cn(
                  `w-2 h-2 rounded-full ${ROLE_COLORS[role] ?? "bg-gray-400"}`,
                )}
              />

              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Typing Tagline */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.7)}
          className="mt-5 text-xs text-brand-dim"
        >
          Exploring{" "}
          <TypingEffect
            words={[
              "Full Stack Development 🔥",
              "Microservices",
              "Event-Driven Systems",
              "Cloud & DevOps",
            ]}
          />
        </motion.p>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.9)}
          className="mt-5 text-sm leading-relaxed max-w-xl text-brand-dim"
        >
          Full Stack Engineer with{" "}
          <span className="font-semibold text-brand-font-highlight">
            2.5+ years
          </span>{" "}
          of experience building scalable, production-grade systems using{" "}
          <span className="font-semibold text-brand-font-highlight">
            Node.js, NestJS, TypeScript, Redis, PostgreSQL
          </span>
          , and{" "}
          <span className="font-semibold text-brand-font-highlight">AWS</span>.
          Strong experience in{" "}
          <span className="font-semibold text-brand-font-highlight">
            microservices, async processing, queues, caching
          </span>
          , and cloud infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp(1.1)}
          className="flex flex-wrap gap-3 mt-6"
        >
          <Button
            className="font-mono text-sm font-semibold gap-2 rounded-xs text-white p-5 bg-brand-primary hover:bg-brand-primary/80!"
            asChild
          >
            <a href="#projects">📁 Projects</a>
          </Button>

          <Button
            variant="outline"
            className="font-mono text-sm gap-2 rounded-xs p-5"
            style={{
              borderColor: "#3a3a3a",
              backgroundColor: "transparent",
              color: "#d4d4d4",
            }}
            asChild
          >
            <a href="#about">👤 About Me</a>
          </Button>

          <Button
            variant="outline"
            className="font-mono text-sm gap-2 rounded-xs p-5"
            style={{
              borderColor: "#3a3a3a",
              backgroundColor: "transparent",
              color: "#d4d4d4",
            }}
            asChild
          >
            <a href="mailto:nitinforcoding@gmail.com">✉ Contact</a>
          </Button>
        </motion.div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp(1.3)}
        className="mx-6 mt-10 rounded-sm grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#3a3a3a]"
        style={{
          backgroundColor: "#252526",
          border: "1px solid #3a3a3a",
        }}
      >
        {STATS.map(({ value, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.4 + index * 0.15,
            }}
            className="flex flex-col items-center justify-center py-6 gap-1"
          >
            <span className="text-2xl font-extrabold">{value}</span>

            <span className="text-xs tracking-widest text-brand-dim">
              {label}
            </span>
          </motion.div>
        ))}
      </motion.section>

      {/* Social Links */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp(1.7)}
        className="px-6 mt-6 flex flex-wrap gap-2 pb-10"
      >
        {SOCIAL_LINKS.map(({ label, href, icon: Icon }, index) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.8 + index * 0.1,
            }}
            className="flex items-center gap-2 px-3 py-1.5 rounded text-xs transition-colors hover:bg-[#2d2d2d] text-brand-dim"
            style={{
              border: "1px solid #3a3a3a",
              textDecoration: "none",
            }}
          >
            <Icon size={14} />
            {label}
          </motion.a>
        ))}
      </motion.section>
    </motion.main>
  );
}
