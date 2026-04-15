import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Om Suresh Prajapati — ML Engineer & AI Researcher',
  description:
    'Portfolio of Om Suresh Prajapati — USC Graduate Student specializing in Machine Learning, AI, GPU Architecture, and Software Engineering. Open to US tech roles from December 2026.',
  keywords: [
    'Om Suresh Prajapati',
    'ML Engineer',
    'AI Researcher',
    'GPU Architecture',
    'USC',
    'Machine Learning',
    'Deep Learning',
    'CUDA',
    'Software Engineer',
  ],
  authors: [{ name: 'Om Suresh Prajapati' }],
  creator: 'Om Suresh Prajapati',
  openGraph: {
    title: 'Om Suresh Prajapati — ML Engineer & AI Researcher',
    description:
      'USC Graduate Student | Machine Learning · AI · GPU Architecture · Software Engineering',
    url: 'https://om-prajapati.vercel.app',
    siteName: 'Om Suresh Prajapati Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Om Suresh Prajapati — ML Engineer & AI Researcher',
    description:
      'USC Graduate Student | ML · AI · GPU Architecture · SWE',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
