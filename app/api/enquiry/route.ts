import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  let data: Record<string, string> = {};
  try { data = await req.json(); } catch { return NextResponse.json({ ok: false, error: 'Invalid request' }, { status: 400 }); }

  const name = String(data.name || '').trim();
  const phone = String(data.phone || '').replace(/\D/g, '');
  if (!name) return NextResponse.json({ ok: false, error: 'Please enter your name.' }, { status: 422 });
  if (phone.length < 10) return NextResponse.json({ ok: false, error: 'Please enter a valid 10-digit mobile number.' }, { status: 422 });

  const lead = { ...data, name, phone, receivedAt: new Date().toISOString(), source: 'godrej-epoque-website' };

  const hook = process.env.ENQUIRY_WEBHOOK_URL;
  if (hook) {
    try {
      await fetch(hook, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(lead) });
    } catch (e) {
      console.error('Enquiry webhook failed', e);
    }
  } else {
    console.log('New enquiry', lead);
  }
  return NextResponse.json({ ok: true });
}
