export type SkillLevel = "expert" | "advanced" | "intermediate" | "beginner";

export interface Skill {
  name: string;
  level: SkillLevel;
  levelLabel: string;
  iconKey: string;
}

export const skillLevelColor: Record<SkillLevel, string> = {
  expert: "#10b981",
  advanced: "#3b82f6",
  intermediate: "#a78bfa",
  beginner: "#94a3b8",
};

export const skills: Skill[] = [
  { name: "Artificial Intelligence", level: "advanced", levelLabel: "Advanced", iconKey: "brain" },
  { name: "Python", level: "expert", levelLabel: "Expert", iconKey: "python" },
  { name: "JavaScript / TS", level: "advanced", levelLabel: "Advanced", iconKey: "js" },
  { name: "React / Native", level: "intermediate", levelLabel: "Intermediate", iconKey: "react" },
  { name: "Databases", level: "advanced", levelLabel: "Advanced", iconKey: "database" },
  { name: "FastAPI", level: "advanced", levelLabel: "Advanced", iconKey: "bolt" },
  { name: "Django", level: "advanced", levelLabel: "Advanced", iconKey: "django" },
  { name: "Blockchain / ZKML", level: "intermediate", levelLabel: "Intermediate", iconKey: "cubes" },
  { name: "Docker", level: "beginner", levelLabel: "Hands-on", iconKey: "docker" },
  { name: "AWS", level: "beginner", levelLabel: "Foundational", iconKey: "aws" },
];
