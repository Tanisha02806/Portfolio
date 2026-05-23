import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function FeaturedProject({ imageUrl }) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-border bg-secondary/50 mb-4">
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">Featured</span>
          </div>
          <h2 className="font-space font-bold text-3xl sm:text-4xl text-foreground">
            My Best Work
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-8 items-center"
        >
          {/* Image */}
          <div className="overflow-hidden rounded-3xl border border-border group cursor-pointer">
            <img
              src={imageUrl}
              alt="Featured project"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-space font-bold text-2xl text-foreground mb-4">
              We Have Small And Best
              <br />
              Project Collections
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-full hover:bg-secondary hover:border-primary/30 transition-all duration-300"
            >
              Explore <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}