"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlitchText } from "../components/effects/GlitchText";
import { NeonCard } from "../components/effects/NeonCard";
import { portfolioConfig } from "@/lib/content";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase mb-2 block">
            &lt;Skills /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="Tech Arsenal" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {portfolioConfig.skills.categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
            >
              <NeonCard 
                className="p-6 h-full" 
                glowColor={category.color === "#00f0ff" ? "cyan" : category.color === "#00ff9d" ? "green" : category.color === "#ff00a0" ? "magenta" : "purple"}
              >
                <h3 
                  className="text-xl font-bold mb-6 flex items-center gap-2"
                  style={{ color: category.color }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: category.color }} />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1">
                        <span className="text-white text-sm">{skill.name}</span>
                        <span className="text-[#a0a0b0] text-sm font-mono">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-[#1a1a25] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut" 
                          }}
                          className="h-full rounded-full"
                          style={{ 
                            background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                            boxShadow: `0 0 10px ${category.color}50`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolioConfig.skills.additional.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.03 }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(0, 240, 255, 0.3)",
                }}
                className="px-4 py-2 rounded-lg border border-[#00f0ff]/20 bg-[#00f0ff]/5 text-[#a0a0b0] hover:text-white hover:border-[#00f0ff]/50 transition-all duration-300 cursor-default"
              >
                <span className="text-sm font-medium">{tech.name}</span>
                <span className="text-xs text-[#00f0ff]/60 ml-2">{tech.category}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16"
        >
          <NeonCard className="p-8" glowColor="cyan">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Typical Architecture Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Frontend Layer */}
              <div className="text-center">
                <div className="p-4 rounded-lg border border-[#00f0ff]/30 bg-[#00f0ff]/5 mb-3">
                  <h4 className="text-[#00f0ff] font-bold mb-2">Frontend</h4>
                  <p className="text-sm text-[#a0a0b0]">Next.js 15</p>
                  <p className="text-sm text-[#a0a0b0]">React + TypeScript</p>
                  <p className="text-sm text-[#a0a0b0]">Tailwind CSS</p>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-[#00f0ff] to-[#00ff9d] mx-auto" />
              </div>

              {/* API Layer */}
              <div className="text-center">
                <div className="p-4 rounded-lg border border-[#00ff9d]/30 bg-[#00ff9d]/5 mb-3">
                  <h4 className="text-[#00ff9d] font-bold mb-2">API Layer</h4>
                  <p className="text-sm text-[#a0a0b0]">FastAPI</p>
                  <p className="text-sm text-[#a0a0b0]">RESTful APIs</p>
                  <p className="text-sm text-[#a0a0b0]">WebSocket</p>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-[#00ff9d] to-[#7b2dff] mx-auto" />
              </div>

              {/* AI/ML Layer */}
              <div className="text-center">
                <div className="p-4 rounded-lg border border-[#7b2dff]/30 bg-[#7b2dff]/5 mb-3">
                  <h4 className="text-[#7b2dff] font-bold mb-2">AI/ML</h4>
                  <p className="text-sm text-[#a0a0b0]">LLM Integration</p>
                  <p className="text-sm text-[#a0a0b0]">RAG Pipeline</p>
                  <p className="text-sm text-[#a0a0b0]">Vector Search</p>
                </div>
                <div className="h-8 w-px bg-gradient-to-b from-[#7b2dff] to-[#ff00a0] mx-auto" />
              </div>

              {/* Data Layer */}
              <div className="text-center">
                <div className="p-4 rounded-lg border border-[#ff00a0]/30 bg-[#ff00a0]/5 mb-3">
                  <h4 className="text-[#ff00a0] font-bold mb-2">Data</h4>
                  <p className="text-sm text-[#a0a0b0]">PostgreSQL</p>
                  <p className="text-sm text-[#a0a0b0]">MongoDB</p>
                  <p className="text-sm text-[#a0a0b0]">Redis Cache</p>
                </div>
              </div>
            </div>

            {/* DevOps Bar */}
            <div className="mt-6 p-4 rounded-lg border border-[#00f0ff]/20 bg-[#00f0ff]/5 text-center">
              <span className="text-[#a0a0b0] text-sm">
                <span className="text-[#00f0ff] font-bold">DevOps:</span> Docker • Nginx • CI/CD • AWS • Celery
              </span>
            </div>
          </NeonCard>
        </motion.div>
      </div>
    </section>
  );
}
