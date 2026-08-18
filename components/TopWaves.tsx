"use client";

import { useId } from "react";

interface TopWavesProps {
  color?: string;
  speed?: number;
  waves?: number;
  amplitude?: number;
}

const VISIBLE = 1400;
const VIEW_HEIGHT = 1680;
const STEP = 10;

const HARMONICS = [
  { k: 1, w: 1.0, phase: 0.0 },
  { k: 2, w: 0.7, phase: 2.4 },
  { k: 3, w: 0.55, phase: 4.6 },
  { k: 5, w: 0.4, phase: 1.3 },
  { k: 7, w: 0.28, phase: 5.8 },
];
const WEIGHT_SUM = HARMONICS.reduce((s, h) => s + h.w, 0);

export default function TopWaves({
  color = "#a7f3d0",
  speed = 1,
  waves = 1,
  amplitude = 1,
}: TopWavesProps) {
  const period = VISIBLE / waves;
  const amp = VIEW_HEIGHT * 0.28 * amplitude;
  const offset = VIEW_HEIGHT * 0.6;

  const waveY = (x: number) =>
    offset +
    amp *
      HARMONICS.reduce(
        (sum, h) =>
          sum +
          (h.w / WEIGHT_SUM) *
            Math.sin((x / period) * Math.PI * 2 * h.k + h.phase),
        0,
      );

  const span = VISIBLE * 2;
  const pts: string[] = [];
  for (let x = 0; x <= span; x += STEP) {
    pts.push(`${x},${waveY(x).toFixed(1)}`);
  }
  const d = `M 0,0 H ${span} L ${span},${waveY(span).toFixed(1)} L ${pts
    .slice(1, -1)
    .reverse()
    .join(" L ")} L 0,${waveY(0).toFixed(1)} Z`;

  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const duration = 22 / speed;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[36rem] overflow-hidden">
      <style>{`
        @keyframes top-waves-${uid} {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .top-waves-${uid} { animation: top-waves-${uid} ${duration}s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .top-waves-${uid} { animation: none; }
        }
      `}</style>

      <svg
        viewBox={`0 0 ${span} ${VIEW_HEIGHT}`}
        preserveAspectRatio="none"
        className={`top-waves-${uid} absolute -top-10 left-0 h-[calc(100%+2.5rem)] w-[200%]`}
        style={{ willChange: "transform", filter: "blur(32px)" }}
      >
        <defs>
          <linearGradient id={`${uid}-grad`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#34d399" />
            <stop offset="0.5" stopColor={color} />
            <stop offset="1" stopColor="#ecfdf5" />
          </linearGradient>
        </defs>
        <path d={d} fill={`url(#${uid}-grad)`} />
      </svg>
    </div>
  );
}