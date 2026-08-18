"use client";

import { motion } from "motion/react";
import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-20 bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="relative rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <span
            aria-hidden="true"
            className="absolute left-0 top-10 h-24 w-1 rounded-r-full bg-gradient-to-b from-emerald-500 to-emerald-200"
          />

          <div className="grid gap-10 lg:grid-cols-3">
            <div>
              <div className="mb-3 flex items-center gap-2">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Briefcase size={18} />
                </span>
                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-600">
                  {t.experience.present}
                </span>
              </div>

              <h3 className="font-heading text-xl font-semibold text-gray-900">
                {t.experience.jobs[0].role}
              </h3>
              <p className="mt-1 text-base font-medium text-emerald-600">
                {t.experience.jobs[0].company}
              </p>

              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <MapPin size={14} className="shrink-0 text-emerald-500" />
                  {t.experience.jobs[0].location}
                </li>
                <li className="flex items-center gap-2">
                  <CalendarDays size={14} className="shrink-0 text-emerald-500" />
                  {t.experience.jobs[0].period}
                </li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {t.experience.jobs[0].stack.map(tech => (
                  <span
                    key={tech}
                    className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <ul className="space-y-3.5 lg:col-span-2">
              {t.experience.jobs[0].points.map((point, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: "easeOut" }}
                  className="flex gap-3 text-sm leading-6 text-gray-600"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500"
                  />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
