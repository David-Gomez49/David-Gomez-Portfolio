"use client";

import { useLanguage } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

function USFlag() {
  const stripeH = 30 / 13;
  return (
    <svg viewBox="0 0 60 30" className="h-4 w-6 shrink-0" aria-hidden="true">
      {Array.from({ length: 13 }, (_, i) => (
        <rect
          key={i}
          width="60"
          height={stripeH}
          y={i * stripeH}
          fill={i % 2 === 0 ? "#b22234" : "#ffffff"}
        />
      ))}
      <rect width="26" height={stripeH * 7} fill="#3c3b6e" />
      {Array.from({ length: 12 }, (_, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        return (
          <circle
            key={i}
            cx={4 + col * 7}
            cy={2.6 + row * 3.6}
            r="1"
            fill="#ffffff"
          />
        );
      })}
    </svg>
  );
}

function ESFlag() {
  return (
    <svg viewBox="0 0 60 30" className="h-4 w-6 shrink-0" aria-hidden="true">
      <rect width="60" height="30" fill="#aa151b" />
      <rect y="7.5" width="60" height="15" fill="#f1bf00" />
      <path d="M25 9h10v5.5a5 5 0 0 1-10 0z" fill="#ad1519" />
      <path d="M27.5 9h5v5.5a2.5 2.5 0 0 1-5 0z" fill="#f1bf00" />
    </svg>
  );
}

const OPTIONS = [
  { value: "en", Flag: USFlag, label: "English" },
  { value: "es", Flag: ESFlag, label: "Español" },
] as const;

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full border border-neutral-200 bg-white p-0.5 shadow-sm"
      role="group"
      aria-label="Language"
    >
      {OPTIONS.map(option => {
        const active = lang === option.value;
        return (
          <button
            key={option.value}
            onClick={() => setLang(option.value)}
            aria-pressed={active}
            aria-label={option.label}
            title={option.label}
            className={cn(
              "flex h-7 w-8 items-center justify-center rounded-full transition-all duration-200",
              active
                ? "bg-emerald-500 shadow-sm"
                : "hover:bg-emerald-50"
            )}
          >
            <option.Flag />
          </button>
        );
      })}
    </div>
  );
}