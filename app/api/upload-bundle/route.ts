import { NextRequest, NextResponse } from 'next/server';

const VPS_URL = 'http://72.61.137.231:9876/run';
const VPS_TOKEN = 'c8df2df1c4e18fd5479bf3d77d76e1a16c2677946dda4930';
const API_KEY = 'pokebarn-upload-2026';
const BASE_DIR = '/tmp/pokebarn_dashboard';

const ALLOWED = /^(dashboard\.html|reports\/report-data\.js|reports\/daily_\d{2}\.\d{2}\.\d{4}\.html)$/;

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { files } = await req.json() as { files: { filename: string; content: string }[] };

  if (!Array.isArray(files) || files.length === 0) {
    return NextResponse.json({ error: 'files array required' }, { status: 400 });
  }

  const results: { filename: string; ok: boolean; bytes?: number; error?: string }[] = [];

  for (const { filename, content } of files) {
    if (!ALLOWED.test(filename)) {
      results.push({ filename, ok: false, error: 'Invalid filename' });
      continue;
    }

    const subdir = filename.includes('/') ? filename.split('/')[0] : null;
    const dirPath = subdir ? `${BASE_DIR}/${subdir}` : BASE_DIR;

    const code = [
      'import base64, os',
      `os.makedirs('${dirPath}', exist_ok=True)`,
      `data = base64.b64decode("""${content}""")`,
      `open('${BASE_DIR}/${filename}', 'wb').write(data)`,
      `print('ok:' + str(len(data)))`,
    ].join('\n');

    const vpsRes = await fetch(VPS_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain', 'X-Token': VPS_TOKEN },
      body: code,
    });
    const result = await vpsRes.json();
    const stdout: string = result.stdout || '';
    if (stdout.startsWith('ok:')) {
      results.push({ filename, ok: true, bytes: parseInt(stdout.slice(3)) });
    } else {
      results.push({ filename, ok: false, error: result.stderr || stdout });
    }
  }

  const allOk = results.every(r => r.ok);
  return NextResponse.json({ ok: allOk, results }, { status: allOk ? 200 : 207 });
}
