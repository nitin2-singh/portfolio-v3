"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";

// ── Types ──────────────────────────────────────────────────────────────────

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

interface SkillBarProps {
  skill: Skill;
  index: number;
}

// ── Data ───────────────────────────────────────────────────────────────────

const skillCategories: SkillCategory[] = [
  {
    title: "BACKEND & APIS",
    skills: [
      { name: "Node.js", level: 92, color: "#f78166" },
      { name: "NestJS", level: 88, color: "#79c0ff" },
      { name: "Express.js", level: 90, color: "#ffa657" },
      { name: "TypeScript", level: 85, color: "#56d364" },
      { name: "REST APIs", level: 93, color: "#bc8cff" },
    ],
  },
  {
    title: "DATABASES & CACHING",
    skills: [
      { name: "PostgreSQL", level: 88, color: "#79c0ff" },
      { name: "MongoDB", level: 82, color: "#56d364" },
      { name: "Redis", level: 85, color: "#f78166" },
      { name: "MySQL", level: 78, color: "#ffa657" },
    ],
  },
  {
    title: "MESSAGING & QUEUES",
    skills: [
      { name: "Kafka", level: 80, color: "#ffa657" },
      { name: "BullMQ", level: 85, color: "#bc8cff" },
      { name: "Redis Streams", level: 82, color: "#56d364" },
      { name: "Celery", level: 72, color: "#f78166" },
    ],
  },
  {
    title: "CLOUD & DEVOPS",
    skills: [
      { name: "AWS (EC2, S3, ASG)", level: 82, color: "#ffa657" },
      { name: "Docker", level: 88, color: "#79c0ff" },
      { name: "NGINX", level: 80, color: "#56d364" },
      { name: "CI/CD", level: 78, color: "#bc8cff" },
      { name: "PM2", level: 85, color: "#f78166" },
    ],
  },
  {
    title: "LANGUAGES",
    skills: [
      { name: "TypeScript", level: 88, color: "#79c0ff" },
      { name: "JavaScript", level: 92, color: "#ffa657" },
      { name: "SQL", level: 85, color: "#bc8cff" },
    ],
  },
  {
    title: "FRONTEND & TOOLS",
    skills: [
      { name: "React", level: 78, color: "#79c0ff" },
      { name: "Next.js", level: 75, color: "#bc8cff" },
      { name: "React Query", level: 80, color: "#56d364" },
      { name: "Git", level: 92, color: "#ffa657" },
      { name: "Grafana", level: 72, color: "#f78166" },
    ],
  },
];

const alsoFamiliarWith: string[] = [
  "Microservices",
  "Event-Driven Systems",
  "Role-Based Access Control",
  "WhatsApp Automation",
  "Twilio",
  "WebSockets",
  "GraphQL",
  "LMS Platforms",
  "CRM Systems",
  "White-label Solutions",
  "Async Workflows",
  "Monitoring & Alerting",
];

// ── Animation ──────────────────────────────────────────────────────────────

const fadeInUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 30,
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

function FadeIn({ children, delay = 0 }: FadeInProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeInUp(delay)}>
      {children}
    </motion.div>
  );
}

// ── Skill Bar ──────────────────────────────────────────────────────────────

function SkillBar({ skill, index }: SkillBarProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 0.4 + index * 0.08,
      }}
      className="flex items-center gap-3 mb-4"
    >
      {/* Skill Name */}
      <span className="font-jetbrains text-[12px] text-[#8b949e] w-36 shrink-0">
        {skill.name}
      </span>

      {/* Progress */}
      <div className="flex-1 h-0.75 bg-[#21262d] rounded-full overflow-hidden">
        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: `${skill.level}%`,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5 + index * 0.08,
            ease: "easeOut",
          }}
          style={{
            backgroundColor: skill.color,
            height: "100%",
            borderRadius: "999px",
          }}
        />
      </div>

      {/* Percentage */}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8 + index * 0.05,
        }}
        className="font-jetbrains text-[12px] font-bold w-10 text-right shrink-0"
        style={{
          color: skill.color,
        }}
      >
        {skill.level}%
      </motion.span>
    </motion.div>
  );
}

// ── Category Block ─────────────────────────────────────────────────────────

function CategoryBlock({
  category,
  delay,
}: {
  category: SkillCategory;
  delay: number;
}) {
  return (
    <FadeIn delay={delay}>
      <motion.div
        whileHover={{
          y: -2,
        }}
        transition={{
          duration: 0.2,
        }}
        className="mb-8"
      >
        {/* Title */}
        <p className="font-jetbrains text-sm tracking-widest text-yellow-100 mb-2">
          {category.title}
        </p>

        {/* Skills */}
        <div
          className="mb-4 pt-4"
          style={{
            borderTop: "0.5px solid #fff08540",
          }}
        >
          {category.skills.map((skill: Skill, i: number) => (
            <SkillBar key={i} skill={skill} index={i} />
          ))}
        </div>
      </motion.div>
    </FadeIn>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function SkillsSection() {
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
      className="min-h-screen p-8"
    >
      {/* File Tag */}
      <FadeIn delay={0.05}>
        <p className="font-jetbrains text-sm text-brand-comment mb-6 italic opacity-80">
          {`// skills.json — tech stack & tools I actually use`}
        </p>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={0.15}>
        <h1 className="font-syne text-5xl font-extrabold text-[#e6edf3] tracking-tight leading-none mb-3">
          Skills
        </h1>
      </FadeIn>

      {/* Subheading */}
      <FadeIn delay={0.25}>
        <p className="font-jetbrains text-sm text-[#8b949e] mb-10">
          {`{ "status": "always_learning", "passion": "immeasurable" }`}
        </p>
      </FadeIn>

      {/* Skill Grid */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-x-16"
      >
        {skillCategories.map((cat: SkillCategory, i: number) => (
          <CategoryBlock key={i} category={cat} delay={0.3 + i * 0.1} />
        ))}
      </motion.div>

      {/* Familiar With */}
      <FadeIn delay={0.9}>
        <div>
          <p className="font-jetbrains text-[11px] tracking-widest text-[#e6edf3] mb-2">
            ALSO FAMILIAR WITH
          </p>

          <div
            style={{
              borderTop: "1px solid #21262d",
              paddingTop: "16px",
            }}
            className="flex flex-wrap gap-2"
          >
            {alsoFamiliarWith.map((item: string, i: number) => (
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
                  delay: 1 + i * 0.04,
                }}
                whileHover={{
                  y: -2,
                  borderColor: "#58a6ff",
                  color: "#58a6ff",
                }}
                className="
                  font-jetbrains
                  text-[11px]
                  text-[#8b949e]
                  border
                  border-[#30363d]
                  rounded
                  px-3
                  py-1
                  cursor-default
                  transition-colors
                "
              >
                {item}
              </motion.span>
            ))}
          </div>
        </div>
      </FadeIn>
    </motion.div>
  );
}
