import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const VPS_URL = 'http://72.61.137.231:9876/run';
const VPS_TOKEN = 'c8df2df1c4e18fd5479bf3d77d76e1a16c2677946dda4930';

export async function GET() {
  const code = [
    'import base64, os',
    "path = '/tmp/pokebarn_dashboard/dashboard.html'",
    'if os.path.exists(path):',
    "    with open(path, 'rb') as f:",
    '        print(base64.b64encode(f.read()).decode())',
    'else:',
    "    print('')",
  ].join('\n');

  try {
    const vpsRes = await fetch(VPS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain', 'X-Token': VPS_TOKEN },
      body: code,
      cache: 'no-store',
    });
    const { stdout } = await vpsRes.json();
    const b64 = (stdout || '').trim();

    if (!b64) {
      const fallback = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{background:#0d1117;color:#8b949e;font-family:sans-serif;display:flex;align-items:center;justify-content:center;height:100vh;margin:0}</style></head><body><div style="text-align:center"><p style="font-size:3em">🃏</p><h2 style="color:#fff">Дашборд загружается...</h2><p>Задача daily-report-upload ещё не запускалась</p></div></body></html>`;
      return new NextResponse(fallback, {
        headers: { 'Content-Type': 'text/html; charset=utf-8' },
      });
    }

    const html = Buffer.from(b64, 'base64').toString('utf-8');
    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch {
    return new NextResponse('Error loading dashboard', { status: 500 });
  }
}
