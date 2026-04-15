'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { Github } from '@/components/ui/icons';
import type { GitHubRepo } from '@/types';

export default function GitHubFeed() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/github')
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setRepos(data.slice(0, 6));
        else setError(true);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  const langColors: Record<string, string> = {
    Python: '#3776AB',
    TypeScript: '#3178C6',
    JavaScript: '#F7DF1E',
    C: '#A8B9CC',
    'C++': '#00599C',
    Jupyter: '#F37626',
    Verilog: '#B2B7F8',
  };

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="h-36 rounded-xl shimmer"
            style={{ border: '1px solid var(--border)' }}
          />
        ))}
      </div>
    );
  }

  if (error || repos.length === 0) {
    return (
      <div
        className="text-center py-12 rounded-2xl"
        style={{ border: '1px solid var(--border)', background: 'var(--surface)' }}
      >
        <Github size={32} className="mx-auto mb-3" style={{ color: 'var(--muted)' }} />
        <p style={{ color: 'var(--muted)' }}>
          Visit{' '}
          <a
            href="https://github.com/OmPrajapati2110"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--primary)' }}
          >
            github.com/OmPrajapati2110
          </a>{' '}
          to see repositories.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {repos.map((repo, i) => (
        <motion.a
          key={repo.name}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          className="flex flex-col gap-3 p-4 rounded-xl card-hover"
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--border)',
            textDecoration: 'none',
          }}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <Github size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              <span className="text-sm font-semibold truncate" style={{ color: 'var(--text)' }}>
                {repo.name}
              </span>
            </div>
            <ExternalLink size={12} style={{ color: 'var(--muted)', flexShrink: 0 }} />
          </div>

          <p
            className="text-xs leading-relaxed flex-1 line-clamp-2"
            style={{ color: 'var(--muted)' }}
          >
            {repo.description || 'No description provided.'}
          </p>

          <div className="flex items-center gap-4">
            {repo.language && (
              <span className="flex items-center gap-1.5 text-xs" style={{ color: 'var(--muted)' }}>
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ background: langColors[repo.language] || '#888' }}
                />
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
              <Star size={11} /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
              <GitFork size={11} /> {repo.forks_count}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
