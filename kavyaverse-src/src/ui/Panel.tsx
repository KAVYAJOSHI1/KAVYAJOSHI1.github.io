"use client";

import { useEffect } from "react";
import { useGameStore, type PanelContent } from "@/game/store";
import { ProjectPanel } from "@/ui/panels/ProjectPanel";
import { AchievementPanel } from "@/ui/panels/AchievementPanel";
import { SkillPanel } from "@/ui/panels/SkillPanel";
import { TimelinePanel } from "@/ui/panels/TimelinePanel";
import { CertificationPanel } from "@/ui/panels/CertificationPanel";
import { HomePanel } from "@/ui/panels/HomePanel";
import { ContactPanel } from "@/ui/panels/ContactPanel";
import { InnovationPanel } from "@/ui/panels/InnovationPanel";

export function Panel() {
  const activePanel = useGameStore((s) => s.activePanel);
  const closePanel = useGameStore((s) => s.closePanel);

  useEffect(() => {
    if (!activePanel) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activePanel, closePanel]);

  if (!activePanel) return null;

  return (
    <div
      className="absolute inset-0 z-30 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={closePanel}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-white/10 bg-[#0b1120]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-8"
      >
        <button
          onClick={closePanel}
          aria-label="Close panel"
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10"
        >
          ✕
        </button>

        {renderContent(activePanel)}
      </div>
    </div>
  );
}

function renderContent(panel: PanelContent) {
  switch (panel.kind) {
    case "project":
      return <ProjectPanel project={panel.data} />;
    case "achievement":
      return <AchievementPanel achievement={panel.data} />;
    case "skill":
      return <SkillPanel skill={panel.data} />;
    case "timeline":
      return <TimelinePanel stage={panel.data} />;
    case "certification":
      return <CertificationPanel certification={panel.data} />;
    case "home":
      return <HomePanel />;
    case "contact":
      return <ContactPanel />;
    case "innovation":
      return <InnovationPanel />;
    default:
      return null;
  }
}
