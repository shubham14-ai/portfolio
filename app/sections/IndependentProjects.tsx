"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NeonCard } from "../components/effects/NeonCard";
import { GlitchText } from "../components/effects/GlitchText";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Bot, Code2, Layers } from "lucide-react";
import { portfolioConfig } from "@/lib/content";

export function IndependentProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="independent-projects" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d15]/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase mb-2 block">
            &lt;Independent Projects /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="Selected SaaS Platforms Built" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full mb-6" />
          <p className="text-[#a0a0b0] max-w-2xl mx-auto">
            Pre-employment and personal SaaS products developed before joining full-time roles.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.independentProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * index }}
            >
              <NeonCard
                className="h-full flex flex-col p-6"
                glowColor={project.color === "#00f0ff" ? "cyan" : project.color === "#ff00a0" ? "magenta" : project.color === "#7b2dff" ? "purple" : "green"}
                hoverScale={1.03}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="p-3 rounded-lg"
                    style={{ background: `${project.color}20` }}
                  >
                    {project.icon === "Bot" ? (
                      <Bot className="w-6 h-6" style={{ color: project.color }} />
                    ) : project.icon === "Sparkles" ? (
                      <Sparkles className="w-6 h-6" style={{ color: project.color }} />
                    ) : project.icon === "Layers" ? (
                      <Layers className="w-6 h-6" style={{ color: project.color }} />
                    ) : (
                      <Code2 className="w-6 h-6" style={{ color: project.color }} />
                    )}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[#a0a0b0] text-sm mb-4 flex-grow leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded bg-[#1a1a25] text-[#a0a0b0] border border-[#00f0ff]/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="text-xs px-2 py-1 rounded bg-[#1a1a25] text-[#a0a0b0]">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Status */}
                <div className="pt-4 border-t border-[#00f0ff]/10">
                  <span className="text-xs text-[#a0a0b0] italic">Completed Project</span>
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
