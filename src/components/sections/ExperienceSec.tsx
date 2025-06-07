"use client";

import { motion } from "framer-motion";
import ExperienceBlock from "../blocks/ExperienceBlock";

export default function ExperienceSec() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-4"
    >
      <motion.h1
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="font-semibold text-2xl text-zinc-300"
      >
        Experience
      </motion.h1>

      <motion.div
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-3"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <ExperienceBlock
            src={"/cbc-logo.png"}
            alt={"CBC Logo"}
            company="CBC News"
            role="Network Engineer"
            href="/"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        >
          <ExperienceBlock
            src={"/otu-logo.webp"}
            alt={"Ontario Tech Logo"}
            company="Ontario Tech"
            role="Bachelor of IT"
            href="/"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
