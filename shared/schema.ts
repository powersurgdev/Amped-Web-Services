import { z } from "zod";

// Validation schema for the contact form. The site is email-only (SendGrid);
// there is no database, so this is a plain Zod schema with no ORM dependency.
export const insertContactSubmissionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().nullish(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide more details about your project"),
});

export type InsertContactSubmission = z.infer<typeof insertContactSubmissionSchema>;
