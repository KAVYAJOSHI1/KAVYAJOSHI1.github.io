import { contact } from "@/data/contact";
import { profile } from "@/data/profile";

export function ContactPanel() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl font-bold text-white">Let&apos;s Build Something Amazing</h2>
      <p className="text-slate-300">Ready to collaborate? Reach out through any of these channels.</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <a href={contact.resumePath} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-blue-400">
          📄 <span>Download Resume</span>
        </a>
        <a href={`mailto:${contact.email}`} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-blue-400">
          ✉️ <span>{contact.email}</span>
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-blue-400">
          🐙 <span>GitHub</span>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-blue-400">
          💼 <span>LinkedIn</span>
        </a>
        <a href={contact.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200 transition hover:border-blue-400 sm:col-span-2">
          🧮 <span>LeetCode — {profile.leetcode.total}+ solved, {profile.leetcode.percentile}</span>
        </a>
      </div>
    </div>
  );
}
