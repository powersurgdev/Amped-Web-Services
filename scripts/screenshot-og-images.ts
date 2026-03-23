import { chromium } from 'playwright';
import path from 'node:path';
import fs from 'node:fs';

const BASE_URL = 'http://localhost:3000';
const OUT_DIR = path.resolve(import.meta.dirname, '../client/public/og-images');

const pages = [
  { route: '/',                              file: 'home.png' },
  { route: '/contact',                       file: 'contact.png' },
  { route: '/portfolio',                     file: 'portfolio.png' },
  { route: '/privacy',                       file: 'privacy.png' },
  { route: '/terms',                         file: 'terms.png' },
  { route: '/services',                      file: 'services.png' },
  { route: '/services/web-design',           file: 'web-design.png' },
  { route: '/services/web-development',      file: 'web-development.png' },
  { route: '/services/hosting-care',         file: 'hosting-care.png' },
  { route: '/services/seo-local-search',     file: 'seo-local-search.png' },
  { route: '/services/website-refresh',      file: 'website-refresh.png' },
  { route: '/services/digital-marketing',    file: 'digital-marketing.png' },
  { route: '/industries',                    file: 'industries.png' },
  { route: '/industries/home-services',      file: 'home-services.png' },
  { route: '/industries/contractors',        file: 'contractors.png' },
  { route: '/industries/restaurants',        file: 'restaurants.png' },
  { route: '/industries/healthcare',         file: 'healthcare.png' },
  { route: '/industries/real-estate',        file: 'real-estate.png' },
  { route: '/industries/beauty-wellness',    file: 'beauty-wellness.png' },
  { route: '/industries/auto-services',      file: 'auto-services.png' },
  { route: '/industries/creative-portfolio', file: 'creative-portfolio.png' },
  { route: '/industries/legal-professional', file: 'legal-professional.png' },
  { route: '/industries/fitness-sports',     file: 'fitness-sports.png' },
];

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
const context = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});

for (const { route, file } of pages) {
  const page = await context.newPage();
  await page.goto(`${BASE_URL}${route}`, { waitUntil: 'networkidle' });
  // Scroll to top to capture the hero
  await page.evaluate(() => window.scrollTo(0, 0));
  // Wait for any animations/fonts to settle
  await page.waitForTimeout(800);
  const outPath = path.join(OUT_DIR, file);
  await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1200, height: 630 } });
  await page.close();
  console.log(`✓ ${route} → og-images/${file}`);
}

await browser.close();
console.log(`\nDone! ${pages.length} images saved to client/public/og-images/`);
