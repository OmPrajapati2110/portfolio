'use client';

import { motion } from 'framer-motion';
import { Mail, ArrowUp } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import { PERSONAL } from '@/lib/constants';

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer
      className="relative py-10 px-4"
      style={{ borderTop: '1px solid var(--border)', background: 'var(--surface)' }}
    >
      <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-xl font-bold" style={{ color: 'var(--primary)' }}>
            Om.
          </span>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            Built with Next.js, Three.js &amp; ☕
          </p>
          <p className="text-xs" style={{ color: 'var(--muted)' }}>
            © 2026 Om Suresh Prajapati. All rights reserved.
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-3">
          {[
            { href: PERSONAL.github, icon: Github, label: 'GitHub' },
            { href: PERSONAL.linkedin, icon: Linkedin, label: 'LinkedIn' },
            { href: `mailto:${PERSONAL.email}`, icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
              style={{
                border: '1px solid var(--border)',
                color: 'var(--muted)',
              }}
              whileHover={{
                scale: 1.1,
                color: 'var(--primary)',
                borderColor: 'var(--primary)',
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} />
            </motion.a>
          ))}
        </div>

        {/* Back to top */}
        <motion.button
          onClick={scrollToTop}
          className="w-9 h-9 rounded-lg flex items-center justify-center"
          style={{
            border: '1px solid var(--border)',
            color: 'var(--muted)',
            background: 'var(--surface)',
          }}
          whileHover={{
            scale: 1.1,
            y: -2,
            color: 'var(--primary)',
            borderColor: 'var(--primary)',
          }}
          whileTap={{ scale: 0.95 }}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
}
