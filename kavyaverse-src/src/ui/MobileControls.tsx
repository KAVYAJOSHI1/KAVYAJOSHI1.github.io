"use client";

import { useEffect, useRef, useState } from "react";
import { useGameStore } from "@/game/store";
import { mobileInput } from "@/hooks/useMobileInput";

const JOYSTICK_RADIUS = 48;

export function MobileControls() {
  const isMobile = useGameStore((s) => s.isMobile);
  const loaded = useGameStore((s) => s.loaded);
  const nearest = useGameStore((s) => s.nearestInteractable);
  const activePanel = useGameStore((s) => s.activePanel);

  const base = useRef<HTMLDivElement>(null);
  const knob = useRef<HTMLDivElement>(null);
  const pointerId = useRef<number | null>(null);
  const [sprintOn, setSprintOn] = useState(false);

  useEffect(() => {
    mobileInput.sprint = sprintOn;
  }, [sprintOn]);

  if (!isMobile || !loaded) return null;

  const handlePointerDown = (e: React.PointerEvent) => {
    pointerId.current = e.pointerId;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    updateJoystick(e.clientX, e.clientY);
  };

  const updateJoystick = (clientX: number, clientY: number) => {
    const el = base.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    let dx = clientX - cx;
    let dy = clientY - cy;
    const dist = Math.hypot(dx, dy);
    if (dist > JOYSTICK_RADIUS) {
      dx = (dx / dist) * JOYSTICK_RADIUS;
      dy = (dy / dist) * JOYSTICK_RADIUS;
    }
    if (knob.current) knob.current.style.transform = `translate(${dx}px, ${dy}px)`;
    mobileInput.x = dx / JOYSTICK_RADIUS;
    mobileInput.y = dy / JOYSTICK_RADIUS;
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (pointerId.current !== e.pointerId) return;
    updateJoystick(e.clientX, e.clientY);
  };

  const resetJoystick = (e: React.PointerEvent) => {
    if (pointerId.current !== e.pointerId) return;
    pointerId.current = null;
    mobileInput.x = 0;
    mobileInput.y = 0;
    if (knob.current) knob.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <div className="absolute inset-x-0 bottom-0 z-20 flex items-end justify-between px-6 pb-8 select-none">
      <div
        ref={base}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={resetJoystick}
        onPointerCancel={resetJoystick}
        className="relative h-28 w-28 touch-none rounded-full border border-white/15 bg-white/5 backdrop-blur-md"
      >
        <div
          ref={knob}
          className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/25 bg-white/20"
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          onPointerDown={() => (mobileInput.interact = true)}
          onPointerUp={() => (mobileInput.interact = false)}
          disabled={!nearest || !!activePanel}
          className="flex h-16 w-16 touch-none items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs font-semibold text-slate-100 backdrop-blur-md disabled:opacity-30"
        >
          {nearest ? "E" : ""}
        </button>
        <div className="flex gap-3">
          <button
            onPointerDown={() => setSprintOn((v) => !v)}
            className={`flex h-12 w-12 touch-none items-center justify-center rounded-full border text-[10px] font-semibold backdrop-blur-md ${
              sprintOn ? "border-cyan-300 bg-cyan-400/30 text-white" : "border-white/15 bg-white/5 text-slate-200"
            }`}
          >
            SPRINT
          </button>
          <button
            onPointerDown={() => (mobileInput.jump = true)}
            onPointerUp={() => (mobileInput.jump = false)}
            className="flex h-12 w-12 touch-none items-center justify-center rounded-full border border-white/15 bg-white/5 text-[10px] font-semibold text-slate-200 backdrop-blur-md"
          >
            JUMP
          </button>
        </div>
      </div>
    </div>
  );
}
