'use client';

import { useEffect } from 'react';

export default function ScrollToHash() {
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.pageYOffset - 64;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return null;
}
