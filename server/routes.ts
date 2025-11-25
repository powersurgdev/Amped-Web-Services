import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
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
