import { skillLevelColor, type Skill } from "@/data/skills";

export function SkillPanel({ skill }: { skill: Skill }) {
  const color = skillLevelColor[skill.level];
  return (
    <div className="flex flex-col gap-4">
      <span
        className="w-fit rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide"
        style={{ borderColor: `${color}55`, backgroundColor: `${color}1a`, color }}
      >
        {skill.levelLabel}
      </span>
      <h2 className="text-2xl font-bold text-white">{skill.name}</h2>
      <p className="text-slate-400">
        Production line status: <span className="text-slate-200">operational</span>. This machine represents{" "}
        {skill.name} in Kavya&apos;s stack, calibrated to a {skill.levelLabel.toLowerCase()} proficiency level.
      </p>
    </div>
  );
}
