import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

const VPS_URL = 'http://72.61.137.231:9876/run';
const VPS_TOKEN = 'c8df2df1c4e18fd5479bf3d77d76e1a16c2677946dda4930';

export async function GET() {
  const code = [
    'import base64, os',
    "path = '/tmp/pokebarn_dashboard/reports/report-data.js'",
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
      return new NextResponse('window.POKEBARN_REPORTS = [];', {
        headers: { 'Content-Type': 'application/javascript; charset=utf-8' },
      });
    }

    const js = Buffer.from(b64, 'base64').toString('utf-8');
    return new NextResponse(js, {
      headers: {
        'Content-Type': 'application/javascript; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
      },
    });
  } catch {
    return new NextResponse('window.POKEBARN_REPORTS = [];', {
      headers: { 'Content-Type': 'application/javascript; charset=utf-8' },
    });
  }
}
