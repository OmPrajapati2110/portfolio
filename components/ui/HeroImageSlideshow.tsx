'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { HERO_IMAGES } from '@/lib/constants';

export default function HeroImageSlideshow() {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    // Pick a random image once on mount (changes on each page load/refresh)
    const randomIndex = Math.floor(Math.random() * HERO_IMAGES.length);
    setImageSrc(HERO_IMAGES[randomIndex]);
  }, []);

  if (!imageSrc) return null;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        src={imageSrc}
        alt="Tech background"
        fill
        className="object-cover"
        style={{ opacity: 0.35 }}
        priority
        unoptimized
      />
      {/* Subtle gradient so text stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, var(--bg) 100%)',
        }}
      />
    </div>
  );
}
