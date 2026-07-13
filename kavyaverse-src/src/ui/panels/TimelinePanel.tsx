import type { TimelineStage } from "@/data/timeline";

const KIND_LABEL: Record<TimelineStage["kind"], string> = {
  academic: "Academics",
  experience: "Experience & Leadership",
  goal: "Future Goal",
};

export function TimelinePanel({ stage }: { stage: TimelineStage }) {
  return (
    <div className="flex flex-col gap-4">
      <span className="w-fit rounded-full border border-blue-400/30 bg-blue-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
        {KIND_LABEL[stage.kind]} · {stage.period}
      </span>
      <h2 className="text-2xl font-bold text-white">{stage.title}</h2>
      <p className="text-slate-400">{stage.place}</p>
      {stage.detail && <p className="leading-relaxed text-slate-300">{stage.detail}</p>}
    </div>
  );
}
