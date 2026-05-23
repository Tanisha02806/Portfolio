import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, Github, X } from 'lucide-react';

const P = 'hsl(263 52% 46%)';

export default function ProjectCard({ project }) {
  const [tapped, setTapped] = useState(false);
  const cardRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 18 });
  const rotateX = useTransform(springY, [-80, 80], [5, -5]);
  const rotateY = useTransform(springX, [-80, 80], [-5, 5]);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const handleTap = useCallback((e) => {
    if (window.matchMedia('(hover: none)').matches) {
      if (tapped) {
        // Second tap — navigate to github
        window.open(project.githubUrl || project.liveUrl || '#', '_blank');
        setTapped(false);
      } else {
        e.preventDefault();
        setTapped(true);
      }
    } else {
      window.open(project.githubUrl || project.liveUrl || '#', '_blank');
    }
  }, [tapped, project]);

  return (
    <motion.div style={{ perspective: 900 }}>
      <motion.article
        ref={cardRef}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
          background: '#fff',
          border: '1px solid hsl(260 15% 90%)',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 2px 12px rgba(80,50,130,0.06)',
          cursor: 'pointer',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.015, boxShadow: '0 10px 32px rgba(80,50,130,0.12)', borderColor: 'hsl(263 52% 46% / 0.25)' }}
        transition={{ duration: 0.25 }}
        onClick={handleTap}
        aria-label={project.title}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ aspectRatio: '4/3' }}>
          <motion.img
            src={project.image}
            alt={`${project.title} preview`}
            loading="lazy"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{ background: 'linear-gradient(to top, rgba(20,10,40,0.88) 0%, rgba(20,10,40,0.2) 50%, transparent 100%)' }} />

          {/* Hover actions */}
          <div
            className={`absolute inset-0 flex flex-col justify-end p-4 transition-opacity duration-300 ${tapped ? 'opacity-100' : 'opacity-0'}`}
            style={{ background: 'linear-gradient(to top, rgba(20,10,40,0.88) 0%, rgba(20,10,40,0.2) 50%, transparent 100%)' }}
          >
            <div className="flex gap-1.5 flex-wrap mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] font-medium rounded-full"
                  style={{ background: 'hsl(263 52% 46% / 0.25)', border: '1px solid hsl(263 52% 46% / 0.4)', color: 'hsl(263 80% 88%)' }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href={project.liveUrl || '#'} onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors">
                <ExternalLink size={11} /> Live Demo
              </a>
              <a href={project.githubUrl || '#'} onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors">
                <Github size={11} /> Source
              </a>
            </div>
          </div>

          {/* Group hover overlay (desktop) */}
          <div className="group absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(to top, rgba(20,10,40,0.88) 0%, rgba(20,10,40,0.2) 50%, transparent 100%)' }}>
              <div className="flex gap-1.5 flex-wrap mb-3">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-full pointer-events-auto"
                    style={{ background: 'hsl(263 52% 46% / 0.25)', border: '1px solid hsl(263 52% 46% / 0.4)', color: 'hsl(263 80% 88%)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 pointer-events-auto">
                <a href={project.liveUrl || '#'} onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors">
                  <ExternalLink size={11} /> Live Demo
                </a>
                <a href={project.githubUrl || '#'} onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors">
                  <Github size={11} /> Source
                </a>
              </div>
            </div>
          </div>

          {/* Mobile close */}
          <AnimatePresence>
            {tapped && (
              <motion.button
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)' }}
                onClick={(e) => { e.stopPropagation(); setTapped(false); }}
              >
                <X size={12} />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Info */}
        <div className="px-4 py-4">
          <div className="h-px mb-3" style={{ background: 'linear-gradient(90deg, hsl(263 52% 46% / 0.15), transparent)' }} />
          <h3 className="font-space font-bold text-sm leading-tight mb-1 truncate transition-colors duration-200"
            style={{ color: 'hsl(240 15% 12%)' }}>
            {project.title}
          </h3>
          <p className="text-xs leading-relaxed line-clamp-2" style={{ color: 'hsl(240 8% 55%)' }}>
            {project.description}
          </p>
        </div>
      </motion.article>
    </motion.div>
  );
}