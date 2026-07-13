import { profile } from "@/data/profile";
import { contact } from "@/data/contact";
import { certifications } from "@/data/certifications";

export function HomePanel() {
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
        <p className="mt-1 text-sm text-blue-300">{profile.roles.join(" • ")}</p>
      </div>

      <p className="leading-relaxed text-slate-300">{profile.aboutLead}</p>

      <div className="flex flex-wrap gap-2">
        {profile.taglinePills.map((pill) => (
          <span key={pill} className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1 text-xs text-blue-200">
            {pill}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3 border-y border-white/10 py-4 sm:grid-cols-4">
        {profile.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="bg-gradient-to-br from-blue-400 to-cyan-300 bg-clip-text text-lg font-extrabold text-transparent">
              {stat.value}
            </div>
            <div className="mt-1 text-[11px] text-slate-500">{stat.label}</div>
          </div>
        ))}
      </div>

      <blockquote className="rounded-lg border-l-2 border-blue-400 bg-blue-400/5 px-4 py-3 text-sm italic text-slate-300">
        &quot;{profile.quote}&quot;
      </blockquote>

      <div className="flex flex-wrap gap-3">
        <a href={contact.resumePath} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300">
          📄 Resume
        </a>
        <a href={`mailto:${contact.email}`} className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300">
          ✉️ Email
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300">
          GitHub ↗
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300">
          LinkedIn ↗
        </a>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Certifications</h3>
        <ul className="grid gap-1.5 sm:grid-cols-2">
          {certifications.map((cert) => (
            <li key={cert.id}>
              <a
                href={cert.path}
                target="_blank"
                rel="noopener noreferrer"
                className="block truncate rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition hover:border-blue-400/40 hover:text-blue-300"
                title={cert.title}
              >
                {cert.title} <span className="text-slate-500">— {cert.issuer}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
