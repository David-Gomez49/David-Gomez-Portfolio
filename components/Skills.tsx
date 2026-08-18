"use client";

import { motion } from "motion/react";
import { BrainCircuit, Boxes, Bug, Code2, TerminalSquare } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

const CATEGORY_ICONS = {
  languages: Code2,
  frameworks: Boxes,
  data: BrainCircuit,
  tools: TerminalSquare,
  qa: Bug,
} as const;

type CategoryKey = keyof typeof CATEGORY_ICONS;

export default function Skills() {
  const { t } = useLanguage();

  const categories: {
    key: CategoryKey;
    label: string;
    items: string[];
  }[] = [
    { key: "languages", label: t.skills.languages.label, items: t.skills.languages.items },
    { key: "frameworks", label: t.skills.frameworks.label, items: t.skills.frameworks.items },
    { key: "data", label: t.skills.data.label, items: t.skills.data.items },
    { key: "tools", label: t.skills.tools.label, items: t.skills.tools.items },
    { key: "qa", label: t.skills.qa.label, items: t.skills.qa.items },
  ];

  return (
    <section id="skills" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.skills.eyebrow} title={t.skills.title} />

        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((cat, i) => {
            const Icon = CATEGORY_ICONS[cat.key];
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="group w-full rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-500/10 md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
              >
                <div className="mb-6 flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors duration-300 group-hover:bg-emerald-500 group-hover:text-white">
                    <Icon size={18} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-gray-900">
                    {cat.label}
                  </h3>
                </div>

                <ul className="flex flex-wrap gap-2.5">
                  {cat.items.map(tech => (
                    <li key={tech}>
                      <span className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-4 py-1.5 text-sm font-medium text-gray-600 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700">
                        {tech}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
