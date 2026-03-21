import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

const SITEMAP_URLS = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/portfolio", priority: "0.8", changefreq: "weekly" },
  { path: "/contact", priority: "0.8", changefreq: "monthly" },
  { path: "/services", priority: "0.9", changefreq: "monthly" },
  { path: "/services/web-design", priority: "0.8", changefreq: "monthly" },
  { path: "/services/web-development", priority: "0.8", changefreq: "monthly" },
  { path: "/services/hosting-care", priority: "0.8", changefreq: "monthly" },
  { path: "/services/seo-local-search", priority: "0.8", changefreq: "monthly" },
  { path: "/services/website-refresh", priority: "0.8", changefreq: "monthly" },
  { path: "/services/digital-marketing", priority: "0.8", changefreq: "monthly" },
  { path: "/industries", priority: "0.9", changefreq: "monthly" },
  { path: "/industries/home-services", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/contractors", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/restaurants", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/healthcare", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/real-estate", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/beauty-wellness", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/auto-services", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/creative-portfolio", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/legal-professional", priority: "0.7", changefreq: "monthly" },
  { path: "/industries/fitness-sports", priority: "0.7", changefreq: "monthly" },
];

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/sitemap.xml", (req, res) => {
    const base = "https://ampedwebstudios.com";
    const today = new Date().toISOString().split("T")[0];
    const urls = SITEMAP_URLS.map(
      ({ path, priority, changefreq }) => `
  <url>
    <loc>${base}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    ).join("");
    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}\n</urlset>`;
    res.header("Content-Type", "application/xml");
    res.send(xml);
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const result = insertContactSubmissionSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ 
          message: validationError.toString() 
        });
      }

      const submission = await storage.createContactSubmission(result.data);
      
      return res.status(201).json({ 
        message: "Thank you for your submission! I'll get back to you soon.",
        submission 
      });
    } catch (error) {
      console.error("Error creating contact submission:", error);
      return res.status(500).json({ 
        message: "Something went wrong. Please try again." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
