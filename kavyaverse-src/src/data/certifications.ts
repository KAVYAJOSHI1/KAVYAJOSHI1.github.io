export interface Certification {
  id: string;
  title: string;
  issuer: string;
  iconKey: string;
  path: string;
}

export const certifications: Certification[] = [
  {
    id: "oci-ai",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    iconKey: "cloud",
    path: "/Certificates/OCI_CERTIFICATE.pdf",
  },
  {
    id: "aws-academy",
    title: "AWS Academy Cloud Foundations Graduate",
    issuer: "Amazon Web Services (AWS)",
    iconKey: "aws",
    path: "/Certificates/AWS_Academy_Cloud_Foundations.pdf",
  },
  {
    id: "power-bi",
    title: "Microsoft Learning Path: Dashboard in a Day (Power BI)",
    issuer: "Microsoft",
    iconKey: "chart",
    path: "/Certificates/Power_BI_Dashboard_in_a_Day.pdf",
  },
  {
    id: "robo-ai",
    title: "30-Day Industrial Training on Robotics & AI Simulation",
    issuer: "My Equation (Ratified by NVIDIA & Microsoft)",
    iconKey: "robot",
    path: "/Certificates/ROBO_AI_-_JADE-KAVYA_JOSHI.pdf",
  },
  {
    id: "edunet-green-ai",
    title: "Foundation Course on Green Skills & Artificial Intelligence",
    issuer: "Edunet Foundation",
    iconKey: "brain",
    path: "/Certificates/EDUNET_Completion.pdf",
  },
  {
    id: "bitcoin-mentorship",
    title: "Mentorship Program on Blockchain / Bitcoin",
    issuer: "LaunchED Global",
    iconKey: "link",
    path: "/Certificates/Bitcoin_Kavya_Joshi.pdf",
  },
  {
    id: "pierc-preincubation",
    title: "Startup Pre-Incubation Program",
    issuer: "PIERC, Parul University",
    iconKey: "rocket",
    path: "/Certificates/PIERC_Pre_Incubation.pdf",
  },
  {
    id: "github-foundations",
    title: "GitHub Foundations Certification",
    issuer: "GitHub",
    iconKey: "github",
    path: "/Certificates/githubcertificate.png",
  },
  {
    id: "wadhwani-ignite",
    title: "Ignite Bootcamp: Idea to Plan",
    issuer: "Wadhwani Foundation",
    iconKey: "lightbulb",
    path: "/Certificates/WADHWANI.pdf",
  },
  {
    id: "ide-bootcamp",
    title: "Innovation, Design & Entrepreneurship (IDE) Bootcamp",
    issuer: "AICTE, Ministry of Education & Wadhwani Foundation",
    iconKey: "compass",
    path: "/Certificates/IDE%20KAVYA.jpg",
  },
];
