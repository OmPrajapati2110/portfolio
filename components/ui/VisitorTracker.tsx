'use client';

import { useEffect } from 'react';

export default function VisitorTracker() {
  useEffect(() => {
    // Fire once per session
    const key = 'om_visited';
    if (sessionStorage.getItem(key)) return;
    sessionStorage.setItem(key, '1');

    fetch('/api/visitor', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).catch(() => {
      // Silent fail — tracking is non-critical
    });
  }, []);

  return null;
}
