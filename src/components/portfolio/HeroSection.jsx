import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Send,
  CheckCircle2,
  Briefcase,
  ArrowRight
} from 'lucide-react';
import avatar from "./assets/Tanisha.jpeg";

const roles = ['UI/UX Designer', 'Web Developer', 'Product Designer'];

const P = 'hsl(263 52% 46%)';
const PG = 'linear-gradient(135deg, hsl(263 52% 46%), hsl(280 55% 52%))';

/** @param {{ avatarUrl: string }} props */
export default function HeroSection({ avatarUrl }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = /** @type {React.MutableRefObject<HTMLDivElement|null>} */ (useRef(null));

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 22 });
  const avatarX = useTransform(springX, [-400, 400], [-10, 10]);
  const avatarY = useTransform(springY, [-400, 400], [-10, 10]);

  useEffect(() => {
    /** @param {MouseEvent} e */
    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    /** @type {ReturnType<typeof setTimeout>|undefined} */
    let timeout;
    if (!isDeleting && displayText === currentRole) {
      timeout = setTimeout(() => setIsDeleting(true), 2400);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else if (isDeleting) {
      timeout = setTimeout(() => setDisplayText(currentRole.substring(0, displayText.length - 1)), 40);
    } else {
      timeout = setTimeout(() => setDisplayText(currentRole.substring(0, displayText.length + 1)), 80);
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Soft background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #fff 0%, hsl(260 50% 97%) 50%, #fff 100%)' }} />

      {/* Subtle blobs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[5%] right-[5%] w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(263 52% 46% / 0.08) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, hsl(280 55% 52% / 0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full py-10">
        {/* Left content */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } } }}
          className="order-2 lg:order-1"
        >
          {/* Status pill */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full"
            style={{ border: '1px solid hsl(263 52% 46% / 0.2)', background: 'hsl(260 50% 97%)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium tracking-wide" style={{ color: 'hsl(263 52% 46%)' }}>Available for Work</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.65 } } }}
            className="font-space font-black leading-[1.08] mb-3"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 4.2rem)', color: 'hsl(240 15% 12%)' }}
          >
            Tanisha{' '}
            <span style={{ backgroundImage: PG, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Thakur
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
            className="flex items-center gap-2 mb-5"
          >
            <span className="text-lg sm:text-xl font-inter font-light" style={{ color: 'hsl(240 8% 48%)' }}>
              I'm a&nbsp;
            </span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-lg sm:text-xl font-semibold"
                style={{ color: P }}
              >
                {displayText}
              </motion.span>
            </AnimatePresence>
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.55 }}
              className="inline-block w-[2px] h-5 rounded-full align-middle"
              style={{ background: P }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="text-sm leading-relaxed mb-8 max-w-[360px]"
            style={{ color: 'hsl(240 8% 50%)', lineHeight: '1.75' }}
          >
            I design and build digital experiences that people enjoy using. As a Web Developer and UI/UX Designer, I combine creativity with technical problem-solving to create interfaces that feel modern, intuitive, and purposeful. My work focuses on turning concepts into polished products through thoughtful design, clean development, and attention to detail. Whether it’s crafting user-centered experiences, developing responsive websites, or experimenting with new ideas, I’m always driven by the goal of building products that make an impact.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0 } }}
            className="flex flex-wrap items-center gap-3 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, boxShadow: '0 6px 22px hsl(263 52% 46% / 0.28)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold text-white transition-all duration-200"
              style={{ background: PG }}
            >
              View Projects <ArrowRight size={14} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, borderColor: 'hsl(263 52% 46% / 0.5)', color: P }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-3 border rounded-full text-sm font-medium transition-all duration-200"
              style={{ borderColor: 'hsl(260 15% 88%)', color: 'hsl(240 8% 40%)' }}
            >
              Contact Me
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
            className="flex items-center gap-2.5"
          >
            <span className="text-xs mr-1" style={{ color: 'hsl(240 8% 60%)' }}>Follow me</span>
            {[
              { Icon: Github, href: 'https://github.com/Tanisha02806', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/tanisha-thakur-6372912b3/', label: 'LinkedIn' },
              { Icon: Briefcase, href: 'https://www.behance.net/tanishathakur02', label: 'Behance' },
            ].map(({ Icon, href, label }, i) => (
              <motion.a
                key={i}
                href={href}
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2, boxShadow: '0 4px 14px hsl(263 52% 46% / 0.2)' }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                style={{
                  border: '1px solid hsl(260 15% 90%)',
                  background: '#fff',
                  color: 'hsl(240 8% 50%)',
                }}
              >
                <Icon size={14} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: 'easeOut' }}
          className="order-1 lg:order-2 flex justify-center"
          style={{ perspective: 1000 }}
        >
          <motion.div style={{ x: avatarX, y: avatarY }} className="relative">
            {/* Soft ring */}
            <div
              className="absolute inset-[-14px] rounded-full"
              style={{ background: 'radial-gradient(circle, hsl(263 52% 46% / 0.1) 0%, transparent 70%)' }}
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-10px] rounded-full"
              style={{ background: 'conic-gradient(from 0deg, transparent 0%, hsl(263 52% 46% / 0.2) 35%, transparent 65%, hsl(280 55% 52% / 0.15) 80%, transparent 100%)' }}
            />

            {/* Avatar */}
            <div
              className="w-60 h-60 sm:w-72 sm:h-72 lg:w-[300px] lg:h-[300px] rounded-full relative z-10 overflow-hidden"
              style={{
                border: '2px solid hsl(263 52% 46% / 0.18)',
                background: 'hsl(260 50% 97%)',
                boxShadow: '0 20px 60px hsl(263 52% 46% / 0.12)',
              }}
            >
              <img src={avatar} alt="Tanisha Thakur" className="w-full h-full object-cover"/>
            </div>

            {/* Floating badge - Available */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -right-6 top-10 z-20 rounded-2xl px-3.5 py-2.5"
              style={{ background: '#fff', border: '1px solid hsl(260 15% 90%)', boxShadow: '0 8px 24px rgba(80,50,130,0.1)' }}
            >
              <p className="text-[10px]" style={{ color: 'hsl(240 8% 60%)' }}>Available for</p>
              <p className="text-sm font-bold font-space" style={{ color: P }}>Freelance</p>
            </motion.div>

            {/* Floating badge - Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 120 }}
              whileHover={{ scale: 1.05 }}
              className="absolute -left-6 bottom-10 z-20 rounded-2xl px-3.5 py-2.5"
              style={{ background: '#fff', border: '1px solid hsl(260 15% 90%)', boxShadow: '0 8px 24px rgba(80,50,130,0.1)' }}
            >
              <p className="text-[10px]" style={{ color: 'hsl(240 8% 60%)' }}>Experience</p>
              <p className="text-sm font-bold font-space" style={{ color: 'hsl(240 15% 12%)' }}>Fresher</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase" style={{ color: 'hsl(240 8% 65%)' }}>Scroll</span>
        <div className="w-[18px] h-7 rounded-full flex items-start justify-center pt-1.5" style={{ border: '1px solid hsl(260 15% 85%)' }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
            className="w-[3px] h-[5px] rounded-full"
            style={{ background: P }}
          />
        </div>
      </motion.div>
    </section>
  );
}