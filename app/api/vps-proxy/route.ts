import { NextRequest, NextResponse } from 'next/server';
const VPS_URL = 'http://72.61.137.231:9876/run';
const VPS_TOKEN = 'c8df2df1c4e18fd5479bf3d77d76e1a16c2677946dda4930';
const API_KEY = 'pokebarn-upload-2026';
export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== API_KEY) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const { code } = await req.json();
  const vpsRes = await fetch(VPS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'X-Token': VPS_TOKEN },
    body: code,
    cache: 'no-store',
  });
  return NextResponse.json(await vpsRes.json());
}