'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Monitor, Moon } from 'lucide-react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div aria-hidden className={`h-9 w-[108px] ${className}`} />;
  }

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(v) => v && setTheme(v)}
      aria-label="Theme"
      className={`rounded-full border border-border bg-background/60 p-0.5 backdrop-blur-sm ${className}`}
    >
      <ToggleGroupItem
        value="light"
        aria-label="Light"
        className="h-8 w-8 rounded-full data-[state=on]:bg-accent data-[state=on]:text-foreground"
      >
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="system"
        aria-label="System"
        className="h-8 w-8 rounded-full data-[state=on]:bg-accent data-[state=on]:text-foreground"
      >
        <Monitor className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem
        value="dark"
        aria-label="Dark"
        className="h-8 w-8 rounded-full data-[state=on]:bg-accent data-[state=on]:text-foreground"
      >
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
