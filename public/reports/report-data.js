window.POKEBARN_REPORTS = [
  { iso: "2026-04-27", label: "27.04", fullLabel: "27.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 27.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 32px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 4px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .file-warn { color: #e65100; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 5px 0; font-size: 13px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-warn { margin-top: 8px; padding: 8px 12px; background: #fff3e0; border-radius: 6px; border-left: 4px solid #ff9800; font-size: 13px; color: #e65100; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 27.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 8 из 8 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 8 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0 &nbsp;|&nbsp;
    <strong>Не запускались:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 27.04.2026 00:07</div>
    <div class="result">
      Все 97 товаров проверены, статусы пересчитаны. Новых товаров не обнаружено — таблица актуальна.
      Bulbapedia заблокирована Cloudflare; проверка выполнена через pokemon.com, PokeBeach, CardChill и TCGRadar.
      HTML-календарь перегенерирован (123 849 символов).
    </div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров МойСклад <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 27.04.2026 01:07</div>
    <div class="result">
      Правок владельца: 0. Обновлений правил: 0.
      12 блистеров (6×Mega Evolution, 6×Phantasmal Flames), созданных синком 26.04.2026, подтверждены — данные в МойСклад совпадают со снапшотом.
      <br><em>Примечание: API МойСклад v1.2 через online.moysklad.ru возвращает ошибку 410 — потребуется обновить URL на api.moysklad.ru для будущих задач.</em>
    </div>
    <div class="review-list">
      <h3>⏳ Ожидают проверки владельцем — 12 товаров (добавлены 26.04.2026)</h3>
      <div class="review-item">P-BLS-MEG-02 — <a href="https://online.moysklad.ru/app/#good/edit?id=b599638b-4104-11f1-0a80-1324001da8f1" target="_blank">Блистер Pokemon Mega Evolution (Drifloon)</a></div>
      <div class="review-item">P-BLS-MEG-03 — <a href="https://online.moysklad.ru/app/#good/edit?id=89ed9fae-4105-11f1-0a80-161c001e8bb3" target="_blank">Блистер Pokemon Mega Evolution (Drifblim)</a></div>
      <div class="review-item">P-BLS-MEG-04 — <a href="https://online.moysklad.ru/app/#good/edit?id=045d837d-4107-11f1-0a80-1a2c001da5e2" target="_blank">Блистер Pokemon Mega Evolution (Meowscarada)</a></div>
      <div class="review-item">P-BLS-MEG-05 — <a href="https://online.moysklad.ru/app/#good/edit?id=4f9b7c05-4107-11f1-0a80-1a2c001da642" target="_blank">Блистер Pokemon Mega Evolution (Tyranitar)</a></div>
      <div class="review-item">P-BLS-MEG-06 — <a href="https://online.moysklad.ru/app/#good/edit?id=8e0e301d-4107-11f1-0a80-18f4001e2d9e" target="_blank">Блистер Pokemon Mega Evolution (Wailord)</a></div>
      <div class="review-item">P-BLS-MEG-07 — <a href="https://online.moysklad.ru/app/#good/edit?id=ccb2edec-4107-11f1-0a80-0e0b001ebb4d" target="_blank">Блистер Pokemon Mega Evolution (Lycanroc)</a></div>
      <div class="review-item">P-BLS-PFL-01 — <a href="https://online.moysklad.ru/app/#good/edit?id=1d74adb0-4108-11f1-0a80-00a7001eb98c" target="_blank">Блистер Pokemon Phantasmal Flames (Cottonee)</a></div>
      <div class="review-item">P-BLS-PFL-02 — <a href="https://online.moysklad.ru/app/#good/edit?id=6406039d-4108-11f1-0a80-0d5a001e258d" target="_blank">Блистер Pokemon Phantasmal Flames (Whimsicott)</a></div>
      <div class="review-item">P-BLS-PFL-03 — <a href="https://online.moysklad.ru/app/#good/edit?id=f5697ff5-4108-11f1-0a80-0d5a001e25f9" target="_blank">Блистер Pokemon Phantasmal Flames (Sneasel)</a></div>
      <div class="review-item">P-BLS-PFL-04 — <a href="https://online.moysklad.ru/app/#good/edit?id=381f4223-4109-11f1-0a80-1324001dabdd" target="_blank">Блистер Pokemon Phantasmal Flames (Weavile)</a></div>
      <div class="review-item">P-BLS-PFL-05 — <a href="https://online.moysklad.ru/app/#good/edit?id=6c1663c3-4109-11f1-0a80-161c001e8f0f" target="_blank">Блистер Pokemon Phantasmal Flames (Blaziken)</a></div>
      <div class="review-item">P-BLS-PFL-06 — <a href="https://online.moysklad.ru/app/#good/edit?id=a3b133fb-4109-11f1-0a80-0d5a001e265f" target="_blank">Блистер Pokemon Phantasmal Flames (Hydrapple)</a></div>
    </div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 27.04.2026 02:06</div>
    <div class="result">
      Группа B (вышли за 30 дней): все 4 товара Ascended Heroes Mega ex Box уже имели фото — не требуется.
      Группа A (pre-release): для P-DEC-ME-02 (Mega Lucario ex League Battle Deck) загружено 3 новых фото с Amazon.com
      (1344×1500, 1500×1492, 1064×1500) взамен устаревших 800×800px — итого 6 изображений.
      <br><em>⚠️ 3 товара без артикула (Trainer's Toolkit 2025, Mega Evolution KO Collection, Raikou Two Pack Blister) — требуется ручное уточнение.</em>
    </div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 27.04.2026 03:04</div>
    <div class="result">
      Новых товаров не добавлено — все строки со статусом «Скоро &lt; 30 дн» и «Вышел» уже имеют отметку ✅ или ⛔️ в колонке «В МойСклад».
    </div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 27.04.2026 04:05</div>
    <div class="result">
      Обработано 4 заказа (20.04–27.04.2026), 17 товаров. Обновлено: 0 (цены уже актуальны).
      Нарушений цен нет — ни критичных, ни требующих проверки.
    </div>
  </div>

  <!-- 6. moysklad-backup (вчерашний запуск — сегодняшний в 07:00 ещё не прошёл) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 26.04.2026 07:08 (сегодняшний запуск в 07:00 ещё не выполнен)</div>
    <div class="result">
      Файл: <strong>товары_26.04.2026.xlsx</strong> — 727 строк × 110 столбцов (718 товаров + 8 модификаций), 459 КБ.
    </div>
  </div>

  <!-- 7. backup-prompts-readme (последний запуск вчера в 20:06) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 26.04.2026 20:06 (утренний запуск в 08:00 ещё не выполнен)</div>
    <div class="result">
      Папка: <strong>backups/2026-04-26_17-07/</strong>, скопировано 100 файлов (16M): 5 README, credentials.md, dashboard.html, 34 промпта, 3 скрипта, 56 отчётов.
      <br><em>⚠️ 14 папок старше 7 дней не удалены из-за ограничений прав в sandbox (требуется ручная очистка).</em>
    </div>
  </div>

  <!-- 8. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 26.04.2026 22:31</div>
    <div class="result">
      Новых заказов нет (последний — №38, Pokemon Moltres & Zapdos & Articuno, 18.04.2026).
      Исправлена дата в 11 строках: 24.04.26 → 25.04.26 (#678859-US).
      <strong>3 исходящих посылки:</strong> #678859-US (11 шт, покинет хаб 30.04), #676582-US (13 шт, на сортировке в Москве), #659359-US (8 шт).
      Ожидает на складе: Mewtwo Scarlet &amp; Violet Promo 052 (#1017341-US, трек UPS 1ZG2C0390364543016) — склад ещё не принял.
    </div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-warn">⚠️ Бэкап МойСклад: товары_26.04.2026.xlsx (вчера, 459 КБ) — сегодняшний запуск в 07:00</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 26.04.2026 21:13)</div>
    <div class="file-ok">✅ Покупки eBay: ebay/покупки_в_америке.xlsx (обновлён 26.04.2026 19:45)</div>
    <div class="file-ok">✅ Снапшот синка: moysklad/snapshots/sync_27.04.2026.md (новых товаров 0)</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-26_17-07/ (100 файлов, 16M)</div>
  </div>
</body>
</html>` },
  { iso: "2026-04-26", label: "26.04", fullLabel: "26.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 26.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .file-warn { color: #f57f17; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 13px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-red { margin-top: 8px; padding: 8px 12px; background: #ffebee; border-radius: 6px; border-left: 4px solid #c62828; font-size: 13px; color: #c62828; }
    .note-warn { margin-top: 8px; padding: 8px 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; font-size: 13px; color: #e65100; }
    h2 { font-size: 18px; margin-top: 28px; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 26.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 8 из 8 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 6 &nbsp;|&nbsp;
    <strong>Предупреждения:</strong> 2 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0 &nbsp;|&nbsp;
    <strong>Не запускались:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 26.04.2026 00:07</div>
    <div class="result">Обновлено 97 строк: пересчитаны дни до релиза на 26.04.2026. Новых товаров с Bulbapedia не найдено (просмотрено 49 секций, 9 исключены как аксессуары/турнирный мерч). HTML-календарь перегенерирован (123 438 символов).</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров МойСклад <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 26.04.2026 01:07</div>
    <div class="result">Товаров ожидают проверки: 0. Правок владельца найдено: 0. Все снапшоты проверены — все товары в статусе ✅ Проверено, новые товары 25.04.2026 не добавлялись.</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-warn">⚠️ Требует внимания</span>
    </div>
    <div class="time">Последний запуск: 26.04.2026 02:06</div>
    <div class="result">Новых загрузок: 0. Группа B (вышедшие за 30 дней) — все 14 товаров уже с фото. Группа A (pre-release) — 11 товаров Chaos Rising + Mega Zygarde уже с фото, P-DEC-ME-02 (Mega Lucario ex League Battle Deck) — 3 фото загружены 24.04.2026.</div>
    <div class="note-red">🔴 <strong>Критично:</strong> P-BND-PFL (Phantasmal Flames Booster Bundle) — <strong>163 дня без фото!</strong> Локальные файлы готовы (3 файла, 1116×1500 px), но не загружены в МойСклад. Также: Mega Evolution Knock Out Collection, Raikou Two Pack Blister, Trainer's Toolkit 2025 — артикулы не определены в КР, требуется ручная загрузка.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 26.04.2026 03:04</div>
    <div class="result">Создано 12 новых бластеров в МойСклад: 6 × Mega Evolution (P-BLS-MEG-02…07) и 6 × Phantasmal Flames (P-BLS-PFL-01…06). Столбец «В МойСклад» в календаре релизов обновлён (✅ + гиперссылки, 12/12). Снапшот sync_26.04.2026.md создан.</div>
    <div class="review-list">
      <h3>⏳ 12 товаров ожидают проверки владельцем:</h3>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=b599638b-4104-11f1-0a80-1324001da8f1" target="_blank">P-BLS-MEG-02</a> — Блистер Mega Evolution (Drifloon)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=89ed9fae-4105-11f1-0a80-161c001e8bb3" target="_blank">P-BLS-MEG-03</a> — Блистер Mega Evolution (Drifblim)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=045d837d-4107-11f1-0a80-1a2c001da5e2" target="_blank">P-BLS-MEG-04</a> — Блистер Mega Evolution (Meowscarada)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=4f9b7c05-4107-11f1-0a80-1a2c001da642" target="_blank">P-BLS-MEG-05</a> — Блистер Mega Evolution (Tyranitar)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=8e0e301d-4107-11f1-0a80-18f4001e2d9e" target="_blank">P-BLS-MEG-06</a> — Блистер Mega Evolution (Wailord)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=ccb2edec-4107-11f1-0a80-0e0b001ebb4d" target="_blank">P-BLS-MEG-07</a> — Блистер Mega Evolution (Lycanroc)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=1d74adb0-4108-11f1-0a80-00a7001eb98c" target="_blank">P-BLS-PFL-01</a> — Блистер Phantasmal Flames (Cottonee)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=6406039d-4108-11f1-0a80-0d5a001e258d" target="_blank">P-BLS-PFL-02</a> — Блистер Phantasmal Flames (Whimsicott)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=f5697ff5-4108-11f1-0a80-0d5a001e25f9" target="_blank">P-BLS-PFL-03</a> — Блистер Phantasmal Flames (Sneasel)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=381f4223-4109-11f1-0a80-1324001dabdd" target="_blank">P-BLS-PFL-04</a> — Блистер Phantasmal Flames (Weavile)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=6c1663c3-4109-11f1-0a80-161c001e8f0f" target="_blank">P-BLS-PFL-05</a> — Блистер Phantasmal Flames (Blaziken)</div>
      <div class="review-item">• <a href="https://online.moysklad.ru/app/#good/edit?id=a3b133fb-4109-11f1-0a80-0d5a001e265f" target="_blank">P-BLS-PFL-06</a> — Блистер Phantasmal Flames (Hydrapple)</div>
    </div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 26.04.2026 04:05</div>
    <div class="result">Обработано 4 заказа поставщикам, обновлено 17 из 17 уникальных товаров. Ошибок нет, пропущено 0.</div>
  </div>

  <!-- 6. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 25.04.2026 07:08</div>
    <div class="result">Создан файл товары_25.04.2026.xlsx: 715 строк × 110 столбцов (706 товаров + 8 модификаций), 459 КБ. Валидация пройдена.</div>
  </div>

  <!-- 7. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-warn">⚠️ Требует внимания</span>
    </div>
    <div class="time">Последний запуск: 25.04.2026 20:06</div>
    <div class="result">Бэкап 2026-04-25_17-07 создан: 99 файлов, 16 МБ (5 README, credentials.md, dashboard.html, 34 промпта, 3 скрипта, 55 отчётов).</div>
    <div class="note-warn">⚠️ Удаление старых бэкапов не выполнено (iCloud Drive — только чтение из sandbox). Нужно вручную удалить 8 папок старше 7 дней: 2026-04-16_05-07, 2026-04-16_11-07, 2026-04-16_17-07, 2026-04-16_17-08, 2026-04-16_ebay_sync, 2026-04-17_05-07, 2026-04-17_11-07, 2026-04-17_17-07. Всего бэкапов: 29.</div>
  </div>

  <!-- 8. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 25.04.2026 22:31</div>
    <div class="result">Новых заказов eBay нет (последний заказ — Moltres/Zapdos/Articuno, $430, 18.04). Создана исходящая отправка 24.04.26 #678859-US (Qwintry Smart): 11 посылок, статус «Отправлена», покинет хаб 30.04.2026. Обновлено 11 строк в таблице. В пути на склад: 1 (Mewtwo Promo). Активных отправок: 3.</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_25.04.2026.xlsx (459 КБ, 715 строк)</div>
    <div class="file-warn">⚠️ Бэкап МойСклад сегодня: товары_26.04.2026.xlsx — ещё не создан (запуск в 07:07)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 26.04.2026 00:51)</div>
    <div class="file-ok">✅ eBay покупки: ebay/покупки_в_америке.xlsx (обновлён 25.04.2026 22:42)</div>
    <div class="file-ok">✅ Снапшот синхронизации: moysklad/snapshots/sync_26.04.2026.md (12 товаров ⏳)</div>
    <div class="file-ok">✅ Последний бэкап промптов: backups/2026-04-25_17-07 (99 файлов, 16 МБ)</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-25", label: "25.04", fullLabel: "25.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 25.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 8px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .file-warn { color: #f57f17; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-green { margin-top: 8px; padding: 8px 12px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #388e3c; font-size: 13px; color: #2e7d32; }
    h2 { font-size: 18px; margin-top: 28px; }
    .section-files { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 25.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 9 из 9 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 8 &nbsp;|&nbsp;
    <strong>Предупреждения:</strong> 1 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 25.04.2026 00:07</div>
    <div class="result">Статусы пересчитаны для 97 товаров по дате 25.04.2026. Новых товаров с Bulbapedia не добавлено — все присутствуют в таблице. HTML-календарь сгенерирован (123 438 символов).</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 25.04.2026 01:07</div>
    <div class="result">Ни один снапшот не содержит статусов ⏳ или 🔍. Все товары подтверждены владельцем (последнее подтверждение: 24.04.2026 — 12 товаров серии CRI + POR). Сравнение с МойСклад не потребовалось.</div>
    <div class="note-green">✅ Товаров, ожидающих проверки: 0</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 25.04.2026 02:06</div>
    <div class="result">Загружены back-фото для P-BLS-POR-04 и P-BLS-POR-05 (через FTP relay). Подтверждены: P-BND-POR (3 фото), P-BLS-POR-07 (1 фото, back не найден). Группа Б (вышедшие без фото) — пусто. 4 товара без артикула ожидают ручной загрузки.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 25.04.2026 03:04</div>
    <div class="result">Проверено 98 строк календаря релизов. Все товары со статусом 🟨 Скоро &lt; 30 дн уже добавлены или исключены. Товаров «Вышел» без отметки не найдено. Новых товаров добавлено: 0. Снапшот sync_25.04.2026.md сохранён.</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 25.04.2026 04:05</div>
    <div class="result">Обработано 4 заказа, проверено 17 товаров. Обновлено: 0 (все цены без изменений). Аудит: 🔴 0 критичных / 🟡 0 предупреждений. У P-TIN-PRE вторичные ценовые поля-заглушки = 99 999, основная цена продажи = 5 290 руб — норма.</div>
  </div>

  <!-- 6. daily-report-upload -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">☁️ Загрузка отчёта на VPS <span class="task-id">daily-report-upload</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 06:34</div>
    <div class="result">Загружены dashboard.html (34 006 байт), report-data.js (308 167 байт), releases-workflow.js, tasks-data.js. Коммит fdd411b → GitHub, FTP-синхронизация reg.ru выполнена.</div>
    <div class="note-blue">🌐 <a href="https://boss.pokebarn.ru/dashboard.html" style="color:#1565c0;" target="_blank">boss.pokebarn.ru/dashboard.html</a></div>
  </div>

  <!-- 7. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 07:08</div>
    <div class="result">Бэкап создан: товары_24.04.2026.xlsx. 715 строк × 110 столбцов (706 товаров + 8 модификаций), 458 КБ. Валидация пройдена.</div>
  </div>

  <!-- 8. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 20:07</div>
    <div class="result">Создан бэкап backups/2026-04-24_17-07: 98 файлов (16 МБ) — README, credentials, dashboard, 34 промпта, 3 скрипта, 54 отчёта. Удаление 7 старых папок не выполнено из-за ограничений iCloud FUSE (файлы другого процесса).</div>
  </div>

  <!-- 9. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-warn">⚠️ Предупреждение</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 22:31</div>
    <div class="result">eBay проверен: новых заказов нет, все 25 заказов внесены в таблицу. Qwintry (q3.qwintry.com) недоступен — все HTTP-запросы зависали без ответа (предположительно техработы). Статусы доставки не обновлены. Рекомендуется проверить вручную: <strong>строка №32</strong> (Mewtwo, UPS 1ZG2C0390364543016 — eBay: Delivered, таблица: Ожидаемая).</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="section-files">
    <div class="file-ok">✅ Бэкап МойСклад: moysklad/backup/товары_24.04.2026.xlsx (458 КБ, 715 строк)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 24.04.2026 21:10)</div>
    <div class="file-ok">✅ Календарь HTML: releases/календарь_релизов.html (обновлён 24.04.2026 21:10)</div>
    <div class="file-warn">⚠️ eBay покупки: ebay/покупки_в_америке.xlsx (обновлён 23.04.2026 — Qwintry был недоступен)</div>
    <div class="file-ok">✅ Снапшот синхронизации: moysklad/snapshots/sync_25.04.2026.md</div>
    <div class="file-ok">✅ Отчёт проверки: moysklad/snapshots/verify_25.04.2026.md</div>
    <div class="file-ok">✅ Последний бэкап промптов: backups/2026-04-24_17-07 (98 файлов, 16 МБ)</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-24", label: "24.04", fullLabel: "24.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 24.04.2026</title>
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
    .status-warn { background: #fff8e1; color: #f57f17; }
    .status-running { background: #e3f2fd; color: #1565c0; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 4px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .file-warn { color: #e65100; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 5px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .note-blue { margin-top: 10px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .critical-list { margin-top: 10px; padding: 10px 12px; background: #ffebee; border-radius: 6px; border-left: 4px solid #c62828; font-size: 13px; color: #c62828; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 24.04.2026</h1>

  <div class="summary">
    <strong>Задач запущено:</strong> 7 из 8 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 7 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0 &nbsp;|&nbsp;
    <strong>В процессе:</strong> 1
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 00:07</div>
    <div class="result">
      Статусы обновлены: 97 строк. Сегодня день релиза R66–R69 (Ascended Heroes): Mega ex Box Meganium, Emboar, Feraligatr + Booster Bundle — переведены в статус 🟥 Вышел. Новых товаров с Bulbapedia не найдено. Итого: 🟥 77 вышедших, 🟨 15 скоро, 🟩 5 в будущем.
    </div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров МойСклад <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 01:07</div>
    <div class="result">
      Проверено 12 товаров из sync_22.04.2026.md. Все 12 были изменены владельцем 23.04.2026 — снапшоты созданы с актуальными данными из МойСклад. Статус всех товаров: 🔍 Правки найдены.
    </div>
    <div class="review-list">
      <h3>🔍 Товары, ожидающие подтверждения владельцем (12 шт.):</h3>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=007f55ca-17ed-11f1-0a80-04eb0000408e" target="_blank">P-ETB-POR</a> — набор карточек Pokemon Elite Trainer Box Perfect Order (Mega Evolution)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=2f07efda-3de1-11f1-0a80-131d0001f7ff" target="_blank">P-COL-POR</a> — Набор карточек Pokemon Mega Zygarde ex Premium Collection</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=8751f071-3de2-11f1-0a80-0d4f0001f132" target="_blank">P-BOO-CRI</a> — Бустер Pokemon Chaos Rising (Mega Evolution)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=441d520a-3de3-11f1-0a80-094400021d54" target="_blank">P-BND-CRI</a> — Набор карточек Pokemon Chaos Rising Booster Bundle (6 бустеров)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=958ee52c-3de3-11f1-0a80-16140001ee86" target="_blank">P-ETB-CRI</a> — Набор карточек Pokemon Chaos Rising ETB</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=0d12ef42-3de4-11f1-0a80-001c0001ede5" target="_blank">P-BLS-CRI-01</a> — Блистер карточек Pokemon Chaos Rising с 3мя бустерами (Charmeleon)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=8233c94e-3de4-11f1-0a80-094400021f28" target="_blank">P-BLS-CRI-02</a> — Блистер карточек Pokemon Chaos Rising с одним бустером (Toxel)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=308d7b7e-3e61-11f1-0a80-0f8c00142e03" target="_blank">P-BLS-CRI-03</a> — Блистер карточек Pokemon Chaos Rising Premium Checklane (Pawmot)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=9b98f140-3e61-11f1-0a80-161400142962" target="_blank">P-BLS-CRI-04</a> — Блистер карточек Pokemon Chaos Rising Stage 1 (Flygon)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=6adf5bbb-3e62-11f1-0a80-07ae001437b9" target="_blank">P-BLS-CRI-05</a> — Блистер карточек Pokemon Chaos Rising Checklane (Moltres &amp; Reshiram)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=d525ec74-3e62-11f1-0a80-07ae00144301" target="_blank">P-BLS-CRI-06</a> — Блистер карточек Pokemon Chaos Rising Checklane (Mimikyu &amp; Zacian)</div>
      <div class="review-item"><a href="https://online.moysklad.ru/app/#good/edit?id=388ba5b9-3e63-11f1-0a80-1c910014beb9" target="_blank">P-TIN-CRI</a> — Набор карточек Pokemon Chaos Rising Mini Tin</div>
    </div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 02:06</div>
    <div class="result">
      Загружено фото для 1 товара: P-DEC-ME-02 (Mega Lucario ex League Battle Deck) — 3 фото (front/back/contents). 4 товара без фото старше 30 дней требуют ручной загрузки: Phantasmal Flames Booster Bundle (161 дн.), Trainer's Toolkit 2025 (182 дн.), Mega Evolution Knock Out Collection (161 дн.), Raikou Two Pack Blister (113 дн.).
    </div>
    <div class="critical-list">
      ⚠️ Критично: 4 товара без фото более 30 дней — артикулы не привязаны в календаре, требуется уточнение у владельца.
    </div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 03:04</div>
    <div class="result">
      Новых товаров нет. Все строки со статусом 🟨 Скоро &lt; 30 дн уже обработаны (✅ или ⛔️ в колонке «В МойСклад»). Товаров со статусом ⏳ не найдено.
    </div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 24.04.2026 04:05</div>
    <div class="result">
      Период 17.04–24.04: 5 заказов, 19 товаров. Обновлено: 0 — все 19 товаров уже имели корректные закупочные цены. Скрипт отработал без ошибок.
    </div>
  </div>

  <!-- 9. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-warn">⏳ Вчера</span>
    </div>
    <div class="time">Последний запуск: 23.04.2026 07:08 (сегодняшний запуск будет в 07:00)</div>
    <div class="result">
      Выполнен вчера: товары_23.04.2026.xlsx — 715 строк × 110 столбцов (706 товаров + 8 модификаций), 459 КБ. Сегодняшний бэкап ещё не запущен (расписание 07:00).
    </div>
  </div>

  <!-- 10. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-running">🔄 Выполняется</span>
    </div>
    <div class="time">Запущена: 24.04.2026 ~06:00 (в процессе)</div>
    <div class="result">
      Задача сейчас выполняется. Предыдущий успешный бэкап: 22.04.2026 20:06. Папка backups/ содержит бэкапы до 2026-04-22_17-07.
    </div>
  </div>

  <!-- 11. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 23.04.2026 22:31</div>
    <div class="result">
      Новых заказов нет. 3 изменения: заказ #38 (Moltres &amp; Zapdos &amp; Articuno GX) доставлен, получил новый Qwintry ID 1658015-US. Заказ #32 (Mewtwo SV Promo) — посылка UPS ещё не получена складом, статус «Ожидаемая». На складе: 11 посылок, 2 отправлено в РФ.
    </div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-warn">⏳ Бэкап МойСклад сегодня: товары_24.04.2026.xlsx — ещё не создан (задача в 07:00)</div>
    <div class="file-ok">✅ Бэкап МойСклад вчера: товары_23.04.2026.xlsx (715 строк, 459 КБ)</div>
    <div class="file-ok">✅ releases/календарь_релизов.xlsx — обновлён 23.04.2026</div>
    <div class="file-ok">✅ ebay/покупки_в_америке.xlsx — обновлён 23.04.2026</div>
    <div class="file-ok">✅ moysklad/snapshots/sync_24.04.2026.md — создан сегодня</div>
    <div class="file-warn">⏳ backups/ — последний бэкап промптов: 22.04.2026 17:07 (новый выполняется)</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-23", label: "23.04", fullLabel: "23.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 23.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 28px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; white-space: nowrap; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .status-run { background: #e3f2fd; color: #1565c0; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 4px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .file-warn { color: #f57f17; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 5px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 10px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-warn { margin-top: 10px; padding: 8px 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; font-size: 13px; color: #e65100; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 23.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 9 из 9 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 7 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0 &nbsp;|&nbsp;
    <strong>В работе:</strong> 1 &nbsp;|&nbsp;
    <strong>Предупреждения:</strong> 1
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 23.04.2026 00:07</div>
    <div class="result">Добавлено 12 новых товаров: Mega Evolution Blisters × 6 (вышли 26.09.2025) и Phantasmal Flames Blisters × 6 (вышли 14.11.2025). Счётчик обновлён: 85 → 97 товаров. HTML-файл перегенерирован (111 486 символов, дата 23.04.2026).</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-warn">⚠️ Внимание</span>
    </div>
    <div class="time">Последний запуск: 23.04.2026 01:07</div>
    <div class="result">Все 19 товаров в стандартных снапшотах имеют статус ✅ Проверено 29.03.2026. Однако 12 новых товаров (CRI + POR), созданных 22.04, записаны в нестандартном формате — без поля «Статус проверки». Задача не может верифицировать их автоматически.</div>
    <div class="review-list">
      <h3>⏳ 12 товаров ожидают проверки владельцем (добавлены 22.04.2026)</h3>
      <div class="review-item">1. <a href="https://online.moysklad.ru/app/#good/edit?id=007f55ca-17ed-11f1-0a80-04eb0000408e" target="_blank">P-ETB-POR — Perfect Order Elite Trainer Box</a></div>
      <div class="review-item">2. <a href="https://online.moysklad.ru/app/#good/edit?id=2f07efda-3de1-11f1-0a80-131d0001f7ff" target="_blank">P-COL-POR — Mega Zygarde ex Premium Collection</a></div>
      <div class="review-item">3. <a href="https://online.moysklad.ru/app/#good/edit?id=8751f071-3de2-11f1-0a80-0d4f0001f132" target="_blank">P-BOO-CRI — Бустер Pokemon Chaos Rising</a></div>
      <div class="review-item">4. <a href="https://online.moysklad.ru/app/#good/edit?id=441d520a-3de3-11f1-0a80-094400021d54" target="_blank">P-BND-CRI — Chaos Rising Build &amp; Battle Box</a></div>
      <div class="review-item">5. <a href="https://online.moysklad.ru/app/#good/edit?id=958ee52c-3de3-11f1-0a80-16140001ee86" target="_blank">P-ETB-CRI — Chaos Rising Elite Trainer Box</a></div>
      <div class="review-item">6. <a href="https://online.moysklad.ru/app/#good/edit?id=0d12ef42-3de4-11f1-0a80-001c0001ede5" target="_blank">P-BLS-CRI-01 — Chaos Rising Checklane (Pikachu &amp; Raichu)</a></div>
      <div class="review-item">7. <a href="https://online.moysklad.ru/app/#good/edit?id=8233c94e-3de4-11f1-0a80-094400021f28" target="_blank">P-BLS-CRI-02 — Chaos Rising Checklane (Mewtwo &amp; Mew)</a></div>
      <div class="review-item">8. <a href="https://online.moysklad.ru/app/#good/edit?id=308d7b7e-3e61-11f1-0a80-0f8c00142e03" target="_blank">P-BLS-CRI-03 — Chaos Rising Checklane (Charizard &amp; Rayquaza)</a></div>
      <div class="review-item">9. <a href="https://online.moysklad.ru/app/#good/edit?id=9b98f140-3e61-11f1-0a80-161400142962" target="_blank">P-BLS-CRI-04 — Chaos Rising Checklane (Lucario &amp; Garchomp)</a></div>
      <div class="review-item">10. <a href="https://online.moysklad.ru/app/#good/edit?id=6adf5bbb-3e62-11f1-0a80-07ae001437b9" target="_blank">P-BLS-CRI-05 — Chaos Rising Checklane (Moltres &amp; Reshiram)</a></div>
      <div class="review-item">11. <a href="https://online.moysklad.ru/app/#good/edit?id=d525ec74-3e62-11f1-0a80-07ae00144301" target="_blank">P-BLS-CRI-06 — Chaos Rising Checklane (Mimikyu &amp; Zacian)</a></div>
      <div class="review-item">12. <a href="https://online.moysklad.ru/app/#good/edit?id=388ba5b9-3e63-11f1-0a80-1c910014beb9" target="_blank">P-TIN-CRI — Chaos Rising Mini Tin</a></div>
    </div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 23.04.2026 02:06</div>
    <div class="result">Загружены фото для 11 товаров (CRI × 10 + POR × 1). Форматы: PNG→JPEG (P-BOO-CRI ×4, P-COL-POR ×2), WebP→JPEG (P-BLS-CRI-05, P-BLS-CRI-06). Колонка «Фото» в таблице релизов обновлена: все 11 строк → ✅. Отчёт: moysklad/images/отчёт_фото_23.04.2026.html.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 23.04.2026 03:04</div>
    <div class="result">Новых товаров для добавления нет. Все строки со статусом «🟨 Скоро &lt; 30 дн» уже обработаны: большинство помечены ✅ (ранее добавлены) или ⛔️ (исключены — Бустер Боксы, ETB Pokemon Center, Prerelease Kit).</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 23.04.2026 04:05</div>
    <div class="result">Обработано 5 заказов за период 16.04–23.04.2026, проверено 28 товаров. Обновлений цен: 0 (все актуальны). Аудит критичных нарушений (цена=0, заглушка 99 999) — нарушений не обнаружено. 🟢</div>
  </div>

  <!-- 6. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 22.04.2026 07:08 (следующий сегодня в 07:07)</div>
    <div class="result">Файл товары_22.04.2026.xlsx: 710 строк × 110 столбцов (701 товар + 8 модификаций), 456 КБ. Файл валиден.</div>
  </div>

  <!-- 7. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-run">🔄 В работе</span>
    </div>
    <div class="time">Запущена: 23.04.2026 08:06 — сейчас выполняется</div>
    <div class="result">Задача запущена по расписанию (08:00). Предыдущий бэкап: 22.04.2026 17:07 (backups/2026-04-22_17-07). Результат текущего запуска будет доступен после завершения.</div>
  </div>

  <!-- 8. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-warn">⚠️ Предупреждение</span>
    </div>
    <div class="time">Последний запуск: 22.04.2026 22:31</div>
    <div class="result">eBay проверен (25 заказов) — новых нет, статусы совпадают с таблицей. Order 38 (Moltres): статус «Tracking available», ETA 23 апреля. Qwintry API недоступен (q3-api.qwintry.com не отвечал) — данные о посылках не загружены. Изменений в таблице нет.</div>
    <div class="note-warn">ℹ️ Moltres должен доставиться в Qwintry сегодня (23.04). Рекомендуется вручную обновить статусы: H→Delivered, M→На складе.</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: moysklad/backup/товары_22.04.2026.xlsx (710 строк, 456 КБ)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 23.04.2026 00:39)</div>
    <div class="file-ok">✅ Календарь HTML: releases/календарь_релизов.html (обновлён 22.04.2026 21:16)</div>
    <div class="file-ok">✅ eBay покупки: ebay/покупки_в_америке.xlsx (обновлён 21.04.2026)</div>
    <div class="file-ok">✅ Снапшот синхронизации: moysklad/snapshots/sync_23.04.2026.md</div>
    <div class="file-ok">✅ Отчёт verify: moysklad/snapshots/verify_23.04.2026.md</div>
    <div class="file-ok">✅ Последний бэкап промптов: backups/2026-04-22_17-07</div>
    <div class="file-ok">✅ Закупочные цены: moysklad/отчёт_закупочные_цены_23.04.2026.md</div>
  </div>

</body>
</html>` },
  { iso: "2026-04-22", label: "22.04", fullLabel: "22.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 22.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 32px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 8px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-warn { margin-top: 8px; padding: 8px 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; font-size: 13px; color: #e65100; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 22.04.2026</h1>

  <div class="summary">
    <strong>Задач запущено:</strong> 8 из 8 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 5 &nbsp;|&nbsp;
    <strong>Предупреждения:</strong> 2 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 1 &nbsp;|&nbsp;
    <strong>Не запускались:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 22.04.2026 00:07</div>
    <div class="result">Обновлено 85 строк. Изменения статусов: R41 Mega Lucario ex League Battle Deck и R71 Mega Zygarde ex Premium Collection перешли в «Скоро &lt; 30 дн», а также 12 позиций Chaos Rising (R73–R84, релиз 22.05.2026) перешли в «Скоро &lt; 30 дн». Новых товаров с Bulbapedia не найдено. HTML-файл пересоздан (85 товаров, 95 134 символа).</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 22.04.2026 01:07</div>
    <div class="result">Все 19 товаров проверены владельцем — статус ✅ Проверено 29.03.2026. Новых товаров со статусом ⏳ или 🔍 не обнаружено. Отчёт сохранён: moysklad/snapshots/verify_22.04.2026.md.</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-error">❌ Ошибка</span>
    </div>
    <div class="time">Последний запуск: 22.04.2026 02:06</div>
    <div class="result">Задача прервалась с ошибкой лимита Chrome API: «You've hit your limit · resets 6am (Europe/Moscow)». Загрузка фото не завершена. Лимит сброшен в 06:00 — задача продолжит работу при следующем запуске.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-warn">⚠️ Частично</span>
    </div>
    <div class="time">Последний запуск: 22.04.2026 03:05</div>
    <div class="result">Сессия завершилась без финального отчёта в процессе создания товаров Chaos Rising. Успешно создан минимум P-BLS-CRI-01 и P-BLS-CRI-02, задача прервалась на P-BLS-CRI-03 и далее (P-TIN-CRI). Снапшот sync_22.04.2026.md не создан. Рекомендуется проверить состояние МойСклад.</div>
    <div class="note-warn">⚠️ Часть товаров Chaos Rising может быть не создана. Проверьте МойСклад вручную.</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 22.04.2026 04:05</div>
    <div class="result">Период 15.04–22.04.2026: 5 заказов, 29 товаров. Обновлено: 1 (P-05-941: 0 → 21 500 руб). Без изменений: 28. Ошибок: 0.</div>
  </div>

  <!-- 6. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 21.04.2026 07:08</div>
    <div class="result">Бэкап товары_21.04.2026.xlsx создан: 703 строки × 110 столбцов (694 товара + 8 модификаций), 454 КБ. Сегодняшний бэкап запустится в 07:00.</div>
  </div>

  <!-- 7. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-warn">⚠️ С предупреждением</span>
    </div>
    <div class="time">Последний запуск: 21.04.2026 20:07</div>
    <div class="result">Сохранено 95 файлов (16 МБ): 7 README/credentials/dashboard, 34 промпта, 3 скрипта, 51 отчёт. Старые бэкапы 2026-04-13 и 2026-04-14 не удалились из-за ошибки прав (Operation not permitted на README_разработчик.md). Итого 29 бэкапов.</div>
    <div class="note-warn">⚠️ Папки 2026-04-13_* и 2026-04-14_* можно удалить вручную через Finder.</div>
  </div>

  <!-- 8. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 21.04.2026 22:32</div>
    <div class="result">Новых заказов eBay нет (последний #38 Moltres 18.04). Обновлены статусы: Mewtwo Promo 052 SIR и Moltres &amp; Zapdos &amp; Articuno GX SM210 — Ожидаемая → На складе Qwintry. Посылка #676582-US отправлена в Россию, #672708-US доставлена. На складе: 12 посылок.</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_21.04.2026.xlsx (464 КБ, 21.04.2026 07:26)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (21.04.2026 00:13)</div>
    <div class="file-ok">✅ eBay покупки: ebay/покупки_в_америке.xlsx (21.04.2026 22:50)</div>
    <div class="file-ok">✅ Снапшот verify: moysklad/snapshots/verify_22.04.2026.md</div>
    <div class="file-miss">⚠️ Снапшот sync: sync_22.04.2026.md не создан (release-sync прервалась)</div>
    <div class="file-ok">✅ Последний бэкап промптов: backups/2026-04-21_17-07 (95 файлов, 16 МБ)</div>
  </div>

</body>
</html>
` },
  { iso: "2026-04-21", label: "21.04", fullLabel: "21.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 21.04.2026</title>
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
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 4px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .note-blue { margin-top: 10px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-warn { margin-top: 10px; padding: 8px 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; font-size: 13px; color: #e65100; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 21.04.2026</h1>

  <div class="summary">
    <strong>Задач запущено:</strong> 8 из 8 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 8 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0 &nbsp;|&nbsp;
    <strong>Не запускались:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 21.04.2026 00:07</div>
    <div class="result">Обновлено 85 строк с датами. Bulbapedia проверена — новых товаров не обнаружено. Итого в таблице: 85 товаров, дата обновлена на 21.04.2026.</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров МойСклад <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 21.04.2026 01:07</div>
    <div class="result">Все 19 товаров проверены владельцем (✅ Проверено 29.03.2026). Товаров со статусом ⏳ или 🔍 не обнаружено. Ближайшие кандидаты (Chaos Rising, Mega Zygarde ex Premium Collection) перейдут в обработку ~22.04.2026.</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 21.04.2026 02:06</div>
    <div class="result">Проверено 4 товара (pre-release, релиз 24.04). Загружено фото: 0 — все 4 уже имеют фото (ASC-04, ASC-05, ASC-06, Booster Bundle). Группа B (вышедшие без фото): 0 товаров.</div>
    <div class="note-warn">⚠️ <strong>Требует внимания:</strong> P-BND-PFL (Phantasmal Flames Booster Bundle) — <strong>158 дней без фото</strong> в МойСклад. Локальные файлы готовы, но товар вне автоматического окна. Требуется ручная загрузка.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 21.04.2026 03:05</div>
    <div class="result">Все товары со статусом «🟨 Скоро &lt; 30 дн» уже имеют отметку ✅ или ⛔️ в МойСклад. Новых товаров для добавления нет. Снапшоты без ⏳ Не проверено.</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 21.04.2026 04:05</div>
    <div class="result">Обработано заказов: 4, товаров: 7. Обновлено: 1 — P-04-104 (Surging Sparks ETB) → 11 762 руб. Без изменений: 6. Аудит наценок в норме (минимум 55.3% у P-ETB-POR).</div>
  </div>

  <!-- 6. moysklad-backup (07:00) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 07:08</div>
    <div class="result">Создан файл товары_20.04.2026.xlsx — 703 строки × 110 столбцов (694 товара + 8 модификаций), 454 КБ. Валидация пройдена.</div>
  </div>

  <!-- 7. backup-prompts-readme (08:00/14:00/20:00) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 20:07</div>
    <div class="result">Создан бэкап 2026-04-20_17-07: 5 README, credentials.md, dashboard.html, 34 промпта, 3 скрипта, 50 отчётов (~16 МБ). Всего бэкапов: 26. Примечание: 3 старых бэкапа от 13.04 не удалены — защищены правами iCloud (требует ручной очистки).</div>
  </div>

  <!-- 8. ebay-qwintry-sync (22:30) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 22:31</div>
    <div class="result">Holo Energy Lot (№34) — статус изменён на Delivered (доставлен 20.04). Moltres/Zapdos/Articuno GX (№38, $430) — получен трек USPS 9505512003626110163565, ETA 27 апреля. В Qwintry создана посылка #1018941-US для Moltres ($43.00). Holo Energy обнаружен на складе как #1656631-US. Новых заказов нет.</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_20.04.2026.xlsx (20.04.2026 07:10)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 20.04.2026 21:11)</div>
    <div class="file-ok">✅ Покупки eBay: ebay/покупки_в_америке.xlsx (обновлён 20.04.2026 19:49)</div>
    <div class="file-ok">✅ Снапшот: moysklad/snapshots/verify_21.04.2026.md</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-20_17-07</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-20", label: "20.04", fullLabel: "20.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 20.04.2026</title>
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
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 8px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-warn { margin-top: 8px; padding: 8px 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; font-size: 13px; color: #856404; }
    .alert-red { margin-top: 8px; padding: 8px 12px; background: #ffebee; border-radius: 6px; border-left: 4px solid #c62828; font-size: 13px; color: #c62828; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 20.04.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 10 из 10 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 9 &nbsp;|&nbsp;
    <strong>Предупреждения:</strong> 1 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0 &nbsp;|&nbsp;
    <strong>Не запускались:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 00:07</div>
    <div class="result">Дата обновлена на 20.04.2026. Все 85 товаров пересчитаны — изменений статусов нет. Ближайшие релизы: Ascended Heroes Mega ex Boxes + Booster Bundle через <strong>4 дня</strong> (24.04.2026). Новых товаров с Bulbapedia: 0.</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 01:07</div>
    <div class="result">Все 19 товаров сохраняют статус ✅ Проверено 29.03.2026. Товаров со статусом ⏳ «Не проверено» или 🔍 «Правки найдены» не найдено. Обучение не потребовалось. Снапшот verify_20.04.2026.md сохранён.</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-warn">⚠️ Предупреждение</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 02:06</div>
    <div class="result">Проверено 14 товаров (4 pre-release ASC + 10 вышедших POR). Загружено сегодня: 0 — все товары уже имеют фото. Группа A (Ascended Heroes, 4 позиции) имеет по 2–3 фото и готова к релизу 24.04.</div>
    <div class="alert-red">🔴 <strong>P-BND-PFL</strong> — Phantasmal Flames Booster Bundle — 157 дней без фото. Файлы готовы локально (front.jpg + back.jpg + contents.jpg). Требуется <strong>ручная загрузка</strong> через карточку МойСклад (Chrome-расширение недоступно в scheduled-режиме).</div>
    <div class="note-warn">⚠️ 5 блистеров POR (P-BLS-POR-02, -04, -05, -06, -07) имеют одно фото — рекомендуется добавить back-фото.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 03:05</div>
    <div class="result">Проверены все товары 🟨 «Скоро &lt; 30 дн» из календаря. Все 4 позиции Ascended Heroes (Mega ex Boxes + Booster Bundle) уже добавлены в МойСклад. Chaos Rising Build &amp; Battle Box исключён из синхронизации. Новых товаров для добавления нет.</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 04:05</div>
    <div class="result">Обработано 3 заказа поставщикам (период 13.04–20.04). Проверено 7 товаров. Обновлено: 0 — все цены актуальны. Критических нарушений (цена 0 или заглушка 99 999) не обнаружено.</div>
  </div>

  <!-- 6. daily-report (текущий) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📊 Дневной отчёт <span class="task-id">daily-report</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 20.04.2026 06:01</div>
    <div class="result">Сгенерирован HTML-отчёт за 20.04.2026. Обновлены report-data.js и tasks-data.js.</div>
  </div>

  <!-- 7. daily-report-upload -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">☁️ Загрузка отчёта на VPS <span class="task-id">daily-report-upload</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 06:34</div>
    <div class="result">FTP-синхронизация и GitHub push выполнены. Обновлены: dashboard.html (34 006 байт), report-data.js (252 167 байт), releases-workflow.js, tasks-data.js. Коммит 86026d0 → GitHub. Доступно на boss.pokebarn.ru.</div>
  </div>

  <!-- 8. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 12:02</div>
    <div class="result">Бэкап товары_19.04.2026.xlsx успешно создан. 703 строки × 110 столбцов (694 товара + 8 модификаций). Размер: 454 КБ. Следующий бэкап за 20.04 будет создан в 07:00.</div>
  </div>

  <!-- 9. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 20:07</div>
    <div class="result">Папка backups/2026-04-19_17-07 создана. Сохранено: 6 README-файлов, credentials.md, dashboard.html, 34/34 промптов, 3/3 скриптов, 49/49 отчётов. Общий размер: 16 MB. Всего бэкапов хранится: 23 (все в пределах 7 дней).</div>
  </div>

  <!-- 10. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 22:31</div>
    <div class="result">Добавлен новый заказ №38: Pokemon Moltres &amp; Zapdos &amp; Articuno GX Tag Team Holo SM210 Lot of 3 ($430.00, продавец iufan8050-7, заказ 16-14512-81576, дата 18.04.2026, трека ещё нет). Исправлены декларационные поля строки 22 (Bulbasaur 166/165). Заполнена декларация #1655968-US (Sealed Umbreon ex). На складе Qwintry: 9 посылок, ожидаемых: 2.</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_19.04.2026.xlsx (464 КБ, 19.04.2026)</div>
    <div class="file-miss">⏳ Бэкап МойСклад за 20.04 — ещё не создан (задача в 07:00)</div>
    <div class="file-ok">✅ Календарь релизов: календарь_релизов.html (обновлён 19.04.2026 21:14)</div>
    <div class="file-ok">✅ Календарь релизов: календарь_релизов.xlsx (обновлён 19.04.2026 21:13)</div>
    <div class="file-ok">✅ eBay: покупки_в_америке.xlsx (обновлён 19.04.2026 19:45)</div>
    <div class="file-ok">✅ Снапшот: verify_20.04.2026.md создан</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-19_17-07 (16 MB, последний)</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-19", label: "19.04", fullLabel: "19.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 19.04.2026</title>
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
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 8px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .file-warn { color: #f57f17; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .alert-red { margin-top: 8px; padding: 8px 12px; background: #ffebee; border-radius: 6px; border-left: 4px solid #c62828; font-size: 13px; color: #c62828; }
    .alert-orange { margin-top: 8px; padding: 8px 12px; background: #fff3e0; border-radius: 6px; border-left: 4px solid #e65100; font-size: 13px; color: #e65100; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 19.04.2026</h1>

  <div class="summary">
    <strong>Задач запущено:</strong> 8 из 10 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 5 &nbsp;|&nbsp;
    <strong>Предупреждения:</strong> 2 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 1 &nbsp;|&nbsp;
    <strong>Не запускались ещё:</strong> 2 (по расписанию позже)
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 00:07</div>
    <div class="result">Обновлены статусы 85 продуктов. Проверена Bulbapedia: найдено новое позиция Phantasmal Flames Portfolios, но биндеры без бустеров не добавляются — новых товаров по критериям нет. HTML-календарь сгенерирован (85 продуктов, 92 744 символа).</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров МойСклад <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 01:07</div>
    <div class="result">Все 19 товаров проверены владельцем. Новых непроверенных товаров нет. Статус всех снапшотов: ✅ Проверено 29.03.2026. Сравнение с МойСклад не потребовалось.</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 02:06</div>
    <div class="result">Проверено 4 товара (Ascended Heroes — P-SET-ASC-04/05/06, P-BBU-ASC). У всех уже есть фото в МойСклад, загрузка не потребовалась. Группа B (вышедшие без фото) — пуста.</div>
    <div class="alert-orange">⚠️ <strong>P-BND-PFL</strong> (Phantasmal Flames Booster Bundle) — <strong>156 дней без фото</strong>. Локальные файлы готовы в <code>moysklad/images/P-BND-PFL/</code>, но Chrome-расширение недоступно при автозапуске. Требуется ручная загрузка через МойСклад.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 03:05</div>
    <div class="result">Новых товаров нет. Все ранее добавленные товары Ascended Heroes проверены. Следующий релиз для добавления: Chaos Rising (22.05.2026, 33 дня) — бустер, ETB, блистеры, бандл, тин.</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-warn">⚠️ Внимание</span>
    </div>
    <div class="time">Последний запуск: 19.04.2026 04:06</div>
    <div class="result">Обработано 5 заказов, 9 товаров. Обновлено: 0, без изменений: 9, ошибки: 0.</div>
    <div class="alert-red">🔴 <strong>Критично: P-BBU-ASC</strong> (Ascended Heroes Booster Bundle) — цена продажи <strong>0 руб</strong> при закупочной <strong>7 500 руб</strong>. Минимальная допустимая: <strong>11 625 руб</strong>. Требует ручного исправления!</div>
  </div>

  <!-- 6. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-error">❌ Ошибка</span>
    </div>
    <div class="time">Последний запуск: 18.04.2026 07:08 (сегодня в 07:08 — ещё не запускалась)</div>
    <div class="result">Chrome MCP недоступен при автоматическом запуске — бэкап не выполнен. Последний успешный бэкап: <strong>31.03.2026</strong>.</div>
    <div class="alert-red">❌ Убедитесь, что браузер Chrome открыт с расширением Claude in Chrome. Задача запустится снова сегодня в 07:08.</div>
  </div>

  <!-- 7. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов и README <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 18.04.2026 20:07</div>
    <div class="result">Создан бэкап <code>backups/2026-04-18_17-07/</code>. Сохранено 89 файлов (README, prompts, scripts, reports). Размер: 16 МБ.</div>
    <div class="alert-orange">⚠️ 7 старых бэкапов (старше 7 дней) не удалены из-за ограничений macOS APFS в Linux-окружении. Не влияет на работу новых бэкапов. Всего бэкапов в папке: 29.</div>
  </div>

  <!-- 8. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-warn">⚠️ Частично</span>
    </div>
    <div class="time">Последний запуск: 18.04.2026 22:32</div>
    <div class="result">Qwintry обновлён успешно. Обновлены заказы #33 и #37 (новые Qwintry ID, #37 поступил на склад). На складе 9 посылок, ожидается 3 в пути. Исходящая #676582-US — отправлена.</div>
    <div class="alert-orange">⚠️ <strong>eBay не проверен</strong> — Chrome-расширение не подключено при авто-запуске. Новые заказы за 10–18 апреля не синхронизированы.<br>⚠️ <strong>Неизвестная посылка на складе</strong> — Qwintry ID 1655968, трек 3000156429-8, 0.04 lb, поступила ~17 апреля. Проверьте вручную на q3.qwintry.com.</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-miss">❌ Бэкап МойСклад: последний — товары_31.03.2026.xlsx (нет свежего, задача падает из-за Chrome)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 18.04.2026 24:09)</div>
    <div class="file-ok">✅ Покупки в Америке: ebay/покупки_в_америке.xlsx (обновлён 18.04.2026 22:43)</div>
    <div class="file-ok">✅ Снапшот синхронизации: moysklad/snapshots/sync_19.04.2026.md</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-18_17-07/ (89 файлов, 16 МБ)</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-18", label: "18.04", fullLabel: "18.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 18.04.2026</title>
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
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 8px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .file-warn { color: #f57f17; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-warn { margin-top: 8px; padding: 8px 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; font-size: 13px; color: #e65100; }
    .note-ok { margin-top: 8px; padding: 8px 12px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #2e7d32; font-size: 13px; color: #2e7d32; }
    .alert-red { margin-top: 10px; padding: 10px 14px; background: #ffebee; border-radius: 6px; border-left: 4px solid #c62828; font-size: 13px; color: #c62828; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 18.04.2026</h1>

  <div class="summary">
    <strong>Задач запущено:</strong> 9 из 9 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 7 &nbsp;|&nbsp;
    <strong>Предупреждения:</strong> 2 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 18.04.2026 00:07 (МСК)</div>
    <div class="result">Обновлено 85 строк, добавлен 1 новый товар: <strong>Mega Greninja ex Premium Collection</strong> (03.07.2026). HTML-календарь перегенерирован (92 744 символов). Ascended Heroes (4 товара) в статусе 🟨 «Скоро &lt; 30 дн» — релиз 24.04.</div>
    <div class="note-blue">📅 <a href="../releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 18.04.2026 01:07 (МСК)</div>
    <div class="result">Проверены все файлы снапшотов. Товаров со статусом ⏳ или 🔍: <strong>0</strong>. Все 19 товаров имеют статус ✅ Проверено. Отчёт сохранён в <code>moysklad/snapshots/verify_18.04.2026.md</code>.</div>
    <div class="note-ok">✅ Товаров, ожидающих проверки владельцем: нет</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 18.04.2026 02:06 (МСК)</div>
    <div class="result">Проверено 18 товаров. Загружено сегодня: 0. Все товары с релизом 24.04 (Ascended Heroes, 4 товара) уже имеют фото (подтверждено 12.04). Выпущенные товары без фото: нет.</div>
    <div class="note-warn">⚠️ 5 блистеров Perfect Order (P-BLS-POR-02/04/05/06/07) имеют по 1 фото вместо рекомендуемых 2+. Не срочно.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 18.04.2026 03:04 (МСК)</div>
    <div class="result">Новых товаров к добавлению нет. Все 5 товаров со статусом «🟨 Скоро &lt; 30 дн» уже присутствуют в МойСклад. Chaos Rising Build &amp; Battle Box исключён (Prerelease Kit). Снапшот <code>sync_18.04.2026.md</code> сохранён.</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-warn">⚠️ Внимание</span>
    </div>
    <div class="time">Последний запуск: 18.04.2026 04:05 (МСК)</div>
    <div class="result">Обработано 9 заказов, проверено 12 товаров. Цен обновлено: 0. Ошибок: 0.</div>
    <div class="alert-red">🔴 <strong>Критичное нарушение:</strong> P-BBU-ASC — «Набор карточек Pokemon Ascended Heroes Booster Bundle (6 бустеров)» имеет цену продажи <strong>0 руб</strong> при закупочной 7 500 руб. Минимально допустимая: 11 625 руб (×1.55). Требуется установить цену вручную.</div>
  </div>

  <!-- 6. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 07:08 (МСК) — сегодняшний запуск ожидается в 07:08</div>
    <div class="result">Создан бэкап <strong>товары_17.04.2026.xlsx</strong> — 703 строки × 110 столбцов (694 товара + 8 модификаций), 453 КБ.</div>
  </div>

  <!-- 7. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 20:07 (МСК)</div>
    <div class="result">Сохранено 88 файлов (16 МБ) в <code>backups/2026-04-17_17-07/</code>. Всего бэкапов: 25, общий размер: 323 МБ.</div>
    <div class="note-warn">⚠️ Бэкап <code>2026-04-10_17-07</code> не удалился (ОС запрещает удаление — возможно заблокирован iCloud). Рекомендуется удалить вручную.</div>
  </div>

  <!-- 8. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-warn">⚠️ Внимание</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 22:31 (МСК)</div>
    <div class="result">Qwintry синхронизирован через API. eBay недоступен при автозапуске (Chrome extension offline). На складе 7 активных посылок, 4 ожидаются. Посылка #676582 отправлена, #672708 доставлена в Россию.</div>
    <div class="alert-red">⚠️ <strong>Неизвестная посылка на складе Qwintry:</strong> ID #1655968, трек 3000156429-8 (0.04 фунта, ~17.04.2026). Нет названия и декларации — вероятно новый заказ с eBay. Нужно открыть Qwintry, опознать и заполнить декларацию.</div>
  </div>

  <!-- 9. daily-report-upload -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">☁️ Загрузка отчёта на VPS <span class="task-id">daily-report-upload</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 06:35 (МСК)</div>
    <div class="result">dashboard.html (34 006 б), report-data.js (229 296 б), tasks-data.js (4 819 б) — push в GitHub (0a6b3ac→9f7d4ce) и FTP-синхронизация reg.ru выполнены успешно.</div>
    <div class="note-blue">🌐 <a href="https://boss.pokebarn.ru/dashboard.html" style="color:#1565c0;">boss.pokebarn.ru/dashboard.html</a></div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_17.04.2026.xlsx (464 КБ, 17.04 07:11)</div>
    <div class="file-warn">⚠️ Сегодняшний бэкап товары_18.04.2026.xlsx ещё не создан (запуск в 07:08)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 17.04 21:09)</div>
    <div class="file-ok">✅ Календарь релизов HTML: releases/календарь_релизов.html (обновлён 17.04 21:10)</div>
    <div class="file-warn">⚠️ eBay покупки: ebay/покупки_в_америке.xlsx — последнее обновление 16.04 (eBay offline при ночном запуске)</div>
    <div class="file-ok">✅ Снапшот: moysklad/snapshots/sync_18.04.2026.md</div>
    <div class="file-ok">✅ Верификация: moysklad/snapshots/verify_18.04.2026.md</div>
    <div class="file-ok">✅ Последний бэкап промптов: backups/2026-04-17_17-07/ (88 файлов, 16 МБ)</div>
  </div>

</body>
</html>
` },
  { iso: "2026-04-17", label: "17.04", fullLabel: "17.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 17.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; }
    .file-miss { color: #c62828; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-green { margin-top: 8px; padding: 8px 12px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #2e7d32; font-size: 13px; color: #2e7d32; }
    h2 { font-size: 18px; margin-top: 28px; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 17.04.2026</h1>

  <div class="summary">
    <strong>Задач запущено:</strong> 8 из 8 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 8 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0 &nbsp;|&nbsp;
    <strong>Не запускались:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 00:07 МСК</div>
    <div class="result">Статусы и даты пересчитаны (смены меток нет). Новых товаров не добавлено — все 54 секции Bulbapedia уже в таблице. Календарь содержит 84 товара, HTML обновлён (91 816 знаков).</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 01:07 МСК</div>
    <div class="result">Все 19 товаров имеют статус ✅ Проверено — товаров, ожидающих проверки владельцем, нет. Сравнение с МойСклад не потребовалось.</div>
    <div class="note-green">✅ Нет товаров, ожидающих проверки</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 02:06 МСК</div>
    <div class="result">Проверено 18 товаров, загрузка не потребовалась — у всех уже есть фото. Группа A (pre-release 24.04): 4 товара ASC Mega ex Box + Booster Bundle, по 2–3 фото. Группа B (после релиза): 14 товаров с 2–5 фото. ⚠️ 5 блистеров Perfect Order имеют по 1 фото — рекомендуется добавить back-фото.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 03:05 МСК</div>
    <div class="result">Новых товаров нет. Все 5 товаров со статусом «🟨 Скоро &lt; 30 дн» уже обработаны ранее (4 добавлены в МойСклад ✅, 1 исключён ⛔ как Prerelease Kit). Товаров, ожидающих проверки, нет.</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 17.04.2026 04:05 МСК</div>
    <div class="result">Обработано 10 заказов, проверено 10 товаров. Обновлений не потребовалось — все цены в норме (0 критичных нарушений, нет нулевых цен и заглушек 99 999).</div>
  </div>

  <!-- 9. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 16.04.2026 17:52 МСК (сегодняшний запуск в 07:08)</div>
    <div class="result">Файл бэкапа товары_16.04.2026.xlsx сохранён в moysklad/backup/. Следующий запуск сегодня в 07:08 МСК.</div>
  </div>

  <!-- 10. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 16.04.2026 20:07 МСК</div>
    <div class="result">Сохранено 87 файлов (16 MB) в backups/2026-04-16_17-08: 5 README, credentials.md, dashboard.html, 31 промпт, 3 скрипта, 46 отчётов. Удалено 17 старых бэкапов (старше 7 дней). Осталось 23 бэкапа.</div>
  </div>

  <!-- 11. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 16.04.2026 22:32 МСК</div>
    <div class="result">Обновлено 3 строки: #37 (32 Card Lot) → Delivered; #36 (Paldea Evolved) → На складе, ID 1656043-US; #33 (Pikachu SMP) → На складе. Ожидаемых посылок осталось: 4. На складе Qwintry USA: 7 посылок. Новых заказов eBay нет.</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_16.04.2026.xlsx (в moysklad/backup/)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 16.04.2026)</div>
    <div class="file-ok">✅ eBay таблица: ebay/покупки_в_америке.xlsx (обновлена 16.04.2026)</div>
    <div class="file-ok">✅ Снапшот проверки: moysklad/snapshots/verify_17.04.2026.md</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-16_17-08 (87 файлов, 16 MB)</div>
    <div class="file-miss">⚠️ Бэкап МойСклад за 17.04.2026 — ещё не создан (запуск в 07:08)</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-16", label: "16.04", fullLabel: "16.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Утренний отчёт Pokebarn — 16.04.2026</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
      max-width: 900px; 
      margin: 0 auto; 
      padding: 20px; 
      color: #333; 
      background: #f9f9f9;
    }
    h1 { 
      font-size: 28px; 
      font-weight: 600;
      border-bottom: 3px solid #333; 
      padding-bottom: 12px;
      margin-bottom: 24px;
    }
    .summary { 
      background: linear-gradient(135deg, #f5f5f5 0%, #fffbf0 100%);
      padding: 20px; 
      border-radius: 8px; 
      margin-bottom: 24px;
      border-left: 4px solid #333;
    }
    .summary-line {
      display: flex;
      gap: 24px;
      flex-wrap: wrap;
      margin-top: 8px;
    }
    .summary-item {
      font-size: 14px;
    }
    .summary-value {
      font-weight: 600;
      color: #333;
    }
    .task { 
      background: white;
      border: 1px solid #e0e0e0; 
      border-radius: 8px; 
      padding: 16px; 
      margin-bottom: 12px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.05);
    }
    .task-header { 
      display: flex; 
      justify-content: space-between; 
      align-items: center;
      margin-bottom: 12px;
    }
    .task-title {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 16px;
      font-weight: 600;
    }
    .task-icon {
      font-size: 20px;
    }
    .task-id { 
      font-size: 12px; 
      color: #999; 
      font-family: monospace; 
      font-weight: 400;
      margin-left: auto;
      padding-left: 12px;
    }
    .status { 
      padding: 4px 12px; 
      border-radius: 12px; 
      font-size: 13px; 
      font-weight: 500;
      white-space: nowrap;
    }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .task-meta {
      display: flex;
      gap: 16px;
      font-size: 13px;
      color: #666;
      margin-bottom: 8px;
    }
    .task-result { 
      color: #555; 
      font-size: 14px;
      line-height: 1.5;
    }
    .note-blue { 
      margin-top: 12px; 
      padding: 12px; 
      background: #e3f2fd; 
      border-radius: 6px; 
      border-left: 4px solid #1565c0; 
      font-size: 13px; 
      color: #1565c0;
    }
    .note-blue a { 
      color: #1565c0; 
      text-decoration: none;
      font-weight: 500;
    }
    .note-blue a:hover {
      text-decoration: underline;
    }
    h2 { 
      font-size: 18px; 
      font-weight: 600;
      margin-top: 32px;
      margin-bottom: 12px;
      padding-bottom: 8px;
      border-bottom: 2px solid #e0e0e0;
    }
    .files {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .file-ok { color: #2e7d32; }
    .file-miss { color: #c62828; }
    .footer {
      margin-top: 40px;
      padding-top: 20px;
      border-top: 2px solid #e0e0e0;
      font-size: 12px;
      color: #999;
    }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 16.04.2026</h1>
  
  <div class="summary">
    <strong>Статус задач:</strong>
    <div class="summary-line">
      <div class="summary-item">✅ Успешно: <span class="summary-value">6</span></div>
      <div class="summary-item">⚠️ Предупреждения: <span class="summary-value">1</span></div>
      <div class="summary-item">❌ Ошибки: <span class="summary-value">1</span></div>
      <div class="summary-item">⏭️ Не запускались: <span class="summary-value">1</span></div>
    </div>
    <div class="summary-line">
      <div class="summary-item">Всего активных: <span class="summary-value">10</span></div>
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">📅</span>
        <span>Календарь релизов Pokemon TCG</span>
        <span class="task-id">update-pokemon-releases</span>
      </div>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="task-meta">
      <span>Время: 21:07</span>
    </div>
    <div class="task-result">
      Обновлено 84 товара. Сгенерированы Excel файл (календарь_релизов.xlsx) и интерактивный HTML календарь. Все статусы пересчитаны, цвета применены.
    </div>
    <div class="note-blue">
      📅 <a href="releases/календарь_релизов.html">Открыть интерактивный календарь релизов</a>
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">🔍</span>
        <span>Проверка товаров</span>
        <span class="task-id">moysklad-verify-products</span>
      </div>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="task-meta">
      <span>Время: 22:07</span>
    </div>
    <div class="task-result">
      Все 19 товаров в снапшотах проверены и имеют статус ✅ Проверено (29.03.2026). Новых товаров для проверки не обнаружено.
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">📸</span>
        <span>Авто-фото товаров</span>
        <span class="task-id">moysklad-add-images-auto</span>
      </div>
      <span class="status status-warn">⚠️ Требуется действие</span>
    </div>
    <div class="task-meta">
      <span>Время: 23:06</span>
    </div>
    <div class="task-result">
      Анализ завершён: обнаружено 18 товаров (4 pre-release + 11 без фото после релиза + 3 других), требующих загрузки изображений. Требуется браузер для автоматизированного поиска и загрузки.
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">🔄</span>
        <span>Синхронизация → МойСклад</span>
        <span class="task-id">moysklad-release-sync</span>
      </div>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="task-meta">
      <span>Время: 00:04</span>
    </div>
    <div class="task-result">
      МойСклад синхронизирован. Новых товаров для добавления не обнаружено. Все 19 ранее добавленных товаров имеют статус ✅ Проверено.
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">💰</span>
        <span>Закупочные цены</span>
        <span class="task-id">moysklad-purchase-prices</span>
      </div>
      <span class="status status-error">❌ Ошибка</span>
    </div>
    <div class="task-meta">
      <span>Время: 01:05</span>
    </div>
    <div class="task-result">
      ❌ Системная ошибка: компонент computer-use недоступен. Не удалось подключиться к Hostinger VPS панели для запуска скрипта обновления цен.
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">🗄️</span>
        <span>Бэкап МойСклад</span>
        <span class="task-id">moysklad-backup</span>
      </div>
      <span class="status status-skip">⏳ Данные недоступны</span>
    </div>
    <div class="task-meta">
      <span>Время: 14:40</span>
    </div>
    <div class="task-result">
      Последние данные о запуске недоступны. Задача выполняется ежедневно в 07:00 по расписанию.
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">💾</span>
        <span>Бэкап промптов</span>
        <span class="task-id">backup-prompts-readme</span>
      </div>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="task-meta">
      <span>Время: 17:07</span>
    </div>
    <div class="task-result">
      Успешно заархивировано 87 файлов (16 МБ): README-файлы, prompts/, scripts/, reports/. Архив создан в backups/2026-04-15_17-07/
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">📦</span>
        <span>eBay → Qwintry</span>
        <span class="task-id">ebay-qwintry-sync</span>
      </div>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="task-meta">
      <span>Время: 19:31</span>
    </div>
    <div class="task-result">
      Синхронизация завершена. Проверено 37 заказов, новых заказов после 10.04 не обнаружено. 6 посылок в пути, 5 на складе, 24 отправлены в РФ.
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">📊</span>
        <span>Дневной отчёт</span>
        <span class="task-id">daily-report</span>
      </div>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="task-meta">
      <span>Расписание: 06:00 ежедневно</span>
    </div>
    <div class="task-result">
      HTML-отчёт сгенерирован и сохранён. Следующий запуск завтра в 06:00.
    </div>
  </div>

  <div class="task">
    <div class="task-header">
      <div class="task-title">
        <span class="task-icon">☁️</span>
        <span>Загрузка отчёта на VPS</span>
        <span class="task-id">daily-report-upload</span>
      </div>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="task-meta">
      <span>Время: 03:35</span>
    </div>
    <div class="task-result">
      Развёрнут на Vercel. dashboard.html (34 КБ) и report-data.js (208 КБ) загружены. Доступно на https://boss.pokebarn.ru/dashboard.html
    </div>
  </div>

  <h2>📁 Файлы и системы</h2>
  <div class="files">
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx (обновлён 16.04)</div>
    <div class="file-ok">✅ Бэкап МойСклад: moysklad/backups/ (последний от 16.04)</div>
    <div class="file-ok">✅ Снапшоты товаров: moysklad/snapshots/ (19 товаров проверено)</div>
    <div class="file-ok">✅ Данные eBay: ebay/покупки_в_америке.xlsx (актуально на 15.04)</div>
    <div class="file-ok">✅ Бэкапы промптов: backups/2026-04-15_17-07 (87 файлов, 16MB)</div>
  </div>

  <div class="footer">
    <p>Отчёт сгенерирован автоматически в 06:00. Все размещено в /pokebarn_cowork/reports/</p>
    <p>Исходные данные: результаты 9 основных ежедневных задач.</p>
  </div>
</body>
</html>
` },
  { iso: "2026-04-15", label: "15.04", fullLabel: "15.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 15.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 12px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; }
    .file-miss { color: #c62828; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-green { margin-top: 8px; padding: 8px 12px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #2e7d32; font-size: 13px; color: #2e7d32; }
    h2 { font-size: 18px; margin-top: 28px; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 15.04.2026</h1>

  <div class="summary">
    <strong>Задач запущено:</strong> 8 из 8 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 8 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 0 &nbsp;|&nbsp;
    <strong>Не запускались:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 15.04.2026 00:07</div>
    <div class="result">84 товара в таблице, 0 новых позиций с Bulbapedia. Статусы и дни до релиза пересчитаны для всех товаров. HTML-календарь сгенерирован (91 816 символов).</div>
    <div class="note-blue">📅 <a href="../releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров МойСклад <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 15.04.2026 01:07</div>
    <div class="result">Все 19 товаров проверены владельцем (статус ✅ Проверено 29.03.2026). Ожидают проверки: 0. Новых товаров не добавлялось с 06.04.</div>
    <div class="note-green">✅ Нет товаров, ожидающих проверки владельцем</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 15.04.2026 02:06</div>
    <div class="result">Проверено 10 товаров. Добавлено 1 фото: P-BLS-POR-03 (Perfect Order Single Pack Blister — Makuhita) — загружен back (900×900 px). Итого у товара 2 фото (front + back). 6 товаров Perfect Order и Ascended Heroes уже имели фото. 4 pre-release товара (Ascended Heroes, 24.04) — фото уже были.</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 15.04.2026 03:05</div>
    <div class="result">Новых товаров для добавления нет. Все 4 товара «Скоро &lt; 30 дн» (Ascended Heroes Mega ex Box × 3 + Booster Bundle) уже в МойСклад. Chaos Rising Build &amp; Battle Box исключён как Prerelease Kit. Снапшот сохранён: sync_15.04.2026.md.</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 15.04.2026 04:05</div>
    <div class="result">Обработано 12 заказов поставщикам, 18 товаров. Обновлено: 0 (все 18 уже имеют актуальные или более высокие закупочные цены). Нарушений цен не выявлено.</div>
  </div>

  <!-- 6. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 14.04.2026 07:08</div>
    <div class="result">Файл товары_14.04.2026.xlsx сохранён (670 товаров, 279 КБ, 15 столбцов). Данные получены через МойСклад API.</div>
  </div>

  <!-- 7. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов и README <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 14.04.2026 20:07</div>
    <div class="result">Сохранено 84 файла (16 МБ): 5 README, 1 credentials.md, 30 промптов, 3 скрипта, 44 отчёта. Всего бэкапов: 33. Примечание: 5 старых папок (06–07 апреля) не удалены из-за ограничений прав доступа macOS.</div>
  </div>

  <!-- 8. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 14.04.2026 22:32</div>
    <div class="result">Новых заказов нет (все 37 позиций уже в таблице). Обновлены статусы: 2 заказа доставлены (Trainer Card Bundle №35, Paldea Evolved Ex Lot №36). В Qwintry 2 посылки обновились на «На складе» (заказы №31, №35). Текущий статус: 6 ожидаемых, 5 на складе, 2 исходящих (отправлены).</div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_14.04.2026.xlsx (670 товаров, 279 КБ)</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx — обновлён 15.04.2026 00:22</div>
    <div class="file-ok">✅ eBay покупки: ebay/покупки_в_америке.xlsx — обновлён 14.04.2026 22:46</div>
    <div class="file-ok">✅ Снапшот синхронизации: moysklad/snapshots/sync_15.04.2026.md</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-14_17-07 (84 файла, 16 МБ)</div>
  </div>
</body>
</html>
` },
  { iso: "2026-04-14", label: "14.04", fullLabel: "14.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 14.04.2026</title>
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
    .status-warn { background: #fff8e1; color: #f57f17; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .files { margin-top: 8px; }
    .file-ok { color: #2e7d32; margin: 4px 0; font-size: 14px; }
    .file-miss { color: #c62828; margin: 4px 0; font-size: 14px; }
    .file-warn { color: #e65100; margin: 4px 0; font-size: 14px; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 6px; border-left: 4px solid #1565c0; font-size: 13px; color: #1565c0; }
    .note-warn { margin-top: 8px; padding: 8px 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; font-size: 13px; color: #e65100; }
    .note-ok { margin-top: 8px; padding: 8px 12px; background: #e8f5e9; border-radius: 6px; border-left: 4px solid #4caf50; font-size: 13px; color: #2e7d32; }
  </style>
</head>
<body>
  <h1>☀️ Утренний отчёт — 14.04.2026</h1>

  <div class="summary">
    <strong>Задач запущено:</strong> 9 из 9 активных &nbsp;|&nbsp;
    <strong>Успешно:</strong> 8 &nbsp;|&nbsp;
    <strong>Ошибки:</strong> 1 &nbsp;|&nbsp;
    <strong>Не запускались:</strong> 0
  </div>

  <!-- 1. update-pokemon-releases — ВСЕГДА ПЕРВАЯ -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📅 Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 14.04.2026 00:07 МСК</div>
    <div class="result">Обновлена дата на 14.04.2026, пересчитаны дни до релиза для всех 84 товаров. Новых товаров с Bulbapedia не обнаружено. Excel и HTML-календарь успешно сгенерированы.</div>
    <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
  </div>

  <!-- 2. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔍 Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 14.04.2026 01:07 МСК</div>
    <div class="result">Все 19 товаров проверены владельцем (✅ Проверено 29.03.2026). Товаров, ожидающих проверки: 0. Новых товаров со статусом ⏳ или 🔍 не обнаружено.</div>
    <div class="note-ok">✅ Нет товаров, требующих проверки</div>
  </div>

  <!-- 3. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📸 Авто-фото товаров <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-warn">⚠️ Успешно (замечание)</span>
    </div>
    <div class="time">Последний запуск: 14.04.2026 02:06 МСК</div>
    <div class="result">Проверено 5 товаров: загружено 1 фото (P-BLS-POR-03 — фото front из miniaturemarket.com). 4 pre-release товара (ASC, 24.04) уже имеют фото.</div>
    <div class="note-warn">⚠️ P-BLS-POR-03: фото back (1500×1500) подготовлено локально, требуется ручная загрузка в МойСклад</div>
  </div>

  <!-- 4. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🔄 Синхронизация → МойСклад <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 14.04.2026 03:05 МСК</div>
    <div class="result">Новых товаров для добавления нет. Все 5 позиций со статусом 🟨 &lt; 30 дней уже обработаны ранее. Ближайшие новые кандидаты — ориентировочно 22 апреля (сет Chaos Rising).</div>
  </div>

  <!-- 5. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💰 Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-error">❌ Ошибка</span>
    </div>
    <div class="time">Последний запуск: 14.04.2026 04:05 МСК</div>
    <div class="result">Скрипт обновления закупочных цен не выполнен: Chrome-расширение недоступно в автоматическом режиме (ошибка «No URL available»), computer-use требует одобрения пользователя.</div>
    <div class="note-warn">⚠️ Требуется ручной запуск: hpanel.hostinger.com → Terminal → <code>python3 /root/purchase_prices.py</code></div>
  </div>

  <!-- 6. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">🗄️ Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 13.04.2026 07:08 МСК (бэкап за 14.04 по расписанию в 07:00)</div>
    <div class="result">Файл товары_13.04.2026.xlsx: 702 товара, 110 столбцов, 451.9 КБ. Всего в папке backup: 24 файла (март–апрель 2026).</div>
  </div>

  <!-- 7. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">💾 Бэкап промптов <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-warn">⚠️ Успешно (замечание)</span>
    </div>
    <div class="time">Последний запуск: 13.04.2026 20:07 МСК</div>
    <div class="result">Сохранено 82 файла, 16 МБ (README, credentials, dashboard, prompts/, scripts/, reports/). Всего бэкапов: 30.</div>
    <div class="note-warn">⚠️ Папки 2026-04-06_12-25 и 2026-04-06_14-07 не удалены: файл панель_задач.html защищён (Permission denied)</div>
  </div>

  <!-- 8. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">📦 eBay → Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 13.04.2026 22:32 МСК</div>
    <div class="result">3 строки обновлены → Delivered (строки 29, 32, 34). Созданы 3 посылки Qwintry с декларациями (строки 35, 37, 38: Holo Energy, Paldea Evolved, 32 Card Lot). Исправлен баг строки 36 (неверный URL в колонке M).</div>
  </div>

  <!-- 9. daily-report-upload -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">☁️ Загрузка отчёта на VPS <span class="task-id">daily-report-upload</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 13.04.2026 06:35 МСК (вчерашний отчёт)</div>
    <div class="result">dashboard.html (34 006 байт) и report-data.js (176 187 байт) успешно загружены на boss.pokebarn.ru через git push → Vercel.</div>
    <div class="note-blue">🌐 <a href="https://boss.pokebarn.ru/dashboard.html" style="color:#1565c0;">boss.pokebarn.ru/dashboard.html</a></div>
  </div>

  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_13.04.2026.xlsx (451.9 КБ, 702 товара) — бэкап за 14.04 по расписанию в 07:00</div>
    <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx + .html — обновлено 14.04.2026 00:11–00:12</div>
    <div class="file-ok">✅ eBay таблица: ebay/покупки_в_америке.xlsx — обновлено 13.04.2026 22:58</div>
    <div class="file-ok">✅ Снапшот verify: moysklad/snapshots/verify_14.04.2026.md — 0 товаров на проверке</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-04-13_17-07 — последний из 30</div>
    <div class="file-warn">⚠️ Бэкап промптов: папки 2026-04-06_12-25 и _14-07 не удаляются (Permission denied)</div>
  </div>
</body>
</html>` },
  { iso: "2026-04-13", label: "13.04", fullLabel: "13.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 13.04.2026</title>
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
    .result { color: #555; margin-top: 8px; font-size: 13.5px; line-height: 1.5; }
    .time { color: #aaa; font-size: 12px; margin-top: 4px; }
    .note { margin-top: 8px; padding: 8px 12px; background: #fff3e0; border-radius: 5px; font-size: 13px; color: #bf6000; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 5px; font-size: 13px; color: #1565c0; }
    .files-section { background: #fff; border: 1px solid #e0e0e0; border-radius: 8px; padding: 14px 16px; margin: 10px 0; }
    .file-ok { color: #2e7d32; font-size: 13.5px; margin: 4px 0; }
    .file-miss { color: #c62828; font-size: 13.5px; margin: 4px 0; }
    .file-warn { color: #e65100; font-size: 13.5px; margin: 4px 0; }
    .detail-list { margin-top: 8px; padding-left: 16px; font-size: 13px; color: #555; }
    .detail-list li { margin: 3px 0; }
    .detail-table { width: 100%; border-collapse: collapse; margin-top: 8px; font-size: 13px; }
    .detail-table td { padding: 3px 8px 3px 0; vertical-align: top; }
    .detail-table td:first-child { color: #888; white-space: nowrap; width: 160px; }
    .tag { display: inline-block; font-size: 11px; padding: 1px 7px; border-radius: 10px; margin-left: 5px; }
    .tag-soon { background: #fff9c4; color: #f57f17; border: 1px solid #ffe082; }
    .divider { border: none; border-top: 1px solid #eee; margin: 20px 0; }
  </style>
</head>
<body>

<h1>☀️ Утренний отчёт Pokebarn — 13.04.2026</h1>

<div class="summary">
  <span><strong>Задач запущено:</strong> 8 из 8 активных</span>
  <span>✅ <strong>Успешно:</strong> 8</span>
  <span>❌ <strong>Ошибки:</strong> 0</span>
  <span>📋 <strong>Товаров на проверку:</strong> 0</span>
</div>

<!-- 1. update-pokemon-releases -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 13.04.2026 00:07</div>
  <div class="result">
    Обновлено 84 статуса и дни до релиза. Проверена Bulbapedia — новых товаров не обнаружено. Форматирование применено, Excel и HTML-версия обновлены.
  </div>
  <ul class="detail-list">
    <li>🔴 Вышел: 61 товар</li>
    <li>🟨 Скоро &lt; 30 дн: 5 товаров (Ascended Heroes Mega ex Box ×3, Booster Bundle, Chaos Rising B&amp;B)</li>
    <li>🟩 &gt; 30 дней: 18 товаров (Chaos Rising основная линейка, Mega Moonlight, Lumiose и др.)</li>
  </ul>
  <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
</div>

<!-- 2. moysklad-verify-products -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 13.04.2026 01:07</div>
  <div class="result">
    Все 19 товаров проверены владельцем (статус ✅ Проверено 29.03.2026). Новых товаров со статусом ⏳ или 🔍 не обнаружено — сравнение с МойСклад не потребовалось.
    Отчёт сохранён: <code>moysklad/snapshots/verify_13.04.2026.md</code>
  </div>
  <div style="font-size:13px; color:#888; margin-top:8px; font-style:italic;">📋 Товаров на проверку: 0</div>
</div>

<!-- 3. moysklad-add-images-auto -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Автозагрузка фото <span class="task-id">moysklad-add-images-auto</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 13.04.2026 02:06</div>
  <div class="result">
    Проверено 8 товаров — у всех уже есть фото в МойСклад, загрузка не потребовалась. Таблица <code>releases/календарь_релизов.xlsx</code> обновлена (колонка «Фото» ✅ для 8 товаров).
  </div>
  <table class="detail-table">
    <tr><td>Группа A (pre-release ~24.04)</td><td>Mega Meganium ✅ · Mega Emboar ✅ · Mega Feraligatr ✅ · Booster Bundle ✅</td></tr>
    <tr><td>Группа B (выпущены)</td><td>Mega Gardevoir ✅ · Mega Lucario ✅ · First Partners Pin ✅ · Perfect Order ETB ✅</td></tr>
  </table>
</div>

<!-- 4. moysklad-release-sync -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 13.04.2026 03:05</div>
  <div class="result">
    Новых товаров нет. Все ранее добавленные товары Ascended Heroes обработаны (4 позиции ✅, 1 исключена — Prerelease Kit).
    Ближайшие кандидаты (~39 дней): Chaos Rising линейка и Mega Lucario ex League Battle Deck — перейдут в 🟨 около 22.04.2026.
    Снапшот сохранён: <code>moysklad/snapshots/sync_13.04.2026.md</code>
  </div>
  <ul class="detail-list">
    <li>Mega Lucario ex League Battle Deck <span class="tag tag-soon">39 дней</span></li>
    <li>Mega Zygarde ex Premium Collection <span class="tag tag-soon">39 дней</span></li>
    <li>Chaos Rising Бустер / Bundle / ETB / Mini Tin <span class="tag tag-soon">39 дней</span></li>
  </ul>
</div>

<!-- 5. moysklad-purchase-prices -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 13.04.2026 04:05</div>
  <div class="result">
    Скрипт выполнен успешно. Обработано 22 заказа, проверено 30 товаров — обновлений не потребовалось, все закупочные цены уже актуальны.
  </div>
  <table class="detail-table">
    <tr><td>Заказов обработано</td><td>22</td></tr>
    <tr><td>Товаров проверено</td><td>30</td></tr>
    <tr><td>Цены обновлены</td><td>0</td></tr>
    <tr><td>Ошибок</td><td>0</td></tr>
  </table>
</div>

<!-- 6. moysklad-backup -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 12.04.2026 07:08 (следующий: 13.04.2026 ~07:08)</div>
  <div class="result">
    Файл <strong>товары_12.04.2026.xlsx</strong> сохранён: 702 записи (694 товара + 8 модификаций), 110 столбцов, 451.5 КБ.
    Бэкап за сегодня (13.04) запустится в 07:00 — ещё не создан в момент генерации отчёта.
  </div>
</div>

<!-- 7. backup-prompts-readme -->
<div class="task">
  <div class="task-header">
    <span class="task-name">Бэкап промптов и README <span class="task-id">backup-prompts-readme</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 12.04.2026 20:07 (следующий: ~08:07 и 14:07 сегодня)</div>
  <div class="result">
    Бэкап <strong>2026-04-12_17-07</strong> выполнен успешно: сохранено 81 файл (16 МБ) — 5 README, credentials.md, dashboard.html, 30 промптов, 3 скрипта, 41 файл отчётов. Всего хранится 27 бэкапов.
  </div>
</div>

<!-- 8. ebay-qwintry-sync -->
<div class="task">
  <div class="task-header">
    <span class="task-name">eBay / Qwintry синхронизация <span class="task-id">ebay-qwintry-sync</span></span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="time">Последний запуск: 12.04.2026 22:32</div>
  <div class="result">
    Получен новый трек-номер <strong>870559469946</strong> (FedEx) для «Pokémon TCG Trainer Card Bundle». Создана ожидаемая посылка <strong>#1017407-US</strong> в Qwintry ($7.39). Таблица обновлена.
  </div>
  <table class="detail-table">
    <tr><td>Ожидаемые посылки</td><td>6 шт. (добавлена #1017407-US)</td></tr>
    <tr><td>На складе Qwintry</td><td>2 шт. (Squirtle, Ivysaur)</td></tr>
    <tr><td>Исходящие</td><td>3 шт. — все Отправлены</td></tr>
    <tr><td>Ждут трека</td><td>Заказы #34, #36, #37</td></tr>
  </table>
</div>

<hr class="divider">

<h2>📁 Файлы</h2>
<div class="files-section">
  <div class="file-ok">✅ Бэкап МойСклад (вчера): товары_12.04.2026.xlsx — 451.5 КБ, 694+8 товаров</div>
  <div class="file-warn">⏳ Бэкап МойСклад (сегодня): товары_13.04.2026.xlsx — ещё не создан (запустится в 07:00)</div>
  <div class="file-ok">✅ Календарь релизов: releases/календарь_релизов.xlsx — обновлён 13.04.2026 в 00:07</div>
  <div class="file-ok">✅ Покупки eBay: ebay/покупки_в_америке.xlsx — обновлён 12.04.2026 в 20:31</div>
  <div class="file-ok">✅ Снапшот МойСклад: moysklad/snapshots/sync_13.04.2026.md — создан</div>
  <div class="file-ok">✅ Последний бэкап промптов: backups/2026-04-12_17-07 — 81 файл, 16 МБ</div>
</div>

</body>
</html>
` },
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
    .result { color: #555; margin-top: 8px; font-size: 13.5px; line-height: 1.5; }
    .time { color: #aaa; font-size: 12px; margin-top: 4px; }
    .note { margin-top: 8px; padding: 8px 12px; background: #fff3e0; border-radius: 5px; font-size: 13px; color: #bf6000; }
    .note-blue { margin-top: 8px; padding: 8px 12px; background: #e3f2fd; border-radius: 5px; font-size: 13px; color: #1565c0; }
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
    .divider { border: none; border-top: 1px solid #eee; margin: 20px 0; }
  </style>
</head>
<body>

<h1>☀️ Утренний отчёт Pokebarn — 12.04.2026</h1>

<div class="summary">
  <span><strong>Задач запущено:</strong> 8 из 8 активных</span>
  <span>✅ <strong>Успешно:</strong> 7</span>
  <span>⚠️ <strong>Данные недоступны:</strong> 1</span>
  <span>📋 <strong>Товаров на проверку:</strong> 0</span>
</div>

<!-- 1. update-pokemon-releases -->
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
    <li>🔴 Вышел: 61 товар</li>
    <li>🟨 Скоро &lt; 30 дней: 5 товаров (ASC Mega ex Box ×3 + ASC Booster Bundle — 24.04; CRI Build &amp; Battle Box — 09.05)</li>
    <li>🟩 &gt; 30 дней: 18 товаров</li>
  </ul>
  <div class="note-blue">📅 <a href="releases/календарь_релизов.html" style="color:#1565c0;">Открыть интерактивный календарь релизов</a></div>
</div>

<!-- 2. moysklad-verify-products -->
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

<!-- 3. moysklad-add-images-auto -->
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

<!-- 4. moysklad-release-sync -->
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

<!-- 5. moysklad-purchase-prices -->
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

<!-- 6. moysklad-backup -->
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

<!-- 7. backup-prompts-readme -->
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

<!-- 8. ebay-qwintry-sync -->
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
` },
  { iso: "2026-04-01", label: "01.04", fullLabel: "01.04.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 01.04.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 820px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 16px; }
    h2 { font-size: 18px; margin-top: 28px; border-bottom: 1px solid #eee; padding-bottom: 6px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; font-size: 14px; }
    .summary span { margin-right: 16px; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: flex-start; gap: 12px; }
    .task-name { font-weight: 600; font-size: 16px; }
    .task-id { font-size: 11px; color: #999; font-family: monospace; margin-left: 6px; font-weight: 400; display: inline-block; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; white-space: nowrap; flex-shrink: 0; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-nodata { background: #f3e5f5; color: #6a1b9a; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #555; margin-top: 8px; font-size: 14px; line-height: 1.5; }
    .time { color: #999; font-size: 12px; margin-top: 4px; }
    .note { color: #888; font-size: 12px; font-style: italic; margin-top: 4px; }
    .files { margin-top: 4px; }
    .file-ok { color: #2e7d32; font-size: 13px; margin: 4px 0; }
    .file-miss { color: #c62828; font-size: 13px; margin: 4px 0; }
    .file-warn { color: #e65100; font-size: 13px; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .review-item .date { color: #999; font-size: 12px; }
    .review-badge { display: inline-block; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; }
    .badge-pending { background: #fff3e0; color: #e65100; }
    .badge-edited { background: #e3f2fd; color: #1565c0; }
    .incident { background: #fff3e0; border: 1px solid #ffe0b2; border-radius: 6px; padding: 10px 12px; margin-top: 8px; font-size: 13px; color: #e65100; }
    .incident strong { color: #bf360c; }
    .files-grid { display: grid; gap: 6px; margin-top: 8px; }
    code { background: #f5f5f5; padding: 1px 5px; border-radius: 3px; font-size: 12px; font-family: monospace; }
  
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
    <a href="daily_30.03.2026.html">← 30.03.2026</a>
    <span class="nav-center">☀️ 01.04.2026</span>
    <div style="display:flex;gap:8px">
      <a href="daily_02.04.2026.html">02.04.2026 →</a>
      <a href="../панель_задач.html" class="nav-panel">📅 Панель задач</a>
    </div>
  </div>
  <h1>☀️ Утренний отчёт Pokebarn — 01.04.2026</h1>

  <div class="summary">
    <span>🗂 <strong>Задач запущено:</strong> 9 из 10</span>
    <span>✅ <strong>Успешно (по файлам):</strong> 2</span>
    <span>❓ <strong>Данные недоступны:</strong> 7</span>
    <span>⛔ <strong>Отключена:</strong> 1</span>
    <br><br>
    <span>📋 <strong>Товаров на проверку:</strong> 0</span>
    <span style="color:#888; font-size:12px;">— все 19 товаров подтверждены владельцем 29.03.2026</span>
  </div>

  <p style="font-size:13px; color:#888; background:#f9f9f9; padding:10px 14px; border-radius:6px; border-left:3px solid #ccc;">
    ℹ️ <strong>Примечание о данных:</strong> Транскрипты всех сессий за сегодня оказались пустыми (no messages stored). Статусы задач определены на основе файловых артефактов в рабочей папке. Для задач без артефактов статус указан как «данные недоступны».
  </p>

  <!-- 1. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров <span class="task-id">moysklad-verify-products</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 01.04.2026 01:07 (локальное время)</div>
    <div class="result">
      Все 19 товаров имеют статус ✅ Проверено. Непроверенных товаров нет (⏳ = 0, 🔍 = 0). Новых товаров за 31.03 не добавлялось.
    </div>
    <div class="note">Источник: <code>moysklad/snapshots/verify_31.03.2026.md</code></div>
  </div>

  <!-- 2. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация релизов <span class="task-id">moysklad-release-sync</span></span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 01.04.2026 02:05 (локальное время)</div>
    <div class="result">
      Новых товаров для добавления в МойСклад не найдено. Все товары со статусом «🟨 Скоро &lt;30 дн» в календаре релизов уже обработаны:
      P-SET-MEG-05 (Ascended Heroes Mega ex Box — Mega Meganium ex) ✅,
      P-SET-ASC-05 (Ascended Heroes Mega ex Box — Mega Emboar ex) ✅,
      P-SET-ASC-06 (Ascended Heroes Mega ex Box — Mega Feraligatr ex) ✅,
      P-BBU-ASC (Ascended Heroes Booster Bundle) ✅.
      Товар «2025 Pokémon World Championships Decks» — исключён ⛔️.
    </div>
    <div class="note">Источник: <code>moysklad/snapshots/sync_31.03.2026.md</code></div>
    <div class="review-list">
      <h3>📋 Товары на проверку (0 шт.)</h3>
      <div style="font-size:13px; color:#888;">Все товары подтверждены владельцем 29.03.2026. Список пуст.</div>
    </div>
  </div>

  <!-- 3. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены <span class="task-id">moysklad-purchase-prices</span></span>
      <span class="status status-nodata">❓ Данные недоступны</span>
    </div>
    <div class="time">Последний запуск: 01.04.2026 03:05 (локальное время)</div>
    <div class="result">
      Транскрипт сессии пуст. Файл отчёта за 01.04.2026 не сохранён.
    </div>
    <div class="incident">
      <strong>⚠️ Инцидент на предыдущем запуске (31.03.2026):</strong> Webhook <code>https://davidkozh.app.n8n.cloud/webhook/purchase-prices</code> вернул HTTP 200 с пустым телом ответа. Количество обновлённых цен неизвестно. Возможные причины: n8n workflow работает в режиме «Respond Immediately», или ошибка в узле ответа. Источник: <code>moysklad/отчёт_закупочные_цены_31.03.2026.md</code>
    </div>
  </div>

  <!-- 4. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay / Qwintry <span class="task-id">ebay-qwintry-sync</span></span>
      <span class="status status-nodata">❓ Данные недоступны</span>
    </div>
    <div class="time">Последний запуск: 01.04.2026 06:02 (локальное время)</div>
    <div class="result">
      Транскрипт сессии пуст. Файл отчёта за 01.04.2026 не сохранён.
      Файл <code>ebay/покупки_в_америке.xlsx</code> не обновлён после запуска (последнее изменение: 29.03.2026 06:19).
    </div>
    <div class="note">Контекст: запуск от 26.03.2026 фиксировал сбои Qwintry (сайт не загружался) и блокировку файловой системы. Возможна хроническая проблема.</div>
  </div>

  <!-- 5. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Фото товаров (авто) <span class="task-id">moysklad-add-images-auto</span></span>
      <span class="status status-nodata">❓ Данные недоступны</span>
    </div>
    <div class="time">Последний запуск: 01.04.2026 08:06 (локальное время)</div>
    <div class="result">
      Транскрипт сессии пуст. Файл отчёта не сохранён. Результаты поиска и загрузки фото неизвестны.
    </div>
  </div>

  <!-- 6. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов / README <span class="task-id">backup-prompts-readme</span></span>
      <span class="status status-warn">⚠️ Требует внимания</span>
    </div>
    <div class="time">Последний запуск: 01.04.2026 08:07 (локальное время)</div>
    <div class="result">
      Транскрипт сессии пуст. Бэкап-папка за 01.04.2026 не создана — последний найденный бэкап: <code>backups/2026-03-31_15-01</code> (вчера, 15:01).
    </div>
    <div class="note">Ожидаемая папка: <code>backups/2026-04-01_08-07</code>. Возможно, задача завершилась ошибкой.</div>
  </div>

  <!-- 7. update-pokemon-releases -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов Pokemon TCG <span class="task-id">update-pokemon-releases</span></span>
      <span class="status status-nodata">❓ Данные недоступны</span>
    </div>
    <div class="time">Последний запуск: 31.03.2026 22:07 (локальное время)</div>
    <div class="result">
      Транскрипт сессии пуст. Файл <code>releases/календарь_релизов.xlsx</code> последний раз изменён в 14:59 31.03 — до запуска задачи. Возможно, изменений не потребовалось (нет новых релизов).
    </div>
  </div>

  <!-- 8. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад <span class="task-id">moysklad-backup</span></span>
      <span class="status status-warn">⚠️ Требует внимания</span>
    </div>
    <div class="time">Последний запуск: 31.03.2026 23:08 (локальное время)</div>
    <div class="result">
      Транскрипт сессии пуст. Файл бэкапа за 01.04.2026 отсутствует.
      Последний бэкап: <code>moysklad/backup/товары_31.03.2026.xlsx</code> (создан 15:04 31.03 — раньше запуска задачи в 23:08).
    </div>
    <div class="note">Возможно, задача определила, что файл за текущую дату уже существует, или завершилась без создания файла.</div>
  </div>

  <!-- 9. openclaw-daily-audit -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Аудит OpenClaw <span class="task-id">openclaw-daily-audit</span></span>
      <span class="status status-nodata">❓ Данные недоступны</span>
    </div>
    <div class="time">Последний запуск: 01.04.2026 08:33 (локальное время)</div>
    <div class="result">
      Транскрипт сессии пуст. Файл аудита за 01.04.2026 не создан (последний: <code>audit/audit-2026-03-31.md</code>).
    </div>
    <div class="incident">
      <strong>⚠️ Проблема из аудита 31.03:</strong> Telegram Web (web.telegram.org) не загрузился в Chrome MCP — blank page, JS заблокирован. Health check OpenClaw не выполнен. Telegram-сессия <code>claude-haiku-4-5</code>: контекст 71% (142k/200k) по состоянию на 30.03. Обновление OpenClaw до версии 2026.3.28 недоступно 18+ дней.
    </div>
  </div>

  <!-- 10. ozon-competitor-analysis (disabled) -->
  <div class="task" style="opacity: 0.6;">
    <div class="task-header">
      <span class="task-name">Мониторинг конкурентов Ozon <span class="task-id">ozon-competitor-analysis</span></span>
      <span class="status status-disabled">⛔ Отключена</span>
    </div>
    <div class="time">Последний запуск: 05.03.2026 02:00 (локальное время)</div>
    <div class="result">Задача отключена. Не запускается автоматически.</div>
  </div>

  <!-- File check section -->
  <h2>📁 Файловые артефакты</h2>
  <div class="files-grid">
    <div class="file-miss">❌ Бэкап МойСклад за сегодня: <code>товары_01.04.2026.xlsx</code> — отсутствует</div>
    <div class="file-ok">✅ Бэкап МойСклад за вчера: <code>товары_31.03.2026.xlsx</code> (31.03.2026, 15:04)</div>
    <div class="file-warn">⚠️ Календарь релизов: <code>releases/календарь_релизов.xlsx</code> — последнее изменение 31.03.2026 14:59 (до запуска задачи в 22:07)</div>
    <div class="file-warn">⚠️ Покупки eBay: <code>ebay/покупки_в_америке.xlsx</code> — последнее изменение 29.03.2026 (не обновлено 3 дня)</div>
    <div class="file-ok">✅ Снапшот синхронизации: <code>moysklad/snapshots/sync_31.03.2026.md</code></div>
    <div class="file-ok">✅ Снапшот проверки: <code>moysklad/snapshots/verify_31.03.2026.md</code></div>
    <div class="file-miss">❌ Бэкап промптов за сегодня: <code>backups/2026-04-01_08-07/</code> — отсутствует</div>
    <div class="file-ok">✅ Последний бэкап промптов: <code>backups/2026-03-31_15-01/</code> (31.03.2026, 15:01)</div>
  </div>

  <p style="margin-top:32px; font-size:11px; color:#bbb; text-align:center;">
    Сгенерировано автоматически · daily-report · 01.04.2026 09:30
  </p>
</body>
</html>
` },
  { iso: "2026-03-30", label: "30.03", fullLabel: "30.03.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 30.03.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 32px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; }
    .file-miss { color: #c62828; margin: 4px 0; }
    .file-note { color: #e65100; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .review-item .date { color: #999; font-size: 12px; }
    .review-badge { display: inline-block; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; }
    .badge-pending { background: #fff3e0; color: #e65100; }
    .badge-edited { background: #e3f2fd; color: #1565c0; }
    .warning { background: #fff3e0; border-left: 4px solid #f9a825; padding: 10px 14px; border-radius: 4px; margin-top: 8px; font-size: 13px; color: #e65100; }
  
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
    <a href="daily_29.03.2026.html">← 29.03.2026</a>
    <span class="nav-center">☀️ 30.03.2026</span>
    <div style="display:flex;gap:8px">
      <a href="daily_01.04.2026.html">01.04.2026 →</a>
      <a href="../панель_задач.html" class="nav-panel">📅 Панель задач</a>
    </div>
  </div>
  <h1>☀️ Утренний отчёт — 30.03.2026</h1>
  <div class="summary">
    <strong>Задач всего:</strong> 10 |
    <strong>Успешно:</strong> 9 |
    <strong>Ошибки:</strong> 0 |
    <strong>Отключены:</strong> 1
  </div>

  <!-- 1. moysklad-verify-products (01:00) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 30.03.2026 01:07</div>
    <div class="result">Все 18 товаров проверены владельцем (✅). Непроверенных (⏳) и товаров с правками (🔍) — 0. Два предложения по правилам (Авито: «Набор» вместо «Коробка»; пустой «Сет») ожидают одобрения.</div>
  </div>

  <!-- 2. moysklad-release-sync (02:00) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация релизов</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 30.03.2026 02:04</div>
    <div class="result">Новых товаров не добавлено. Все товары со статусом «Скоро» уже присутствуют в МойСклад или исключены.</div>
  </div>

  <!-- 3. moysklad-purchase-prices (03:00) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 30.03.2026 03:05</div>
    <div class="result">Обработано 7 заказов (22 товара). Обновлены цены: P-SET-MEG-03 (99 999 → 4 500 ₽, плейсхолдер заменён), P-01-112 (1 000 → 1 250 ₽, новый максимум).</div>
    <div class="warning">⚠️ P-SET-MEG-03 — все цены продажи = 99 999 (плейсхолдер). Рекомендуемая мин. цена: 6 300 ₽.</div>
  </div>

  <!-- 4. ebay-qwintry-sync (06:00) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay / Qwintry синхронизация</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 30.03.2026 06:01</div>
    <div class="result">Новых заказов и трек-номеров нет. 5 заказов ожидают отправки продавцами. 4 посылки на складе Qwintry (макс. 40 дней хранения). 1 исходящая отправка в пути (#672708-US).</div>
  </div>

  <!-- 5. moysklad-add-images-auto (08:00) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Фото товаров</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 30.03.2026 08:06</div>
    <div class="result">Проверено 4 товара (Ascended Heroes, релиз 24.04). Загружено 5 новых фото с Amazon: Mega Meganium/Emboar/Feraligatr ex Box (по 1 фото), Booster Bundle (2 фото). Фото back пока недоступны (pre-release).</div>
  </div>

  <!-- 6. backup-prompts-readme (08:00) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 30.03.2026 08:06</div>
    <div class="result">Сохранено 23 файла (4 корневых + 19 промптов), 256 КБ. Все файлы на месте, размеры совпадают.</div>
  </div>

  <!-- 7. openclaw-daily-audit (08:32) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Аудит OpenClaw</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 30.03.2026 08:32</div>
    <div class="result">Система здорова, контекст стабилен 4-й день. Telegram-сессия на 71% контекста (142k/200k) — при 80% начнётся архивация. Доступно обновление 2026.3.28 (текущая 2026.3.13, не обновлялось 17 дней).</div>
  </div>

  <!-- 8. update-pokemon-releases (22:00, вчера) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 22:07</div>
    <div class="result">Обновлены дни до релиза для 83 товаров. Новых товаров с Bulbapedia: 0. Распределение: 🟥 Вышел — 60, 🟨 Скоро — 5, 🟩 > 30 дней — 18.</div>
  </div>

  <!-- 9. moysklad-backup (23:00, вчера) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 23:08</div>
    <div class="result">Экспортировано 699 товаров (+ 8 модификаций), 110 столбцов. Файл: товары_29.03.2026.xlsx (449 КБ).</div>
  </div>

  <!-- 10. ozon-competitor-analysis (отключена) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Мониторинг конкурентов Ozon</span>
      <span class="status status-disabled">⏸ Отключена</span>
    </div>
    <div class="time">Последний запуск: 05.03.2026</div>
    <div class="result">Задача отключена 25 дней назад.</div>
  </div>

  <!-- Файлы -->
  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_29.03.2026.xlsx (449 КБ)</div>
    <div class="file-note">⏳ Бэкап за 30.03 будет создан в 23:00</div>
    <div class="file-ok">✅ Календарь релизов: календарь_релизов.xlsx (обновлён 29.03.2026)</div>
    <div class="file-ok">✅ Покупки eBay: покупки_в_америке.xlsx (обновлён 29.03.2026)</div>
    <div class="file-ok">✅ Снапшот синхронизации: sync_30.03.2026.md</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-03-30_08-06/ (23 файла)</div>
  </div>

</body>
</html>
` },
  { iso: "2026-03-29", label: "29.03", fullLabel: "29.03.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 29.03.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 800px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; }
    h2 { font-size: 18px; margin-top: 32px; }
    .summary { background: #f5f5f5; padding: 16px; border-radius: 8px; margin: 16px 0; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; }
    .task-name { font-weight: 600; font-size: 16px; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-error { background: #ffebee; color: #c62828; }
    .status-skip { background: #fff3e0; color: #e65100; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #666; margin-top: 8px; font-size: 14px; }
    .time { color: #999; font-size: 12px; }
    .files { margin-top: 16px; }
    .file-ok { color: #2e7d32; margin: 4px 0; }
    .file-miss { color: #c62828; margin: 4px 0; }
    .file-info { color: #666; margin: 4px 0; }
    .review-list { margin-top: 12px; padding: 12px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 8px 0; font-size: 14px; color: #f57f17; }
    .review-item { margin: 6px 0; font-size: 14px; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .review-item .date { color: #999; font-size: 12px; }
    .review-badge { display: inline-block; font-size: 11px; padding: 2px 6px; border-radius: 4px; margin-left: 6px; }
    .badge-pending { background: #fff3e0; color: #e65100; }
    .badge-edited { background: #e3f2fd; color: #1565c0; }
  
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
    <a href="daily_28.03.2026.html">← 28.03.2026</a>
    <span class="nav-center">☀️ 29.03.2026</span>
    <div style="display:flex;gap:8px">
      <a href="daily_30.03.2026.html">30.03.2026 →</a>
      <a href="../панель_задач.html" class="nav-panel">📅 Панель задач</a>
    </div>
  </div>
  <h1>☀️ Утренний отчёт — 29.03.2026</h1>
  <div class="summary">
    <strong>Задач запущено:</strong> 9 из 10 |
    <strong>Успешно:</strong> 9 |
    <strong>Ошибки:</strong> 0 |
    <strong>Отключены:</strong> 1
  </div>

  <!-- 1. moysklad-verify-products -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Проверка товаров (moysklad-verify-products)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 01:07</div>
    <div class="result">Проверено 18 товаров со статусом ⏳ — у всех обнаружены правки владельца (Демидов И.И., ~21.03.2026). Основные: переформатирование названий Авито у 13 товаров, переписаны описания у 10+, очищен «Сет» у 5 MEG-товаров. Предложено 2 изменения в правила.</div>
  </div>

  <!-- 2. moysklad-release-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Синхронизация релизов (moysklad-release-sync)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 02:05</div>
    <div class="result">Новых товаров для добавления нет. Все ранее добавленные прошли проверку (статус 🔍).</div>

    <div class="review-list">
      <h3>📋 Товары на проверку (19 шт.)</h3>

      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=49701944-1ae0-11f1-0a80-06e00023a95c">P-SET-MEG-01 — Mega Evolution Knock Out Collection</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 08.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=fb2f68b7-1ae1-11f1-0a80-03820022fd2e">P-SET-MEG-02 — Mega Evolution Collector Chest</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 08.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=01fdbc20-1ae4-11f1-0a80-16a500248a28">P-TIN-MEG-01 — Poke Ball Tins (Mega Evolution)</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 08.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=56591606-1ae5-11f1-0a80-04ee00236ef8">P-BLS-MEG-01 — Блистер Raikou Two Pack (Mega Evolution)</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 08.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=c0a308f8-1ae6-11f1-0a80-17f000241525">P-SET-MEG-03 — First Partner Illustration Collection Series 1</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 08.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=c475b153-1b54-11f1-0a80-06e000273596">P-SET-ASC-01 — Ascended Heroes Premium Poster Collection — Mega Gardevoir ex</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 09.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=1d0fcfcb-1b56-11f1-0a80-019b002726ce">P-SET-ASC-02 — Ascended Heroes Premium Poster Collection — Mega Lucario ex</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 09.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=f7dee5f7-1b56-11f1-0a80-019b0027283b">P-SET-ASC-03 — Ascended Heroes First Partners Deluxe Pin Collection</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 09.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=0c65ce6b-1b58-11f1-0a80-1cac0025dbc8">P-BND-POR — Perfect Order Booster Bundle</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 09.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=d42ba74e-1b58-11f1-0a80-19e90025ed5e">P-BLS-POR-01 — Perfect Order 3-Pack Blister — Chikorita</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 09.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=153e657e-1c1e-11f1-0a80-1d630034a452">P-BLS-POR-02 — Perfect Order Enhanced 2-Pack Blister — Oddish, Gloom &amp; Vileplume</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 10.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=a3e90b3a-1c1f-11f1-0a80-0964003498b9">P-BLS-POR-03 — Perfect Order Single Pack Blister — Makuhita</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 10.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=166c727c-1c21-11f1-0a80-096400349c8e">P-BLS-POR-04 — Perfect Order Premium Checklane Blister — Meganium</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 10.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=8f981c28-1c22-11f1-0a80-00f20034793c">P-BLS-POR-05 — Perfect Order Premium Checklane Blister — Cinderace</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 10.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=7cf95e3e-1c23-11f1-0a80-1d630034b4d8">P-BLS-POR-06 — Perfect Order Stage 1 Blister — Clawitzer</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 10.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=5b5c8ebb-1c24-11f1-0a80-038200332931">P-BLS-POR-07 — Perfect Order Stage 1 Blister — Steelix</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 10.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=4df05033-1ba2-11f1-0a80-17f0002d3d41">P-TIN-PRE — Prismatic Evolutions Mini Tin</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 09.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=4bb29d53-2a33-11f1-0a80-16d1002a17bc">P-SET-ASC-05 — Ascended Heroes Mega ex Box — Mega Emboar ex</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 28.03</span>
      </div>
      <div class="review-item">
        🔍 <a href="https://online.moysklad.ru/app/#good/edit?id=9cd70dc6-2a34-11f1-0a80-01a9002998aa">P-SET-ASC-06 — Ascended Heroes Mega ex Box — Mega Feraligatr ex</a>
        <span class="review-badge badge-edited">правки</span>
        <span class="date">добавлен 28.03</span>
      </div>
    </div>
  </div>

  <!-- 3. moysklad-purchase-prices -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Закупочные цены (moysklad-purchase-prices)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 03:05</div>
    <div class="result">Обработано 5 заказов (22.03–29.03), проверено 22 товара: 9 цен обновлено, 13 совпадали. Ошибок нет.</div>
  </div>

  <!-- 4. ebay-qwintry-sync -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">eBay / Qwintry синхронизация (ebay-qwintry-sync)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 06:02</div>
    <div class="result">4 новых заказа на eBay ($375 + $30 + $78 + $82). 1 трек-номер получен и посылка создана в Qwintry (#1014775-US). Таблица обновлена (строки №19–22).</div>
  </div>

  <!-- 5. moysklad-add-images-auto -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Фото товаров (moysklad-add-images-auto)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 08:06</div>
    <div class="result">Проверено 4 товара Ascended Heroes (релиз 24.04). У всех уже есть front-фото. Новых изображений (back, contents) в открытых источниках пока нет.</div>
  </div>

  <!-- 6. backup-prompts-readme -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап промптов (backup-prompts-readme)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 08:07</div>
    <div class="result">Сохранено 23 файла (4 корневых + 19 промптов), 252 КБ. Все размеры совпадают с оригиналами.</div>
  </div>

  <!-- 7. update-pokemon-releases -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Календарь релизов (update-pokemon-releases)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 28.03.2026 22:07</div>
    <div class="result">Пересчитаны дни до релиза для 84 товаров. Bulbapedia проверена — новых товаров не найдено. Форматирование обновлено.</div>
  </div>

  <!-- 8. moysklad-backup -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Бэкап МойСклад (moysklad-backup)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 28.03.2026 23:08</div>
    <div class="result">Экспортировано 691 товар + 8 модификаций (699 строк, 110 столбцов). Файл: товары_28.03.2026.xlsx (449 КБ).</div>
  </div>

  <!-- 9. ozon-competitor-analysis (disabled) -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Мониторинг конкурентов Ozon (ozon-competitor-analysis)</span>
      <span class="status status-disabled">⏸ Отключена</span>
    </div>
    <div class="time">Последний запуск: 05.03.2026</div>
    <div class="result">Задача отключена 24 дня назад. Требуется решение о возобновлении.</div>
  </div>

  <!-- Bonus: openclaw-daily-audit -->
  <div class="task">
    <div class="task-header">
      <span class="task-name">Аудит OpenClaw (openclaw-daily-audit)</span>
      <span class="status status-ok">✅ Успешно</span>
    </div>
    <div class="time">Последний запуск: 29.03.2026 08:33</div>
    <div class="result">Контекст стабилен 3-й день. Gateway OK (29ms), Telegram OK. Обновление OpenClaw 2026.3.24 не установлено 3-й день.</div>
  </div>

  <!-- Секция проверки файлов -->
  <h2>📁 Файлы</h2>
  <div class="files">
    <div class="file-ok">✅ Бэкап МойСклад: товары_28.03.2026.xlsx (449 КБ) — бэкап за 29.03 ожидается в 23:00</div>
    <div class="file-ok">✅ Календарь релизов: календарь_релизов.xlsx (26.7 КБ, обновлён 28.03)</div>
    <div class="file-ok">✅ Покупки в Америке: покупки_в_америке.xlsx (9.9 КБ, обновлён 29.03)</div>
    <div class="file-ok">✅ Снапшот синхронизации: sync_28.03.2026.md (2.9 КБ)</div>
    <div class="file-ok">✅ Отчёт проверки: verify_29.03.2026.md (8.6 КБ)</div>
    <div class="file-ok">✅ Бэкап промптов: backups/2026-03-29_08-07/ (23 файла)</div>
  </div>

</body>
</html>` },
  { iso: "2026-03-28", label: "28.03", fullLabel: "28.03.2026", html: `<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <title>Утренний отчёт Pokebarn — 28.03.2026</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 860px; margin: 40px auto; padding: 0 20px; color: #333; }
    h1 { font-size: 24px; border-bottom: 2px solid #333; padding-bottom: 8px; margin-bottom: 16px; }
    h2 { font-size: 18px; margin: 28px 0 12px 0; border-bottom: 1px solid #e0e0e0; padding-bottom: 6px; }
    .summary { background: #f5f5f5; padding: 16px 20px; border-radius: 8px; margin: 16px 0 24px 0; font-size: 14px; line-height: 1.8; }
    .task { border: 1px solid #e0e0e0; border-radius: 8px; padding: 16px; margin: 12px 0; }
    .task-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
    .task-name { font-weight: 600; font-size: 15px; }
    .task-schedule { color: #aaa; font-size: 12px; margin-bottom: 2px; }
    .status { padding: 4px 12px; border-radius: 12px; font-size: 13px; font-weight: 500; white-space: nowrap; }
    .status-ok { background: #e8f5e9; color: #2e7d32; }
    .status-warn { background: #fff8e1; color: #f57f17; }
    .status-disabled { background: #f5f5f5; color: #999; }
    .result { color: #555; margin-top: 8px; font-size: 14px; line-height: 1.5; }
    .time { color: #aaa; font-size: 12px; margin-top: 2px; }
    .warn-note { color: #e65100; font-size: 13px; margin-top: 6px; }
    .review-list { margin-top: 12px; padding: 12px 16px; background: #fff8e1; border-radius: 6px; border-left: 4px solid #f9a825; }
    .review-list h3 { margin: 0 0 10px 0; font-size: 14px; color: #f57f17; }
    .review-group { margin: 12px 0 4px 0; font-size: 11px; font-weight: 700; color: #999; text-transform: uppercase; letter-spacing: 0.5px; }
    .review-item { margin: 5px 0; font-size: 13px; line-height: 1.4; }
    .review-item a { color: #1565c0; text-decoration: none; }
    .review-item a:hover { text-decoration: underline; }
    .art { font-family: monospace; color: #777; font-size: 12px; }
    .date-tag { color: #bbb; font-size: 11px; margin-left: 4px; }
    .badge { display: inline-block; font-size: 11px; padding: 1px 6px; border-radius: 4px; margin-left: 4px; }
    .badge-new { background: #fff3e0; color: #e65100; }
    .badge-old { background: #fce4ec; color: #b71c1c; }
    .files { margin: 4px 0; }
    .file-row { font-size: 14px; margin: 6px 0; }
    .file-ok { color: #2e7d32; }
    .file-warn { color: #e65100; }
    hr { border: none; border-top: 1px solid #eee; margin: 24px 0; }
    .tag-disabled { font-size: 11px; background: #eee; color: #999; padding: 2px 7px; border-radius: 4px; margin-left: 6px; }
  
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
    <span class="nav-disabled">← нет</span>
    <span class="nav-center">☀️ 28.03.2026</span>
    <div style="display:flex;gap:8px">
      <a href="daily_29.03.2026.html">29.03.2026 →</a>
      <a href="../панель_задач.html" class="nav-panel">📅 Панель задач</a>
    </div>
  </div>

<h1>☀️ Утренний отчёт — 28.03.2026</h1>

<div class="summary">
  <strong>Задач в отчёте:</strong> 9 &nbsp;|&nbsp;
  <strong>✅ Успешно:</strong> 8 &nbsp;|&nbsp;
  <strong>⚠️ С предупреждениями:</strong> 1 &nbsp;|&nbsp;
  <strong>❌ Ошибки:</strong> 0 &nbsp;|&nbsp;
  <strong>🚫 Отключена:</strong> 1<br>
  <strong>📋 Товаров на проверку:</strong> 19 (2 новых сегодня + 17 старых из файлов 08–10 мар.)
</div>

<!-- 1 -->
<div class="task">
  <div class="task-header">
    <span class="task-name">🔍 Проверка товаров</span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="task-schedule">moysklad-verify-products · 01:00 ежедневно</div>
  <div class="time">Последний запуск: 28.03.2026 01:07</div>
  <div class="result">Проверено 14 снапшотов. Новых правок не найдено — все доступные записи ✅ Проверено. Файлы sync_08–sync_10 и manual_09 (17 товаров) недоступны задаче из-за ACL — требуется ручная проверка.</div>
</div>

<!-- 2 -->
<div class="task">
  <div class="task-header">
    <span class="task-name">🔄 Синхронизация релизов</span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="task-schedule">moysklad-release-sync · 02:00 ежедневно</div>
  <div class="time">Последний запуск: 28.03.2026 02:05</div>
  <div class="result">Добавлено 2 новых товара в МойСклад: Mega Emboar ex и Mega Feraligatr ex. P-SET-ASC-04 (Mega Meganium ex) уже существовал — добавлена ссылка в календарь.</div>

  <div class="review-list">
    <h3>📋 Товары на проверку — 19 шт.</h3>

    <div class="review-group">Добавлены сегодня — 28 мар.</div>

    <div class="review-item">⏳
      <a href="https://online.moysklad.ru/app/#good/edit?id=4bb29d53-2a33-11f1-0a80-16d1002a17bc">Набор Pokemon Ascended Heroes Mega ex Box — Mega Emboar ex</a>
      <span class="badge badge-new">новый</span>
      <span class="art">P-SET-ASC-05</span>
    </div>
    <div class="review-item">⏳
      <a href="https://online.moysklad.ru/app/#good/edit?id=9cd70dc6-2a34-11f1-0a80-01a9002998aa">Набор Pokemon Ascended Heroes Mega ex Box — Mega Feraligatr ex</a>
      <span class="badge badge-new">новый</span>
      <span class="art">P-SET-ASC-06</span>
    </div>

    <div class="review-group">Ожидают с 08–10 мар. (недоступны задаче verify)</div>

    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=49701944-1ae0-11f1-0a80-06e00023a95c">Pokemon Mega Evolution Knock Out Collection</a> <span class="badge badge-old">8 мар.</span> <span class="art">P-SET-MEG-01</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=fb2f68b7-1ae1-11f1-0a80-03820022fd2e">Pokemon Mega Evolution Collector Chest</a> <span class="badge badge-old">8 мар.</span> <span class="art">P-SET-MEG-02</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=01fdbc20-1ae4-11f1-0a80-16a500248a28">Тин-бокс Pokemon Poke Ball Tins (Mega Evolution)</a> <span class="badge badge-old">8 мар.</span> <span class="art">P-TIN-MEG-01</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=56591606-1ae5-11f1-0a80-04ee00236ef8">Pokemon Блистер Raikou Two Pack (Mega Evolution)</a> <span class="badge badge-old">8 мар.</span> <span class="art">P-BLS-MEG-01</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=c0a308f8-1ae6-11f1-0a80-17f000241525">Pokemon First Partner Illustration Collection Series 1</a> <span class="badge badge-old">8 мар.</span> <span class="art">P-SET-MEG-03</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=4df05033-1ba2-11f1-0a80-17f0002d3d41">Мини-Тин Pokemon Prismatic Evolutions Mini Tin</a> <span class="badge badge-old">9 мар.</span> <span class="art">P-TIN-PRE</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=c475b153-1b54-11f1-0a80-06e000273596">Ascended Heroes Premium Poster Collection — Mega Gardevoir ex</a> <span class="badge badge-old">9 мар.</span> <span class="art">P-SET-ASC-01</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=1d0fcfcb-1b56-11f1-0a80-019b002726ce">Ascended Heroes Premium Poster Collection — Mega Lucario ex</a> <span class="badge badge-old">9 мар.</span> <span class="art">P-SET-ASC-02</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=f7dee5f7-1b56-11f1-0a80-019b0027283b">Ascended Heroes First Partners Deluxe Pin Collection</a> <span class="badge badge-old">9 мар.</span> <span class="art">P-SET-ASC-03</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=0c65ce6b-1b58-11f1-0a80-1cac0025dbc8">Pokemon Perfect Order Booster Bundle (6 бустеров)</a> <span class="badge badge-old">9 мар.</span> <span class="art">P-BND-POR</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=d42ba74e-1b58-11f1-0a80-19e90025ed5e">Perfect Order 3-Pack Blister — Chikorita</a> <span class="badge badge-old">9 мар.</span> <span class="art">P-BLS-POR-01</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=153e657e-1c1e-11f1-0a80-1d630034a452">Perfect Order Enhanced 2-Pack Blister — Oddish, Gloom &amp; Vileplume</a> <span class="badge badge-old">10 мар.</span> <span class="art">P-BLS-POR-02</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=a3e90b3a-1c1f-11f1-0a80-0964003498b9">Perfect Order Single Pack Blister — Makuhita</a> <span class="badge badge-old">10 мар.</span> <span class="art">P-BLS-POR-03</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=166c727c-1c21-11f1-0a80-096400349c8e">Perfect Order Premium Checklane Blister — Meganium</a> <span class="badge badge-old">10 мар.</span> <span class="art">P-BLS-POR-04</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=8f981c28-1c22-11f1-0a80-00f20034793c">Perfect Order Premium Checklane Blister — Cinderace</a> <span class="badge badge-old">10 мар.</span> <span class="art">P-BLS-POR-05</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=7cf95e3e-1c23-11f1-0a80-1d630034b4d8">Perfect Order Stage 1 Blister — Clawitzer</a> <span class="badge badge-old">10 мар.</span> <span class="art">P-BLS-POR-06</span></div>
    <div class="review-item">⏳ <a href="https://online.moysklad.ru/app/#good/edit?id=5b5c8ebb-1c24-11f1-0a80-038200332931">Perfect Order Stage 1 Blister — Steelix</a> <span class="badge badge-old">10 мар.</span> <span class="art">P-BLS-POR-07</span></div>
  </div>
</div>

<!-- 3 -->
<div class="task">
  <div class="task-header">
    <span class="task-name">💰 Закупочные цены</span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="task-schedule">moysklad-purchase-prices · 03:00 ежедневно</div>
  <div class="time">Последний запуск: 28.03.2026 03:05</div>
  <div class="result">Обработано 5 заказов за 7 дней. <strong>Обновлено 13 закупочных цен</strong>, 7 совпадали. Ключевые: P-04-114, P-05-916, P-01-102-101 (заказ №00050); P-ETB-POR, P-01-109 (Ozon). Рекомендована ручная проверка P-07-115-04 и P-01-112.</div>
</div>

<!-- 4 -->
<div class="task">
  <div class="task-header">
    <span class="task-name">🛒 eBay / Qwintry</span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="task-schedule">ebay-qwintry-sync · 06:00 ежедневно</div>
  <div class="time">Последний запуск: 28.03.2026 06:02</div>
  <div class="result"><strong>4 новых заказа</strong> (#15–18): Bulbasaur Foil Lot $79.85, Collection 23 $61.00, First Partners Charmander $94.20, Blastoise EX SIR 151 $155.52. Изменения статусов: Pikachu 027 → Refunded; Venusaur ex → Delivered (#1648738-US); Southern Islands → Awaiting shipment. Отправка #672708-US помечена «Отправлена» (8 посылок). На складе: 4 | Ожидается: 3 | В пути: 8 | Без трека: 2.</div>
</div>

<!-- 5 -->
<div class="task">
  <div class="task-header">
    <span class="task-name">🖼️ Фото товаров</span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="task-schedule">moysklad-add-images-auto · 08:00 ежедневно</div>
  <div class="time">Последний запуск: 28.03.2026 08:06</div>
  <div class="result">Проверено 4 товара (релиз в течение 7 дней). <strong>Загружено 4 фото</strong> (front) с PokeBeach: P-SET-ASC-04, P-SET-ASC-05, P-SET-ASC-06, P-BBU-ASC. Все pre-release 24.04.2026. Фото back/contents — рекомендуется дополнить после релиза.</div>
</div>

<!-- 6 -->
<div class="task">
  <div class="task-header">
    <span class="task-name">💾 Бэкап промптов</span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="task-schedule">backup-prompts-readme · 08:00 / 14:00 / 20:00 ежедневно</div>
  <div class="time">Последний запуск: 28.03.2026 14:07 (дневной)</div>
  <div class="result">Бэкап в <code>backups/2026-03-28_14-07/</code>. Скопировано <strong>21 файл</strong> (4 корневых + 17 промптов), 224 КБ. Все размеры совпадают с оригиналами.</div>
</div>

<!-- 7 openclaw -->
<div class="task">
  <div class="task-header">
    <span class="task-name">🧠 Аудит OpenClaw</span>
    <span class="status status-warn">⚠️ Успешно (замечания)</span>
  </div>
  <div class="task-schedule">openclaw-daily-audit · 08:30 ежедневно</div>
  <div class="time">Последний запуск: 28.03.2026 09:03</div>
  <div class="result">Контекст стабилен. Gateway восстановлен (был timeout вчера, сейчас 29 ms). Telegram OK, архивация работает.</div>
  <div class="warn-note">⚠️ Обновление OpenClaw 2026.3.24 не установлено (2-й день подряд).<br>⚠️ ozon-competitor-analysis выключена 23 дня — требуется решение.</div>
</div>

<!-- 8 -->
<div class="task">
  <div class="task-header">
    <span class="task-name">📅 Календарь релизов Pokemon</span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="task-schedule">update-pokemon-releases · 22:00 ежедневно</div>
  <div class="time">Последний запуск: 27.03.2026 22:07 (вчера)</div>
  <div class="result">Статусы пересчитаны для 83 товаров (🟥 Вышел: 60, 🟨 Скоро: 5, 🟩 Далеко: 18). Проверка Bulbapedia: новых товаров не обнаружено. Форматирование применено.</div>
</div>

<!-- 9 -->
<div class="task">
  <div class="task-header">
    <span class="task-name">🗄️ Бэкап МойСклад</span>
    <span class="status status-ok">✅ Успешно</span>
  </div>
  <div class="task-schedule">moysklad-backup · 23:00 ежедневно</div>
  <div class="time">Последний запуск: 27.03.2026 23:08 (вчера)</div>
  <div class="result">Файл <strong>товары_27.03.2026.xlsx</strong> — 697 строк, 110 столбцов, 449 КБ. Бэкап за 28.03 будет создан сегодня в 23:00.</div>
</div>

<!-- disabled -->
<div class="task" style="opacity:0.55;">
  <div class="task-header">
    <span class="task-name">📊 Мониторинг конкурентов Ozon <span style="font-size:11px;background:#eee;color:#999;padding:2px 7px;border-radius:4px;margin-left:6px;">отключена</span></span>
    <span class="status status-disabled">🚫 Отключена</span>
  </div>
  <div class="task-schedule">ozon-competitor-analysis · была в 02:05 ежедневно</div>
  <div class="time">Последний запуск: 06.03.2026 02:00 (23 дня назад)</div>
  <div class="result">Задача отключена. Требует решения: включить или переработать.</div>
</div>

<hr>

<h2>📁 Файлы</h2>
<div class="files">
  <div class="file-row file-ok">✅ Бэкап МойСклад: <strong>товары_27.03.2026.xlsx</strong> — 449 КБ (вчера)</div>
  <div class="file-row file-warn">⚠️ Бэкап МойСклад за сегодня: ещё не создан — запуск в 23:00</div>
  <div class="file-row file-ok">✅ Календарь релизов: <strong>releases/календарь_релизов.xlsx</strong> — обновлён 28.03.2026 02:32</div>
  <div class="file-row file-ok">✅ Покупки в Америке: <strong>ebay/покупки_в_америке.xlsx</strong> — обновлён 28.03.2026 06:38</div>
  <div class="file-row file-ok">✅ Снапшот сегодня: <strong>moysklad/snapshots/sync_28.03.2026.md</strong> — создан 28.03.2026 02:32</div>
  <div class="file-row file-ok">✅ Бэкап промптов: <strong>backups/2026-03-28_14-07/</strong> — 21 файл, 224 КБ</div>
  <div class="file-row file-warn">⚠️ Снапшоты 08–10 мар. и manual_09 (17 товаров ⏳): недоступны задаче verify-products из-за ACL — требуется ручное исправление прав</div>
</div>

<hr>
<p style="color:#bbb;font-size:12px;text-align:center;">Отчёт сгенерирован автоматически · daily-report · 28.03.2026 09:30 МСК</p>

</body>
</html>
` }
];
