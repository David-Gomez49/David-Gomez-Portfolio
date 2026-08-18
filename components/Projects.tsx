"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import SpotlightCard from "@/components/SpotlightCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t, lang } = useLanguage();

  return (
    <section id="projects" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} />

        <div className="flex flex-wrap justify-center gap-8">
          {t.projects.list.map((project, i) => (
            <motion.div
              key={`${lang}-${project.name}`}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
              whileHover={{ y: -8 }}
              className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
            >
              <SpotlightCard className="fold-corner group flex h-full flex-col">
                <div className="flex flex-1 flex-col">
                  <div className="mb-6">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-sm font-bold text-emerald-600">
                      {project.name.slice(0, 2).toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl font-semibold text-gray-900">
                    {project.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-gray-500">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span
                        key={tech}
                        className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-gray-600 transition-colors duration-300 group-hover:border-emerald-200 group-hover:bg-emerald-50/60 group-hover:text-emerald-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 transition-colors duration-300 group-hover:text-emerald-600"
                      >
                        {t.projects.viewProject}
                        <ArrowUpRight
                          size={16}
                          className="text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500"
                        />
                      </a>
                    )}
                    {[
                      { url: project.source, label: project.sourceLabel },
                      { url: project.source2, label: project.source2Label },
                    ]
                      .filter(item => item.url)
                      .map((item, idx) => (
                        <a
                          key={idx}
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition-colors duration-300 group-hover:text-emerald-600"
                        >
                          {item.label ?? t.projects.source}
                          <ArrowUpRight
                            size={16}
                            className="text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-emerald-500"
                          />
                        </a>
                      ))}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
