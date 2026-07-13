export interface TimelineStage {
  id: string;
  period: string;
  title: string;
  place: string;
  detail?: string;
  iconKey: string;
  kind: "academic" | "experience" | "goal";
}

export const timeline: TimelineStage[] = [
  {
    id: "school-10",
    period: "2020",
    title: "10th Grade · 93%",
    place: "SDA School (ICSE)",
    detail: "98/100 in Computer Science",
    iconKey: "school",
    kind: "academic",
  },
  {
    id: "school-12",
    period: "2023",
    title: "12th Grade · 88%",
    place: "SDA School (ISC)",
    detail: "PCM + Computer Science",
    iconKey: "university",
    kind: "academic",
  },
  {
    id: "btech",
    period: "2023–2027",
    title: "B.Tech CSE · 8.75 CGPA",
    place: "GLS University, Ahmedabad",
    iconKey: "graduation-cap",
    kind: "academic",
  },
  {
    id: "wadhwani-ide",
    period: "2024",
    title: "Wadhwani Ignite & IDE Bootcamps",
    place: "AICTE / Wadhwani Foundation",
    detail: "Entrepreneurship, idea-to-plan, and innovation & design training.",
    iconKey: "lightbulb",
    kind: "experience",
  },
  {
    id: "gls-hackathons",
    period: "2024–2025",
    title: "GLS Internal Hackathons — 2x Champion",
    place: "GLS University",
    detail: "1st place 2024, 2nd place 2025.",
    iconKey: "star",
    kind: "experience",
  },
  {
    id: "leetcode-expert",
    period: "Ongoing",
    title: "LeetCode Expert — Top 2.5% Globally",
    place: "610+ problems solved",
    detail: "Beats 98.8% of submissions on Hard-difficulty problems.",
    iconKey: "square-root-variable",
    kind: "experience",
  },
  {
    id: "carbonverse-founder",
    period: "2025",
    title: "Founder & CEO, CarbonVerse",
    place: "PIERC Cohort 9 Incubation",
    detail: "Blockchain-powered sustainability startup for transparent carbon credit management.",
    iconKey: "rocket",
    kind: "experience",
  },
  {
    id: "acm-ieee",
    period: "2025",
    title: "ACM Membership Chair & IEEE Student Member",
    place: "GLS University",
    detail: "Leads a 200+ member university chapter.",
    iconKey: "users",
    kind: "experience",
  },
  {
    id: "sih-drdo-breach",
    period: "2025",
    title: "National Hackathon Wins",
    place: "SIH 2025 · DRDO Sampada · Breach FinTech",
    detail: "Multi-time national hackathon champion across AI, IoT security, and FinTech tracks.",
    iconKey: "trophy",
    kind: "experience",
  },
  {
    id: "cybershadez",
    period: "2026",
    title: "Student Coordinator, CyberShadez 2026",
    place: "GLS University",
    detail: "Leads Track 3 for 300+ participants.",
    iconKey: "shield-halved",
    kind: "experience",
  },
  {
    id: "cygnet-internship",
    period: "June – July 2026",
    title: "AI/ML & Full Stack Intern",
    place: "Cygnet.One",
    detail: "AI-powered SDLC & Jira automation agents, FastAPI backend, enterprise AI workflows.",
    iconKey: "briefcase",
    kind: "experience",
  },
  {
    id: "future-goals",
    period: "What's Next",
    title: "Research · Startups · Open Source · Robotics",
    place: "Innovation Center",
    detail:
      "Pushing further into applied AI research, scaling CarbonVerse, contributing to open source, and exploring robotics and AI products.",
    iconKey: "compass",
    kind: "goal",
  },
];
