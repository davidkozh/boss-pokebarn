import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="text-center">
        <p className="text-6xl mb-6">🃏</p>
        <h1 className="text-white text-4xl font-bold mb-3">Pokebarn Boss</h1>
        <p className="text-gray-400 text-lg mb-8">Скоро здесь будет что-то интересное</p>
        <Link
          href="/reports"
          className="inline-block px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors"
        >
          📊 Ежедневные отчёты
        </Link>
      </div>
    </main>
  );
}
