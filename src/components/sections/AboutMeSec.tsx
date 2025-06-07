"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutMeSec() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col gap-5 justify-start items-start"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <Image
          src="/puggy-and-me.png"
          alt="Puggy and Me"
          height={200}
          width={200}
          className="w-[100%] md:w-[20rem] rounded-2xl shadow-lg"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
      >
        <h1 className="text-4xl font-semibold">Kabir Bose</h1>
        <h2 className="text-lg text-zinc-400">
          Networking & IT @ Ontario Tech
        </h2>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.6,
            },
          },
        }}
        className="text-zinc-300 flex flex-col gap-2 justify-start items-start"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          Hi! I'm a university student specializing in computer networking.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        >
          I enjoy low-level programming, automation, and network design.
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
