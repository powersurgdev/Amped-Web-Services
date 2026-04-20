'use client';
import Link from 'next/link';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { trackCtaClick, type CtaLocation } from '@/lib/analytics';

type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost';

export default function TrackedCtaLink({
  href,
  location,
  label,
  size = 'lg',
  variant = 'default',
  className,
  children,
}: {
  href: string;
  location: CtaLocation | string;
  label: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Button asChild size={size} variant={variant} className={className}>
      <Link
        href={href}
        onClick={() => trackCtaClick({ location, label, destination: href })}
      >
        {children}
      </Link>
    </Button>
  );
}
