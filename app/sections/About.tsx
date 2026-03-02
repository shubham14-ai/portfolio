"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "../components/effects/Typewriter";
import { NeonCard } from "../components/effects/NeonCard";
import { GlitchText } from "../components/effects/GlitchText";
import { Terminal, Cpu, Database, Globe, Layers, Zap } from "lucide-react";
import { portfolioConfig } from "@/lib/content";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase mb-2 block">
            &lt;About /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="Who Am I" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Terminal Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <NeonCard className="p-6" glowColor="cyan">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-[#00f0ff]/20">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffaa00]" />
                  <div className="w-3 h-3 rounded-full bg-[#00ff9d]" />
                </div>
                <span className="ml-4 text-[#a0a0b0] font-mono text-sm">shubham@portfolio:~</span>
              </div>

              {/* Terminal Content */}
              <div className="font-mono text-sm space-y-4">
                <div className="text-[#00f0ff]">
                  <span className="text-[#ff00a0]">$</span> cat about.txt
                </div>
                <div className="text-[#a0a0b0] leading-relaxed">
                  {isInView && (
                    <Typewriter
                      text={portfolioConfig.personal.description}
                      speed={20}
                      delay={500}
                    />
                  )}
                </div>
                <div className="text-[#00f0ff] pt-2">
                  <span className="text-[#ff00a0]">$</span> ls expertise/
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {portfolioConfig.expertise.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: 2 + index * 0.1 }}
                      className="flex items-center gap-2 text-[#a0a0b0]"
                    >
                      <span className="text-[#00ff9d]">→</span>
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="text-[#00f0ff] pt-2">
                  <span className="text-[#ff00a0]">$</span>{" "}
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </NeonCard>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Terminal className="text-[#00f0ff]" />
              Technical Proficiency
            </h3>

            {portfolioConfig.skills.categories[0]?.items?.map((item, index) => {
              // Handle both string items and object items with levels
              const skill = typeof item === 'string' ? { name: item, level: 0 } : item;
              
              const iconMap = {
                "AI/ML Systems": Cpu,
                "FastAPI/Python": Zap,
                "React/Next.js": Globe,
                "Database Design": Database,
                "DevOps/Docker": Layers,
              };
              const iconKeys = Object.keys(iconMap);
              const fallbackIcons = [Cpu, Zap, Globe, Database, Layers];
              
              // Use a fallback icon based on index if no match is found
              const IconComponent = iconKeys.includes(skill.name) ? 
                iconMap[skill.name as keyof typeof iconMap] : 
                fallbackIcons[index % fallbackIcons.length];
              
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <IconComponent className="w-5 h-5" style={{ color: portfolioConfig.skills.categories[0].color }} />
                      <span className="text-white font-medium">{skill.name}</span>
                    </div>
                    {skill.level > 0 && (
                      <span className="text-[#a0a0b0] font-mono">{skill.level}%</span>
                    )}
                  </div>
                  {skill.level > 0 && (
                    <div className="h-2 bg-[#1a1a25] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.7 + index * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: `linear-gradient(90deg, ${portfolioConfig.skills.categories[0].color}, ${portfolioConfig.skills.categories[0].color}80)`,
                          boxShadow: `0 0 10px ${portfolioConfig.skills.categories[0].color}50`,
                        }}
                      >
                        <div 
                          className="absolute inset-0 opacity-50"
                          style={{
                            background: `linear-gradient(90deg, transparent, ${portfolioConfig.skills.categories[0].color}, transparent)`,
                            animation: "shimmer 2s infinite",
                          }}
                        />
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {portfolioConfig.personal.stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                  className="text-center p-4 rounded-lg border border-[#00f0ff]/20 bg-[#00f0ff]/5"
                >
                  <div className="text-2xl font-bold text-[#00f0ff] text-glow-cyan">{stat.value}</div>
                  <div className="text-xs text-[#a0a0b0] uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
