import { NextRequest, NextResponse } from 'next/server';

const VPS_URL = 'http://72.61.137.231:9876/run';
const VPS_TOKEN = 'c8df2df1c4e18fd5479bf3d77d76e1a16c2677946dda4930';
const API_KEY = 'pokebarn-upload-2026';

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== API_KEY) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const { filename } = await req.json();
  if (!/^daily_\d{2}\.\d{2}\.\d{4}\.html$/.test(filename))
    return NextResponse.json({ error: 'Invalid filename format' }, { status: 400 });

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '');
  const code = [
    'import base64, os',
    `with open('/tmp/upload_${safeName}.b64', 'r') as f:`,
    '    b64 = f.read()',
    'data = base64.b64decode(b64)',
    `open('/root/dashboard/reports/${safeName}', 'wb').write(data)`,
    `os.remove('/tmp/upload_${safeName}.b64')`,
    'print("ok:" + str(len(data)))',
  ].join('\n');

  const vpsRes = await fetch(VPS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'X-Token': VPS_TOKEN },
    body: code,
  });
  const result = await vpsRes.json();
  return NextResponse.json(result);
}
