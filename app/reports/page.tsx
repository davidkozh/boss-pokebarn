'use client';

import { useEffect, useState } from 'react';

export default function ReportsPage() {
  const [reports, setReports] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/reports')
      .then(r => r.json())
      .then(data => { setReports(data); setLoading(false); })
      .catch(e => { setError(e.message); setLoading(false); });
  }, []);

  function formatDate(filename: string) {
    const m = filename.match(/daily_(\d{2}\.\d{2}\.\d{4})\.html/);
    return m ? m[1] : filename;
  }

  return (
    <main className="min-h-screen bg-gray-950 text-white p-8">
      <h1 className="text-2xl font-bold mb-6">Ежедневные отчёты</h1>
      {loading && <p className="text-gray-400">Загрузка...</p>}
      {error && <p className="text-red-400">Ошибка: {error}</p>}
      {!loading && !error && reports.length === 0 && (
        <p className="text-gray-400">Отчётов пока нет.</p>
      )}
      <ul className="space-y-2">
        {reports.map(filename => (
          <li key={filename}>
            <a
              href={`/api/reports/${filename}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
            >
              <span className="text-lg">📄</span>
              <span className="font-mono">{formatDate(filename)}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
