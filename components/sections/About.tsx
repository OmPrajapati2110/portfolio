'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { MapPin, GraduationCap, Briefcase, Mail } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import CurrentlyLearning from '@/components/ui/CurrentlyLearning';
import { PERSONAL } from '@/lib/constants';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="font-bold text-3xl" style={{ color: 'var(--primary)' }}>
      {count}{suffix}
    </span>
  );
}

function PhotoOrInitials() {
  const [showFallback, setShowFallback] = useState(false);

  return (
    <>
      {!showFallback && (
        <Image
          src={PERSONAL.photo}
          alt="Om Suresh Prajapati"
          fill
          className="object-cover object-center rounded-2xl"
          sizes="176px"
          onError={() => setShowFallback(true)}
          priority
        />
      )}
      {showFallback && (
        <span
          className="relative z-10 text-4xl font-bold"
          style={{
            background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          OP
        </span>
      )}
    </>
  );
}

const stats = [
  { label: 'Projects', value: 3, suffix: '+' },
  { label: 'Papers Read', value: 5, suffix: '+' },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-max px-4 md:px-6" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono mb-2" style={{ color: 'var(--primary)' }}>
            01. about
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Who Am I
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — avatar + info + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Avatar */}
            <div className="relative w-44 h-44 mx-auto lg:mx-0">
              {/* Glow ring */}
              <div
                className="absolute -inset-1 rounded-2xl opacity-60"
                style={{
                  background: 'linear-gradient(135deg, var(--primary), var(--secondary))',
                  filter: 'blur(8px)',
                }}
              />
              <div
                className="relative w-44 h-44 rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, #0A0F1E 0%, #1a2035 100%)',
                  border: '2px solid var(--primary)',
                }}
              >
                {/* Circuit pattern SVG background */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-20"
                  viewBox="0 0 176 176"
                  fill="none"
                >
                  <line x1="20" y1="0" x2="20" y2="176" stroke="var(--primary)" strokeWidth="0.5" />
                  <line x1="60" y1="0" x2="60" y2="176" stroke="var(--primary)" strokeWidth="0.5" />
                  <line x1="100" y1="0" x2="100" y2="176" stroke="var(--secondary)" strokeWidth="0.5" />
                  <line x1="140" y1="0" x2="140" y2="176" stroke="var(--primary)" strokeWidth="0.5" />
                  <line x1="0" y1="30" x2="176" y2="30" stroke="var(--secondary)" strokeWidth="0.5" />
                  <line x1="0" y1="80" x2="176" y2="80" stroke="var(--primary)" strokeWidth="0.5" />
                  <line x1="0" y1="130" x2="176" y2="130" stroke="var(--secondary)" strokeWidth="0.5" />
                  <circle cx="20" cy="30" r="3" fill="var(--primary)" />
                  <circle cx="60" cy="80" r="3" fill="var(--secondary)" />
                  <circle cx="100" cy="30" r="3" fill="var(--primary)" />
                  <circle cx="140" cy="130" r="3" fill="var(--secondary)" />
                  <circle cx="20" cy="130" r="3" fill="var(--primary)" />
                  <circle cx="100" cy="80" r="3" fill="var(--secondary)" />
                </svg>
                {/* Photo if available, otherwise initials */}
                <PhotoOrInitials />
              </div>
            </div>

            {/* Info chips */}
            <div className="flex flex-col gap-2">
              {[
                { icon: GraduationCap, text: `${PERSONAL.university} — ${PERSONAL.degree}` },
                { icon: MapPin, text: PERSONAL.location },
                { icon: Briefcase, text: `Open to work · ${PERSONAL.graduationDate}` },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-sm" style={{ color: 'var(--muted)' }}>
                  <Icon size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-3">
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
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{ border: '1px solid var(--border)', color: 'var(--muted)' }}
                  whileHover={{ borderColor: 'var(--primary)', color: 'var(--primary)', scale: 1.1 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map(({ label, value, suffix }) => (
                <div
                  key={label}
                  className="flex flex-col items-center gap-1 p-3 rounded-xl"
                  style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
                >
                  <AnimatedCounter target={value} suffix={suffix} />
                  <span className="text-xs text-center" style={{ color: 'var(--muted)' }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — bio + currently learning */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-4">
              {PERSONAL.bio.split('\n\n').map((para, i) => (
                <p key={i} className="text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Currently Learning */}
            <div>
              <p className="text-sm font-semibold mb-3 flex items-center gap-2" style={{ color: 'var(--text)' }}>
                <span>🎯</span> Currently Learning
              </p>
              <CurrentlyLearning />
            </div>

            {/* Interest tags */}
            <div>
              <p className="text-sm font-semibold mb-3" style={{ color: 'var(--text)' }}>
                Areas of Interest
              </p>
              <div className="flex flex-wrap gap-2">
                {['Machine Learning', 'Artificial Intelligence', 'GPU Architecture', 'Computer Architecture', 'Deep Learning', 'CUDA', 'Transformers', 'Computer Vision', 'NLP', 'Parallel Computing'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
