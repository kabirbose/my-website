"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function SocialSec() {
  const socials = [
    { name: "GitHub", href: "https://github.com/KabirBose" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/kabirbose/" },
    {
      name: "Resume",
      href: "https://drive.google.com/file/d/1WuhN1J-xJjqBZWzf7YVKXoYRwL7bDZbk/view?usp=sharing",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }} // triggers when ~30% visible, only once
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="flex justify-between items-start gap-5 border-[1px] border-zinc-800 p-2 text-zinc-300 rounded-lg"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {socials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Link href={item.href} target="_blank">
              {item.name}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
