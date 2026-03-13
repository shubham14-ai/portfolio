"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { NeonCard } from "../components/effects/NeonCard";
import { GlitchText } from "../components/effects/GlitchText";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Bot, Code2, Layers, Cpu, Zap, Shield, TrendingUp, Database, Brain } from "lucide-react";
import { portfolioConfig } from "@/lib/content";

const agentIcons = {
  single: Bot,
  "multi-agent": Layers,
};

export function AIAgents() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-agents" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-[#0d0d15]/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#00f0ff] font-mono text-sm tracking-wider uppercase mb-2 block">
            &lt;AI Agents /&gt;
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="AI Agent Systems" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full mb-6" />
          <p className="text-[#a0a0b0] max-w-3xl mx-auto">
            AI Agent Systems & Experimental AI Architectures
          </p>
          <p className="text-[#a0a0b0] text-sm max-w-2xl mx-auto mt-2">
            Experimental AI engineering projects focused on autonomous agents, collaborative reasoning systems, and real-time data intelligence pipelines.
          </p>
        </motion.div>

        {/* AI Agent Systems Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioConfig.aiAgentSystems.map((system, index) => {
            const IconComponent = agentIcons[system.type as keyof typeof agentIcons] || Bot;
            
            return (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <NeonCard
                  className="h-full flex flex-col p-6"
                  glowColor={system.color === "#00f0ff" ? "cyan" : system.color === "#ff00a0" ? "magenta" : "purple"}
                  hoverScale={1.03}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="p-3 rounded-lg flex items-center gap-3"
                      style={{ background: `${system.color}20` }}
                    >
                      <IconComponent className="w-6 h-6" style={{ color: system.color }} />
                      <Badge 
                        className={`${
                          system.type === "multi-agent" 
                            ? "bg-[#ff00a0]/20 text-[#ff00a0] border-[#ff00a0]/50" 
                            : "bg-[#00f0ff]/20 text-[#00f0ff] border-[#00f0ff]/50"
                        }`}
                      >
                        {system.type === "multi-agent" ? (
                          <>
                            <Layers className="w-3 h-3 mr-1" />
                            Multi-Agent ({system.agents})
                          </>
                        ) : (
                          <>
                            <Bot className="w-3 h-3 mr-1" />
                            Single Agent
                          </>
                        )}
                      </Badge>
                    </div>
                    <Badge 
                      className={`${
                        system.status === "Completed"
                          ? "bg-[#00ff9d]/20 text-[#00ff9d] border-[#00ff9d]/50"
                          : "bg-[#7b2dff]/20 text-[#7b2dff] border-[#7b2dff]/50"
                      }`}
                    >
                      {system.status}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#00f0ff] transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-[#a0a0b0] text-sm mb-4 leading-relaxed">
                    {system.description}
                  </p>

                  {/* Highlights */}
                  {system.highlights && (
                    <div className="mb-4 space-y-2">
                      {system.highlights.map((highlight: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-[#a0a0b0]">
                          <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: system.color }} />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Features for multi-agent systems */}
                  {system.features && (
                    <div className="mb-4 space-y-2">
                      {system.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-[#a0a0b0]">
                          <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: system.color }} />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {system.tech.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 rounded bg-[#1a1a25] text-[#a0a0b0] border border-[#00f0ff]/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {system.tech.length > 5 && (
                      <span className="text-xs px-2 py-1 rounded bg-[#1a1a25] text-[#a0a0b0]">
                        +{system.tech.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Agent Architecture Visualization */}
                  {system.type === "multi-agent" && (
                    <div className="pt-4 border-t border-[#00f0ff]/10">
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="text-center p-2 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                          <Database className="w-4 h-4 mx-auto mb-1" style={{ color: system.color }} />
                          <span className="text-xs text-[#a0a0b0]">Data</span>
                        </div>
                        <div className="text-center p-2 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                          <Brain className="w-4 h-4 mx-auto mb-1" style={{ color: system.color }} />
                          <span className="text-xs text-[#a0a0b0]">ML</span>
                        </div>
                        <div className="text-center p-2 rounded bg-[#00f0ff]/10 border border-[#00f0ff]/20">
                          <Shield className="w-4 h-4 mx-auto mb-1" style={{ color: system.color }} />
                          <span className="text-xs text-[#a0a0b0]">Risk</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[#a0a0b0]">
                        <span className="flex items-center gap-1">
                          <Cpu className="w-3 h-3" />
                          {system.agents} Agents
                        </span>
                        <span className="flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          Real-time
                        </span>
                      </div>
                    </div>
                  )}
                </NeonCard>
              </motion.div>
            );}
          )}
        </div>
      </div>
    </section>
  );
}
