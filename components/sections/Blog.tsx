'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import GitHubFeed from '@/components/ui/GitHubFeed';

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="blog" className="section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-max px-4 md:px-6" ref={ref}>
        {/* Blog header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-mono mb-2" style={{ color: 'var(--primary)' }}>
            05. blog
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Latest Articles
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            Writing about ML, GPU architecture, and everything in between.
          </p>
        </motion.div>

        {/* Blog post cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl p-6 card-hover"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              <div className="flex flex-col gap-3 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-base leading-snug" style={{ color: 'var(--text)' }}>
                    {post.title}
                  </h3>
                  {post.comingSoon && (
                    <span
                      className="flex-shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: 'var(--primary)', color: '#000' }}
                    >
                      Coming Soon
                    </span>
                  )}
                </div>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'var(--muted)' }}>
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs"
                      style={{
                        background: 'var(--bg)',
                        border: '1px solid var(--border)',
                        color: 'var(--muted)',
                      }}
                    >
                      <Tag size={9} /> {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 mt-2">
                  <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                    <Clock size={11} /> {post.readTime}
                  </span>
                  {!post.comingSoon && (
                    <button
                      className="flex items-center gap-1 text-xs font-medium ml-auto"
                      style={{ color: 'var(--primary)' }}
                    >
                      Read <ArrowRight size={11} />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub Activity */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-center mb-10">
            <p className="text-sm font-mono mb-2" style={{ color: 'var(--primary)' }}>
              06. github
            </p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
              GitHub Activity
            </h2>
            <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
              Live from{' '}
              <a
                href="https://github.com/OmPrajapati2110"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--primary)' }}
              >
                @OmPrajapati2110
              </a>
            </p>
          </div>
          <GitHubFeed />
        </motion.div>
      </div>
    </section>
  );
}
