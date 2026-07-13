export type AchievementBadge = "winner" | "finalist" | "prof" | "2x";

export interface Achievement {
  id: string;
  title: string;
  badge: AchievementBadge;
  badgeLabel: string;
  description: string;
  iconKey: string;
  certPath?: string;
}

export const achievements: Achievement[] = [
  {
    id: "carbonverse-founder",
    title: "Founder, CarbonVerse",
    badge: "winner",
    badgeLabel: "Founder",
    description:
      "Founded and leads CarbonVerse, a blockchain-powered sustainability platform selected for the PIERC Cohort 9 Incubation Program, focused on transparent carbon credit management.",
    iconKey: "rocket",
    certPath: "/Certificates/CarbonVerse_Founder_Certificate.pdf?v=2",
  },
  {
    id: "sih-2025",
    title: "Smart India Hackathon 2025",
    badge: "winner",
    badgeLabel: "Winner",
    description:
      "National Winner for CoastScan, an AI-driven system for automated beach sand classification recognized for its cloud-integrated architecture and real-time processing.",
    iconKey: "crown",
    certPath: "/Certificates/SIH.jpg",
  },
  {
    id: "drdo-sampada",
    title: "DRDO DIA-SVPCoE Hackathon: Sampada 2025",
    badge: "winner",
    badgeLabel: "Winner",
    description:
      "Winner in the IoT Security domain, having engineered an automated firmware extraction and static/binary vulnerability scanning toolkit for embedded and IoT devices.",
    iconKey: "shield",
    certPath: "/Certificates/DRDO_Sampada_Winner.jpg",
  },
  {
    id: "breach-2025",
    title: "Breach 2025 FinTech Hackathon, PDEU",
    badge: "winner",
    badgeLabel: "Winner",
    description:
      "Winner at Breach 2025, having engineered a real-time AI fraud detection engine and rapid-prototyping framework for high-frequency financial transactions.",
    iconKey: "medal",
    certPath: "/Certificates/AnirvedaWinning.jpg",
  },
  {
    id: "innovation-award",
    title: "Outstanding Innovation Award: CoastScan",
    badge: "winner",
    badgeLabel: "Award",
    description:
      "Recognized by the GLS University Incubation Centre for outstanding innovation in CoastScan, the award-winning AI project for automated beach sand classification.",
    iconKey: "award",
    certPath: "/Certificates/CoastScan_Innovation_Award.pdf?v=2",
  },
  {
    id: "cybershadez-coordinator",
    title: "Student Coordinator: CyberShadez 2026",
    badge: "prof",
    badgeLabel: "Coordinator",
    description:
      'Officially recognized by GLS University for leading Track 3 for 300+ participants and organizing the flagship AI automation event, "Rise of Agent."',
    iconKey: "shield-halved",
    certPath: "/Certificates/CyberShadez_Coordinator_Letter.pdf",
  },
  {
    id: "cygnet-internship",
    title: "AI/ML & Full Stack Intern, Cygnet.One",
    badge: "prof",
    badgeLabel: "Internship",
    description:
      "AI-powered SDLC & Jira automation agents. FastAPI backend with REST APIs, auth, HTTPS/TLS, AES-RSA encryption, JSON rendering, Angular integration, enterprise AI workflows.",
    iconKey: "briefcase",
  },
  {
    id: "gls-internal-2x",
    title: "GLS Internal Hackathons",
    badge: "2x",
    badgeLabel: "2x Winner",
    description:
      "Two-time Winner of GLS University's internal hackathons (2024 and 2025), demonstrating consistent technical leadership and rapid software development under competitive pressure.",
    iconKey: "star",
    certPath: "/Certificates/GLS_Internal_Hackathon_2025.pdf",
  },
  {
    id: "hackx-finalist",
    title: "Hack.X at HackTheSpring '26",
    badge: "finalist",
    badgeLabel: "Top 12 Finalist",
    description:
      "Placed Top 12 out of 70+ teams at GEC Gandhinagar's national-level hackathon, developing Sentinel GEC, an AI and blockchain-integrated retail security auditing system.",
    iconKey: "code-branch",
    certPath: "/Certificates/GEC_Hackathon_Finalist.pdf",
  },
  {
    id: "ingenium-finalist",
    title: "Ingenious Hackathon 7.0: Ingenium 2026",
    badge: "finalist",
    badgeLabel: "Finalist",
    description:
      "Finalist at this prestigious Ahmedabad University event for GeoAnushasan, a decentralized Digital Twin platform for smart city governance.",
    iconKey: "star",
    certPath: "/Certificates/AU_Ingenious_Hackathon_Certificate.pdf",
  },
  {
    id: "ssip-finalist",
    title: "SSIP Gujarat Hackathon 2025",
    badge: "finalist",
    badgeLabel: "State Finalist",
    description:
      "State-level Finalist for UrjaSetu, an AI-based grievance and feedback platform, at Gujarat's premier student innovation program.",
    iconKey: "award",
    certPath: "/Certificates/SSIP_Gujarat_Hackathon.jpg",
  },
  {
    id: "parul-ideathon",
    title: "Parul Ideathon 2026: Vadodara Startup Festival 6.0",
    badge: "finalist",
    badgeLabel: "Finalist",
    description:
      "Led team CarbonVerse to the final round of Vadodara Startup Festival 6.0 with an innovative carbon-tracking solution at the intersection of sustainability and Web3.",
    iconKey: "leaf",
    certPath: "/Certificates/Parul_Ideathon_Finalist.pdf",
  },
  {
    id: "acm-ieee",
    title: "ACM Membership Chair & IEEE Student Member",
    badge: "prof",
    badgeLabel: "Leadership",
    description:
      "Elected ACM Membership Chair, leading the university's student chapter and fostering technical growth for 200+ members. Active IEEE contributor to international technical standards and networking.",
    iconKey: "users",
    certPath: "/Certificates/IEEE_Membership.pdf",
  },
  {
    id: "bhrigu-lake",
    title: "Bhrigu Lake Summit · 4,300 m, Himachal Pradesh",
    badge: "prof",
    badgeLabel: "Trekker",
    description:
      "One of only 4 climbers out of 50 to summit Bhrigu Lake at 4,300 m (14,100 ft) in the Kullu Himalayas, completing the final ascent during a live thunderstorm.",
    iconKey: "mountain",
    certPath: "/Certificates/Bhrigu_Lake_Trek_Certificate.pdf",
  },
];
