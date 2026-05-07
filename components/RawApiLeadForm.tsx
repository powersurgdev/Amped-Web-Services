'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

const SUBMIT_URL = 'https://api-dev.taskaroo.com/website-leads/submit';
const TOKEN = process.env.NEXT_PUBLIC_TASKAROO_LEADS_TOKEN ?? '';

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success'; message: string; jobId?: string; displayId?: string }
  | { kind: 'error'; message: string };

export default function RawApiLeadForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [leadName, setLeadName] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatus({ kind: 'error', message: 'Name is required.' });
      return;
    }
    if (!email.trim() && !phone.trim()) {
      setStatus({ kind: 'error', message: 'Provide at least an email or a phone number.' });
      return;
    }
    if (!TOKEN) {
      setStatus({ kind: 'error', message: 'No token configured. Set NEXT_PUBLIC_TASKAROO_LEADS_TOKEN in .env.local.' });
      return;
    }

    setStatus({ kind: 'submitting' });

    const payload: Record<string, string> = { name: name.trim() };
    if (email.trim()) payload.email = email.trim();
    if (phone.trim()) payload.phone = phone.trim();
    if (notes.trim()) payload.notes = notes.trim();
    if (leadName.trim()) payload.leadName = leadName.trim();
    if (companyName.trim()) payload.companyName = companyName.trim();

    try {
      const res = await fetch(SUBMIT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-taskaroo-website-lead-token': TOKEN,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        const msg = (data && (data.message || data.error)) || `Request failed with status ${res.status}`;
        setStatus({ kind: 'error', message: msg });
        return;
      }

      setStatus({
        kind: 'success',
        message: data?.message ?? 'Lead submitted successfully.',
        jobId: data?.data?.jobId,
        displayId: data?.data?.displayId,
      });
      setName('');
      setEmail('');
      setPhone('');
      setCompanyName('');
      setLeadName('');
      setNotes('');
    } catch (err) {
      setStatus({
        kind: 'error',
        message: err instanceof Error ? err.message : 'Network error — see DevTools console.',
      });
    }
  };

  if (status.kind === 'success') {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="rounded-full bg-primary/10 p-3">
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Lead submitted</h3>
          <p className="text-sm text-muted-foreground">{status.message}</p>
          {(status.jobId || status.displayId) && (
            <div className="text-xs font-mono text-muted-foreground space-y-1">
              {status.displayId && <div>Display ID: {status.displayId}</div>}
              {status.jobId && <div>Job ID: {status.jobId}</div>}
            </div>
          )}
          <Button variant="outline" onClick={() => setStatus({ kind: 'idle' })}>
            Submit another
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto w-full max-w-[520px] rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-5"
    >
      <div className="space-y-1">
        <h3 className="text-xl font-bold">Request service</h3>
        <p className="text-sm text-muted-foreground">
          Tell us a bit about what you need and we'll be in touch.
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="raw-name">
          Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="raw-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Customer"
          autoComplete="name"
          required
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="raw-email">Email</Label>
          <Input
            id="raw-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@example.com"
            autoComplete="email"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="raw-phone">Phone</Label>
          <Input
            id="raw-phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="555-0134"
            autoComplete="tel"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="raw-company">Company</Label>
          <Input
            id="raw-company"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Jane Co"
            autoComplete="organization"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="raw-leadname">Job title</Label>
          <Input
            id="raw-leadname"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
            placeholder="Website request"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="raw-notes">How can we help?</Label>
        <Textarea
          id="raw-notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="A short description of the project or repair…"
          rows={4}
        />
      </div>

      <p className="text-xs text-muted-foreground">
        At least one of <span className="font-medium text-foreground">email</span> or{' '}
        <span className="font-medium text-foreground">phone</span> is required.
      </p>

      {status.kind === 'error' && (
        <div className="flex items-start gap-2 rounded-md border border-destructive/40 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{status.message}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full text-base"
        disabled={status.kind === 'submitting'}
      >
        {status.kind === 'submitting' ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending…
          </>
        ) : (
          'Request service'
        )}
      </Button>
    </form>
  );
}
