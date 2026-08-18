"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import BlurText from "@/components/BlurText";
import RotatingText from "@/components/RotatingText";
import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

type Tech = {
  name: string;
  tag: string;
  glyph: string;
  accent: string;
  offset: string;
};

const TECH: Tech[] = [
  { name: "React", tag: "UI Library", glyph: "Re", accent: "#087ea4", offset: "lg:mt-0" },
  { name: "Next.js", tag: "Framework", glyph: "Nx", accent: "#111827", offset: "lg:mt-12" },
  { name: "NestJS", tag: "Framework", glyph: "Ns", accent: "#e0234e", offset: "lg:mt-6" },
  { name: "Spring Boot", tag: "Framework", glyph: "Sb", accent: "#6db33f", offset: "lg:mt-16" },
  { name: "Docker", tag: "Containers", glyph: "Dk", accent: "#2496ed", offset: "lg:mt-8" },
  { name: "PostgreSQL", tag: "Database", glyph: "Pg", accent: "#336791", offset: "lg:mt-14" },
];

function TechCard({ tech, delay }: { tech: Tech; delay: number }) {
  return (
    <div className={cn("transition-transform duration-500", tech.offset)}>
      <motion.div
        animate={{ y: [0, -9, 0] }}
        transition={{
          duration: 4.5,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md hover:shadow-emerald-500/10">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
            style={{ backgroundColor: `${tech.accent}1a`, color: tech.accent }}
          >
            {tech.glyph}
          </span>
          <div>
            <p className="text-sm font-semibold text-gray-900">{tech.name}</p>
            <p className="text-xs text-gray-500">{tech.tag}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  const { lang, t } = useLanguage();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-2 lg:gap-12">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {t.hero.badge}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
          >
            <span className="block text-xl font-semibold text-gray-900 sm:text-2xl">
              {t.hero.greeting}
            </span>
            <span className="mt-2 block">
              {t.hero.name}
              <span className="text-emerald-500">.</span>
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="mt-5 flex h-20 items-center font-heading text-xl font-semibold text-gray-700 sm:text-2xl"
          >
            <RotatingText
              texts={t.hero.roles}
              mainClassName="overflow-hidden py-2 text-xl font-semibold text-gray-700 sm:text-2xl"
              splitLevelClassName="overflow-hidden pb-1"
              staggerFrom="first"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitBy="characters"
              rotationInterval={3500}
              transition={{ type: "spring", damping: 30, stiffness: 200 }}
            />
          </motion.div>

          <motion.div variants={item} className="mt-6 max-w-xl">
            <BlurText
              text={t.hero.description}
              delay={40}
              animateBy="words"
              direction="bottom"
              stepDuration={0.15}
              className="text-base leading-7 text-gray-500 sm:text-lg"
            />
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25"
            >
              {t.hero.viewProjects}
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500 hover:text-emerald-600 hover:shadow-md"
            >
              {t.hero.contactMe}
            </a>
            <a
              href={lang === "es" ? "/DavidGomez8-2026.pdf" : "/CV_David_Gomez_EN.pdf"}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500 hover:bg-emerald-100 hover:shadow-md"
            >
              <Download size={16} />
              {t.hero.downloadCV}
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-md"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-8 rounded-[3rem] bg-gradient-to-br from-emerald-200/50 via-transparent to-emerald-100/60 blur-2xl"
          />
          <div className="relative">
            <div className="relative mx-auto w-fit">
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-emerald-400/40 to-teal-200/40 blur-2xl"
              />
              <div aria-hidden="true" className="absolute inset-0 rounded-full bg-neutral-200" />
              <Image
                src="/profile.png"
                alt={t.hero.name}
                width={320}
                height={320}
                priority
                className="relative h-40 w-40 rounded-full object-cover shadow-lg ring-4 ring-white/60 sm:h-48 sm:w-48"
              />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {TECH.map((tech, i) => (
                <TechCard key={tech.name} tech={tech} delay={i * 0.35} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
