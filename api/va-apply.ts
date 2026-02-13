import type { VercelRequest, VercelResponse } from '@vercel/node';
import { google } from 'googleapis';

function env(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing env var: ${name}`);
  return v;
}

async function readBody(req: VercelRequest): Promise<string> {
  return await new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => (data += chunk));
    req.on('end', () => resolve(data));
    req.on('error', reject);
  });
}

function toMultiValueRecord(params: URLSearchParams): Record<string, string | string[]> {
  const out: Record<string, string | string[]> = {};
  for (const [key, value] of params.entries()) {
    if (key in out) {
      const existing = out[key];
      out[key] = Array.isArray(existing) ? [...existing, value] : [existing, value];
    } else {
      out[key] = value;
    }
  }
  return out;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const raw = await readBody(req);

    // Form posts application/x-www-form-urlencoded
    const params = new URLSearchParams(raw);
    const data = toMultiValueRecord(params);

    // Honeypot spam check
    if (typeof data.website === 'string' && data.website.trim() !== '') {
      // Pretend success
      res.status(303).setHeader('Location', '/va-application?submitted=1').end();
      return;
    }

    const sheetId = env('GOOGLE_SHEET_ID');
    const clientEmail = env('GOOGLE_SERVICE_ACCOUNT_EMAIL');
    const privateKey = env('GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY').replace(/\\n/g, '\n');

    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const timestamp = new Date().toISOString();

    // Flatten values into deterministic columns
    const columns: Array<[string, string]> = [];
    const keys = Object.keys(data).sort();
    for (const k of keys) {
      if (k === 'website') continue; // honeypot
      const v = data[k];
      if (Array.isArray(v)) columns.push([k, v.join(', ')]);
      else columns.push([k, v]);
    }

    // Row layout: timestamp, ip, userAgent, then key/value pairs
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString();
    const ua = (req.headers['user-agent'] || '').toString();

    const row: string[] = [timestamp, ip, ua];
    for (const [k, v] of columns) {
      row.push(k);
      row.push(v);
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A1',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
      requestBody: {
        values: [row],
      },
    });

    // Redirect back to landing page with success param
    res.status(303).setHeader('Location', '/va-application?submitted=1').end();
  } catch (e: any) {
    console.error(e);
    // Keep it generic for the user
    res.status(500).json({ ok: false, error: 'Server error' });
  }
}
