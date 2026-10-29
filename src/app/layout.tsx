import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { portfolio } from "@/data/portfolio";

const siteDescription =
  "Portfolio of Md Julfikar Ali, a frontend developer building responsive, accessible web experiences with React, Next.js, and Tailwind CSS.";

export const metadata: Metadata = {
  title: {
    default: `${portfolio.name} — ${portfolio.designation}`,
    template: `%s | ${portfolio.name}`,
  },
  description: siteDescription,
  applicationName: `${portfolio.name} Portfolio`,
  authors: [{ name: portfolio.name }],
  keywords: [
    "frontend developer",
    "React developer",
    "Next.js developer",
    "portfolio",
    "Bangladesh",
    portfolio.name,
  ],
  openGraph: {
    type: "website",
    siteName: `${portfolio.name} Portfolio`,
    locale: "en_US",
    title: `${portfolio.name} — ${portfolio.designation}`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — ${portfolio.designation}`,
    description: siteDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#080b14",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
