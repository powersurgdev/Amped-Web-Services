import { NextResponse } from 'next/server';
import { track } from '@vercel/analytics/server';
import { storage } from '@/lib/storage';
import { insertContactSubmissionSchema } from '@/shared/schema';
import { fromError } from 'zod-validation-error';
import { sendContactNotification } from '@/lib/emailService';

function messageLengthBucket(length: number): 'short' | 'medium' | 'long' {
  if (length < 100) return 'short';
  if (length < 400) return 'medium';
  return 'long';
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = insertContactSubmissionSchema.safeParse(body);

    if (!result.success) {
      const validationError = fromError(result.error);
      return NextResponse.json({ message: validationError.toString() }, { status: 400 });
    }

    const submission = await storage.createContactSubmission(result.data);

    const referrerPath = (() => {
      const raw = request.headers.get('referer');
      if (!raw) return null;
      try {
        return new URL(raw).pathname;
      } catch {
        return null;
      }
    })();

    track('contact_form_submit', {
      service: result.data.service ?? null,
      has_company: Boolean(result.data.company?.trim()),
      message_length_bucket: messageLengthBucket(result.data.message?.length ?? 0),
      referrer_page: referrerPath,
    }).catch((err) => {
      console.error('[analytics] Failed to track contact_form_submit:', err);
    });

    // Send email notification — non-blocking; a failed email never fails the request
    sendContactNotification({
      name: result.data.name,
      email: result.data.email,
      company: result.data.company,
      service: result.data.service,
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
