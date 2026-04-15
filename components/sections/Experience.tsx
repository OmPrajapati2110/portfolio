'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';
import { TIMELINE } from '@/lib/constants';

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
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
            04. experience
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Education & Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px origin-top"
            style={{
              background: 'linear-gradient(to bottom, var(--primary), var(--secondary))',
              transform: 'translateX(-50%)',
            }}
          />

          {TIMELINE.map((item, i) => {
            const isLeft = i % 2 === 0;
            const Icon = item.type === 'education' ? GraduationCap : Briefcase;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2 + 0.4 }}
                className={`relative flex gap-6 md:gap-0 mb-12 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div
                  className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full border-2 z-10 flex-shrink-0"
                  style={{
                    background: 'var(--bg)',
                    borderColor: 'var(--primary)',
                    transform: 'translate(-50%, 6px)',
                    boxShadow: '0 0 12px var(--primary-glow)',
                  }}
                />

                {/* Spacer for opposite side on desktop */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-1/2 p-5 rounded-2xl ${
                    isLeft ? 'md:pr-10' : 'md:pl-10'
                  }`}
                >
                  <div
                    className="p-5 rounded-xl card-hover"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {/* Icon + type */}
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: 'rgba(245, 158, 11, 0.15)' }}
                      >
                        <Icon size={14} style={{ color: 'var(--primary)' }} />
                      </div>
                      <span
                        className="text-xs font-medium capitalize"
                        style={{ color: 'var(--primary)' }}
                      >
                        {item.type}
                      </span>
                    </div>

                    <h3 className="font-bold text-base mb-1" style={{ color: 'var(--text)' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium mb-2" style={{ color: 'var(--muted)' }}>
                      {item.organization}
                    </p>

                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                        <MapPin size={11} /> {item.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                        <Calendar size={11} /> {item.startDate} – {item.endDate}
                      </span>
                    </div>

                    <ul className="space-y-1">
                      {item.description.map((d, di) => (
                        <li
                          key={di}
                          className="text-sm leading-relaxed flex gap-2"
                          style={{ color: 'var(--muted)' }}
                        >
                          <span style={{ color: 'var(--primary)', flexShrink: 0 }}>▸</span>
                          {d}
                        </li>
                      ))}
                    </ul>

                    {item.tags && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-xs"
                            style={{
                              background: 'var(--surface)',
                              border: '1px solid var(--border)',
                              color: 'var(--muted)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
