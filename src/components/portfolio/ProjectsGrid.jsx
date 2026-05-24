import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const P = 'hsl(263 52% 46%)';
const filters = ['All', 'UI/UX', 'Web'];
/** @type {Record<string, string[]>} */
const tagMap = {
  Web: ['React', 'Next.js', 'Vue.js', 'React Native', 'Flutter'],
  Design: ['Figma'],
};

/**
 * @param {{
 * projects: Array<{
 * id: string|number,
 * tags: string[]
 * }>
 * }} props
 */
export default function ProjectsGrid({ projects }) {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? projects
      : projects.filter(/** @param {{tags:string[]}} p */(p) => p.tags.some((t) => (tagMap[active] || []).includes(t)));

  return (
    <section id="projects" className="py-20 relative overflow-hidden" style={{ background: '#fff' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-10"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 text-xs font-medium tracking-wide"
            style={{ border: '1px solid hsl(263 52% 46% / 0.2)', background: 'hsl(260 50% 97%)', color: P }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: P }} />
            Portfolio
          </div>
          <h2 className="font-space font-black text-3xl sm:text-4xl mb-2" style={{ color: 'hsl(240 15% 12%)' }}>
            Selected{' '}
            <span style={{ backgroundImage: 'linear-gradient(135deg, hsl(263 52% 46%), hsl(280 55% 52%))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Projects
            </span>
          </h2>
          <p className="text-sm max-w-xs mx-auto" style={{ color: 'hsl(240 8% 52%)' }}>
            A curated selection of work — hover to explore
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 flex-wrap mb-10"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative px-5 py-2 rounded-full text-xs font-semibold border transition-all duration-250 overflow-hidden"
              style={
                active === f
                  ? {
                      background: 'linear-gradient(135deg, hsl(263 52% 46%), hsl(280 55% 52%))',
                      borderColor: 'transparent',
                      color: '#fff',
                      boxShadow: '0 4px 16px hsl(263 52% 46% / 0.25)',
                    }
                  : {
                      background: '#fff',
                      borderColor: 'hsl(260 15% 90%)',
                      color: 'hsl(240 8% 50%)',
                    }
              }
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map(/** @param {{id:string|number}} project *//** @param {number} i */(project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 16 }}
                transition={{ duration: 0.35, delay: i * 0.05, ease: 'easeOut' }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm mt-10"
            style={{ color: 'hsl(240 8% 55%)' }}
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
}