import { getPageMeta } from './seo-meta.js';

export function injectMetaTags(html: string, urlPath: string): string {
  const meta = getPageMeta(urlPath);

  const metaBlock = `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${meta.ogImage.replace(/\/og-images\/.*$/, '')}${urlPath === '/' ? '' : urlPath}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Amped Web Studios" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${meta.ogImage.replace(/\/og-images\/.*$/, '')}${urlPath === '/' ? '' : urlPath}" />
    <meta property="og:image" content="${meta.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${meta.ogImage}" />
    <script type="application/ld+json">${JSON.stringify(meta.jsonLd)}</script>`;

  // Replace existing <title> and strip old og:/twitter:/description meta tags that came from index.html
  return html
    .replace(/<title>[^<]*<\/title>/, '')
    .replace(/<meta\s+name="description"[^>]*>/gi, '')
    .replace(/<meta\s+property="og:[^"]*"[^>]*>/gi, '')
    .replace(/<meta\s+name="twitter:[^"]*"[^>]*>/gi, '')
    .replace('</head>', `${metaBlock}\n  </head>`);
}
