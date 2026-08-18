"use client";

import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

        <div className="grid gap-12 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-5 text-base leading-7 text-gray-500 lg:col-span-3"
          >
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="rounded-3xl border border-neutral-200 bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 font-heading text-lg font-bold text-emerald-600">
                  DG
                </div>
                <div>
                  <p className="font-heading text-lg font-semibold text-gray-900">
                    {t.about.fullName}
                  </p>
                  <p className="text-sm text-gray-500">{t.hero.roles[0]}</p>
                </div>
              </div>

              <dl className="space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <dt className="text-gray-500">{t.about.fact}</dt>
                  <dd className="flex items-center gap-1.5 font-medium text-gray-900">
                    <MapPin size={14} className="text-emerald-500" />
                    {t.about.factValue}
                  </dd>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <dt className="text-gray-500">Email</dt>
                  <dd className="truncate font-medium text-gray-900">{t.about.email}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
                  <dt className="text-gray-500">Phone</dt>
                  <dd className="font-medium text-gray-900">{t.about.phone}</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-gray-500">Status</dt>
                  <dd className="inline-flex items-center gap-2 font-medium text-emerald-600">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    {t.hero.badge}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
