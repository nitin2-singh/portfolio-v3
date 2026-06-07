"use client";

import { useState } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { motion, Variants } from "framer-motion";

const fadeInUp = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  },
});

const contacts = [
  {
    label: "EMAIL",
    value: "nitinforjob080803@gmail.com",
    href: "mailto:nitinforjob080803@gmail.com",
    color: "text-teal-400",
    borderColor: "border-teal-400/30",
    iconColor: "bg-teal-900/40 text-teal-400",
    icon: <Mail className="w-5 h-5" />,
  },
  {
    label: "LINKEDIN",
    value: "linkedin.com/in/nitin-aws-ci-cd",
    href: "https://linkedin.com/in/nitin-aws-ci-cd",
    color: "text-blue-400",
    borderColor: "border-blue-400/30",
    iconColor: "bg-blue-900/40 text-blue-400",
    icon: <FaLinkedinIn className="w-5 h-5" />,
  },
  {
    label: "GITHUB",
    value: "github.com/nitin2-singh",
    href: "https://github.com/nitin2-singh",
    color: "text-gray-200",
    borderColor: "border-gray-500/30",
    iconColor: "bg-gray-700/40 text-gray-300",
    icon: <FaGithub className="w-5 h-5" />,
  },
];

function ContactCard({
  contact,
  index,
}: {
  contact: (typeof contacts)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={contact.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 + index * 0.1, ease: "easeOut" }}
      className={`flex items-center gap-4 px-4 py-4 rounded-lg border ${contact.borderColor} bg-[#1a1a1a] hover:bg-[#222] transition-all duration-200 group`}
    >
      <span
        className={`flex items-center justify-center w-10 h-10 rounded-md ${contact.iconColor} transition-all duration-200`}
      >
        {contact.icon}
      </span>
      <div className="flex-1 min-w-0">
        <div
          className={`text-xs font-bold tracking-widest font-mono ${contact.color} mb-0.5`}
        >
          {contact.label}
        </div>
        <div className="text-sm text-gray-400 font-mono truncate group-hover:text-gray-200 transition-colors duration-200">
          {contact.value}
        </div>
      </div>
      <ArrowUpRight
        className={`w-4 h-4 text-gray-600 group-hover:text-gray-300 transition-all duration-200 ${
          hovered ? "translate-x-0.5 -translate-y-0.5" : ""
        }`}
      />
    </motion.a>
  );
}

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="p-8"
    >
      {/* Top comment */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.1)}
        className="text-brand-comment text-sm tracking-wide opacity-80"
      >
        {"/* contact.css — let's build something */"}
      </motion.div>

      {/* Title */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.2)}
        className="text-6xl md:text-7xl font-black tracking-tight text-white my-6"
      >
        Contact
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial="hidden"
        animate="visible"
        variants={fadeInUp(0.3)}
        className="text-gray-400 text-sm mb-14"
      >
        <span className="text-brand-dim mr-2">
          {"// open to work, collabs & good conversations"}
        </span>
      </motion.p>

      {/* Two columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl">
        {/* Left: Find Me On */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp(0.45)}
        >
          <h2 className="text-xl font-bold tracking-[0.3em] text-teal-400 mb-6 uppercase">
            Find&nbsp;Me&nbsp;On
          </h2>
          <div className="flex flex-col gap-3">
            {contacts.map((c, i) => (
              <ContactCard key={c.label} contact={c} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
