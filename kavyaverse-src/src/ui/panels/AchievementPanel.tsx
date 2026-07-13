import type { Achievement } from "@/data/achievements";

const BADGE_STYLE: Record<Achievement["badge"], string> = {
  winner: "border-amber-400/30 bg-amber-400/10 text-amber-300",
  finalist: "border-blue-400/30 bg-blue-400/10 text-blue-300",
  prof: "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "2x": "border-violet-400/30 bg-violet-400/10 text-violet-300",
};

export function AchievementPanel({ achievement }: { achievement: Achievement }) {
  return (
    <div className="flex flex-col gap-4">
      <span className={`w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide ${BADGE_STYLE[achievement.badge]}`}>
        {achievement.badgeLabel}
      </span>
      <h2 className="text-2xl font-bold text-white">{achievement.title}</h2>
      <p className="leading-relaxed text-slate-300">{achievement.description}</p>
      {achievement.certPath && (
        <a
          href={achievement.certPath}
          target="_blank"
          rel="noopener noreferrer"
          className="w-fit rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-amber-400 hover:text-amber-300"
        >
          View Certificate ↗
        </a>
      )}
    </div>
  );
}
