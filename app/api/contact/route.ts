import { NextResponse } from 'next/server';
import { storage } from '@/lib/storage';
import { insertContactSubmissionSchema } from '@/shared/schema';
import { fromError } from 'zod-validation-error';
import { sendContactNotification } from '@/lib/emailService';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = insertContactSubmissionSchema.safeParse(body);

    if (!result.success) {
      const validationError = fromError(result.error);
      return NextResponse.json({ message: validationError.toString() }, { status: 400 });
    }

    const submission = await storage.createContactSubmission(result.data);

    // Send email notification — non-blocking; a failed email never fails the request
    sendContactNotification({
      name: result.data.name,
      email: result.data.email,
      company: result.data.company,
      budget: result.data.budget,
      message: result.data.message,
    }).catch((err) => {
      console.error('[emailService] Failed to send contact notification:', err);
    });

    return NextResponse.json(
      { message: "Thank you for your submission! I'll get back to you soon.", submission },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
