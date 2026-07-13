"use client";

import { useEffect, useState } from "react";
import { useGameStore } from "@/game/store";
import { profile } from "@/data/profile";

const BOOT_DURATION = 2400;

export function LoadingScreen() {
  const loaded = useGameStore((s) => s.loaded);
  const setLoaded = useGameStore((s) => s.setLoaded);
  const [progress, setProgress] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const start = performance.now();
    let raf = 0;
    const tick = () => {
      const elapsed = performance.now() - start;
      const pct = Math.min(100, (elapsed / BOOT_DURATION) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setLoaded(true);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [setLoaded]);

  useEffect(() => {
    if (!loaded) return;
    const t = setTimeout(() => setDismissed(true), 750);
    return () => clearTimeout(t);
  }, [loaded]);

  if (dismissed) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#060910] transition-opacity duration-700 ease-out ${
        loaded ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 -top-52 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[110px] motion-safe:animate-pulse" />
        <div className="absolute -bottom-40 -right-24 h-[380px] w-[380px] rounded-full bg-cyan-400/15 blur-[110px] motion-safe:animate-pulse" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-400/10 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-7 px-6 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-violet-400 to-cyan-400 text-2xl font-extrabold text-white shadow-[0_0_60px_-10px_rgba(59,130,246,0.7)]">
          KJ
        </div>
        <h1 className="bg-gradient-to-br from-white via-sky-200 to-cyan-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
          {profile.name}
        </h1>
        <p className="text-xs uppercase tracking-[0.28em] text-slate-400 md:text-sm">{profile.tagline}</p>

        <div className="h-1.5 w-64 overflow-hidden rounded-full bg-white/10 md:w-80">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-[width] duration-150 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs tabular-nums text-slate-500">
          {progress < 100 ? `Booting KavyaVerse — ${Math.floor(progress)}%` : "Systems online."}
        </p>
      </div>
    </div>
  );
}
