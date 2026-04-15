import Link from 'next/link';
import { Clock, Tag, ArrowLeft } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';

export const metadata = {
  title: "Blog — Om Suresh Prajapati",
  description: "Articles on ML, GPU Architecture, AI, and software engineering by Om Suresh Prajapati.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-max px-4 md:px-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[var(--primary)]"
          style={{ color: 'var(--muted)' }}
        >
          <ArrowLeft size={14} /> Back to portfolio
        </Link>

        <div className="mb-12">
          <p className="text-sm font-mono mb-2" style={{ color: 'var(--primary)' }}>
            blog
          </p>
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            All Articles
          </h1>
          <p className="mt-3 text-base" style={{ color: 'var(--muted)' }}>
            Writing about ML, GPU architecture, transformers, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.slug}
              className="relative flex flex-col p-6 rounded-2xl"
              style={{
                background: 'var(--surface)',
                border: '1px solid var(--border)',
              }}
            >
              {post.comingSoon && (
                <div
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.3)',
                    color: '#3B82F6',
                  }}
                >
                  Coming Soon
                </div>
              )}
              <h2 className="font-semibold text-base mb-2" style={{ color: 'var(--text)' }}>
                {post.title}
              </h2>
              <p className="text-sm leading-relaxed flex-1 mb-4" style={{ color: 'var(--muted)' }}>
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
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
              <div className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted)' }}>
                <Clock size={11} /> {post.readTime}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
