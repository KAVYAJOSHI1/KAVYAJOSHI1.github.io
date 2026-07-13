import { create } from "zustand";
import type { Project } from "@/data/projects";
import type { Achievement } from "@/data/achievements";
import type { Skill } from "@/data/skills";
import type { TimelineStage } from "@/data/timeline";
import type { Certification } from "@/data/certifications";

export type PanelContent =
  | { kind: "project"; data: Project }
  | { kind: "achievement"; data: Achievement }
  | { kind: "skill"; data: Skill }
  | { kind: "timeline"; data: TimelineStage }
  | { kind: "certification"; data: Certification }
  | { kind: "contact" }
  | { kind: "home" }
  | { kind: "innovation" };

export interface Interactable {
  id: string;
  label: string;
  position: [number, number, number];
  content: PanelContent;
}

interface GameState {
  isMobile: boolean;
  loaded: boolean;
  muted: boolean;
  activePanel: PanelContent | null;
  nearestInteractable: Interactable | null;
  interactables: Interactable[];
  visitedZones: Set<string>;
  easterEggFound: boolean;
  setMobile: (v: boolean) => void;
  setLoaded: (v: boolean) => void;
  toggleMuted: () => void;
  openPanel: (content: PanelContent) => void;
  closePanel: () => void;
  setNearestInteractable: (i: Interactable | null) => void;
  registerInteractable: (i: Interactable) => void;
  unregisterInteractable: (id: string) => void;
  markZoneVisited: (id: string) => void;
  foundEasterEgg: () => void;
}

export const useGameStore = create<GameState>((set) => ({
  isMobile: false,
  loaded: false,
  muted: false,
  activePanel: null,
  nearestInteractable: null,
  interactables: [],
  visitedZones: new Set(),
  easterEggFound: false,
  setMobile: (v) => set({ isMobile: v }),
  setLoaded: (v) => set({ loaded: v }),
  toggleMuted: () => set((s) => ({ muted: !s.muted })),
  openPanel: (content) => set({ activePanel: content }),
  closePanel: () => set({ activePanel: null }),
  setNearestInteractable: (i) => set({ nearestInteractable: i }),
  registerInteractable: (i) =>
    set((s) => ({ interactables: [...s.interactables.filter((x) => x.id !== i.id), i] })),
  unregisterInteractable: (id) =>
    set((s) => ({ interactables: s.interactables.filter((x) => x.id !== id) })),
  markZoneVisited: (id) =>
    set((s) => {
      if (s.visitedZones.has(id)) return {};
      const next = new Set(s.visitedZones);
      next.add(id);
      return { visitedZones: next };
    }),
  foundEasterEgg: () => set({ easterEggFound: true }),
}));
