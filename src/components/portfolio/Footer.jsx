import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, Send, CheckCircle2 } from 'lucide-react';

const P = 'hsl(263 52% 46%)';
const PG = 'linear-gradient(135deg, hsl(263 52% 46%), hsl(280 55% 52%))';
const socials = [
  { Icon: Github, href: '#', label: 'GitHub' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      window.location.href = `mailto:tanishaselfthakur@gmail.com?subject=Hello Tanisha&body=From: ${email}`;
      setEmail('');
    }
  };

  return (
    <footer id="contact" className="relative overflow-hidden" style={{ background: 'hsl(260 50% 97%)', borderTop: '1px solid hsl(260 15% 90%)' }}>
      {/* Top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, hsl(263 52% 46% / 0.2), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-space font-black text-xl mb-2" style={{ color: 'hsl(240 15% 12%)' }}>
              Tanisha<span style={{ color: P }}>.</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs" style={{ color: 'hsl(240 8% 52%)', lineHeight: '1.75' }}>
              UI/UX Designer crafting meaningful digital products. Open to freelance and full-time opportunities.
            </p>
            <div className="flex gap-2.5">
              {socials.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2, boxShadow: '0 6px 16px hsl(263 52% 46% / 0.18)' }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: '#fff', border: '1px solid hsl(260 15% 90%)', color: 'hsl(240 8% 50%)' }}
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <h4 className="font-space font-bold text-sm mb-5 uppercase tracking-wider" style={{ color: 'hsl(240 15% 35%)' }}>
              Get In Touch
            </h4>
            <motion.a
              href="mailto:tanishaselfthakur@gmail.com"
              whileHover={{ x: 3 }}
              className="inline-flex items-center gap-2 text-sm mb-4 transition-colors"
              style={{ color: 'hsl(240 8% 50%)' }}
            >
              <Mail size={13} style={{ color: P }} />
              tanishaselfthakur@gmail.com
            </motion.a>
            <p className="text-xs mb-5 leading-relaxed" style={{ color: 'hsl(240 8% 58%)', lineHeight: '1.7' }}>
              Available for freelance projects and full-time roles. Feel free to reach out anytime.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                style={{ background: 'hsl(140 50% 95%)', border: '1px solid hsl(140 50% 82%)', color: 'hsl(140 45% 35%)' }}
              >
                <CheckCircle2 size={14} />
                Opening your email app... talk soon! ✨
              </motion.div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 min-w-0 px-4 py-2.5 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none transition-all duration-200"
                  style={{
                    background: '#fff',
                    border: '1px solid hsl(260 15% 88%)',
                    color: 'hsl(240 15% 12%)',
                  }}
                  onFocus={(e) => { e.target.style.borderColor = 'hsl(263 52% 46% / 0.5)'; e.target.style.boxShadow = '0 0 0 3px hsl(263 52% 46% / 0.08)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'hsl(260 15% 88%)'; e.target.style.boxShadow = 'none'; }}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.06, boxShadow: '0 4px 16px hsl(263 52% 46% / 0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-xl text-white shrink-0 transition-all"
                  style={{ background: PG }}
                >
                  <Send size={14} />
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-2"
          style={{ borderTop: '1px solid hsl(260 15% 90%)' }}>
          <p className="text-xs" style={{ color: 'hsl(240 8% 62%)' }}>
            {`© ${new Date().getFullYear()} Tanisha Thakur. All Rights Reserved.`}
          </p>
          <p className="text-xs" style={{ color: 'hsl(240 8% 62%)' }}>
            Designed with passion 💜
          </p>
        </div>
      </div>
    </footer>
  );
}