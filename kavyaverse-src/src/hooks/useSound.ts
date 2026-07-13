"use client";

import { useCallback, useEffect, useRef } from "react";
import { useGameStore } from "@/game/store";

/**
 * All sound effects are synthesized at runtime via the Web Audio API
 * (no licensed audio assets exist to source for this project).
 */
let ctx: AudioContext | null = null;
let ambientNodes: { osc: OscillatorNode; gain: GainNode } | null = null;

function getCtx(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    ctx = new AC();
  }
  if (ctx.state === "suspended") void ctx.resume();
  return ctx;
}

function blip(freq: number, duration: number, type: OscillatorType, gainValue: number, glideTo?: number) {
  const audioCtx = getCtx();
  if (!audioCtx) return;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
  if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, audioCtx.currentTime + duration);
  gain.gain.setValueAtTime(gainValue, audioCtx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start();
  osc.stop(audioCtx.currentTime + duration);
}

export function useSound() {
  const muted = useGameStore((s) => s.muted);
  const mutedRef = useRef(muted);
  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  const jump = useCallback(() => {
    if (mutedRef.current) return;
    blip(320, 0.18, "triangle", 0.08, 620);
  }, []);

  const footstep = useCallback(() => {
    if (mutedRef.current) return;
    blip(120, 0.06, "square", 0.02, 90);
  }, []);

  const interact = useCallback(() => {
    if (mutedRef.current) return;
    blip(660, 0.12, "sine", 0.07, 880);
  }, []);

  const confetti = useCallback(() => {
    if (mutedRef.current) return;
    [523, 659, 784, 1047].forEach((f, i) => {
      setTimeout(() => blip(f, 0.22, "sine", 0.06), i * 90);
    });
  }, []);

  useEffect(() => {
    const audioCtx = getCtx();
    if (!audioCtx) return;
    if (muted) {
      ambientNodes?.gain.gain.setTargetAtTime(0, audioCtx.currentTime, 0.4);
      return;
    }
    if (!ambientNodes) {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = "sine";
      osc.frequency.value = 55;
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      ambientNodes = { osc, gain };
    }
    ambientNodes.gain.gain.setTargetAtTime(0.015, audioCtx.currentTime, 0.6);
  }, [muted]);

  return { jump, footstep, interact, confetti };
}
