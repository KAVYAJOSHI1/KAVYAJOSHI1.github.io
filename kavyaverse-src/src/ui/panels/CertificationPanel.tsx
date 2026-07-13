import type { Certification } from "@/data/certifications";

export function CertificationPanel({ certification }: { certification: Certification }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold text-white">{certification.title}</h2>
      <p className="text-slate-400">{certification.issuer}</p>
      <a
        href={certification.path}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-blue-400 hover:text-blue-300"
      >
        View Certificate ↗
      </a>
    </div>
  );
}
