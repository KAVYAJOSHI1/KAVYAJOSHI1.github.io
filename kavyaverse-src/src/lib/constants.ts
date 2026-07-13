export type ZoneId =
  | "home-base"
  | "ai-lab"
  | "beach"
  | "blockchain"
  | "hackathon-arena"
  | "skills-factory"
  | "career-timeline"
  | "project-district"
  | "innovation-center"
  | "contact-center";

export interface ZoneDefinition {
  id: ZoneId;
  name: string;
  shortLabel: string;
  position: [number, number, number];
  radius: number;
  color: string;
  accent: string;
  description: string;
}

const RING_RADIUS = 58;

function onRing(angleDeg: number): [number, number, number] {
  const rad = (angleDeg * Math.PI) / 180;
  return [Math.sin(rad) * RING_RADIUS, 0, -Math.cos(rad) * RING_RADIUS];
}

export const ZONES: ZoneDefinition[] = [
  {
    id: "home-base",
    name: "Home Base",
    shortLabel: "Home",
    position: [0, 0, 0],
    radius: 16,
    color: "#3b82f6",
    accent: "#06b6d4",
    description: "Kavya Joshi — AI Engineer, Full Stack Developer, Computer Science Student.",
  },
  {
    id: "ai-lab",
    name: "AI Research Lab",
    shortLabel: "AI Lab",
    position: onRing(0),
    radius: 20,
    color: "#06b6d4",
    accent: "#3b82f6",
    description: "Neural networks, computer vision, NLP, generative AI, MLOps & cloud AI projects.",
  },
  {
    id: "beach",
    name: "CoastScan Beach",
    shortLabel: "Beach",
    position: onRing(40),
    radius: 18,
    color: "#f59e0b",
    accent: "#06b6d4",
    description: "CoastScan — SIH 2025 national-winning AI sand classification system.",
  },
  {
    id: "blockchain",
    name: "Blockchain District",
    shortLabel: "Blockchain",
    position: onRing(80),
    radius: 18,
    color: "#a78bfa",
    accent: "#f59e0b",
    description: "VeriCred, CarbonVerse, MilletSetu & ZKML — Web3 and privacy-preserving AI.",
  },
  {
    id: "hackathon-arena",
    name: "Hackathon Arena",
    shortLabel: "Arena",
    position: onRing(120),
    radius: 20,
    color: "#f59e0b",
    accent: "#ef4444",
    description: "National hackathon trophies: SIH, DRDO Sampada, Breach, Hack.X and more.",
  },
  {
    id: "skills-factory",
    name: "Skills Factory",
    shortLabel: "Factory",
    position: onRing(160),
    radius: 18,
    color: "#10b981",
    accent: "#3b82f6",
    description: "An automated production line manufacturing every skill in the stack.",
  },
  {
    id: "career-timeline",
    name: "Career Timeline",
    shortLabel: "Timeline",
    position: onRing(200),
    radius: 22,
    color: "#3b82f6",
    accent: "#a78bfa",
    description: "School, college, hackathons, leadership, internship, and future goals.",
  },
  {
    id: "project-district",
    name: "Project District",
    shortLabel: "Projects",
    position: onRing(240),
    radius: 22,
    color: "#06b6d4",
    accent: "#10b981",
    description: "Every project is a building — enterprise systems, IoT security & platforms.",
  },
  {
    id: "innovation-center",
    name: "Innovation Center",
    shortLabel: "Innovation",
    position: onRing(280),
    radius: 16,
    color: "#a78bfa",
    accent: "#06b6d4",
    description: "Research, startups, open source, AI products, and robotics — what's next.",
  },
  {
    id: "contact-center",
    name: "Contact Center",
    shortLabel: "Contact",
    position: onRing(320),
    radius: 16,
    color: "#10b981",
    accent: "#3b82f6",
    description: "Let's build something amazing — email, GitHub, LinkedIn, resume.",
  },
];

export const zoneById = (id: ZoneId) => ZONES.find((z) => z.id === id)!;

export const PLAYER_START: [number, number, number] = [0, 2, 12];

export const EASTER_EGG_POSITION: [number, number, number] = [
  ZONES.find((z) => z.id === "innovation-center")!.position[0] + 6,
  1.2,
  ZONES.find((z) => z.id === "innovation-center")!.position[2] + 4,
];
