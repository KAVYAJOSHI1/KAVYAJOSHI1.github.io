import type { Project } from "@/data/projects";

export function ProjectPanel({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-4">
      {project.badge && (
        <span className="w-fit rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
          {project.badge}
        </span>
      )}
      <h2 className="text-2xl font-bold text-white">{project.title}</h2>
      <p className="leading-relaxed text-slate-300">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span key={t} className="rounded-md border border-blue-400/20 bg-blue-400/10 px-2.5 py-1 text-xs text-blue-300">
            {t}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
          >
            View Code ↗
          </a>
        )}
        {project.private && (
          <span className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-500">🔒 Private Repo</span>
        )}
        {project.tag && (
          <span className="rounded-lg border border-amber-400/20 bg-amber-400/5 px-4 py-2 text-sm text-amber-300">
            🏆 {project.tag}
          </span>
        )}
      </div>
    </div>
  );
}
