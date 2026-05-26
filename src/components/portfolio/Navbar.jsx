import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Portfolio from "../components/portfolio/assets/CV.pdf";

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Portfolio', href: Portfolio },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''));
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.4 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={
        scrolled
          ? {
              background: 'rgba(255,255,255,0.92)',
              backdropFilter: 'blur(16px)',
              borderBottom: '1px solid hsl(260 15% 90%)',
              boxShadow: '0 2px 20px rgba(80,50,130,0.06)',
            }
          : { background: 'transparent' }
      }
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.04 }}
          className="font-space font-black text-xl text-foreground"
        >
          Portfolio
          <span style={{ color: 'hsl(263 52% 46%)' }}>.</span>
        </motion.a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <motion.a
                key={link.label}
                href={link.href}
                className="relative pb-1 text-sm transition-all duration-200"
                style={{
                  color: isActive ? 'hsl(240 15% 12%)' : 'hsl(240 8% 55%)',
                  fontWeight: isActive ? 600 : 400,
                }}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
                    style={{ background: 'hsl(263 52% 46%)' }}
                  />
                )}
              </motion.a>
            );
          })}

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04, boxShadow: '0 4px 18px hsl(263 52% 46% / 0.25)' }}
            whileTap={{ scale: 0.96 }}
            className="ml-3 px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, hsl(263 52% 46%), hsl(280 55% 52%))' }}
          >
            Hire Me
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          whileTap={{ scale: 0.88 }}
          className="md:hidden text-foreground w-9 h-9 flex items-center justify-center rounded-xl"
          style={{ border: '1px solid hsl(260 15% 90%)' }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? 'x' : 'menu'}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.18 }}
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden"
            style={{ background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(16px)', borderBottom: '1px solid hsl(260 15% 90%)' }}
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium transition-colors"
                  style={{ color: 'hsl(240 8% 48%)' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.06 }}
                className="mt-2 px-5 py-3 text-sm font-semibold text-white rounded-full text-center"
                style={{ background: 'linear-gradient(135deg, hsl(263 52% 46%), hsl(280 55% 52%))' }}
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}