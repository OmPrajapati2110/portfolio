'use client';

import { useEffect, useRef } from 'react';
import { PERSONAL } from '@/lib/constants';

export default function CurrentlyLearning() {
  const items = PERSONAL.currentlyLearning;
  // Duplicate for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-2" style={{ maxWidth: '100%' }}>
      <div
        className="flex gap-3"
        style={{
          animation: 'ticker-scroll 20s linear infinite',
          width: 'max-content',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap"
            style={{
              background: 'rgba(245, 158, 11, 0.1)',
              border: '1px solid rgba(245, 158, 11, 0.25)',
              color: 'var(--primary)',
            }}
          >
            <span className="text-xs">📚</span>
            {item}
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
