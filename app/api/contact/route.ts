import { NextResponse } from 'next/server';
import { track } from '@vercel/analytics/server';
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

    // Send the lead notification via SendGrid. This is the only side effect now,
    // so it's awaited — if it fails, the request must fail so the user can retry.
    await sendContactNotification({
      name: result.data.name,
      email: result.data.email,
      company: result.data.company,
      service: result.data.service,
      message: result.data.message,
    });

    return NextResponse.json(
      { message: "Thank you for your submission! I'll get back to you soon." },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
