export interface HeroStat {
  value: string;
  label: string;
}

export const profile = {
  name: "Kavya Joshi",
  roles: ["AI Engineer", "Software Engineer", "Full Stack Developer"],
  tagline: "AI Engineer • Full Stack Developer • Hackathon Winner",
  taglinePills: [
    "🏆 SIH '25 National Winner",
    "🥇 DRDO Sampada 2025 Winner",
    "🚀 Founder, CarbonVerse",
    "⚡ LeetCode Expert, Top 2.5%",
  ],
  availability: "Open to Internship & Full-Time Opportunities",
  description:
    "Software Engineer specializing in Artificial Intelligence, Full-Stack Development, and Enterprise Systems. National hackathon winner, startup founder, and AI engineer passionate about building scalable software, intelligent automation, blockchain applications, and real-world AI solutions.",
  aboutLead:
    "B.Tech Computer Science student at GLS University passionate about Artificial Intelligence, Full-Stack Engineering, Enterprise Software, and Blockchain. Enjoys designing scalable applications, AI agents, cloud-native systems, and intelligent automation solutions that solve real-world problems. The journey combines software engineering, research, entrepreneurship, and national-level hackathons to build impactful technology.",
  quote:
    "Focused on building the future of Web3 and Intelligence-as-a-Service, leveraging cloud-native architectures and Zero-Knowledge proofs to solve large-scale computational problems.",
  stats: [
    { value: "5+", label: "National Hackathons" },
    { value: "Founder", label: "CarbonVerse Startup" },
    { value: "Oracle + AWS", label: "Cloud Certified" },
    { value: "8.75", label: "CGPA · GLS University" },
  ] satisfies HeroStat[],
  leetcode: {
    total: 610,
    easy: 171,
    medium: 291,
    hard: 148,
    meta: "Beats 98.8% of submissions on Hard-difficulty problems",
    percentile: "Top 2.5% Globally",
    url: "https://leetcode.com/u/JoshiKavya/",
  },
};
