import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shubham Mojad - AI Systems & Full-Stack Engineer",
  description: "Portfolio of Shubham Mojad, AI Systems & Full-Stack Engineer specializing in FastAPI microservices, React/Next.js, and AI-driven applications.",
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