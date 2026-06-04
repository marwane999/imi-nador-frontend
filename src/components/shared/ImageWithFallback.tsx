'use client';
import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  fallback?: string;
}

export default function ImageWithFallback({
  src,
  alt,
  width,
  height,
  className,
  fallback = '/images/placeholder.svg',
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  return (
    <Image
      src={error ? fallback : src}
      alt={alt}
      width={width}
      height={height}
      className={cn('object-cover', className)}
      onError={() => setError(true)}
    />
  );
}
