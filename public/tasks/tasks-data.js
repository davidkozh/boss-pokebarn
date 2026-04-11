// РАСПИСАНИЕ ЗАДАЧ — источник данных для дашборда boss.pokebarn.ru
// ⚠️  НЕ РЕДАКТИРОВАТЬ ВРУЧНУЮ. Файл перегенерируется задачей daily-report (06:00).
// ✏️  Для изменения отображения задачи → редактируй tasks/tasks-metadata.json.
// ✏️  Для включения/отключения задачи → меняй в MCP; tasks-data.js обновится автоматически.
// Сгенерировано: 2026-04-11

window.POKEBARN_TASKS = [
  { id: 'update-pokemon-releases',     name: 'Обновление релизов',       icon: '📅', hour: 0,    enabled: true,  agent: 'продакт', desc: 'Обновление календаря релизов Pokemon TCG с Bulbapedia' },
  { id: 'moysklad-verify-products',    name: 'Проверка товаров',         icon: '🔍', hour: 1,    enabled: true,  agent: 'аудитор', desc: 'Сравнение снапшотов с МойСклад, обучение на правках' },
  { id: 'moysklad-add-images-auto',    name: 'Авто-фото товаров',        icon: '📸', hour: 2,    enabled: true,  agent: 'продакт', desc: 'Поиск и загрузка фото для товаров с релизом ≤ 7 дней' },
  { id: 'ozon-competitor-analysis',    name: 'Мониторинг Ozon',          icon: '🔎', hour: 2,    enabled: false, agent: 'продакт', desc: 'Анализ ассортимента и цен конкурентов на Ozon' },
  { id: 'moysklad-release-sync',       name: 'Синхронизация → МойСклад',icon: '🔄', hour: 3,    enabled: true,  agent: 'продакт', desc: 'Создание недостающих товаров из календаря релизов' },
  { id: 'moysklad-purchase-prices-4',  name: 'Закупочные цены',          icon: '💰', hour: 4,    enabled: true,  agent: 'продакт', desc: 'Обновление закупочных цен из заказов поставщикам (1/3)' },
  { id: 'ozon-auto-promo-audit',       name: 'Автоакции Ozon',           icon: '⚡', hour: 4.5,  enabled: false, agent: 'продакт', desc: 'Исключение товаров с ценой ниже минимальной' },
  { id: 'ozon-promo-audit',            name: 'Акции Ozon',               icon: '🏷️', hour: 4.5,  enabled: true,  agent: 'продакт', desc: 'Мониторинг акций Ozon, коррекция цен и удаление' },
  { id: 'wb-auto-promo-audit',         name: 'Автоакции WB',             icon: '⚡', hour: 5,    enabled: false, agent: 'продакт', desc: 'Исключение товаров с ценой ниже минимальной из WB' },
  { id: 'wb-promo-audit',              name: 'Акции WB',                 icon: '🏷️', hour: 5,    enabled: true,  agent: 'продакт', desc: 'Мониторинг участия товаров в акциях WB' },
  { id: 'openclaw-daily-audit',        name: 'Аудит OpenClaw',           icon: '🩺', hour: 5.5,  enabled: false, agent: 'аудитор', desc: 'Рост контекста, дубли, токены, health check' },
  { id: 'daily-report',                name: 'Дневной отчёт',            icon: '📊', hour: 6,    enabled: true,  agent: 'авто',    desc: 'Генерация ежедневного HTML-отчёта о задачах' },
  { id: 'daily-report-upload',         name: 'Загрузка отчёта на VPS',   icon: '☁️', hour: 6.5,  enabled: true,  agent: 'авто',    desc: 'Загрузка дневного HTML-отчёта на boss.pokebarn.ru' },
  { id: 'moysklad-backup',             name: 'Бэкап МойСклад',           icon: '🗄️', hour: 7,    enabled: true,  agent: 'аудитор', desc: 'Экспорт всех товаров из МойСклад в Excel' },
  { id: 'backup-prompts-readme-8',     name: 'Бэкап промптов',           icon: '💾', hour: 8,    enabled: true,  agent: 'авто',    desc: 'Бэкап README-файлов и prompts/' },
  { id: 'moysklad-purchase-prices-12', name: 'Закупочные цены',          icon: '💰', hour: 12,   enabled: true,  agent: 'продакт', desc: 'Обновление закупочных цен из заказов поставщикам (2/3)' },
  { id: 'backup-prompts-readme-14',    name: 'Бэкап промптов',           icon: '💾', hour: 14,   enabled: true,  agent: 'авто',    desc: 'Бэкап README-файлов и prompts/' },
  { id: 'moysklad-purchase-prices-20', name: 'Закупочные цены',          icon: '💰', hour: 20,   enabled: true,  agent: 'продакт', desc: 'Обновление закупочных цен из заказов поставщикам (3/3)' },
  { id: 'backup-prompts-readme-20',    name: 'Бэкап промптов',           icon: '💾', hour: 20,   enabled: true,  agent: 'авто',    desc: 'Бэкап README-файлов и prompts/' },
  { id: 'ebay-qwintry-sync',           name: 'eBay → Qwintry',           icon: '📦', hour: 22.5, enabled: true,  agent: 'продакт', desc: 'Синхронизация покупок eBay с Qwintry' },
];
