'use client';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import type { CSSProperties } from 'react';

interface IconProps {
  size?: number;
  style?: CSSProperties;
  className?: string;
}

export function Github({ size = 16, style, className }: IconProps) {
  return <FaGithub size={size} style={style} className={className} />;
}

export function Linkedin({ size = 16, style, className }: IconProps) {
  return <FaLinkedin size={size} style={style} className={className} />;
}
