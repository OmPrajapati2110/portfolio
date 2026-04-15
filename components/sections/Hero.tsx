'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { Download, Code2, ChevronDown, Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import TypewriterText from '@/components/ui/TypewriterText';
import HeroImageSlideshow from '@/components/ui/HeroImageSlideshow';
import { PERSONAL } from '@/lib/constants';

// Dynamically import heavy 3D/canvas components to avoid SSR issues
const NeuralNetworkCanvas = dynamic(
  () => import('@/components/ui/NeuralNetworkCanvas'),
  { ssr: false }
);
const ParticleField = dynamic(
  () => import('@/components/ui/ParticleField'),
  { ssr: false }
);
const GPU3D = dynamic(
  () => import('@/components/ui/GPU3D'),
  { ssr: false }
);

const socialLinks = [
  { href: PERSONAL.github, icon: Github, label: 'GitHub' },
  { href: PERSONAL.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: `mailto:${PERSONAL.email}`, icon: Mail, label: 'Email' },
];

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background layers */}
      <HeroImageSlideshow />
      <NeuralNetworkCanvas />
      <ParticleField />

      {/* Gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--bg) 100%)',
        }}
      />

      {/* Main content */}
      <div className="container-max relative z-10 px-4 md:px-6 pt-20 pb-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[80vh]">
          {/* Left — text content */}
          <div className="flex flex-col gap-6">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 w-fit"
            >
              <span
                className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(245, 158, 11, 0.1)',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  color: 'var(--primary)',
                }}
              >
                <span className="w-2 h-2 rounded-full bg-amber-400 pulse-dot" />
                Available from December 2026 · Los Angeles, CA
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-base font-mono"
              style={{ color: 'var(--muted)' }}
            >
              Hi there, I&apos;m 👋
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight"
              style={{ color: 'var(--text)' }}
            >
              Om Suresh
              <br />
              <span className="gradient-text text-glow-amber">Prajapati</span>
            </motion.h1>

            {/* Typewriter roles */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg sm:text-xl font-mono h-8 flex items-center gap-2"
              style={{ color: 'var(--muted)' }}
            >
              <span>&gt;</span>
              <TypewriterText />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base md:text-lg max-w-lg leading-relaxed"
              style={{ color: 'var(--muted)' }}
            >
              {PERSONAL.tagline}
              <br />
              <span className="text-sm">
                M.S. Electrical Engineering · USC · Graduating Dec 2026
              </span>
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <motion.button
                onClick={scrollToProjects}
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                style={{
                  background: 'var(--primary)',
                  color: '#000',
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 0 25px var(--primary-glow)' }}
                whileTap={{ scale: 0.97 }}
              >
                <Code2 size={16} />
                View Projects
              </motion.button>

              <motion.a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all"
                style={{
                  border: '1px solid var(--primary)',
                  color: 'var(--primary)',
                  background: 'transparent',
                }}
                whileHover={{
                  scale: 1.05,
                  background: 'rgba(245, 158, 11, 0.1)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Resume
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-3"
            >
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
                  style={{
                    border: '1px solid var(--border)',
                    color: 'var(--muted)',
                    background: 'var(--surface)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: 'var(--primary)',
                    color: 'var(--primary)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right — 3D GPU */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center"
            style={{ height: '500px' }}
          >
            <GPU3D />
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer"
          style={{ color: 'var(--muted)' }}
          whileHover={{ color: 'var(--primary)' }}
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
