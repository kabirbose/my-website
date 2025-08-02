"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";

export default function Details() {
  const params = useParams();
  const item = params.item as string;

  const data = {
    cbc: {
      name: "CBC News",
      title: "Network Engineering Intern",
      description: [
        "- Developed Netbox plugins using Python (Django) to automate error-checking processes in Netbox",
        "- Created a Netbox plugin using Python (Django) to synchronize device configurations DNAC",
        "- Configured and planned network devices to meet SDN guidelines",
        "- Designed a sandbox lab to test network devices before pushing to production",
      ],
    },
    otu: {
      name: "Ontario Tech University",
      title: "Networking & IT Security Student",
      description: [
        "- Completed multiple networking case studies to architect and configure enterprise networks.",
        "- Gained hands-on experience in web-development, low-level programming, and network automation.",
        "- General Member at the Networking Society and a Liason for the Technology Management Student Association",
      ],
    },
    packetTracerLabs: {
      name: "Packet Tracer Labs",
      title: "Credit: Jeremy's IT Lab",
      description: [
        "- These are labs that I've completed to prepare for my CCNA.",
        "- GitHub repo: https://github.com/kabirbose/packet-tracer-labs",
      ],
    },
    avdAutomationDay1: {
      name: "AVD Automation Day 1",
      title: "Credit: Arista Networks Workshops",
      description: [
        "- Learned the basics of how to automate configurations on Arista devices.",
        "- Guides: https://labguides.testdrive.arista.com/2024.3/automation/overview/",
      ],
    },
    avdAutomationDay2: {
      name: "AVD Automation Day 2",
      title: "Credit: Arista Networks Workshops",
      description: [
        "- Learned more advanced topics on how to automate configurations on Arista devices.",
        "- Guides: https://labguides.testdrive.arista.com/2024.3/automation/overview/",
      ],
    },
    archLinuxSetup: {
      name: "Arch Linux Setup",
      title:
        "I haven't created a repository with my dotfiles yet, but it will be here soon.",
      description: [
        "- Utilized the Arch Wiki to install Arch Linux on my old Lenovo Ideapad from scratch.",
        "- Customized Kitty, Neovim, and everything else that could possibly be customized.",
        "- Guides: https://archlinux.org/",
      ],
    },
    dnaCenterAutomation: {
      name: "DNA Center Automation",
      title: "Syncs configurations from Netbox to Cisco DNA Center",
      description: [
        "- Developed a Netbox plugin to sync configurations from Netbox to DNAC.",
        "- Can be run externally on a local terminal or directly through Netbox.",
      ],
    },
  };

  const details = data[item as keyof typeof data];
  const descArray = Array.isArray(details.description)
    ? details.description
    : [details.description];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-center items-start flex-col h-[100vh] p-10 md:px-32 md:py-20"
    >
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {details.name}
      </motion.h1>

      {details.title && (
        <motion.p
          className="text-lg mt-2 text-zinc-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {details.title}
        </motion.p>
      )}

      <div className="mt-4 text-zinc-300 space-y-2">
        {descArray.map((desc, i) => (
          <motion.span
            key={i}
            className="block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
          >
            {desc}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
