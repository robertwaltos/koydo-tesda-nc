import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = "https://tesda-nc.koydo.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | Koydo TESDA NC",
    default: "Koydo TESDA NC — Exam Prep",
  },
  description: "TESDA NC exam preparation. Practice questions, mock tests, and AI-powered study tools. This app is a study aid based on publicly available syllabus and exam patterns. Not affiliated with any official examination authority.",
  authors: [{ name: "Koydo", url: "https://koydo.app" }],
  creator: "Koydo",
  publisher: "Koydo",
  category: "education",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#2563EB" />
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
