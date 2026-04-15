'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle, MapPin } from 'lucide-react';
import { Github, Linkedin } from '@/components/ui/icons';
import { PERSONAL } from '@/lib/constants';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/visitor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, type: 'contact' }),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 4000);
  };

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'OmPrajapati2110',
      href: PERSONAL.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'om-suresh-prajapati',
      href: PERSONAL.linkedin,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: PERSONAL.location,
      href: null,
    },
  ];

  return (
    <section
      id="contact"
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
            07. contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text)' }}>
            Get In Touch
          </h2>
          <p className="mt-3 text-base max-w-xl mx-auto" style={{ color: 'var(--muted)' }}>
            I&apos;m always open to discussing ML/AI opportunities, research collaborations,
            or just a good tech conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>
                Let&apos;s Connect
              </h3>
              <div className="space-y-4">
                {contactItems.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
                    >
                      <Icon size={15} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>{label}</p>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium hover:text-[var(--primary)] transition-colors"
                          style={{ color: 'var(--text)' }}
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium" style={{ color: 'var(--text)' }}>{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability note */}
            <div
              className="p-4 rounded-xl"
              style={{ background: 'rgba(245, 158, 11, 0.05)', border: '1px solid rgba(245, 158, 11, 0.2)' }}
            >
              <p className="text-sm font-semibold mb-1" style={{ color: 'var(--primary)' }}>
                🎯 Actively Seeking Opportunities
              </p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                Targeting roles in ML Engineering, AI Research, GPU/Computer Architecture, and
                Software Engineering. Graduating December 2026 from USC.
              </p>
            </div>
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    required
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--primary)]"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                    className="px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[var(--primary)]"
                    style={{
                      background: 'var(--bg)',
                      border: '1px solid var(--border)',
                      color: 'var(--text)',
                    }}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the opportunity or just say hi..."
                  required
                  rows={5}
                  className="px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none focus:ring-2 focus:ring-[var(--primary)]"
                  style={{
                    background: 'var(--bg)',
                    border: '1px solid var(--border)',
                    color: 'var(--text)',
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'loading'}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all disabled:opacity-70"
                style={{ background: 'var(--primary)', color: '#000' }}
                whileHover={{ scale: status === 'loading' ? 1 : 1.02, boxShadow: '0 0 25px var(--primary-glow)' }}
                whileTap={{ scale: 0.98 }}
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Sending...
                  </>
                ) : status === 'success' ? (
                  <>
                    <CheckCircle size={16} /> Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <AlertCircle size={16} /> Try Again
                  </>
                ) : (
                  <>
                    <Send size={16} /> Send Message
                  </>
                )}
              </motion.button>

              {status === 'success' && (
                <p className="text-sm text-center" style={{ color: '#10B981' }}>
                  Thanks! I&apos;ll get back to you soon. 🎉
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
