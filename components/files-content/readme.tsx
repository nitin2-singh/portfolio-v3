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

const topBadges = [
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

const stack = [
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

function StackBadge({ item }: { item: (typeof stack)[0]["items"][0] }) {
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
    <div className="p-8">
      {/* Name */}
      <h1 className="text-4xl md:text-5xl font-black text-white mb-1">
        Nitin Singh Negi
      </h1>

      {/* Divider */}
      <hr className="border-[#333] my-3" />

      {/* Role line */}
      <p className="text-sm text-brand-dim mb-4 tracking-wide">
        Full Stack Engineer @ SlideCoach &nbsp;·&nbsp; Rajasthan, India 🇮🇳
      </p>

      {/* Top badges */}
      <div className="flex flex-wrap gap-2 mb-10">
        {topBadges.map((b) => (
          <span
            key={b.label}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm text-xs font-mono border"
            style={{
              color: b.color,
              background: b.bg,
              borderColor: b.color + "55",
            }}
          >
            {b.icon}
            {b.label}
          </span>
        ))}
      </div>

      {/* About */}
      <section className="mb-10">
        <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
          <span>🟣</span> About
        </h2>
        <p className="text-sm text-brand-dim leading-relaxed mb-4">
          Hi, Nitin here! Backend engineer with 2.5+ years building
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
            <li key={i} className="flex items-start gap-2">
              <span>{p.emoji}</span>
              <span>
                <span className="text-white font-bold">{p.bold}</span>
                {p.rest}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Stack */}
      <section className="mb-10">
        <h2 className="text-3xl font-black text-white mb-5">Stack</h2>
        <div className="space-y-4">
          {stack.map((row) => (
            <div key={row.label} className="flex items-start gap-3 flex-wrap">
              <span className="text-sm text-white font-bold w-40 shrink-0 mt-0.5">
                {row.label}:
              </span>
              <div className="flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <StackBadge key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section>
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
              value: "github.com/nitin",
              href: "https://github.com/nitin2-singh",
            },
            {
              label: "LinkedIn",
              value: "linkedin.com/in/nitin",
              href: "https://linkedin.com/in/nitin-aws-ci-cd",
            },
            {
              label: "Phone",
              value: "+91 8209074851",
              href: "tel:+918209074851",
            },
          ].map((c) => (
            <li key={c.label} className="flex gap-2">
              <span className="text-gray-500 w-20 shrink-0">{c.label}:</span>
              <a
                href={c.href}
                className="text-teal-400 hover:text-teal-300 transition-colors duration-150 font-bold"
              >
                {c.value}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
