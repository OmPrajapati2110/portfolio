'use client';

import { useState, useEffect } from 'react';
import { PERSONAL } from '@/lib/constants';

export default function TypewriterText() {
  const roles = PERSONAL.roles;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = roles[currentIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting) {
      if (displayText.length === 0) {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        return;
      }
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev.slice(0, -1));
      }, 50);
      return () => clearTimeout(timeout);
    }

    if (displayText.length < current.length) {
      const timeout = setTimeout(() => {
        setDisplayText(current.slice(0, displayText.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setIsPaused(true);
    }
  }, [displayText, isDeleting, isPaused, currentIndex, roles]);

  return (
    <span
      className="font-semibold"
      style={{ color: 'var(--primary)' }}
    >
      {displayText}
      <span className="cursor-blink ml-0.5" style={{ color: 'var(--primary)' }}>
        |
      </span>
    </span>
  );
}
