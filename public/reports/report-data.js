window.POKEBARN_REPORTS = [
  { iso: "2026-04-12", label: "12.04", fullLabel: "12.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 12.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 820px; margin: 40px auto; padding: 0 20px; color: #333; background: #fafafa; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 16px; }
    h2 { font-size: 17px; margin-top: 28px; margin-bottom: 8px; color: #444; }
    .summary { background: #f0f4ff; padding: 14px 18px; border-radius: 8px; margin: 16px 0; font-size: 14px; border-left: 4px solid #3f51b5; }
    .summary span { margin-right: 18px; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 14px 16px; margin: 10px 0; background: #fff; }
    .task-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 6px; }
    .task-name { font-weight: 600; font-size: 15px; }
    .task-id { font-size: 11px; color: #aaa; font-family: monospace; margin-left: 7px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; white-space: nowrap; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #555; margin-top: 8px; font-size: 13.5px; line-height: 1.5; }
    .time { color: #aaa; font-size: 12px; margin-top: 4px; }
    .note { margin-top: 8px; padding: 8px 12px; background: #fff3e0; border-radius: 5px; font-size: 13px; color: #bf6000; }
    .files-section { background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 14px 16px; margin: 10px 0; }
    .file-ok { color: #2e7d32; font-size: 13.5px; margin: 4px 0; }
    .file-miss { color: #c62828; font-size: 13.5px; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px 14px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 13.5px; color: #e65100; }
    .review-ok { color: #2e7d32; font-size: 13px; }
    .detail-list { margin-top: 8px; padding-left: 16px; font-size: 13px; color: #555; }
    .detail-list li { margin: 3px 0; }
    .tag { display: inline-block; font-size: 11px; padding: 1px 7px; border-radius: 10px; margin-left: 5px; }
    .tag-soon { background: #fff9c4; color: #f57f17; border: 1px solid #ffe082; }
    .tag-ok { background: #e8f5e9; color: #2e7d32; }
    .divider { border: none; border-top: 1px solid #eee; margin: 20px 0; }
  </style>
</head>
<body>

<h1>☀️ Утренний отчёт Pokebarn — 12.04.2026</h1>

<div class="summary">
  <span><strong>Задач запущено:</strong> 8 из 8 активных</span>
  <span>✅ <strong>Успешно:</strong> 7</span>
  <span>⚠️ <strong>Данные недоступны:</strong> 1</span>
  <span>⛔️ <strong>Отключена:</strong> 1</span>
  <span>📋 <strong>Товаров на проверку:</strong> 0</span>
</div>

<!-- 1. moysklad-verify-products -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 12.04.2026 01:07</div>
  <div class="result">
    Все 19 товаров во всех файлах снапшотов имеют статус <strong>✅ Проверено 29.03.2026</strong>. Снапшотов со статусами ⏳ или 🔍 не обнаружено. Сравнение с МойСклад не потребовалось.
  </div>
  <div class="review-list">
    <h3>📋 Товары на проверку</h3>
    <div class="review-ok">✅ Нет товаров, ожидающих проверки — все 19 товаров проверены владельцем (29.03.2026).</div>
  </div>
</div>

<!-- 2. moysklad-release-sync -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 12.04.2026 03:05</div>
  <div class="result">
    Новых товаров для добавления нет — все товары со статусом 🟨 (до 30 дней до релиза) уже есть в МойСклад. Следующая волна ожидается ~22.04.2026, когда товары с датой выхода 22.05.2026 попадут в окно 30 дней:
  </div>
  <ul class="detail-list">
    <li>Mega Lucario ex League Battle Deck <span class="tag tag-soon">40 дней</span></li>
    <li>Mega Zygarde ex Premium Collection <span class="tag tag-soon">40 дней</span></li>
    <li>Chaos Rising Бустер-пак / Booster Bundle / ETB / Mini Tin <span class="tag tag-soon">40 дней</span></li>
  </ul>
</div>

<!-- 3. moysklad-purchase-prices -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
    <span class="status status-warn">⚠️ Данные недоступны</span>
  </div>
  <div class="time">Последний запуск: 12.04.2026 04:06</div>
  <div class="result">
    Задача запустилась в штатное время. Транскрипт сессии показывает запуск Python-скрипта на VPS — итоговое сообщение не зафиксировано (сессия завершилась без явного отчёта). Рекомендуется проверить вручную.
  </div>
</div>

<!-- 4. ebay-qwintry-sync -->
<div class="task">
  <div class="task-header">
    <span class="task-name">eBay / Qwintry синхронизация <span class="task-id">ebay-qwintry-sync</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 22:32</div>
  <div class="result">
    Новых заказов нет. Обновлён трек-номер заказа №32 (Mewtwo SV Promo 052): → <code>1ZG2C0390364543016</code> (UPS). В Qwintry создана ожидаемая посылка <strong>#1017341-US</strong> с декларацией на $9.00.
  </div>
  <ul class="detail-list">
    <li>№30 (Umbreon ex Prismatic): статус → <strong>Delivered</strong> ✅</li>
    <li>№32 (Mewtwo SV Promo 052): статус → <strong>Delivered (10 апр)</strong> ✅</li>
    <li>На складе Qwintry: 2 посылки (Squirtle + Ivysaur, бесплатное хранение 43 дня)</li>
    <li>Ожидается: 5 посылок | Отправлено: 3 (последняя #676582-US от 07.04.26)</li>
  </ul>
</div>

<!-- 5. moysklad-add-images-auto -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Автозагрузка фото <span class="task-id">moysklad-add-images-auto</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 12.04.2026 02:07</div>
  <div class="result">
    Проверено 8 товаров, загружено 0 — все уже имеют фото в МойСклад.
  </div>
  <ul class="detail-list">
    <li>P-SET-ASC-01 (Gardevoir Poster Collection) → 5 фото ✅</li>
    <li>P-SET-ASC-02 (Lucario Poster Collection) → 5 фото ✅</li>
    <li>P-SET-ASC-03 (First Partners Deluxe Pin Collection) → 4 фото ✅</li>
    <li>P-ETB-POR (Perfect Order ETB Zygarde) → 2 фото ✅</li>
    <li>P-SET-ASC-04 (Mega Meganium ex Box) → 2 фото ✅</li>
    <li>P-SET-ASC-05 (Mega Emboar ex Box) → 2 фото ✅</li>
    <li>P-SET-ASC-06 (Mega Feraligatr ex Box) → 2 фото ✅</li>
    <li>P-BBU-ASC (Ascended Heroes Booster Bundle) → 3 фото ✅</li>
  </ul>
  <div class="note">
    ⚠️ Обнаружена проблема в Excel: столбец «Фото» в строках 51–57, 62 не обновлён (показывает «None», хотя фото есть). Также в строке 62 некорректная ссылка в «Примечаниях от Агента» (ведёт на Chikorita Blister вместо ETB). Требует ручного исправления.
  </div>
</div>

<!-- 6. backup-prompts-readme -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Бэкап промптов и README <span class="task-id">backup-prompts-readme</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 20:07 (следующий: ~11:07 и 17:07 сегодня)</div>
  <div class="result">
    Бэкап <strong>2026-04-11_17-07</strong> выполнен успешно: сохранено 80 файлов (16 MB) — 5 README, credentials.md, dashboard.html, 27 промптов, 2 скрипта, 46 отчётов. Всего хранится 24 бэкапа.
  </div>
</div>

<!-- 7. update-pokemon-releases -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 12.04.2026 00:07</div>
  <div class="result">
    Пересчитаны дни до релиза для 84 товаров. Дата в заголовке обновлена на 12.04.2026. Новых товаров на Bulbapedia не обнаружено. HTML-версия календаря (70 KB) обновлена с фильтрами и бейджами.
  </div>
  <ul class="detail-list">
    <li>🟥 Вышел: 61 товар</li>
    <li>🟨 Скоро &lt; 30 дней: 5 товаров (ASC Mega ex Box × 3 + ASC Booster Bundle — 24.04; CRI Build &amp; Battle Box — 09.05)</li>
    <li>🟩 > 30 дней: 18 товаров</li>
  </ul>
</div>

<!-- 8. moysklad-backup -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 13:28 (следующий: 12.04.2026 ~10:08)</div>
  <div class="result">
    Файл <strong>товары_11.04.2026.xlsx</strong> сохранён: 462 471 байт (451.6 КБ), 694 товара + 8 модификаций = 702 строки. Сегодняшний бэкап (12.04) запланирован на ~10:08.
  </div>
</div>

<!-- 9. ozon-competitor-analysis -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Мониторинг конкурентов Ozon <span class="task-id">ozon-competitor-analysis</span></span>
    <span class="status status-disabled">⛔️ Отключена</span>
  </div>
  <div class="time">Последний запуск: 06.03.2026 02:00</div>
  <div class="result" style="color:#aaa;">Задача отключена.</div>
</div>

<hr class="divider">

<h2>📁 Файлы</h2>
<div class="files-section">
  <div class="file-ok">✅ Бэкап МойСклад (вчера): товары_11.04.2026.xlsx — 451.6 КБ, 694+8 товаров</div>
  <div class="file-miss">⏳ Бэкап МойСклад (сегодня): товары_12.04.2026.xlsx — ещё не создан (запланирован на ~10:08)</div>
  <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx — обновлён 11.04.2026 в 21:11</div>
  <div class="file-ok">✅ Покупки eBay: ebay/покупки_в_америке.xlsx — обновлён 11.04.2026 в 20:05</div>
  <div class="file-ok">✅ Снапшот МойСклад: moysklad/snapshots/sync_12.04.2026.md — создан сегодня в 04:00</div>
  <div class="file-ok">✅ Последний бэкап промптов: backups/2026-04-11_17-07 — 80 файлов, 16 MB</div>
</div>

</body>
</html>
` },
  { iso: "2026-04-11", label: "11.04", fullLabel: "11.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 11.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 860px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 28px; border-bottom: 1px solid #e0e0e0; padding-bottom: 6px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-size: 15px; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; white-space: nowrap; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-warn { background: #fff3e0; color: #e65100; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-running { background: #e3f2fd; color: #1565c0; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #555; margin-top: 10px; font-size: 14px; line-height: 1.6; }
    .result ul { margin: 6px 0; padding-left: 20px; }
    .result li { margin: 4px 0; }
    .time { color: #999; font-size: 12px; margin-top: 6px; }
    .warn-box { margin-top: 10px; padding: 10px 14px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; font-size: 13px; color: #555; }
    .err-box { margin-top: 10px; padding: 10px 14px; background: #ffebee; border-radius: 6px; border-left: 4px solid #ef9a9a; font-size: 13px; color: #555; font-family: monospace; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .review-item .date { color: #999; font-size: 12px; }
    .review-badge { display: inline-block; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; }
    .badge-pending { background: #fff3e0; color: #e65100; }
    .badge-edited { background: #e3f2fd; color: #1565c0; }
    .files { margin-top: 6px; }
    .file-ok { color: #2e7d32; font-size: 14px; margin: 5px 0; }
    .file-miss { color: #c62828; font-size: 14px; margin: 5px 0; }
    .file-warn { color: #e65100; font-size: 14px; margin: 5px 0; }
    .section-extra { margin-top: 8px; }
    code { background: #f5f5f5; padding: 1px 5px; border-radius: 3px; font-family: monospace; font-size: 13px; }
    .tag-new { display: inline-block; background: #e8f5e9; color: #2e7d32; font-size: 11px; padding: 1px 5px; border-radius: 3px; margin-left: 4px; }
  </style>
</head>
<body>

<h1>☀️ Утренний отчёт — 11.04.2026</h1>

<div class="summary">
  <strong>Задач запущено:</strong> 12 из 13 активных &nbsp;|&nbsp;
  <strong>Успешно:</strong> 9 &nbsp;|&nbsp;
  <strong>С предупреждениями:</strong> 3 &nbsp;|&nbsp;
  <strong>В процессе:</strong> 1 &nbsp;|&nbsp;
  <strong>Отключена:</strong> 1<br>
  <strong style="margin-top:6px; display:inline-block;">📋 Товаров на проверку владельцем: 0</strong>
</div>

<!-- 1. moysklad-verify-products -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 01:07</div>
  <div class="result">
    Все снапшоты проверены — непроверенных товаров нет. Во всех файлах статус <code>✅ Проверено 29.03.2026</code>; сравнение с МойСклад не потребовалось.<br>
    Ближайшие новые товары ожидаются ~22.04.2026 (Chaos Rising, Mega Lucario ex League Battle Deck, Mega Zygarde ex Premium Collection перейдут в статус 🟨).
  </div>
  <div class="review-list">
    <h3>📋 Товаров на проверку (0 шт.)</h3>
    <div style="color:#999; font-size:14px;">Все товары проверены владельцем — список пуст.</div>
  </div>
</div>

<!-- 2. moysklad-release-sync -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 02:04</div>
  <div class="result">
    Новых товаров для добавления нет. Все позиции со статусом 🟨 «Скоро &lt; 30 дн» уже обработаны:
    <ul>
      <li>Ascended Heroes Mega ex Box — Mega Meganium ex, Mega Emboar ex, Mega Feraligatr ex + Booster Bundle — ✅ добавлены ранее</li>
      <li>Chaos Rising Build &amp; Battle Box (Prerelease Kit) — ⛔️ исключён по правилам</li>
    </ul>
    Ближайшие кандидаты появятся ~22.04.2026: Mega Lucario ex League Battle Deck, Mega Zygarde ex Premium Collection, Chaos Rising (Booster Bundle / ETB / Mini Tin / Бустер-пак).
  </div>
</div>

<!-- 3. moysklad-purchase-prices -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
    <span class="status status-running">🔄 В процессе</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 03:05 — сессия активна в момент формирования отчёта</div>
  <div class="result">
    Задача запущена в штатное время и выполняется. Результаты будут доступны по завершении сессии.
  </div>
  <div class="warn-box">⏳ Сессия не завершилась к 09:30. Результаты будут доступны позже — проверьте вручную при необходимости.</div>
</div>

<!-- 4. ebay-qwintry-sync -->
<div class="task">
  <div class="task-header">
    <span class="task-name">eBay / Qwintry синхронизация <span class="task-id">ebay-qwintry-sync</span></span>
    <span class="status status-warn">⚠️ Частично</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 06:01</div>
  <div class="result">
    Добавлены 4 новых заказа в таблицу <code>покупки_в_америке.xlsx</code> (всего: 37):
    <ul>
      <li>Строка 34 — Pokémon TCG Massive Holo Energy Lot 48 Cards Total — $15.39 (21-14469-91321)</li>
      <li>Строка 35 — Pokémon TCG Trainer Card Bundle 4 Cards 2017-2019 — $73.85 (19-14473-47050)</li>
      <li>Строка 36 — Pokemon Paldea Evolved Ex Lot 49x — $22.40 (13-14482-86036)</li>
      <li>Строка 37 — 32 Card Lot Double Rare EX Half Art Holo PIKACHU ENG — $25.30 (02-14499-45078)</li>
    </ul>
    Все 4 новых заказа от 10.04.2026 со статусом «Awaiting shipment» — трек-номера не присвоены.
  </div>
  <div class="warn-box">
    ⚠️ <strong>Qwintry не проверен</strong> — расширение Claude in Chrome не имеет доступа к <code>q3.qwintry.com</code>.<br>
    Требуется ручная проверка: строки 26–27 (Ivysaur, Squirtle: были «На складе»), строки 28, 30, 31, 33 (были «Ожидаемая»).
  </div>
</div>

<!-- 5. moysklad-add-images-auto -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Авто-загрузка фото <span class="task-id">moysklad-add-images-auto</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 08:06</div>
  <div class="result">
    Проверено 8 товаров (4 группа B + 4 группа A). Новых фото не загружено.
    <ul>
      <li>Группа B (в продаже): P-SET-ASC-01 (Mega Gardevoir ex), P-SET-ASC-02 (Mega Lucario ex), P-SET-ASC-03 (First Partners Deluxe Pin), P-ETB-POR (Perfect Order ETB) — ✅ все имеют фото</li>
      <li>Группа A (pre-release, релиз 24.04): P-BBU-ASC (Booster Bundle) — ✅ 3 фото; P-SET-ASC-04/05/06 (Mega ex Boxes) — ⚠️ по 2 фото (front + art), back пока недоступен</li>
    </ul>
    Найдены 3D-рендеры коробок на Bulbagarden Archives, но на цветном фоне — отложены.
  </div>
</div>

<!-- 6. backup-prompts-readme -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Бэкап промптов и README <span class="task-id">backup-prompts-readme</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 08:07 (утренний из 3 ежедневных)</div>
  <div class="result">
    Бэкап выполнен в папку <code>backups/2026-04-11_05-07/</code>: 38 файлов (7 корневых + 28 промптов + 3 скрипта), 460 KB. Расхождений с оригиналами нет.
  </div>
</div>

<!-- 7. update-pokemon-releases -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 10.04.2026 22:07</div>
  <div class="result">
    Обновлено 83 строки статусов на дату 10.04.2026. Добавлен 1 новый товар: <em>First Partner Illustration Collection Series 2</em> (19.06.2026, 70 дней, 🟩).<br>
    Итого в календаре: <strong>84 товара</strong>. Файл обновлён: <code>releases/календарь_релизов.xlsx</code>.
  </div>
</div>

<!-- 8. moysklad-backup -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 10.04.2026 23:08 (бэкап за 10.04 — следующий сегодня в 23:00)</div>
  <div class="result">
    Создан файл <code>moysklad/backup/товары_10.04.2026.xlsx</code>: 702 товара + 8 модификаций = 703 строки, 451 КБ (462 137 байт).
  </div>
</div>

<!-- 9. ozon-competitor-analysis (disabled) -->
<div class="task" style="opacity: 0.6;">
  <div class="task-header">
    <span class="task-name">Анализ конкурентов Ozon <span class="task-id">ozon-competitor-analysis</span></span>
    <span class="status status-disabled">⛔️ Отключена</span>
  </div>
  <div class="time">Последний запуск: 06.03.2026 02:00</div>
  <div class="result">Задача отключена вручную. Запускалась по расписанию 02:05.</div>
</div>

<h2>📊 Дополнительные задачи</h2>

<!-- openclaw-daily-audit -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Аудит OpenClaw <span class="task-id">openclaw-daily-audit</span></span>
    <span class="status status-warn">⚠️ Деградированный</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 08:32</div>
  <div class="result">
    8-й деградированный аудит подряд — Telegram Web недоступен из Chrome-сессии Cowork (<code>web.telegram.org/a/</code> и <code>/k/</code> не загружаются). ~70% аудита заблокировано: метрики MEMORY.md/AGENTS.md, daily memory, health check не получены.<br>
    Положительно: все 13 включённых задач отработали штатно за последние 24 часа. Задача <code>daily-report-upload</code> подтверждена.
  </div>
  <div class="warn-box">⚠️ Приоритет №1 — открыть web.telegram.org вручную в Chrome-профиле Cowork для восстановления доступа (скорее всего, конфликт расширений или истёкшая сессия).</div>
</div>

<!-- wb-auto-promo-audit -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Автоакции WB <span class="task-id">wb-auto-promo-audit</span></span>
    <span class="status status-warn">⚠️ Частично</span>
  </div>
  <div class="time">Последний запуск: 10.04.2026 10:35</div>
  <div class="result">
    Проверено 51 автоакция, убирать товары не потребовалось. 1 ошибка подключения:
  </div>
  <div class="err-box">Promo 2291 nomenclatures error: ConnectTimeoutError — HTTPSConnectionPool(host='dp-calendar-api.wildberries.ru', port=443) — временная недоступность WB Calendar API</div>
  <div class="warn-box">⚠️ Товары акции 2291 не проверены. Рекомендуется повторный запуск или ручная проверка в кабинете WB.</div>
</div>

<!-- ozon-auto-promo-audit -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Автоакции Ozon <span class="task-id">ozon-auto-promo-audit</span></span>
    <span class="status status-warn">⚠️ Требует внимания</span>
  </div>
  <div class="time">Последний запуск: 10.04.2026 09:38</div>
  <div class="result">
    Проверено 3 автоакции (189 товаров). Исключений не потребовалось.
  </div>
  <div class="warn-box">
    ⚠️ <strong>189 артикулов без поля «Ozon мин.» в МойСклад</strong> — эти товары не могут быть проверены автоматически.<br>
    Примеры: P-002, P-01-006, P-01-009, P-04-011, A-004, T-001, T-P-001 и ещё ~182 артикула.<br>
    Необходимо заполнить цену «Ozon мин.» в МойСклад для корректной работы аудита.<br><br>
    Также 4 ошибки подключения к МойСклад API: P-04-011, P-05-918, P-04-003, P-06-117-01.
  </div>
</div>

<!-- daily-report-upload -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Загрузка отчёта на VPS <span class="task-id">daily-report-upload</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 11.04.2026 09:04</div>
  <div class="result">
    Файл <code>daily_10.04.2026.html</code> (37 946 байт) успешно загружен на VPS в <code>/root/dashboard/reports/</code>. Все 6 чанков приняты, финализация прошла без ошибок.
  </div>
</div>

<h2>📁 Файлы</h2>
<div class="files">
  <div class="file-warn">⚠️ Бэкап МойСклад за сегодня (11.04): не создан — ожидается сегодня в 23:00</div>
  <div class="file-ok">✅ Бэкап МойСклад за вчера: <code>товары_10.04.2026.xlsx</code> — 451 КБ (462 137 байт), 702 товара</div>
  <div class="file-ok">✅ Календарь релизов: <code>releases/календарь_релизов.xlsx</code> — обновлён 10.04.2026 в 22:10, 84 товара</div>
  <div class="file-ok">✅ Покупки eBay: <code>ebay/покупки_в_америке.xlsx</code> — обновлён 11.04.2026 в 06:16, 37 заказов</div>
  <div class="file-ok">✅ Снапшот verify: <code>moysklad/snapshots/verify_11.04.2026.md</code> — создан 11.04.2026</div>
  <div class="file-ok">✅ Снапшот sync: <code>moysklad/snapshots/sync_11.04.2026.md</code> — создан 11.04.2026</div>
  <div class="file-ok">✅ Бэкап промптов: <code>backups/2026-04-11_05-07/</code> — 38 файлов, 460 КБ</div>
</div>

<div style="margin-top:32px; padding-top:12px; border-top:1px solid #e0e0e0; color:#aaa; font-size:12px;">
  Сформирован автоматически 11.04.2026 в 09:30 · Pokebarn daily-report
</div>

</body>
</html>
` },
  { iso: "2026-04-10", label: "10.04", fullLabel: "10.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 10.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 860px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 16px; }
    h2 { font-size: 17px; margin-top: 28px; margin-bottom: 10px; color: #444; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-size: 14px; line-height: 1.8; }
    .summary strong { color: #222; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    .task-name { font-weight: 600; font-size: 15px; }
    .task-id { font-size: 11px; color: #aaa; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; white-space: nowrap; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-running { background: #e3f2fd; color: #1565c0; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #555; margin-top: 10px; font-size: 13.5px; line-height: 1.6; }
    .time { color: #aaa; font-size: 12px; margin-top: 4px; }
    .alert-box { margin-top: 12px; padding: 10px 14px; background: #fff3e0; border-radius: 6px; border-left: 4px solid #ff6f00; font-size: 13px; color: #444; }
    .alert-box.error { background: #ffebee; border-left-color: #c62828; }
    .alert-box.info { background: #e3f2fd; border-left-color: #1565c0; }
    .files { margin-top: 4px; font-size: 13.5px; line-height: 1.8; }
    .file-ok { color: #2e7d32; }
    .file-miss { color: #c62828; }
    .file-warn { color: #f57f17; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 13px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 13px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .review-item .date { color: #999; font-size: 11px; }
    .review-badge { display: inline-block; font-size: 10px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; }
    .badge-pending { background: #fff3e0; color: #e65100; }
    .badge-edited { background: #e3f2fd; color: #1565c0; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
    th { background: #f0f0f0; padding: 6px 10px; text-align: left; font-weight: 600; border-bottom: 2px solid #ddd; }
    td { padding: 6px 10px; border-bottom: 1px solid #eee; vertical-align: top; }
    tr:last-child td { border-bottom: none; }
    .crit { color: #c62828; font-weight: 600; }
    .warn-price { color: #f57f17; }
    .ok-price { color: #2e7d32; }
    .tag { display: inline-block; font-size: 11px; padding: 2px 7px; border-radius: 10px; margin-right: 4px; }
    .tag-new { background: #e8f5e9; color: #2e7d32; }
    .tag-inprogress { background: #e3f2fd; color: #1565c0; }
    .divider { height: 1px; background: #f0f0f0; margin: 8px 0; }
  </style>
</head>
<body>

<h1>☀️ Утренний отчёт — 10.04.2026</h1>

<div class="summary">
  <strong>Задач активных:</strong> 10 &nbsp;|&nbsp;
  <strong>✅ Успешно:</strong> 8 &nbsp;|&nbsp;
  <strong>⚠️ Предупреждения:</strong> 2 &nbsp;|&nbsp;
  <strong>❌ Ошибки:</strong> 1 &nbsp;|&nbsp;
  <strong>🔄 В процессе (сегодня):</strong> 7<br>
  <strong>📋 Товаров на проверку:</strong> 0 — все проверены&nbsp;&nbsp;
  <strong>⛔️ Отключена:</strong> 1 (ozon-competitor-analysis)
</div>

<!-- 1. moysklad-verify-products -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Запуск: 10.04.2026 01:07 · Сегодняшний запуск 🔄 ещё в процессе</div>
  <div class="result">
    Все товары проверены владельцем. Проверено 19 товаров по 9 снапшотам — у всех статус <code>✅ Проверено 29.03.2026</code>. Снапшоты sync_30.03–07.04 новых товаров не содержат.<br>
    <strong>Ближайшие новые товары:</strong> ожидаются ~22.04.2026 (Chaos Rising, Mega Lucario ex, Mega Zygarde ex).
  </div>
  <div class="review-list">
    <h3>📋 Товары на проверку: 0</h3>
    <div class="review-item" style="color: #666; font-style: italic;">Все товары проверены владельцем — очередь пуста.</div>
  </div>
</div>

<!-- 2. moysklad-release-sync -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Запуск: 10.04.2026 02:04 · Сегодняшний запуск 🔄 ещё в процессе</div>
  <div class="result">
    Новых товаров для добавления нет. Все 4 товара со статусом «🟨 Скоро < 30 дн» уже добавлены в МойСклад:<br>
    — Ascended Heroes Mega ex Box — Mega Meganium ex ✅<br>
    — Ascended Heroes Mega ex Box — Mega Emboar ex ✅<br>
    — Ascended Heroes Mega ex Box — Mega Feraligatr ex ✅<br>
    — Ascended Heroes Booster Bundle ✅<br><br>
    <strong>Ближайший переход в 🟨:</strong> ~22.04.2026 — Chaos Rising ETB, Бустер-пак, Booster Bundle, Mini Tin; Mega Zygarde ex Premium Collection (все 22.05.2026, 43 дня).
  </div>
</div>

<!-- 3. moysklad-purchase-prices -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
    <span class="status status-warn">⚠️ Внимание</span>
  </div>
  <div class="time">Запуск: 10.04.2026 03:05 · Сегодняшний запуск 🔄 ещё в процессе</div>
  <div class="result">
    Обработано заказов: 19 | Товаров: 35 | Обновлено: 12 | Ошибок: 0
    <div class="divider"></div>
    <div class="alert-box">
      🔴 <strong>7 товаров — наценка ниже 40%:</strong><br>
      · <strong>P-01-001</strong> — продажа 1 690 &lt; закупки 2 000 (наценка −15.5%). Мин. цена: <strong>2 800 ₽</strong><br>
      · <strong>P-05-018-04</strong> (151 Blooming Waters Premium Collection) — 29 990 &lt; 33 666 (−10.9%). Мин.: <strong>47 133 ₽</strong><br>
      · <strong>P-01-019-02/03/04</strong> (Tech Sticker Блистеры) — наценка 30.2%. Мин.: <strong>6 440 ₽</strong><br>
      · <strong>P-01-019</strong> (Paldean Fates) — наценка 35.1%. Мин.: <strong>3 099 ₽</strong><br>
      · <strong>P-04-105</strong> (Prismatic Evolutions ETB) — наценка 39.5%, не хватает 90 ₽. Мин.: <strong>27 580 ₽</strong>
    </div>
    <div class="alert-box" style="margin-top:8px;">
      🟡 <strong>Предупреждения Ozon без скидки:</strong> P-01-058 (откл. 7%), P-01-001 (откл. 27%), P-04-105 (откл. 9%)
    </div>
    ✅ Без нарушений: P-BOO-POR, P-01-103, P-BOO-ASC-01, P-04-021
  </div>
</div>

<!-- 4. ebay-qwintry-sync -->
<div class="task">
  <div class="task-header">
    <span class="task-name">eBay / Qwintry синк <span class="task-id">ebay-qwintry-sync</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Запуск: 10.04.2026 06:02 · Сегодняшний запуск 🔄 ещё в процессе</div>
  <div class="result">
    <strong>Новые заказы (3):</strong>
    <table>
      <tr><th>#</th><th>Лот</th><th>Цена</th><th>Трек</th></tr>
      <tr><td>31</td><td>Rabsca Ex / Keldeo Ex / Chien-Pao / Alakazam (Set of 4)</td><td>$7.22</td><td>USPS 9400108106244005016986</td></tr>
      <tr><td>32</td><td>Mewtwo SV Promo 052 Holo Illustration Rare</td><td>$89.98</td><td>Shipped (untracked)</td></tr>
      <tr><td>33</td><td>Pikachu SMP 214 CGC 10 × 2 (Illustration Contest 2024)</td><td>$54.99</td><td>Awaiting shipment</td></tr>
    </table>
    <div class="divider"></div>
    <div class="alert-box info">
      📦 <strong>Исходящая посылка 07.04.26 #676582-US — отправлена!</strong><br>
      15 посылок собраны и отправлены (Qwintry Smart → самовывоз CDEK Москва, 09.04.2026)
    </div>
    <strong>Статус Qwintry:</strong> Ожидаемые — 5 посылок (включая новый #1016844-US) · Отправлено — 2 исходящих (#676582-US × 15 шт, #672708-US × 9 шт) · Без трека — 2 заказа (#32, #33)
  </div>
</div>

<!-- 5. moysklad-add-images-auto -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Фото товаров (авто) <span class="task-id">moysklad-add-images-auto</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Запуск: 10.04.2026 08:06 · Сегодняшний запуск 🔄 ещё в процессе</div>
  <div class="result">
    Проверено: 10 товаров | Уже есть фото: 8 ✅ | Загружено новых: 0 | Не найдено: 2 (исключённые ⛔️)<br>
    — Группа B (вышедшие): P-SET-ASC-01 (5 фото), P-SET-ASC-02 (5 фото), P-SET-ASC-03 (4 фото), P-ETB-POR (4 фото) — все ОК.<br>
    — Группа A (pre-release, релиз 24.04): P-SET-ASC-04/05/06 Mega ex Boxes — по 2 фото каждый. Back-фото на Amazon пока не появились, ожидаются ближе к 24 апреля.
  </div>
</div>

<!-- 6. backup-prompts-readme -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 10.04.2026 08:07</div>
  <div class="result">
    38 файлов сохранены без расхождений: root-файлы (7), prompts/ (28), scripts/ (3). Итого 460 KB.<br>
    Папка: <code>backups/2026-04-10_20-00/</code>
  </div>
</div>

<!-- 7. openclaw-daily-audit -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Аудит OpenClaw <span class="task-id">openclaw-daily-audit</span></span>
    <span class="status status-warn">⚠️ Частично</span>
  </div>
  <div class="time">Запуск: 10.04.2026 08:33 · Сегодняшний запуск 🔄 в процессе (101 ход)</div>
  <div class="result">
    Scheduled tasks — без отклонений: все 12 активных задач отработали в рамках последних 24–48 ч.<br>
    <div class="alert-box">
      🔴 <strong>Telegram Web недоступен — 7-й день подряд</strong><br>
      Вчера: 6-й, сегодня: 7-й последовательный сбой (redirect.js зависает, приложение не монтируется). Метрики контекста бота и health check получить невозможно.<br>
      <strong>Требуется ручное вмешательство:</strong> открыть Chrome-профиль Cowork и авторизоваться на web.telegram.org.
    </div>
    <div class="alert-box" style="margin-top:8px;">
      🧹 <strong>Рекомендация (уже 2+ дня):</strong> удалить 3 disabled задачи: <code>ozon-promo-audit</code>, <code>wb-promo-audit</code>, <code>pokemon-tcg-duplicate-photos</code>. Принять решение по <code>ozon-competitor-analysis</code> (35+ дней выключена).
    </div>
  </div>
</div>

<!-- 8. update-pokemon-releases -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Календарь релизов <span class="task-id">update-pokemon-releases</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 09.04.2026 22:07 · Следующий: сегодня 22:07 🔄 в процессе</div>
  <div class="result">
    Обновлены статусы и дни до релиза по всей таблице. Проверена Bulbapedia на новые товары.<br>
    <span class="tag tag-new">🆕 Новый товар</span> <strong>First Partner Illustration Collection Series 2</strong> — International release: 19.06.2026 (содержит бустеры + промо-карты). Добавлен в календарь.
  </div>
</div>

<!-- 9. moysklad-backup -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 09.04.2026 23:08</div>
  <div class="result">
    Файл: <code>moysklad/backup/товары_09.04.2026.xlsx</code> — 450 КБ<br>
    Экспортировано: <strong>701 позиция</strong> (693 товара + 8 модификаций, 110 столбцов). Экспорт выполнен в 23:09. Данные подтверждены.
  </div>
</div>

<!-- 10. wb-auto-promo-audit -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Автоакции WB <span class="task-id">wb-auto-promo-audit</span></span>
    <span class="status status-warn">⚠️ Данные неполные</span>
  </div>
  <div class="time">Последний запуск: 09.04.2026 10:35 · Следующий: сегодня 10:35</div>
  <div class="result">
    Проверено автоакций: 49. Исключений не выполнено, ошибок нет.<br>
    <div class="alert-box">
      🟡 <strong>products_ok = 0</strong> — ни один товар не имеет заполненного поля «Цена Ozon минимальная» в МойСклад. Скрипт не может сравнивать цены и принимать решения. Необходимо заполнить это поле для отслеживаемых товаров.
    </div>
  </div>
</div>

<!-- 11. ozon-auto-promo-audit -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Автоакции Ozon <span class="task-id">ozon-auto-promo-audit</span></span>
    <span class="status status-error">❌ Ошибка</span>
  </div>
  <div class="time">Последний запуск: 09.04.2026 09:37 · Следующий: сегодня 09:37</div>
  <div class="result">
    <div class="alert-box error">
      ❌ <strong>API Error 403 Forbidden</strong> — запрос к МойСклад API отклонён.<br>
      Возможные причины: истёк или отозван API-токен, изменились права доступа. Требуется проверка credentials / токена в настройках МойСклад.
    </div>
  </div>
</div>

<!-- 12. daily-report-upload -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Загрузка отчёта на VPS <span class="task-id">daily-report-upload</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Запуск: 10.04.2026 09:05</div>
  <div class="result">
    Загружен <code>daily_09.04.2026.html</code> (16 974 байт) на VPS-дашборд в <code>/root/dashboard/reports/</code>. Все 5 чанков приняты, файл финализирован.
  </div>
</div>

<!-- 13. ozon-competitor-analysis (disabled) -->
<div class="task" style="opacity: 0.6;">
  <div class="task-header">
    <span class="task-name">Мониторинг конкурентов Ozon <span class="task-id">ozon-competitor-analysis</span></span>
    <span class="status status-disabled">⛔️ Отключена</span>
  </div>
  <div class="time">Последний запуск: 05.03.2026 — 35+ дней назад</div>
  <div class="result">Задача отключена. Openclaw-аудит рекомендует принять решение о судьбе задачи.</div>
</div>

<!-- FILES SECTION -->
<h2>📁 Проверка файлов</h2>
<div class="files">
  <div class="file-ok">✅ Бэкап МойСклад: <code>moysklad/backup/товары_09.04.2026.xlsx</code> (450 КБ, 09.04 23:09)</div>
  <div class="file-warn">⚠️ Бэкап МойСклад за 10.04.2026: ещё не создан (задача запустится в 23:08)</div>
  <div class="file-warn">⚠️ Календарь релизов: последнее обновление 08.04.2026 — сегодняшний запуск в процессе</div>
  <div class="file-ok">✅ Таблица eBay: <code>ebay/покупки_в_америке.xlsx</code> — обновлена 09.04 06:34 (33 заказа)</div>
  <div class="file-ok">✅ Бэкап промптов: <code>backups/2026-04-10_20-00/</code> — создан сегодня 08:07</div>
  <div class="file-warn">⚠️ Снапшот сегодня: <code>moysklad/snapshots/sync_10.04.2026.md</code> — ещё не создан (задача в процессе)</div>
  <div class="file-ok">✅ Фото-отчёт: <code>moysklad/images/отчёт_фото_09.04.2026.html</code> — создан вчера</div>
</div>

<!-- UPCOMING -->
<h2>🗓 Сегодня ещё запустятся</h2>
<div style="font-size: 13.5px; color: #555; line-height: 2;">
  <strong>09:37</strong> — ozon-auto-promo-audit (предыдущий запуск завершился с ошибкой 403)<br>
  <strong>10:35</strong> — wb-auto-promo-audit<br>
  <strong>22:07</strong> — update-pokemon-releases<br>
  <strong>23:08</strong> — moysklad-backup<br>
</div>

<br>
<div style="font-size: 11px; color: #bbb; border-top: 1px solid #eee; padding-top: 12px; margin-top: 24px;">
  Отчёт сгенерирован автоматически задачей <code>daily-report</code> · 10.04.2026 09:31 · Pokebarn
</div>

</body>
</html>
` },
  { iso: "2026-04-09", label: "09.04", fullLabel: "09.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 09.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 860px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 16px; }
    h2 { font-size: 18px; margin-top: 28px; margin-bottom: 12px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-size: 14px; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    .task-name { font-weight: 600; font-size: 15px; }
    .task-id { font-size: 11px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; display: inline-block; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 500; white-space: nowrap; flex-shrink: 0; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #555; margin-top: 10px; font-size: 13.5px; line-height: 1.6; }
    .time { color: #aaa; font-size: 12px; margin-top: 4px; }
    .alert-box { margin-top: 12px; padding: 10px 14px; border-radius: 6px; font-size: 13px; }
    .alert-red { background: #fff5f5; border-left: 4px solid #e53935; }
    .alert-yellow { background: #fffde7; border-left: 4px solid #fbc02d; }
    .alert-title { font-weight: 600; margin-bottom: 6px; }
    .alert-item { margin: 4px 0; color: #555; }
    .files { margin-top: 4px; font-size: 13.5px; }
    .file-row { margin: 8px 0; display: flex; align-items: baseline; gap: 6px; }
    .file-ok { color: #2e7d32; }
    .file-miss { color: #c62828; }
    .file-label { color: #666; min-width: 200px; }
    .review-list { margin-top: 12px; padding: 12px 14px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 13px; color: #f57f17; font-weight: 600; }
    .review-item { margin: 6px 0; font-size: 13px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .review-item .date { color: #aaa; font-size: 11px; margin-left: 4px; }
    .review-badge { display: inline-block; font-size: 10px; padding: 1px 6px; border-radius: 4px; margin-left: 4px; }
    .badge-pending { background: #fff3e0; color: #e65100; }
    .badge-edited { background: #e3f2fd; color: #1565c0; }
    .section-divider { border: none; border-top: 1px solid #eee; margin: 24px 0; }
    .tag-section { font-size: 11px; text-transform: uppercase; color: #bbb; letter-spacing: 0.5px; margin-bottom: 8px; }
    code { font-family: monospace; background: #f3f3f3; padding: 1px 5px; border-radius: 3px; font-size: 12px; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 09.04.2026</h1>

  <div class="summary">
    <strong>Задач активных:</strong> 11 &nbsp;|&nbsp;
    <strong>✅ Успешно:</strong> 8 &nbsp;|&nbsp;
    <strong>⚠️ Частично:</strong> 1 &nbsp;|&nbsp;
    <strong>❌ Ошибки:</strong> 2 &nbsp;|&nbsp;
    <strong>⛔ Отключена:</strong> 1
    <br><br>
    <strong>📋 Товаров на проверку:</strong> 0 — все проверены владельцем &nbsp;|&nbsp;
    <strong>🔴 Ценовых нарушений:</strong> 7 критичных + 3 предупреждения
  </div>

  <!-- 1. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 09.04.2026 01:06</div>
    <div class="result">
      Все 19 товаров проверены владельцем — снапшоты sync_08, sync_09, manual_09, sync_10, sync_28 имеют статус <code>✅ Проверено 29.03.2026</code>. Товаров, ожидающих проверки: <strong>0</strong>. Ближайшее пополнение ожидается ~22.04.2026 (Chaos Rising, Mega Lucario ex, Mega Zygarde ex — переход в 🟨).
    </div>
    <div class="review-list">
      <h3>📋 Товары на проверку (0 шт.)</h3>
      <div style="color:#888; font-size:13px;">Нет товаров, ожидающих проверки.</div>
    </div>
  </div>

  <!-- 2. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 09.04.2026 02:04</div>
    <div class="result">
      Все 4 товара со статусом «🟨 Скоро &lt; 30 дн» уже присутствуют в МойСклад (✅). Новых товаров для добавления нет. Снапшот <code>sync_09.04.2026.md</code> создан. Ближайшее пополнение — около <strong>22 апреля 2026</strong>.
    </div>
  </div>

  <!-- 3. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-warn">⚠️ Успешно (нарушения цен)</span>
    </div>
    <div class="time">Последний запуск: 09.04.2026 03:05</div>
    <div class="result">
      Заказов поставщикам: 19 | Товаров: 35 | <strong>Обновлено: 12</strong> | Без изменений: 23 | Ошибок: 0.
    </div>
    <div class="alert-box alert-red">
      <div class="alert-title">🔴 Критично — наценка ниже 40% (7 позиций)</div>
      <div class="alert-item">• <code>P-01-001</code> — Sword and Shield: Astral Radiance → продажа 1 690 р. &lt; закупки 2 000 р. (-15.5%). Мин. цена: <strong>2 800 р.</strong></div>
      <div class="alert-item">• <code>P-05-018-04</code> — 151 Blooming Waters Premium Collection → продажа 29 990 р. &lt; закупки 33 666 р. (-10.9%). Мин. цена: <strong>47 133 р.</strong></div>
      <div class="alert-item">• <code>P-01-019-02/03/04</code> — Блистеры Tech Sticker (Fidough/Greavard/Maschiff) → наценка 30.2%, мин. цена: <strong>6 440 р.</strong></div>
      <div class="alert-item">• <code>P-01-019</code> — Paldean Fates → наценка 35.1%, мин. цена: <strong>3 099 р.</strong></div>
      <div class="alert-item">• <code>P-04-105</code> — Prismatic Evolutions ETB → наценка 39.5%, не хватает 90 р. до минимума (мин. <strong>27 580 р.</strong>)</div>
    </div>
    <div class="alert-box alert-yellow">
      <div class="alert-title">🟡 Предупреждения — Ozon без скидки</div>
      <div class="alert-item">• <code>P-01-058</code> откл. 7% &nbsp;•&nbsp; <code>P-01-001</code> откл. 27% &nbsp;•&nbsp; <code>P-04-105</code> откл. 9%</div>
    </div>
  </div>

  <!-- 4. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay / Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 09.04.2026 06:01</div>
    <div class="result">
      Добавлено 3 новых заказа в таблицу покупок:
      <ul style="margin:8px 0; padding-left:20px;">
        <li>#31 — Rabsca Ex / Keldeo Ex / Chien-Pao / Alakazam (Set of 4) — $7.22 <em>(throggsne23)</em> — трек USPS 9400108106244005016986</li>
        <li>#32 — Mewtwo Scarlet &amp; Violet Promo 052 Holo IR — $89.98 <em>(wight-k-77)</em> — Shipped (Untracked)</li>
        <li>#33 — Pikachu SMP 214 CGC 10 Illustration Contest 2024 (x2) — $54.99 <em>(sleeveittous)</em> — Awaiting shipment</li>
      </ul>
      Создана посылка Qwintry <strong>#1016844-US</strong> для заказа #31 (Rabsca). Сборная посылка <strong>07.04 #676582-US</strong> с 15 посылками отправляется сегодня (Qwintry Smart / CDEK Москва).
    </div>
  </div>

  <!-- 5. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Автозагрузка фото <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 09.04.2026 08:06</div>
    <div class="result">
      Проверено 10 товаров. 8 уже имеют фото. Загружено новых: <strong>0</strong> (ничего не требовалось).
      Группа A (pre-release 24.04): <code>P-SET-ASC-04</code>, <code>P-SET-ASC-05</code>, <code>P-SET-ASC-06</code> (Mega ex Boxes) — по 2 фото, back-изображения на Amazon пока не появились. ⏳ Ожидаем ближе к 24 апреля.
    </div>
  </div>

  <!-- 6. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 09.04.2026 08:07 (утренний из 3 запусков)</div>
    <div class="result">
      Скопировано 36 файлов (5 корневых + 28 промптов + 3 скрипта). Размер бэкапа: <strong>412 КБ</strong>. Папка: <code>backups/2026-04-09_08-07/</code>. Отсутствующих файлов нет.
    </div>
  </div>

  <!-- 7. update-pokemon-releases -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 08.04.2026 22:27</div>
    <div class="result">
      Обнаружен 1 новый товар на Bulbapedia: <strong>First Partner Illustration Collection Series 2</strong> (19.06.2026, бустеры + промо карточки). Остальные новые разделы H2 — аксессуары и нетоварная продукция, проигнорированы. Файл <code>календарь_релизов.xlsx</code> обновлён.
    </div>
  </div>

  <!-- 8. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 08.04.2026 23:07</div>
    <div class="result">
      Файл <code>товары_08.04.2026.xlsx</code> создан (<strong>449.9 КБ</strong> / 460 655 байт).
      701 строка: 693 товара + 8 модификаций. Столбцов: 110.
      По типам: Карточки 423, Фигурки Amiibo 158, Фигурки Funko 57, Комплекты 14, Услуги 8.
    </div>
  </div>

  <!-- 9. ozon-competitor-analysis (disabled) -->
  <div class="task" style="opacity:0.6;">
    <div class="task-header">
      <span class="task-name">Мониторинг конкурентов Ozon <span class="task-id">ozon-competitor-analysis</span></span>
      <span class="status status-disabled">⛔ Отключена</span>
    </div>
    <div class="time">Последний запуск: 06.03.2026 02:00 (35 дней назад)</div>
    <div class="result">Задача отключена. Решение о включении не принято.</div>
  </div>

  <hr class="section-divider">
  <div class="tag-section">Дополнительные задачи</div>

  <!-- wb-auto-promo-audit -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Автоакции WB <span class="task-id">wb-auto-promo-audit</span></span>
      <span class="status status-error">❌ Ошибка</span>
    </div>
    <div class="time">Последний запуск: 08.04.2026 10:35</div>
    <div class="result">
      Ошибка аутентификации: <code>API Error 403 — Request not allowed</code>. Задача не смогла подключиться к WB API. Требуется проверка токена доступа.
    </div>
  </div>

  <!-- ozon-auto-promo-audit -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Автоакции Ozon <span class="task-id">ozon-auto-promo-audit</span></span>
      <span class="status status-error">❌ Ошибка</span>
    </div>
    <div class="time">Последний запуск: 08.04.2026 09:38</div>
    <div class="result">
      Ошибка аутентификации: <code>API Error 403 — Request not allowed</code>. Задача не смогла подключиться к Ozon API. Требуется проверка токена доступа.
    </div>
  </div>

  <!-- openclaw-daily-audit -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Аудит OpenClaw <span class="task-id">openclaw-daily-audit</span></span>
      <span class="status status-warn">⚠️ Частично</span>
    </div>
    <div class="time">Последний запуск: 09.04.2026 08:32</div>
    <div class="result">
      <strong>Telegram Web — недоступен (6-й подряд деградированный аудит).</strong> Метрики контекста бота и health check получить не удалось. Требуется ручное вмешательство: открыть Chrome-профиль Cowork и авторизоваться на web.telegram.org.
      <br><br>
      Scheduled tasks — все 12 активных задач в норме. Рекомендация: удалить 3 disabled-задачи (<code>ozon-promo-audit</code>, <code>wb-promo-audit</code>, <code>pokemon-tcg-duplicate-photos</code>) и принять решение по <code>ozon-competitor-analysis</code> (35 дней выключена).
    </div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-row">
      <span class="file-ok">✅</span>
      <span class="file-label">Бэкап МойСклад (08.04):</span>
      <span><code>товары_08.04.2026.xlsx</code> — 449.9 КБ</span>
    </div>
    <div class="file-row">
      <span class="file-miss">❌</span>
      <span class="file-label">Бэкап МойСклад (09.04):</span>
      <span style="color:#c62828;">Ещё не создан — по расписанию в 23:08</span>
    </div>
    <div class="file-row">
      <span class="file-ok">✅</span>
      <span class="file-label">Календарь релизов:</span>
      <span><code>releases/календарь_релизов.xlsx</code> — обновлён 08.04.2026</span>
    </div>
    <div class="file-row">
      <span class="file-ok">✅</span>
      <span class="file-label">Покупки eBay:</span>
      <span><code>ebay/покупки_в_америке.xlsx</code> — обновлён 09.04.2026 06:34</span>
    </div>
    <div class="file-row">
      <span class="file-ok">✅</span>
      <span class="file-label">Снапшот релизов:</span>
      <span><code>moysklad/snapshots/sync_09.04.2026.md</code> — создан сегодня</span>
    </div>
    <div class="file-row">
      <span class="file-ok">✅</span>
      <span class="file-label">Бэкап промптов:</span>
      <span><code>backups/2026-04-09_08-07/</code> — 36 файлов, 412 КБ</span>
    </div>
  </div>

  <hr class="section-divider">
  <div style="font-size:12px; color:#bbb; margin-top:16px;">
    Отчёт сгенерирован автоматически задачей <code>daily-report</code> — 09.04.2026 09:30
  </div>
</body>
</html>
` },
  { iso: "2026-04-07", label: "07.04", fullLabel: "07.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 07.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 28px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; }
    .file-miss { color: #c62828; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .alert { margin-top: 8px; padding: 8px 12px; background: #ffebee; border-radius: 6px; border-left: 4px solid #c62828; font-size: 13px; color: #c62828; }
    .note { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
  
    /* Навигация */
    .report-nav { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; margin-bottom: 16px; border-bottom: 1px solid #e0e0e0; font-size: 13px; flex-wrap: wrap; gap: 8px; }
    .report-nav a { color: #1565c0; text-decoration: none; padding: 6px 12px; border: 1px solid #e0e0e0; border-radius: 6px; transition: background 0.15s; }
    .report-nav a:hover { background: #f5f5f5; }
    .report-nav .nav-center { color: #666; font-weight: 500; }
    .report-nav .nav-panel { background: #e8f5e9; border-color: #a5d6a7; color: #2e7d32 !important; font-weight: 500; }
    .report-nav .nav-disabled { color: #ccc; border-color: #eee; cursor: default; }
  </style>
</head>
<body>
  <div class="report-nav">
    <a href="daily_06.04.2026.html">← 06.04.2026</a>
    <span class="nav-center">☀️ 07.04.2026</span>
    <div style="display:flex;gap:8px">
      <span class="nav-disabled">нет →</span>
      <a href="../панель_задач.html" class="nav-panel">📅 Панель задач</a>
    </div>
  </div>
  <h1>☀️ Утренний отчёт — 07.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 9 из 11 |
    <strong>Успешно:</strong> 9 |
    <strong>Ошибки:</strong> 0 |
    <strong>Не запускались:</strong> 2 |
    <strong>Отключены:</strong> 3
    <br><br>
    <strong>📋 Товаров на проверку:</strong> 0
  </div>

  <!-- 1. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 07.04.2026 01:07</div>
    <div class="result">Все 19 товаров в снапшотах имеют статус ✅ Проверено. Ожидают проверки: 0. Правки владельца: 0. Изменений в правила: 0.</div>
  </div>

  <!-- 2. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 07.04.2026 02:05</div>
    <div class="result">Новых товаров не добавлено. Все 4 товара «🟨 Скоро &lt; 30 дн» уже в МойСклад: P-SET-ASC-03 (Mega Meganium ex Box), P-SET-ASC-04 (Mega Emboar ex Box), P-SET-ASC-05 (Mega Feraligatr ex Box), P-SET-ASC-06 (Booster Bundle). Ближайшее пополнение ~22.04 (Chaos Rising, Mega Zygarde).</div>
    <div class="note">ℹ️ Непроверенных товаров нет — все снапшоты ✅ Проверено.</div>
  </div>

  <!-- 3. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 07.04.2026 03:05</div>
    <div class="result">Заказов обработано: 9, товаров проверено: 31, цен обновлено: 1, ошибок: 0. Обновлено: P-01-019 (Бустер Paldean Fates) — закупочная 0 → 2068 руб.</div>
    <div class="alert">🔴 Критичное нарушение наценки: P-01-019 (Бустер Paldean Fates) — наценка 39.7% &lt; 40%. Продажа: 2890 руб, закупочная: 2068 руб. Минимум для 40%: 2896 руб.</div>
  </div>

  <!-- 4. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay / Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 07.04.2026 06:02</div>
    <div class="result">Новых заказов нет. 2 посылки обновлены: Japanese Pokemon Southern Islands (#1015647-US) и Bulbasaur Squirtle Charmander Foil (#1014204-US) — «Ожидаемая» → «На складе». В пути на склад: 4 посылки. На складе: ~15 посылок. Отправлены в Россию: 9.</div>
    <div class="note">⚠️ Qwintry работал медленно — страницы входящих/исходящих не загружались. Рекомендуется повторная проверка.</div>
  </div>

  <!-- 5. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 07.04.2026 08:06</div>
    <div class="result">Проверено: 11 товаров. Уже есть фото: 9. Загружено новых: 0. Не найдено в МойСклад: 2 (Perfect Order Бустер Бокс, Perfect Order ETB — Tyrunt). Все pre-release товары Ascended Heroes (4 шт.) уже с фото (2–3 шт.).</div>
    <div class="note">⚠️ 2 товара отмечены «В МойСклад ✅» в календаре, но не найдены в МойСклад. Требуется ручная проверка.</div>
  </div>

  <!-- 6. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 07.04.2026 08:07</div>
    <div class="result">Бэкап завершён: 28 файлов (4 из корня + 24 из prompts/), 308 КБ. Все размеры совпадают. Папка: backups/2026-04-07_08-07/.</div>
  </div>

  <!-- 7. update-pokemon-releases -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 22:07</div>
    <div class="result">Обновлено 83 строки: 🟥 Вышел — 61, 🟨 Скоро — 4, 🟩 &gt; 30 дней — 18. Bulbapedia проверена (75 секций), новых товаров не обнаружено. Форматирование применено.</div>
    <div class="note">📅 <a href="releases/календарь_релизов.html">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 8. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 23:08</div>
    <div class="result">Файл: товары_06.04.2026.xlsx (460 КБ). Всего записей: 701 (товаров: 671, комплектов: 14, модификаций: 8, услуг: 8). Колонок: 110.</div>
  </div>

  <!-- 9. openclaw-daily-audit -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Аудит OpenClaw <span class="task-id">openclaw-daily-audit</span></span>
      <span class="status status-warn">⚠️ С ограничениями</span>
    </div>
    <div class="time">Последний запуск: 07.04.2026 08:33</div>
    <div class="result">Деградированный аудит — Telegram Web не загружается 4-й аудит подряд. daily-report восстановился после пропуска 2 дней. Добавлены 4 новые задачи промо-аудита. Все 12 активных scheduled tasks работают штатно.</div>
    <div class="alert">🔴 Telegram Web — хроническая проблема, блокирует 70% аудита. Приоритет №1.</div>
  </div>

  <!-- 10. wb-auto-promo-audit -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Автоакции WB <span class="task-id">wb-auto-promo-audit</span></span>
      <span class="status status-skip">⏭ Ещё не запускалась</span>
    </div>
    <div class="time">Следующий запуск: 07.04.2026 10:35</div>
    <div class="result">Задача запланирована на 10:35, отчёт сгенерирован в 09:30.</div>
  </div>

  <!-- 11. ozon-auto-promo-audit -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Автоакции Ozon <span class="task-id">ozon-auto-promo-audit</span></span>
      <span class="status status-skip">⏭ Ещё не запускалась</span>
    </div>
    <div class="time">Следующий запуск: 07.04.2026 09:37</div>
    <div class="result">Новая задача, сессия ещё не создана.</div>
  </div>

  <!-- Disabled tasks -->
  <div class="task" style="opacity: 0.6;">
    <div class="task-header">
      <span class="task-name">Мониторинг конкурентов <span class="task-id">ozon-competitor-analysis</span></span>
      <span class="status status-disabled">⏸ Отключена</span>
    </div>
    <div class="time">Последний запуск: 05.03.2026</div>
  </div>

  <div class="task" style="opacity: 0.6;">
    <div class="task-header">
      <span class="task-name">Промоакции Ozon <span class="task-id">ozon-promo-audit</span></span>
      <span class="status status-disabled">⏸ Отключена</span>
    </div>
    <div class="time">Не запускалась</div>
  </div>

  <div class="task" style="opacity: 0.6;">
    <div class="task-header">
      <span class="task-name">Промоакции WB <span class="task-id">wb-promo-audit</span></span>
      <span class="status status-disabled">⏸ Отключена</span>
    </div>
    <div class="time">Не запускалась</div>
  </div>

  <!-- Файлы -->
  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_06.04.2026.xlsx (460 КБ)</div>
    <div class="file-miss">❌ Бэкап МойСклад за 07.04: ещё не создан (запуск в 23:00)</div>
    <div class="file-ok">✅ Календарь релизов: календарь_релизов.xlsx (26.8 КБ, обновлён 06.04)</div>
    <div class="file-ok">✅ Покупки eBay: покупки_в_америке.xlsx (11.3 КБ, обновлён 07.04)</div>
    <div class="file-ok">✅ Снапшот sync: sync_07.04.2026.md (1.3 КБ)</div>
    <div class="file-ok">✅ Снапшот verify: verify_07.04.2026.md (1.2 КБ)</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-07_08-07/ (308 КБ)</div>
  </div>

</body>
</html>` },
  { iso: "2026-04-06", label: "06.04", fullLabel: "06.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 06.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 32px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; white-space: nowrap; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-warn { background: #fff3e0; color: #e65100; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-running { background: #e3f2fd; color: #1565c0; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; }
    .file-miss { color: #c62828; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #4caf50; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #2e7d32; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .review-item .date { color: #999; font-size: 12px; }
    .review-badge { display: inline-block; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; }
    .badge-pending { background: #fff3e0; color: #e65100; }
    .badge-edited { background: #e3f2fd; color: #1565c0; }
    .warnings { margin-top: 8px; padding: 10px; background: #fff8e1; border-radius: 6px; font-size: 13px; }
    .warnings strong { color: #e65100; }
    .critical { margin-top: 8px; padding: 10px; background: #ffebee; border-radius: 6px; font-size: 13px; }
    .critical strong { color: #c62828; }
  
    /* Навигация */
    .report-nav { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; margin-bottom: 16px; border-bottom: 1px solid #e0e0e0; font-size: 13px; flex-wrap: wrap; gap: 8px; }
    .report-nav a { color: #1565c0; text-decoration: none; padding: 6px 12px; border: 1px solid #e0e0e0; border-radius: 6px; transition: background 0.15s; }
    .report-nav a:hover { background: #f5f5f5; }
    .report-nav .nav-center { color: #666; font-weight: 500; }
    .report-nav .nav-panel { background: #e8f5e9; border-color: #a5d6a7; color: #2e7d32 !important; font-weight: 500; }
    .report-nav .nav-disabled { color: #ccc; border-color: #eee; cursor: default; }
  </style>
</head>
<body>
  <div class="report-nav">
    <a href="daily_03.04.2026.html">← 03.04.2026</a>
    <span class="nav-center">☀️ 06.04.2026</span>
    <div style="display:flex;gap:8px">
      <a href="daily_07.04.2026.html">07.04.2026 →</a>
      <a href="../панель_задач.html" class="nav-panel">📅 Панель задач</a>
    </div>
  </div>
  <h1>☀️ Утренний отчёт — 06.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 9 из 10 |
    <strong>Успешно:</strong> 7 |
    <strong>Выполняются:</strong> 2 |
    <strong>Ошибки:</strong> 0 |
    <strong>Отключены:</strong> 1
  </div>

  <!-- 1. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 12:25</div>
    <div class="result">Все 19 товаров проверены владельцем, непроверенных нет. Новых товаров с последней проверки (03.04) не добавлено. Ближайшие кандидаты на добавление (Chaos Rising, Mega Lucario ex League Battle Deck) ожидаются ~22.04.2026.</div>
  </div>

  <!-- 2. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 12:23</div>
    <div class="result">Новых товаров не добавлено. Все 5 товаров со статусом «🟨 Скоро &lt; 30 дн» обработаны: 4 добавлены в МойСклад (✅), 1 исключён (⛔️ World Championships Decks). Ближайшая волна ~22.04 (Chaos Rising, Mega Lucario League Battle Deck, Mega Zygarde Premium Collection).</div>
    <div class="review-list" style="background: #e8f5e9; border-left-color: #4caf50;">
      <h3 style="color: #2e7d32;">✅ Все товары проверены (0 на проверку)</h3>
      <div style="font-size: 13px; color: #666;">Непроверенных товаров (⏳) и товаров с правками (🔍) не обнаружено.</div>
    </div>
  </div>

  <!-- 3. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-warn">⚠️ С предупреждениями</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 12:26</div>
    <div class="result">Заказов: 7, товаров: 30, период: 30.03–06.04. Обновлено: 19, без изменений: 11, ошибки: 0.</div>
    <div class="critical">
      <strong>🔴 Критичные нарушения (2):</strong><br>
      P-01-018-01 (Pokemon: 151 Booster Bundle) — наценка 39.6% &lt; 40%. Продажа 20 940₽, минимум 21 000₽.<br>
      P-01-018 (Pokemon: Бустер 151) — наценка 39.6% &lt; 40%. Продажа 3 490₽, минимум 3 500₽.
    </div>
    <div class="warnings">
      <strong>🟡 Предупреждения (14):</strong> цена Ozon без скидки не соответствует формуле (Ozon × 2) у 13 из 19 обновлённых товаров. Также отклонения по цене Ozon у T-A-005-07 и P-04-015.
    </div>
  </div>

  <!-- 4. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay/Qwintry синхронизация <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-running">🔄 Выполняется</span>
    </div>
    <div class="time">Запущена: 06.04.2026 12:21</div>
    <div class="result">Задача ещё выполняется (80 шагов). На момент отчёта — пересчёт формул в таблице покупок.</div>
  </div>

  <!-- 5. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-running">🔄 Выполняется</span>
    </div>
    <div class="time">Запущена: 06.04.2026 12:26</div>
    <div class="result">Задача ещё выполняется (237 шагов). На момент отчёта — поиск фото для Pokemon Center ETB.</div>
  </div>

  <!-- 6. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 12:25</div>
    <div class="result">Скопировано 24 файла (232 КБ): 3 README, панель_задач.html, 20 промптов. Бэкап в backups/2026-04-06_12-25/.</div>
  </div>

  <!-- 7. update-pokemon-releases -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 12:21</div>
    <div class="result">Обновлено 83 строки. «2025 Pokémon World Championships Decks» сменил статус 🟨→🟥 (вышел 03.04, прошло 3 дня). Итог: 🟥 Вышел — 61, 🟨 Скоро — 4, 🟩 &gt; 30 дней — 18. Новых товаров с Bulbapedia: 0.</div>
  </div>

  <!-- 8. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 12:21</div>
    <div class="result">Экспортировано 691 товар + 8 модификаций (702 строки), 110 столбцов. Файл: товары_06.04.2026.xlsx (450 КБ).</div>
  </div>

  <!-- 9. ozon-competitor-analysis -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Мониторинг конкурентов <span class="task-id">ozon-competitor-analysis</span></span>
      <span class="status status-disabled">⏸ Отключена</span>
    </div>
    <div class="time">Последний запуск: 05.03.2026</div>
    <div class="result">Задача отключена 32 дня назад.</div>
  </div>

  <!-- 10. openclaw-daily-audit (extra) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Аудит OpenClaw <span class="task-id">openclaw-daily-audit</span></span>
      <span class="status status-warn">⚠️ Деградированный</span>
    </div>
    <div class="time">Последний запуск: 06.04.2026 12:43</div>
    <div class="result">Аудит завершён в деградированном режиме: Telegram Web недоступен из Chrome — метрики контекста и health check не получены.</div>
    <div class="critical">
      <strong>🔴 Критичное:</strong><br>
      daily-report пропустил 2 дня запусков (последний 04.04).<br>
      Пропущено 2 аудита подряд (04.04, 05.04).
    </div>
    <div class="warnings">
      <strong>🟡 Требует внимания:</strong> OpenClaw не обновлялся 24+ дней. Календарь auth expired (с 03.04). ozon-competitor-analysis отключена 32 дня.
    </div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_06.04.2026.xlsx (450 КБ)</div>
    <div class="file-ok">✅ Календарь релизов: календарь_релизов.xlsx (26 КБ, обновлён 06.04)</div>
    <div class="file-ok">✅ Покупки eBay: покупки_в_америке.xlsx (10 КБ, обновляется)</div>
    <div class="file-ok">✅ Снапшот синхронизации: sync_06.04.2026.md</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-06_12-25/ (24 файла)</div>
    <div class="file-miss">❌ Бэкап МойСклад за вчера (05.04): отсутствует</div>
    <div class="file-miss">❌ Снапшот sync за вчера (05.04): отсутствует</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-03", label: "03.04", fullLabel: "03.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 03.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 28px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #666; margin-top: 8px; font-size: 14px; line-height: 1.5; }
    .time { color: #999; font-size: 12px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; }
    .file-miss { color: #c62828; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .review-item .date { color: #999; font-size: 12px; }
    .review-badge { display: inline-block; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; }
    .badge-pending { background: #fff3e0; color: #e65100; }
    .badge-edited { background: #e3f2fd; color: #1565c0; }
    .gen-time { color: #aaa; font-size: 12px; margin-top: 32px; text-align: center; }
  
    /* Навигация */
    .report-nav { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; margin-bottom: 16px; border-bottom: 1px solid #e0e0e0; font-size: 13px; flex-wrap: wrap; gap: 8px; }
    .report-nav a { color: #1565c0; text-decoration: none; padding: 6px 12px; border: 1px solid #e0e0e0; border-radius: 6px; transition: background 0.15s; }
    .report-nav a:hover { background: #f5f5f5; }
    .report-nav .nav-center { color: #666; font-weight: 500; }
    .report-nav .nav-panel { background: #e8f5e9; border-color: #a5d6a7; color: #2e7d32 !important; font-weight: 500; }
    .report-nav .nav-disabled { color: #ccc; border-color: #eee; cursor: default; }
  </style>
</head>
<body>
  <div class="report-nav">
    <a href="daily_02.04.2026.html">← 02.04.2026</a>
    <span class="nav-center">☀️ 03.04.2026</span>
    <div style="display:flex;gap:8px">
      <a href="daily_06.04.2026.html">06.04.2026 →</a>
      <a href="../панель_задач.html" class="nav-panel">📅 Панель задач</a>
    </div>
  </div>
  <h1>☀️ Утренний отчёт — 03.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 8 из 9 |
    <strong>Успешно:</strong> 8 |
    <strong>Ошибки:</strong> 0 |
    <strong>Отключены:</strong> 1
  </div>

  <!-- 1. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 03.04.2026 01:07</div>
    <div class="result">Просканировано 14 файлов снапшотов. Все 18 товаров имеют статус «✅ Проверено 29.03.2026». Товаров со статусом ⏳ или 🔍 не обнаружено — сравнение с МойСклад не потребовалось.</div>
  </div>

  <!-- 2. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 03.04.2026 02:05</div>
    <div class="result">Новых товаров нет. Все ранее добавленные товары проверены владельцем.</div>
    <div style="margin-top: 10px; padding: 10px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #4caf50; font-size: 14px; color: #2e7d32;">
      ✅ Нет товаров на проверку — все товары проверены владельцем.
    </div>
  </div>

  <!-- 3. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 03.04.2026 03:05</div>
    <div class="result">Период: 27.03 – 03.04.2026. Обработано 2 заказа, проверено 7 товаров. Цен обновлено: 0 — все закупочные цены актуальны. Ошибок нет.</div>
  </div>

  <!-- 4. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация eBay / Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 03.04.2026 06:02</div>
    <div class="result">
      <strong>Новый заказ:</strong> Pikachu (Secret) 160/159 Crown Zenith Holo — $32.07, уже в исходящей отправке #672708-US.<br>
      <strong>Обновлены статусы:</strong> 5 заказов доставлены на склад Qwintry (First Partners, Blastoise EX, Pikachu 173/165, Charmeleon 169/165, Charmander 168/165).<br>
      <strong>Задержки:</strong> Japanese Southern Islands ($219.95) и Foil Card Lot ($79.85) — просрочена доставка, ожидают в Qwintry.<br>
      <strong>На складе Qwintry:</strong> 10 посылок. Исходящая отправка #672708-US в пути в Москву (11 посылок).
    </div>
  </div>

  <!-- 5. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 03.04.2026 08:06</div>
    <div class="result">Проверено 12 товаров: у 10 уже есть фото, загружено сегодня: 0. Не найдены в МойСклад: 2 товара (Perfect Order Бустер Бокс, Perfect Order ETB — Pokemon Center).</div>
  </div>

  <!-- 6. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 03.04.2026 08:07</div>
    <div class="result">Скопировано 24 файла (4 корневых + 20 промптов), общий размер 268 КБ. Все размеры совпадают с оригиналами. Сохранено в backups/2026-04-03_08-07/.</div>
  </div>

  <!-- 7. update-pokemon-releases -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 22:07</div>
    <div class="result">Пересчитано 83 строки, все статусы актуальны. Проверены 75 секций Bulbapedia — новых карточных товаров не обнаружено. Форматирование применено.</div>
  </div>

  <!-- 8. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 23:08</div>
    <div class="result">Файл: товары_02.04.2026.xlsx (449 КБ). Экспортировано 699 товаров + 8 модификаций (110 столбцов).</div>
  </div>

  <!-- 9. ozon-competitor-analysis -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Мониторинг конкурентов <span class="task-id">ozon-competitor-analysis</span></span>
      <span class="status status-disabled">⏸ Отключена</span>
    </div>
    <div class="time">Последний запуск: 05.03.2026</div>
    <div class="result">Задача отключена.</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_02.04.2026.xlsx (449 КБ)</div>
    <div class="file-miss">❌ Бэкап МойСклад за 03.04.2026: отсутствует (запуск в 23:00)</div>
    <div class="file-ok">✅ Календарь релизов: календарь_релизов.xlsx (26.8 КБ, обновлён 02.04.2026)</div>
    <div class="file-ok">✅ Покупки в Америке: покупки_в_америке.xlsx (10.4 КБ, обновлён 03.04.2026)</div>
    <div class="file-miss">❌ Снапшот sync за 03.04: отсутствует (новых товаров не было)</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-03_08-07/ (24 файла)</div>
  </div>

  <div class="gen-time">Отчёт сгенерирован автоматически 03.04.2026</div>
</body>
</html>
` },
  { iso: "2026-04-02", label: "02.04", fullLabel: "02.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 02.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 28px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .status-running { background: #e3f2fd; color: #1565c0; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; }
    .file-miss { color: #c62828; margin: 4px 0; }
    .file-info { color: #666; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #4caf50; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #2e7d32; }
    .note { margin-top: 8px; padding: 8px 12px; background: #fff8e1; border-radius: 4px; font-size: 13px; color: #f57f17; }
  
    /* Навигация */
    .report-nav { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; margin-bottom: 16px; border-bottom: 1px solid #e0e0e0; font-size: 13px; flex-wrap: wrap; gap: 8px; }
    .report-nav a { color: #1565c0; text-decoration: none; padding: 6px 12px; border: 1px solid #e0e0e0; border-radius: 6px; transition: background 0.15s; }
    .report-nav a:hover { background: #f5f5f5; }
    .report-nav .nav-center { color: #666; font-weight: 500; }
    .report-nav .nav-panel { background: #e8f5e9; border-color: #a5d6a7; color: #2e7d32 !important; font-weight: 500; }
    .report-nav .nav-disabled { color: #ccc; border-color: #eee; cursor: default; }
  </style>
</head>
<body>
  <div class="report-nav">
    <a href="daily_01.04.2026.html">← 01.04.2026</a>
    <span class="nav-center">☀️ 02.04.2026</span>
    <div style="display:flex;gap:8px">
      <a href="daily_03.04.2026.html">03.04.2026 →</a>
      <a href="../панель_задач.html" class="nav-panel">📅 Панель задач</a>
    </div>
  </div>
  <h1>☀️ Утренний отчёт — 02.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 9 из 10 |
    <strong>Успешно:</strong> 7 |
    <strong>В процессе:</strong> 2 |
    <strong>Ошибки:</strong> 0 |
    <strong>Отключены:</strong> 1
  </div>

  <!-- 1. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 ~10:44</div>
    <div class="result">Проверены все файлы снапшотов. Все 19 товаров имеют статус «✅ Проверено 29.03.2026». Новых товаров со статусом ⏳ или 🔍 не обнаружено. Сравнение с МойСклад не потребовалось.</div>
  </div>

  <!-- 2. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 ~10:43</div>
    <div class="result">Новых товаров для добавления нет. 4 строки со статусом «🟨 Скоро &lt; 30 дн» уже обработаны: строка 40 (World Championships Decks) помечена ⛔️ как исключение, строки 54–57 (Ascended Heroes Mega ex Boxes и Booster Bundle, релиз 24.04.2026) уже добавлены в МойСклад. Все снапшоты — «✅ Проверено».</div>
    <div class="review-list">
      <h3>📋 Товары на проверку: 0 шт.</h3>
      Все товары проверены владельцем. Непроверенных позиций нет.
    </div>
  </div>

  <!-- 3. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 ~10:45</div>
    <div class="result">Обработано 2 заказа (№00055 от 29.03, №00053 от 26.03), проверено 7 товаров. Закупочных цен обновлено: 0 — все текущие цены равны или выше цен из заказов.</div>
    <div class="note">⚠️ P-SET-MEG-03 (First Partner Illustration Collection Series 1) — все цены продажи стоят как заглушка 99 999 руб. при закупочной 4 500 руб. Рекомендуется установить корректные цены.</div>
  </div>

  <!-- 4. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay / Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-running">🔄 Выполняется</span>
    </div>
    <div class="time">Запущена: 02.04.2026 ~10:38</div>
    <div class="result">Задача ещё выполняется (33 шага). Текущий этап: заполнение деклараций посылок в Qwintry.</div>
  </div>

  <!-- 5. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-running">🔄 Выполняется</span>
    </div>
    <div class="time">Запущена: 02.04.2026 ~10:45</div>
    <div class="result">Задача ещё выполняется (61 шаг). Работа с карточками товаров в МойСклад.</div>
  </div>

  <!-- 6. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 10:43</div>
    <div class="result">Сохранено 24 файла (4 корневых + 20 из prompts/), общий размер 225 КБ. Все файлы прошли проверку, расхождений нет.</div>
  </div>

  <!-- 7. update-pokemon-releases -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 ~10:38</div>
    <div class="result">Обновлено 83 строки. Статусы: 🟥 Вышел — 60, 🟨 Скоро &lt; 30 дн — 5, 🟩 &gt; 30 дней — 18. Проверены 75 секций Bulbapedia — новых карточных товаров не обнаружено. Форматирование применено.</div>
  </div>

  <!-- 8. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 ~10:38</div>
    <div class="result">Файл: товары_02.04.2026.xlsx (449 КБ). Экспортировано 699 товаров + 8 модификаций, 110 столбцов.</div>
  </div>

  <!-- 9. openclaw-daily-audit (дополнительная) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Аудит OpenClaw <span class="task-id">openclaw-daily-audit</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 02.04.2026 ~11:05</div>
    <div class="result">Контекст стабилен — рост нулевой 7 дней подряд. Health check пройден: Gateway OK (30ms), Telegram ON/OK, модель gpt-5.2.</div>
    <div class="note">⚠️ Обновление OpenClaw 2026.4.1 доступно (текущая 2026.3.13, не обновлялось 20+ дней). Агент не создаёт daily memory 7 дней. WhatsApp: хроническая проблема с credentials.</div>
  </div>

  <!-- 10. ozon-competitor-analysis -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Мониторинг конкурентов <span class="task-id">ozon-competitor-analysis</span></span>
      <span class="status status-disabled">⏸ Отключена</span>
    </div>
    <div class="time">Последний запуск: 05.03.2026</div>
    <div class="result">Задача отключена. Не запускалась 28 дней.</div>
  </div>

  <!-- Секция проверки файлов -->
  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_02.04.2026.xlsx (449 КБ)</div>
    <div class="file-ok">✅ Календарь релизов: календарь_релизов.xlsx (обновлён 02.04.2026)</div>
    <div class="file-info">ℹ️ Покупки eBay: покупки_в_америке.xlsx (обновлён 29.03.2026 — задача ещё выполняется)</div>
    <div class="file-miss">❌ Снапшот синхронизации за сегодня/вчера: отсутствует (последний: sync_31.03.2026)</div>
    <div class="file-ok">✅ Бэкап промптов: 2026-04-02_10-43/</div>
  </div>
</body>
</html>
` }
];
