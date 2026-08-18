"use client";

import { motion } from "motion/react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export default function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12"
    >
      <p className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-emerald-500">
        <span className="h-px w-8 bg-emerald-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {title}
      </h2>
    </motion.div>
  );
}
