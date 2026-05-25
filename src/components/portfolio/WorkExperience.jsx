import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, TrendingUp, Users, Award, Layers } from 'lucide-react';

const P = 'hsl(263 52% 46%)';
const PG = 'linear-gradient(135deg, hsl(263 52% 46%), hsl(280 55% 52%))';

const highlights = [
  { icon: TrendingUp, text: 'Improved website responsiveness and performance' },
  { icon: Users, text: 'Developed and maintained web application features' },
  { icon: Award, text: 'Collaborated with cross-functional teams and stakeholders' },
  { icon: Layers, text: 'Delivered scalable and user-friendly web solutions' },
];

const stats = [
  { value: '3+', label: 'Projects Delivered' },
  { value: '1', label: 'Industry Internship' },
  { value: '10+', label: 'Technologies Explored' },
  { value: '3+', label: 'Domains Explored (Web Dev • UI/UX • AI)' },
];

export default function WorkExperience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden" style={{ background: 'hsl(260 50% 97%)' }}>
      {/* Divider top */}
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(263 52% 46% / 0.15), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-4 text-xs font-medium tracking-wide"
            style={{ border: '1px solid hsl(263 52% 46% / 0.2)', background: '#fff', color: P }}
          >
            <Briefcase size={11} /> Experience
          </div>
          <h2 className="font-space font-black text-3xl sm:text-4xl" style={{ color: 'hsl(240 15% 12%)' }}>
            Work{' '}
            <span style={{ backgroundImage: PG, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Experience
            </span>
          </h2>
          <p className="mt-2 text-sm" style={{ color: 'hsl(240 8% 52%)' }}>My professional journey so far</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-5 items-start">
          {/* Experience card — 3 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-2xl p-7 h-full"
              style={{
                background: '#fff',
                border: '1px solid hsl(260 15% 90%)',
                boxShadow: '0 4px 24px rgba(80,50,130,0.05)',
              }}
            >
              {/* Role header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: 'hsl(260 50% 97%)', border: '1px solid hsl(263 52% 46% / 0.15)' }}>
                    <Briefcase size={15} style={{ color: P }} />
                  </div>
                  <div>
                    <h3 className="font-space font-bold text-lg leading-tight" style={{ color: 'hsl(240 15% 12%)' }}>Web Developer Intern</h3>
                    <div className="flex items-center gap-1 mt-0.5">
                      <MapPin size={10} style={{ color: P }} />
                      <span className="text-xs" style={{ color: 'hsl(240 8% 52%)' }}>Shashwat Implants & Surgical Care · India</span>
                    </div>
                  </div>
                </div>
                <div
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium self-start shrink-0"
                  style={{ background: 'hsl(140 60% 95%)', border: '1px solid hsl(140 60% 80%)', color: 'hsl(140 50% 35%)' }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Jan 2025 – Jul 2025
                </div>
              </div>

              <div className="h-px mb-5" style={{ background: 'hsl(260 15% 93%)' }} />

              <p className="text-sm leading-relaxed mb-6" style={{ color: 'hsl(240 8% 50%)', lineHeight: '1.75' }}>
                Contributed to the development and maintenance of responsive web applications for healthcare operations. Built and optimized user interfaces, improved website performance, and collaborated with teams to create efficient and user-friendly digital solutions for internal and client-facing platforms.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {highlights.map(({ icon: Icon, text }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 * i }}
                    className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl"
                    style={{ background: 'hsl(260 50% 97%)', border: '1px solid hsl(260 15% 92%)' }}
                  >
                    <div className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: 'hsl(263 52% 46% / 0.08)' }}>
                      <Icon size={12} style={{ color: P }} />
                    </div>
                    <p className="text-xs" style={{ color: 'hsl(240 8% 45%)' }}>{text}</p>
                  </motion.div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {['HTML', 'Tailwind CSS', 'JavaScript', 'React', 'UI Development', 'Responsive Design', 'API Integration', 'Git', 'Node.js', 'MongoDB', 'Data Management'].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.04 * i }}
                    className="px-3 py-1 text-xs font-medium rounded-full cursor-default"
                    style={{
                      background: 'hsl(263 52% 46% / 0.07)',
                      border: '1px solid hsl(263 52% 46% / 0.15)',
                      color: P,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats — stacked column */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            {stats.map(({ value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i, duration: 0.45 }}
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(80,50,130,0.1)' }}
                className="px-6 py-5 rounded-2xl transition-all duration-250 cursor-default"
                style={{ background: '#fff', border: '1px solid hsl(260 15% 90%)' }}
              >
                <p className="font-space font-black text-3xl mb-1"
                  style={{ backgroundImage: PG, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  {value}
                </p>
                <p className="text-xs" style={{ color: 'hsl(240 8% 52%)' }}>{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Divider bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, hsl(263 52% 46% / 0.15), transparent)' }} />
    </section>
  );
}