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
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, skillIndex) => {
                    const skillName = typeof item === 'string' ? item : item.name;
                    
                    return (
                      <motion.span
                        key={skillName}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.1 + catIndex * 0.05 + skillIndex * 0.03 
                        }}
                        className="px-3 py-1.5 rounded-md text-sm font-mono border transition-all duration-300 hover:scale-105 cursor-default"
                        style={{
                          borderColor: `${category.color}40`,
                          color: category.color,
                          background: `${category.color}10`,
                        }}
                        whileHover={{
                          boxShadow: `0 0 15px ${category.color}30`,
                        }}
                      >
                        {skillName}
                      </motion.span>
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
