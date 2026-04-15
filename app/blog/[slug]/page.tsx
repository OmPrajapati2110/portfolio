import Link from 'next/link';
import { ArrowLeft, Clock, Tag, Calendar } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return BLOG_POSTS.filter((p) => !p.comingSoon).map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} — Om Suresh Prajapati`,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);

  if (!post || post.comingSoon) {
    notFound();
  }

  return (
    <main className="min-h-screen section-padding" style={{ background: 'var(--bg)' }}>
      <div className="container-max px-4 md:px-6 max-w-3xl">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm mb-8 transition-colors hover:text-[var(--primary)]"
          style={{ color: 'var(--muted)' }}
        >
          <ArrowLeft size={14} /> Back to blog
        </Link>

        <article>
          <div className="mb-8">
            <div className="flex flex-wrap gap-1.5 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="flex items-center gap-1 px-2 py-0.5 rounded-md text-xs"
                  style={{
                    background: 'rgba(245, 158, 11, 0.1)',
                    border: '1px solid rgba(245, 158, 11, 0.25)',
                    color: 'var(--primary)',
                  }}
                >
                  <Tag size={9} /> {tag}
                </span>
              ))}
            </div>

            <h1
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: 'var(--text)' }}
            >
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm" style={{ color: 'var(--muted)' }}>
              <span className="flex items-center gap-1.5">
                <Calendar size={13} /> {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={13} /> {post.readTime}
              </span>
            </div>
          </div>

          <div
            className="prose prose-sm max-w-none p-6 rounded-2xl"
            style={{
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              color: 'var(--muted)',
            }}
          >
            <p className="text-base leading-relaxed">{post.excerpt}</p>
            <p className="mt-4 text-sm italic" style={{ color: 'var(--muted)' }}>
              Full article coming soon. Stay tuned!
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
