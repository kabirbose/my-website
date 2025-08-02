"use client";

import { motion } from "framer-motion";
import ProjectsBlock from "../blocks/ProjectsBlock";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function ProjectsSec() {
  const projects = [
    {
      project: "Packet Tracer Labs",
      src: "/packet-tracer.webp",
      alt: "Cisco Packet Tracer",
      href: "/details/packetTracerLabs",
    },
    {
      project: "AVD Automation-Day 1",
      src: "/arista-logo.png",
      alt: "Arista Logo",
      href: "/details/avdAutomationDay1",
    },
    {
      project: "AVD Automation-Day 2",
      src: "/arista-logo.png",
      alt: "Arista Logo",
      href: "/details/avdAutomationDay2",
    },
    {
      project: "Arch Linux Setup",
      src: "/arch-linux-logo.png",
      alt: "Arch Linux Logo",
      href: "/details/archLinuxSetup",
    },
    {
      project: "DNA Center Automation",
      src: "/dna-center-logo.png",
      alt: "DNA Center Logo",
      href: "/details/dnaCenterAutomation",
    },
  ];

  return (
    <motion.div
      className="space-y-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeInUp}
    >
      <motion.h1
        className="font-semibold text-2xl text-zinc-300"
        variants={fadeInUp}
      >
        Projects
      </motion.h1>
      {projects.map((proj, i) => (
        <motion.div key={proj.project} custom={i} variants={fadeInUp}>
          <ProjectsBlock
            project={proj.project}
            src={proj.src}
            alt={proj.alt}
            href={proj.href}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}
