import { motion, Variants } from "framer-motion";
import { FaDocker, FaAws, FaGitAlt, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiNestjs,
  SiExpress,
  SiNginx,
  SiMysql,
  SiApachekafka,
} from "react-icons/si";

const fadeInUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  },
});

type StackItem = { name: string; icon: React.ReactNode; color: string };
type Badge = {
  label: string;
  icon: React.ReactNode;
  color: string;
  bg: string;
};

const topBadges: Badge[] = [
  {
    label: "Node.js",
    icon: <FaNodeJs />,
    color: "#3c873a",
    bg: "rgba(60,135,58,0.15)",
  },
  {
    label: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178c6",
    bg: "rgba(49,120,198,0.15)",
  },
  {
    label: "NestJS",
    icon: <SiNestjs />,
    color: "#e0234e",
    bg: "rgba(224,35,78,0.15)",
  },
  {
    label: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "#336791",
    bg: "rgba(51,103,145,0.15)",
  },
  {
    label: "Redis",
    icon: <SiRedis />,
    color: "#dc382d",
    bg: "rgba(220,56,45,0.15)",
  },
];

const stack: { label: string; items: StackItem[] }[] = [
  {
    label: "Backend",
    items: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="w-3.5 h-3.5" />,
        color: "#3c873a",
      },
      {
        name: "NestJS",
        icon: <SiNestjs className="w-3.5 h-3.5" />,
        color: "#e0234e",
      },
      {
        name: "Express.js",
        icon: <SiExpress className="w-3.5 h-3.5" />,
        color: "#fff",
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="w-3.5 h-3.5" />,
        color: "#3178c6",
      },
    ],
  },
  {
    label: "Databases",
    items: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="w-3.5 h-3.5" />,
        color: "#336791",
      },
      {
        name: "MySQL",
        icon: <SiMysql className="w-3.5 h-3.5" />,
        color: "#00758f",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-3.5 h-3.5" />,
        color: "#4db33d",
      },
      {
        name: "Redis",
        icon: <SiRedis className="w-3.5 h-3.5" />,
        color: "#dc382d",
      },
    ],
  },
  {
    label: "Messaging & Queues",
    items: [
      {
        name: "BullMQ",
        icon: <SiRedis className="w-3.5 h-3.5" />,
        color: "#dc382d",
      },
      {
        name: "Kafka",
        icon: <SiApachekafka className="w-3.5 h-3.5" />,
        color: "#fff",
      },
      {
        name: "Redis Streams",
        icon: <SiRedis className="w-3.5 h-3.5" />,
        color: "#dc382d",
      },
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      {
        name: "AWS",
        icon: <FaAws className="w-3.5 h-3.5" />,
        color: "#ff9900",
      },
      {
        name: "Docker",
        icon: <FaDocker className="w-3.5 h-3.5" />,
        color: "#2496ed",
      },
      {
        name: "NGINX",
        icon: <SiNginx className="w-3.5 h-3.5" />,
        color: "#009639",
      },
      {
        name: "Git",
        icon: <FaGitAlt className="w-3.5 h-3.5" />,
        color: "#f34f29",
      },
    ],
  },
];

const aboutPoints = [
  { emoji: "🚀", bold: "scalable backend systems", rest: " at SlideCoach" },
  {
    emoji: "⚙️",
    bold: "microservices & async pipelines",
    rest: ", queues, caching",
  },
  {
    emoji: "☁️",
    bold: "AWS infrastructure",
    rest: " · EC2, ASG, S3, Target Groups",
  },
  { emoji: "✨", bold: "always shipping", rest: ", always optimising" },
];

function StackBadge({ item }: { item: StackItem }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-mono border border-[#333] bg-[#1a1a1a]"
      style={{ color: item.color }}
    >
      {item.icon}
      {item.name}
    </span>
  );
}

export default function ReadmePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-8 w-full"
    >
      {/* Name */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.1)}
        className="text-4xl md:text-5xl font-black text-white mb-1"
        style={{
          fontFamily: "'Arial Black', sans-serif",
          letterSpacing: "-0.02em",
        }}
      >
        Nitin Singh Negi
      </motion.h1>

      {/* Divider */}
      <motion.hr
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.2)}
        className="border-[#333] my-3"
      />

      {/* Role line */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.25)}
        className="text-sm text-gray-400 mb-4 tracking-wide"
      >
        Full Stack Engineer @ SlideCoach &nbsp;·&nbsp; Rajasthan, India 🇮🇳
      </motion.p>

      {/* Top badges */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.35)}
        className="flex flex-wrap gap-2 mb-10"
      >
        {topBadges.map((b, index) => (
          <motion.span
            key={b.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.4 + index * 0.08,
              ease: "easeOut",
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono border"
            style={{
              color: b.color,
              background: b.bg,
              borderColor: b.color + "55",
            }}
          >
            {b.icon}
            {b.label}
          </motion.span>
        ))}
      </motion.div>

      {/* About */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.7)}
        className="mb-10"
      >
        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
          <span>🟣</span> About
        </h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          Hi, Nitin here! Backend engineer with{" "}
          <span className="text-white font-bold">2.5+ years</span> building
          production-grade distributed systems. I obsess over scalability, clean
          architecture, and making things fast. From event-driven pipelines to
          cloud infra — I ship end-to-end.
          <br />
          <br />I enjoy solving hard backend problems, mentoring teammates, and
          crafting systems that hold up at scale. Always learning, always
          building.
        </p>
        <ul className="space-y-2 text-sm text-gray-400">
          {aboutPoints.map((p, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.8 + i * 0.1,
                ease: "easeOut",
              }}
              className="flex items-start gap-2"
            >
              <span>{p.emoji}</span>
              <span>
                <span className="text-white font-bold">{p.bold}</span>
                {p.rest}
              </span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* Stack */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp(1.1)}
        className="mb-10"
      >
        <h2
          className="text-2xl font-black text-white mb-5"
          style={{ fontFamily: "'Arial Black', sans-serif" }}
        >
          Stack
        </h2>
        <div className="space-y-4">
          {stack.map((row, rowIndex) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 1.2 + rowIndex * 0.1,
                ease: "easeOut",
              }}
              className="flex items-start gap-3 flex-wrap"
            >
              <span className="text-sm text-white font-bold w-40 shrink-0 mt-0.5">
                {row.label}:
              </span>
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <StackBadge key={item.name} item={item} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Connect */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeInUp(1.7)}
      >
        <h2
          className="text-2xl font-black text-white mb-5"
          style={{ fontFamily: "'Arial Black', sans-serif" }}
        >
          Connect
        </h2>
        <ul className="space-y-2 text-sm text-gray-400">
          {[
            {
              label: "Email",
              value: "nitinforjob080803@gmail.com",
              href: "mailto:nitinforjob080803@gmail.com",
            },
            {
              label: "GitHub",
              value: "github.com/nitin2-singh",
              href: "https://github.com/nitin2-singh",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/nitin-aws-ci-cd",
              href: "https://linkedin.com/in/nitin-aws-ci-cd",
            },
            {
              label: "Phone",
              value: "+91 8209074851",
              href: "tel:+918209074851",
            },
          ].map((c, i) => (
            <motion.li key={c.label} className="flex gap-2 min-w-0">
              <span className="text-gray-500 w-20 shrink-0">{c.label}:</span>

              <a
                href={c.href}
                className="min-w-0 break-all text-teal-400 hover:text-teal-300 transition-colors duration-150 font-bold"
              >
                {c.value}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.section>
    </motion.div>
  );
}
