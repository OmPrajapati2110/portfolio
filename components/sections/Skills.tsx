'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS } from '@/lib/constants';

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium" style={{ color: 'var(--text)' }}>
          {name}
        </span>
        <span className="text-xs font-mono" style={{ color: 'var(--primary)' }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1.5 rounded-full overflow-hidden"
        style={{ background: 'var(--border)' }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, var(--primary) 0%, var(--secondary) 100%)',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      className="section-padding"
      style={{ background: 'var(--surface)' }}
    >
      <div className="container-max px-4 md:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono mb-2" style={{ color: 'var(--primary)' }}>
            02. skills
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Technical Skills
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Spanning ML/AI research, GPU architecture, and full-stack engineering.
          </p>
        </motion.div>

        {/* Skill groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILLS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.1 }}
              className="p-6 rounded-2xl card-hover"
              style={{
                background: 'var(--bg)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Group header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-semibold text-base" style={{ color: 'var(--text)' }}>
                  {group.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={gi * 0.1 + si * 0.05}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
