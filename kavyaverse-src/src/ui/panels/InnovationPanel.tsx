const THEMES = [
  { title: "Research", desc: "Going deeper into applied AI research — computer vision, generative AI, and ML systems that hold up in the real world." },
  { title: "Startups", desc: "Scaling CarbonVerse beyond its PIERC incubation, and staying open to building more Web3 x AI ventures." },
  { title: "Open Source", desc: "Contributing back to the tools and communities (AI, blockchain, dev tooling) this journey has been built on." },
  { title: "Robotics", desc: "Exploring where AI meets the physical world — a natural extension of the robotics & AI simulation training already completed." },
];

export function InnovationPanel() {
  return (
    <div className="flex flex-col gap-4">
      <span className="w-fit rounded-full border border-violet-400/30 bg-violet-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-300">
        What&apos;s Next
      </span>
      <h2 className="text-2xl font-bold text-white">Innovation Center</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {THEMES.map((theme) => (
          <div key={theme.title} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <h3 className="mb-1 font-semibold text-violet-300">{theme.title}</h3>
            <p className="text-sm text-slate-400">{theme.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
