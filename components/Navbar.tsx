"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";
import { cn } from "@/lib/utils";

const SECTIONS = ["about", "experience", "projects", "skills", "contact"] as const;

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-neutral-200/70 bg-white/80 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="font-heading text-lg font-bold tracking-tight text-gray-900"
        >
          David<span className="text-emerald-500">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {SECTIONS.map(sec => (
            <a
              key={sec}
              href={`#${sec}`}
              className="group relative text-sm font-medium text-gray-900 transition-colors hover:text-emerald-600"
            >
              {t.nav[sec]}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-emerald-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-gray-700"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="overflow-hidden border-b border-neutral-200 bg-white/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {SECTIONS.map(sec => (
                <a
                  key={sec}
                  href={`#${sec}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-900 transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {t.nav[sec]}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
