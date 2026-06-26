import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoFlow | Premium AI Data Automation SaaS",
  description: "Automate complex data pipelines, unstructured file extraction, and CRM syncing with self-healing agentic AI models. Real-time observability down to the millisecond.",
  keywords: ["AI automation", "data engineering", "LLM extraction", "agentic workflows", "Snowflake connector", "SaaS pipeline"],
  authors: [{ name: "AutoFlow Team" }],
  openGraph: {
    title: "AutoFlow | Premium AI Data Automation SaaS",
    description: "Automate data workflows, messy invoice/PDF parsing, and multi-endpoint synchronization with self-healing agentic AI.",
    type: "website",
    locale: "en_US",
    url: "https://autoflow.ai",
    siteName: "AutoFlow",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoFlow | Premium AI Data Automation SaaS",
    description: "Automate data workflows, messy invoice/PDF parsing, and multi-endpoint synchronization with self-healing agentic AI.",
    creator: "@autoflow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-full flex flex-col bg-gray-950 text-gray-50 font-sans">
        {children}
      </body>
    </html>
  );
}
