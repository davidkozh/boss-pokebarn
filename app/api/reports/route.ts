import { NextResponse } from 'next/server';

const VPS_URL = 'http://72.61.137.231:9876/run';
const VPS_TOKEN = 'c8df2df1c4e18fd5479bf3d77d76e1a16c2677946dda4930';

export async function GET() {
  const code = [
    'import os, json',
    'from datetime import datetime',
    "files = [f for f in os.listdir('/root/dashboard/reports') if f.endswith('.html')]",
    'def parse_date(f):',
    '    try: return datetime.strptime(f, "daily_%d.%m.%Y.html")',
    '    except: return datetime.min',
    'files.sort(key=parse_date, reverse=True)',
    'print(json.dumps(files))',
  ].join('\n');
  const vpsRes = await fetch(VPS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'X-Token': VPS_TOKEN },
    body: code,
  });
  const { stdout } = await vpsRes.json();
  const files: string[] = JSON.parse(stdout.trim());
  return NextResponse.json(files);
}
