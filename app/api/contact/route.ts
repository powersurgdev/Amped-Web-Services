import { NextResponse } from 'next/server';
import { storage } from '@/server/storage';
import { insertContactSubmissionSchema } from '@/shared/schema';
import { fromError } from 'zod-validation-error';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = insertContactSubmissionSchema.safeParse(body);

    if (!result.success) {
      const validationError = fromError(result.error);
      return NextResponse.json({ message: validationError.toString() }, { status: 400 });
    }

    const submission = await storage.createContactSubmission(result.data);

    return NextResponse.json(
      { message: "Thank you for your submission! I'll get back to you soon.", submission },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json({ message: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
