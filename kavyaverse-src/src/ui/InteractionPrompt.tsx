"use client";

import { useGameStore } from "@/game/store";

export function InteractionPrompt() {
  const nearest = useGameStore((s) => s.nearestInteractable);
  const activePanel = useGameStore((s) => s.activePanel);
  const isMobile = useGameStore((s) => s.isMobile);
  const loaded = useGameStore((s) => s.loaded);

  if (!loaded || !nearest || activePanel || isMobile) return null;

  return (
    <div className="pointer-events-none absolute bottom-28 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/15 bg-black/50 px-5 py-2 text-sm text-slate-100 backdrop-blur-md">
      <kbd className="mr-2 rounded-md border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-xs">E</kbd>
      {nearest.label}
    </div>
  );
}
