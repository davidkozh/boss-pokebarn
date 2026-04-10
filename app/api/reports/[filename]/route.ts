import { NextRequest, NextResponse } from 'next/server';

const VPS_URL = 'http://72.61.137.231:9876/run';
const VPS_TOKEN = 'c8df2df1c4e18fd5479bf3d77d76e1a16c2677946dda4930';

export async function GET(
  _req: NextRequest,
  { params }: { params: { filename: string } }
) {
  const { filename } = params;
  if (!/^daily_\d{2}\.\d{2}\.\d{4}\.html$/.test(filename)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, '');
  const code = [
    'import base64',
    `with open('/tmp/pokebarn_reports/${safeName}', 'rb') as f:`,
    ' print(base64.b64encode(f.read()).decode())',
  ].join('\n');

  const vpsRes = await fetch(VPS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'X-Token': VPS_TOKEN },
    body: code,
    cache: 'no-store',
  });
  const { returncode, stdout, stderr } = await vpsRes.json();

  if (returncode !== 0) {
    return new NextResponse(stderr || 'Report not found', { status: 404 });
  }

  const html = Buffer.from(stdout.trim(), 'base64');
  return new NextResponse(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
