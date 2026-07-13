import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const FAVICON =
  "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Cdefs%3E%3ClinearGradient%20id='g'%20x1='0'%20y1='0'%20x2='1'%20y2='1'%3E%3Cstop%20offset='0'%20stop-color='%233b82f6'/%3E%3Cstop%20offset='0.55'%20stop-color='%23a78bfa'/%3E%3Cstop%20offset='1'%20stop-color='%2306b6d4'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect%20width='100'%20height='100'%20rx='26'%20fill='url(%23g)'/%3E%3Ctext%20x='50'%20y='66'%20font-family='Arial,sans-serif'%20font-size='42'%20font-weight='800'%20fill='white'%20text-anchor='middle'%3EKJ%3C/text%3E%3C/svg%3E";

export const metadata: Metadata = {
  title: "KavyaVerse | Kavya Joshi — AI Engineer & Software Developer",
  description:
    "An interactive 3D portfolio game exploring Kavya Joshi's journey as an AI Engineer, Full Stack Developer, and multi-time national hackathon champion (SIH 2025, DRDO Sampada, Breach FinTech).",
  icons: { icon: FAVICON },
  openGraph: {
    type: "website",
    title: "KavyaVerse | Kavya Joshi — AI Engineer & Software Developer",
    description:
      "Walk through KavyaVerse — an original gamified 3D portfolio telling the story of an AI Engineer, hackathon champion, and startup founder.",
    url: "https://kavyajoshi1.github.io/kavyaverse/",
  },
  twitter: {
    card: "summary",
    title: "KavyaVerse | Kavya Joshi",
    description: "An interactive 3D portfolio game — AI Engineer, Full Stack Developer, Hackathon Winner.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#060910",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full`}>
      <body className="h-full overflow-hidden bg-[#060910] font-body antialiased">
        <span className="sr-only" role="status">
          Loading KavyaVerse, an interactive 3D portfolio. Use W A S D to move, mouse to look around, Space to jump.
        </span>
        {children}
      </body>
    </html>
  );
}
