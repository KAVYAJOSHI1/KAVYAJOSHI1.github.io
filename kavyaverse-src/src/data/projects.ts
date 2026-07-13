export type ProjectCategory =
  | "ai-ml"
  | "blockchain-web3"
  | "enterprise-web"
  | "cybersecurity-iot";

export type ProjectZone = "beach" | "ai-lab" | "blockchain" | "project-district";

export interface Project {
  id: string;
  title: string;
  badge?: string;
  description: string;
  tech: string[];
  category: ProjectCategory;
  zone: ProjectZone;
  githubUrl?: string;
  tag?: string;
  private?: boolean;
}

export const projects: Project[] = [
  {
    id: "coastscan",
    title: "CoastScan: AI Sand Classification",
    badge: "🏆 SIH '25 Winner",
    description:
      "National Winner of SIH 2025. An AI-driven system for automated beach sand grain mapping using OpenCV computer vision, with cloud-integrated analytical reporting.",
    tech: ["Computer Vision", "Django", "Python", "AWS"],
    category: "ai-ml",
    zone: "beach",
    githubUrl: "https://github.com/KAVYAJOSHI1/CoastScan",
    tag: "SIH Winner",
  },
  {
    id: "fraud-detection",
    title: "AI-Powered Fraud Detection System",
    badge: "🥇 Breach 2025 Winner",
    description:
      "A real-time anomaly detection engine for high-frequency financial transactions, built with ML and a scalable backend. Winner at the Breach 2025 FinTech Hackathon, PDEU.",
    tech: ["AI/ML", "FinTech", "Python", "Django", "MongoDB", "TensorFlow"],
    category: "ai-ml",
    zone: "ai-lab",
    githubUrl: "https://github.com/KAVYAJOSHI1/AI-Powered-Fraud-Detection-System",
    tag: "Winner",
  },
  {
    id: "iot-security",
    title: "IoT Security Solution: DRDO Sampada 2025",
    badge: "🏅 DRDO Winner",
    description:
      "Winner at DRDO DIA-SVPCoE Hackathon. Automated firmware extraction and static/binary vulnerability scanning for embedded and IoT devices, proven against a real DVR/IP camera firmware image.",
    tech: ["IoT Security", "Python", "Binwalk", "Linux"],
    category: "cybersecurity-iot",
    zone: "project-district",
    githubUrl: "https://github.com/KAVYAJOSHI1/IoT-Security-Solution",
    tag: "DRDO Winner",
  },
  {
    id: "ic-scanner",
    title: "IC Scanner: Counterfeit IC Detector",
    badge: "🏆 Internal Hackathon Winner",
    description:
      "AI-powered tool using computer vision and ML to detect counterfeit integrated circuits by analyzing images against a genuine component database.",
    tech: ["Computer Vision", "Python", "OpenCV", "TensorFlow", "Flask"],
    category: "ai-ml",
    zone: "ai-lab",
    githubUrl: "https://github.com/KAVYAJOSHI1/IC-SCANNER",
  },
  {
    id: "geoanushasan",
    title: "GeoAnushasan: Decentralized Smart City Digital Twin",
    badge: "🥈 Ingenium Finalist",
    description:
      'Data-driven Digital Twin platform for smart city governance, integrating real-time Weather, AQI, and Traffic telemetry into a decentralized "Urban Nervous System."',
    tech: ["Digital Twins", "Real-time APIs", "Python", "n8n", "Firebase"],
    category: "enterprise-web",
    zone: "project-district",
    githubUrl: "https://github.com/KAVYAJOSHI1/GeoAnushasan",
    tag: "Ingenium Finalist",
  },
  {
    id: "sentinel-gec",
    title: "Sentinel GEC: AI Retail Theft Detection System",
    badge: "🥈 Top 12 Finalist",
    description:
      "AI-powered retail security system that cross-references video feeds with POS logs. Computer vision detects theft, and alerts are anchored on Sepolia for audit integrity.",
    tech: ["Computer Vision", "Python", "Blockchain", "Ethereum Sepolia", "POS Integration"],
    category: "blockchain-web3",
    zone: "blockchain",
    githubUrl: "https://github.com/KAVYAJOSHI1/GEC",
    tag: "Top 12 Finalist",
  },
  {
    id: "urjasetu",
    title: "UrjaSetu: GUVNL Feedback System",
    badge: "🥈 SSIP State Finalist",
    description:
      "SSIP Gujarat Hackathon 2025 finalist project. Govt feedback AI-based full-stack platform for complaining about issues, where AI was used to detect flaws and streamline communication.",
    tech: ["React", "Django", "PostgreSQL", "REST API"],
    category: "enterprise-web",
    zone: "project-district",
    githubUrl: "https://github.com/KAVYAJOSHI1/UrjaSetu-GUVNL-Platform",
    tag: "SSIP Finalist",
  },
  {
    id: "ecoscan",
    title: "EcoScan: Greenwashing Detector",
    badge: "🥈 Edunet Finalist",
    description:
      "AI-powered platform combating greenwashing, using the Google Vision API and Hugging Face Transformers to analyze product photos and URLs for misleading environmental claims.",
    tech: ["AI/ML", "Python", "Flask", "Google Vision API", "Hugging Face"],
    category: "ai-ml",
    zone: "ai-lab",
    githubUrl: "https://github.com/KAVYAJOSHI1/Greenwashing-Detector",
  },
  {
    id: "carbonverse",
    title: "CarbonVerse: Carbon Credit Marketplace",
    badge: "🌱 PIERC Incubated",
    description:
      "AI-verified carbon offset platform. Landowners submit geo-tagged photos of trees and crops, AI calculates carbon absorption, and credits are minted on-chain for corporate buyers.",
    tech: ["Python", "Django", "Solidity", "AI/ML"],
    category: "blockchain-web3",
    zone: "blockchain",
    githubUrl: "https://github.com/KAVYAJOSHI1/CARBONCRED",
    tag: "Founder",
  },
  {
    id: "vericred",
    title: "VeriCred: Privacy-Preserving ZKML Credit Scoring",
    badge: "🔐 ZKML",
    description:
      "Decentralized credit scoring engine using Zero-Knowledge Machine Learning. Computes scores locally with PyTorch, validating proofs on-chain via Solidity on Sepolia, private by design.",
    tech: ["ZKML (EZKL)", "PyTorch", "Solidity", "Ethereum Sepolia", "Web3.js"],
    category: "blockchain-web3",
    zone: "blockchain",
    private: true,
  },
  {
    id: "l3m",
    title: "L3M: Local Multi-Modal MCP System",
    badge: "🧠 Local AI",
    description:
      "Privacy-first, offline AI architecture using a custom Model Context Protocol over TCP, with a Go orchestration server, a Python/Qdrant RAG pipeline, and PostgreSQL state management.",
    tech: ["Go", "Python", "React", "Qdrant", "Ollama", "MCP"],
    category: "ai-ml",
    zone: "ai-lab",
    githubUrl: "https://github.com/KAVYAJOSHI1/L3M",
  },
  {
    id: "localminds",
    title: "LocalMinds: Sovereign Offline AI Companion",
    badge: "🤖 On-Device AI",
    description:
      "100% offline AI agent built with Flutter and MediaPipe for on-device inference, featuring local RAG and persistent memory for a personalized, zero-data-egress sovereign AI experience.",
    tech: ["Flutter", "MediaPipe", "Local RAG", "On-device Inference", "Python"],
    category: "ai-ml",
    zone: "ai-lab",
    githubUrl: "https://github.com/KAVYAJOSHI1/LOCALMINDS",
  },
  {
    id: "nexos",
    title: "NexOS: Your Digital Twin for the Web",
    description:
      "Local-first browser AI agent that drafts replies and polishes messages in your own voice. Integrates with n8n and Google Gemini to inject a persistent identity profile into every reply, rewrite, and draft.",
    tech: ["JavaScript", "Chrome Extension", "n8n", "Google Gemini"],
    category: "ai-ml",
    zone: "ai-lab",
    githubUrl: "https://github.com/KAVYAJOSHI1/NexOS",
  },
  {
    id: "erp",
    title: "Smart Manufacturing ERP & Supply Chain Platform",
    badge: "🏭 Enterprise ERP",
    description:
      "Enterprise-grade, event-driven microservices ERP for manufacturing, procurement, inventory, and finance, built with a Kafka outbox pattern, a Node.js API gateway with RBAC, and full observability.",
    tech: ["Go", "Node.js", "Next.js", "Kafka", "PostgreSQL", "Redis", "Docker"],
    category: "enterprise-web",
    zone: "project-district",
    githubUrl: "https://github.com/KAVYAJOSHI1/ERP",
  },
  {
    id: "tribekart",
    title: "Tribekart: Artisan E-Commerce Platform",
    description:
      "Full-stack mobile e-commerce platform connecting artisans with buyers. Features role-based dashboards, a wallet payment system, QR scanner, art history encyclopedia, and a complete seller portal.",
    tech: ["React Native", "Firebase", "Firestore", "Expo", "Firebase Auth"],
    category: "enterprise-web",
    zone: "project-district",
    githubUrl: "https://github.com/KAVYAJOSHI1/TRIBEKART",
  },
  {
    id: "sportspot",
    title: "SportSpot: Sports Turf Booking & Management Platform",
    description:
      "Full-stack, multi-platform app connecting players with turf owners, covering discovery, bookings, tournaments, and revenue management end-to-end with a premium dark-themed UI.",
    tech: ["Django", "React Native", "Expo", "SQLite"],
    category: "enterprise-web",
    zone: "project-district",
    githubUrl: "https://github.com/KAVYAJOSHI1/SportSpot",
  },
  {
    id: "flash-mentor",
    title: "Flash Mentor: AI Learning Assistant",
    description:
      "Comprehensive AI-powered personal learning platform with a long-term roadmap planner, skill tracker with AI-generated learning paths, and an interactive interview coach.",
    tech: ["React", "TypeScript", "Python", "Flask", "Gemini AI", "SQLAlchemy"],
    category: "ai-ml",
    zone: "ai-lab",
    githubUrl: "https://github.com/KAVYAJOSHI1/flash-mentor",
  },
  {
    id: "milletsetu",
    title: "MilletSetu: Blockchain for Farmers",
    description:
      "Direct-to-buyer millet marketplace with AI price prediction, anchoring product data hashes on the Ethereum Sepolia testnet for traceability.",
    tech: ["Django", "Ethers.js", "scikit-learn", "Sepolia Testnet"],
    category: "blockchain-web3",
    zone: "blockchain",
    githubUrl: "https://github.com/KAVYAJOSHI1/MilletSetu-Blockchain",
  },
  {
    id: "anantam-finserv",
    title: "Anantam Finserv: Full-Stack FinTech Platform",
    description:
      "Full-stack web platform for a financial services company featuring an interactive portal, complete user authentication, and an admin dashboard for managing users and contact messages.",
    tech: ["Python", "Django", "JavaScript", "SQLite", "SMTP"],
    category: "enterprise-web",
    zone: "project-district",
    githubUrl: "https://github.com/KAVYAJOSHI1/ANANTAM_WEBSITE",
  },
];

export const projectsByZone = (zone: ProjectZone) => projects.filter((p) => p.zone === zone);
