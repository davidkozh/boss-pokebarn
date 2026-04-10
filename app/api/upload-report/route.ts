import { NextRequest, NextResponse } from 'next/server';

const VPS_URL = 'http://72.61.137.231:9876/run';
const VPS_TOKEN = 'c8df2df1c4e18fd5479bf3d77d76e1a16c2677946dda4930';
const API_KEY = 'pokebarn-upload-2026';

export async function POST(req: NextRequest) {
  const apiKey = req.headers.get('x-api-key');
  if (apiKey !== API_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { filename, content } = body;

  if (!filename || !content) {
    return NextResponse.json({ error: 'filename and content required' }, { status: 400 });
  }

  // Only allow daily_DD.MM.YYYY.html
  if (!/^daily_\d{2}\.\d{2}\.\d{4}\.html$/.test(filename)) {
    return NextResponse.json({ error: 'Invalid filename format' }, { status: 400 });
  }

  const code = `import base64\ndata = base64.b64decode("""${content}""")\nopen('/tmp/pokebarn_reports/${filename}', 'wb').write(data)\nprint('ok:' + str(len(data)))`;

  const vpsRes = await fetch(VPS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain', 'X-Token': VPS_TOKEN },
    body: code,
  });

  const result = await vpsRes.json();
  return NextResponse.json(result);
}
