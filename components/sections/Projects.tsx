'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Clock } from 'lucide-react';
import { Github } from '@/components/ui/icons';
import { PROJECTS } from '@/lib/constants';

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-max px-4 md:px-6" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono mb-2" style={{ color: 'var(--primary)' }}>
            03. projects
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Featured Projects
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Projects coming in August 2026. Building across ML, AI, GPU architecture, and systems.
          </p>
        </motion.div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`flex flex-col rounded-2xl p-6 card-hover ${
                project.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              {/* Project visual */}
              <div
                className={`w-full h-36 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden ${project.comingSoon ? 'shimmer' : ''}`}
                style={{ background: 'var(--border)' }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{ background: 'linear-gradient(135deg, var(--primary), var(--secondary))' }}
                />
                <span className="relative z-10 text-3xl">
                  {project.id === 'portfolio' ? '🌐' :
                   project.tags[0] === 'CUDA' || project.tags[0] === 'GPU' ? '⚡' :
                   project.tags[0] === 'Verilog' ? '🔧' :
                   project.tags[0] === 'RL' ? '🤖' :
                   project.tags[0] === 'Computer Vision' ? '👁️' : '🧠'}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-3 flex-1">
                {/* Title */}
                <h3 className="font-semibold text-base" style={{ color: 'var(--text)' }}>
                  {project.title}
                </h3>

                {/* Badges row — always visible, never overlapping */}
                <div className="flex flex-wrap gap-2">
                  {project.featured && (
                    <span
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{
                        background: 'rgba(59, 130, 246, 0.15)',
                        border: '1px solid rgba(59, 130, 246, 0.3)',
                        color: 'var(--secondary)',
                      }}
                    >
                      ⭐ Featured
                    </span>
                  )}
                  {project.comingSoon && (
                    <span
                      className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'var(--primary)', color: '#000' }}
                    >
                      <Clock size={10} />
                      Aug 2026
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md text-xs font-medium"
                      style={{
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        color: 'var(--muted)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {!project.comingSoon && (
                  <div className="flex gap-3 pt-1">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--primary)]"
                        style={{ color: 'var(--muted)' }}
                      >
                        <Github size={13} /> Code
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--primary)]"
                        style={{ color: 'var(--muted)' }}
                      >
                        <ExternalLink size={13} /> Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/OmPrajapati2110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:scale-105"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--text)',
              background: 'var(--surface)',
            }}
          >
            <Github size={16} style={{ color: 'var(--primary)' }} />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
