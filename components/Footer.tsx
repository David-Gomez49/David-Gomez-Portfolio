"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-gray-500">
          © {year} David Gómez. {t.footer.rights}
        </p>
        <p className="text-sm text-gray-400">
          <span className="mr-1 text-emerald-500">●</span>
          {t.footer.built}
        </p>
      </div>
    </footer>
  );
}
