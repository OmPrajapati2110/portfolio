import Link from 'next/link';

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center gap-6 px-4"
      style={{ background: 'var(--bg)' }}
    >
      <p className="text-8xl font-bold" style={{ color: 'var(--primary)' }}>
        404
      </p>
      <h1 className="text-2xl font-semibold" style={{ color: 'var(--text)' }}>
        Page not found
      </h1>
      <p className="text-base text-center max-w-sm" style={{ color: 'var(--muted)' }}>
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
        style={{ background: 'var(--primary)', color: '#000' }}
      >
        Back to portfolio
      </Link>
    </main>
  );
}
