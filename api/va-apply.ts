import type { VercelRequest, VercelResponse } from '@vercel/node';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ ok: false, error: 'Method not allowed' });
    return;
  }

  try {
    const raw = await readBody(req);

    // Form posts application/x-www-form-urlencoded
    const params = new URLSearchParams(raw);

    // Honeypot spam check
    const hp = params.get('website');
    if (hp && hp.trim() !== '') {
      res.status(303).setHeader('Location', '/va-application?submitted=1').end();
      return;
    }

    const appsScriptUrl = env('APPS_SCRIPT_URL');

    // Proxy the exact form body to Apps Script
    const resp = await fetch(appsScriptUrl, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: raw,
    });

    if (!resp.ok) {
      const text = await resp.text().catch(() => '');
      console.error('Apps Script error', resp.status, text);
      res.status(500).json({ ok: false, error: 'Upstream error' });
      return;
    }

    // Redirect back to landing page with success param
    res.status(303).setHeader('Location', '/va-application?submitted=1').end();
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ ok: false, error: 'Server error' });
  }
}
