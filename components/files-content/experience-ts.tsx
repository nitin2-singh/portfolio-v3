import { useState, useEffect, ReactNode } from "react";

// ── Types ──────────────────────────────────────────────────────────────────

interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  techs: string[];
  current: boolean;
}

interface FadeInProps {
  children: ReactNode;
  delay?: number;
}

// ── Data ───────────────────────────────────────────────────────────────────

const experiences: Experience[] = [
  {
    period: "Dec 2024 - Present",
    role: "Full Stack Engineer",
    company: "SlideCoach",
    description:
      "Building scalable backend services and AWS infrastructure for high availability. Designed document processing pipelines, content generation workflows, and real-time feedback systems. Implemented async processing with BullMQ and Redis Streams, and developed internal shared packages to improve developer velocity.",
    techs: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "AWS",
      "NGINX",
      "PM2",
    ],
    current: true,
  },
  {
    period: "May 2023 - Nov 2024",
    role: "Full Stack Engineer",
    company: "Kognics",
    description:
      "Built backend services powering CRM and LMS platforms with REST APIs and role-based access control. Implemented WhatsApp automation workflows to drive customer engagement. Delivered white-label backend solutions supporting multiple clients across automation, notifications, and data management.",
    techs: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "SQL",
      "REST APIs",
      "WhatsApp API",
      "RBAC",
    ],
    current: false,
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function FadeIn({ children, delay = 0 }: FadeInProps) {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      {children}
    </div>
  );
}

function ExperienceCard({
  exp,
  delay,
  isLast,
}: {
  exp: Experience;
  delay: number;
  isLast: boolean;
}) {
  return (
    <FadeIn delay={delay}>
      <div className="flex gap-6">
        {/* Timeline column */}
        <div className="flex flex-col items-center">
          {/* Dot */}
          <div
            className="mt-1 shrink-0 rounded-full flex items-center justify-center"
            style={{
              width: "18px",
              height: "18px",
              border: exp.current ? "2px solid #79c0ff" : "2px solid #30363d",
              backgroundColor: exp.current ? "transparent" : "transparent",
            }}
          >
            {exp.current && (
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  backgroundColor: "#79c0ff",
                }}
              />
            )}
          </div>
          {/* Vertical line */}
          {!isLast && (
            <div
              className="flex-1 mt-2"
              style={{
                width: "1px",
                backgroundColor: "#21262d",
                minHeight: "40px",
              }}
            />
          )}
        </div>

        {/* Content */}
        <div className="pb-12 flex-1">
          {/* Period */}
          <p
            className="font-jetbrains text-[12px] mb-3"
            style={{ color: exp.current ? "#79c0ff" : "#8b949e" }}
          >
            {exp.period}
          </p>

          {/* Role */}
          <h2 className="font-syne text-2xl font-extrabold text-[#e6edf3] mb-1 leading-tight">
            {exp.role}
          </h2>

          {/* Company */}
          <p className="font-jetbrains text-[13px] text-[#79c0ff] mb-4">
            @ {exp.company}
          </p>

          {/* Description */}
          <p className="font-jetbrains text-[12.5px] text-[#8b949e] leading-7 mb-5 max-w-3xl">
            {exp.description}
          </p>

          {/* Tech Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.techs.map((tech: string, i: number) => (
              <span
                key={i}
                className="font-jetbrains text-[11px] text-[#79c0ff] rounded px-2 py-0.5 hover:text-[#e6edf3] transition-colors duration-200 cursor-default"
                style={{ border: "1px solid #1f3a5f" }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function ExperienceSection() {
  return (
    <div className="min-h-screen p-8 font-mono">
      {/* File Tag */}
      <FadeIn delay={0}>
        <p className="font-jetbrains text-sm text-brand-comment mb-6 italic opacity-80">
          {`// experience.ts - professional journey`}
        </p>
      </FadeIn>

      {/* Heading */}
      <FadeIn delay={100}>
        <h1 className="font-syne text-5xl font-extrabold text-[#e6edf3] tracking-tight leading-none mb-3">
          Experience
        </h1>
      </FadeIn>

      <FadeIn delay={200}>
        <p className="font-jetbrains text-sm text-[#8b949e] mb-12">
          interface Career extends Timeline {"{}"}
        </p>
      </FadeIn>

      {/* Timeline */}
      <div>
        {experiences.map((exp: Experience, i: number) => (
          <ExperienceCard
            key={i}
            exp={exp}
            delay={300 + i * 150}
            isLast={i === experiences.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
