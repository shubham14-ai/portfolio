"use client";

import { motion } from "framer-motion";
import { Typewriter } from "../components/effects/Typewriter";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { ParticleBackground } from "../components/effects/ParticleBackground";
import { portfolioConfig } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <ParticleBackground />
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d15] to-[#0a0a0f]" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-[#a0a0b0] text-lg font-mono">
            <span className="text-[#00f0ff]">&gt;</span> Hello, I&apos;m
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-[#00f0ff] via-[#7b2dff] to-[#ff00a0] bg-clip-text text-transparent">
            {portfolioConfig.personal.name}
          </span>
        </motion.h1>

        {/* Role with typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="text-2xl sm:text-3xl md:text-4xl font-mono text-[#a0a0b0]">
            <Typewriter
              text={portfolioConfig.personal.role}
              delay={800}
              speed={60}
              className="text-[#00f0ff] text-glow-cyan"
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-[#a0a0b0] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {portfolioConfig.personal.summary}
        </motion.p>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {portfolioConfig.techStack.map((tech, index) => (
            <motion.span
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
              className="px-4 py-2 rounded-full text-sm font-mono border"
              style={{
                borderColor: `${tech.color}40`,
                color: tech.color,
                background: `${tech.color}10`,
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 20px ${tech.color}40`,
              }}
            >
              {tech.name}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            size="lg"
            className="bg-[#00f0ff] text-[#0a0a0f] hover:bg-[#00f0ff]/90 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            View Projects
            <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#ff00a0] text-[#ff00a0] hover:bg-[#ff00a0]/10 font-semibold px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,160,0.3)]"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {portfolioConfig.social.map((social, index) => {
            const IconComponent = social.icon === "Github" ? Github : social.icon === "Linkedin" ? Linkedin : Mail;
            return (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-[#00f0ff]/30 text-[#00f0ff] hover:bg-[#00f0ff]/10 transition-all duration-300"
                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(0, 240, 255, 0.4)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
                aria-label={social.name}
              >
                <IconComponent className="h-5 w-5" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-[#00f0ff]/50 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
