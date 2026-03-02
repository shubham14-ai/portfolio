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
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <GlitchText text="Technologies" className="text-white" as="span" />
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00f0ff] to-[#ff00a0] mx-auto rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {portfolioConfig.skills.categories.filter(category => category.title !== "Technical Proficiency").map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * catIndex }}
            >
              <NeonCard 
                className="p-6 h-full" 
                glowColor="gray"
              >
                <h3 
                  className="text-xl font-bold mb-6 flex items-center gap-2"
                  style={{ color: category.color }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ background: category.color }} />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, skillIndex) => {
                    // Check if item is an object with name and level or just a string
                    const skillName = typeof item === 'string' ? item : item.name;
                    const skillLevel = typeof item === 'string' ? 0 : item.level;
                    
                    return (
                      <div key={skillName}>
                        <div className="flex justify-between mb-1">
                          <span className="text-white text-sm">{skillName}</span>
                          {typeof item !== 'string' && (
                            <span className="text-[#a0a0b0] text-sm font-mono">{skillLevel}%</span>
                          )}
                        </div>
                        {typeof item !== 'string' && (
                          <div className="h-2 bg-[#1a1a25] rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skillLevel}%` } : {}}
                              transition={{ 
                                duration: 1, 
                                delay: 0.3 + catIndex * 0.1 + skillIndex * 0.05,
                                ease: "easeOut" 
                              }}
                              className="h-full rounded-full"
                              style={{ 
                                background: `linear-gradient(90deg, #4a5568, #718096)`,
                                boxShadow: `0 0 8px #4a556840`,
                              }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </NeonCard>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
