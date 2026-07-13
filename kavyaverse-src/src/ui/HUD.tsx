"use client";

import { useState } from "react";
import { useGameStore } from "@/game/store";

export function HUD() {
  const isMobile = useGameStore((s) => s.isMobile);
  const muted = useGameStore((s) => s.muted);
  const toggleMuted = useGameStore((s) => s.toggleMuted);
  const loaded = useGameStore((s) => s.loaded);
  const [hintVisible, setHintVisible] = useState(true);

  if (!loaded) return null;

  return (
    <>
      <button
        onClick={toggleMuted}
        aria-label={muted ? "Unmute" : "Mute"}
        className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-lg text-slate-200 backdrop-blur-md transition hover:bg-white/10"
      >
        {muted ? "🔇" : "🔊"}
      </button>

      {!isMobile && hintVisible && (
        <div className="absolute bottom-5 left-5 z-20 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300 backdrop-blur-md">
          <span className="flex gap-1">
            <Key>W</Key>
            <Key>A</Key>
            <Key>S</Key>
            <Key>D</Key>
          </span>
          <span className="text-slate-500">move</span>
          <span className="text-slate-600">·</span>
          <span>drag mouse</span>
          <span className="text-slate-500">look</span>
          <span className="text-slate-600">·</span>
          <Key>Space</Key>
          <span className="text-slate-500">jump</span>
          <span className="text-slate-600">·</span>
          <Key>Shift</Key>
          <span className="text-slate-500">sprint</span>
          <span className="text-slate-600">·</span>
          <Key>E</Key>
          <span className="text-slate-500">interact</span>
          <button
            onClick={() => setHintVisible(false)}
            aria-label="Dismiss controls hint"
            className="ml-2 text-slate-500 hover:text-slate-200"
          >
            ✕
          </button>
        </div>
      )}
    </>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 font-mono text-[11px] text-slate-100">
      {children}
    </kbd>
  );
}
