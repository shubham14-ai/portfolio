import "./globals.css";
import type { Metadata } from "next";
import { portfolioConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} - ${portfolioConfig.personal.role}`,
  description: portfolioConfig.personal.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0a0f] text-white">
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}