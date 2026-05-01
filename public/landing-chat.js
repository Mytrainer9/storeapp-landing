"use strict";

/**
 * StoreApp landing — web chat widget.
 * Bootstraps from https://ai.storeapp.us/api/landing/chat-init, then sends
 * messages to https://ai.storeapp.us/api/user/chat as the StoreApp demo
 * tenant. CORS is whitelisted server-side for storeapp.us.
 */
(function () {
  const API = 'https://ai.storeapp.us';

  const create = (tag, cls) => {
    const el = document.createElement(tag);
    if (cls) el.className = cls;
    return el;
  };
  const $ = (id) => document.getElementById(id);

  const state = {
    tenantId : null,
    chatToken: null,
    userId   : null,
    open     : false,
    busy     : false,
    booted   : false,
  };

  const SUGGESTIONS = [
    'Сайн байна уу',
    '🤖 Чатбот гэж юу вэ?',
    'Үнийн мэдээлэл',
    'Холбоо барих',
  ];

  let fab, panel, body, input, sendBtn, closeBtn;

  function buildWidget() {
    fab = create('button', 'lcw-fab');
    fab.type = 'button';
    fab.setAttribute('aria-label', 'Чат нээх');
    fab.textContent = '💬';
    document.body.appendChild(fab);

    panel = create('div', 'lcw-panel');
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'StoreApp AI chat');
    panel.innerHTML =
      '<div class="lcw-head">'
        + '<div class="lcw-avatar">🤖</div>'
        + '<div class="lcw-head-text">'
          + '<div class="lcw-name">StoreApp AI</div>'
          + '<div class="lcw-status">Онлайн</div>'
        + '</div>'
        + '<button class="lcw-close" type="button" aria-label="Хаах" id="lcw-close">×</button>'
      + '</div>'
      + '<div class="lcw-body" id="lcw-body"></div>'
      + '<form class="lcw-foot" id="lcw-form">'
        + '<input class="lcw-input" id="lcw-input" type="text" placeholder="Мессеж бичих…" autocomplete="off" maxlength="1000">'
        + '<button class="lcw-send" id="lcw-send" type="submit" aria-label="Илгээх">→</button>'
      + '</form>';
    document.body.appendChild(panel);

    body     = $('lcw-body');
    input    = $('lcw-input');
    sendBtn  = $('lcw-send');
    closeBtn = $('lcw-close');

    fab.addEventListener('click', toggle);
    closeBtn.addEventListener('click', toggle);
    $('lcw-form').addEventListener('submit', onSubmit);
  }

  function showWelcome() {
    body.innerHTML = '';
    const w = create('div', 'lcw-welcome');
    w.innerHTML =
      '<div class="lcw-welcome-emoji">👋</div>'
      + '<div class="lcw-welcome-title">Тавтай морилно уу!</div>'
      + '<div class="lcw-welcome-sub">StoreApp AI бот таны асуултанд хариулна. Доороос асуулт сонгоорой эсвэл бичээрэй.</div>';
    body.appendChild(w);

    const chips = create('div', 'lcw-chips');
    for (const s of SUGGESTIONS) {
      const c = create('button', 'lcw-chip');
      c.type = 'button';
      c.textContent = s;
      c.addEventListener('click', () => send(s));
      chips.appendChild(c);
    }
    body.appendChild(chips);
  }

  function addBubble(text, who) {
    const div = create('div', 'lcw-msg ' + who);
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    return div;
  }

  function showTyping() {
    const t = create('div', 'lcw-typing');
    t.id = 'lcw-typing-indicator';
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }

  function hideTyping() {
    const t = $('lcw-typing-indicator');
    if (t) t.remove();
  }

  function addQuickReplies(items) {
    if (!items || !items.length) return;
    const row = create('div', 'lcw-chips');
    for (const it of items) {
      const label = typeof it === 'string' ? it : (it.title || it.text || '');
      const value = typeof it === 'string' ? it : (it.payload || it.title || it.text || '');
      if (!label) continue;
      const btn = create('button', 'lcw-chip');
      btn.type = 'button';
      btn.textContent = label;
      btn.addEventListener('click', () => {
        row.remove();
        send(value);
      });
      row.appendChild(btn);
    }
    if (row.children.length) {
      body.appendChild(row);
      body.scrollTop = body.scrollHeight;
    }
  }

  async function boot() {
    if (state.booted) return true;
    try {
      const res = await fetch(API + '/api/landing/chat-init');
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || 'init failed');
      state.tenantId  = json.data.tenantId;
      state.chatToken = json.data.chatToken;
      state.userId    = json.data.userId;
      state.booted    = true;
      return true;
    } catch (err) {
      addBubble('Чат одоохондоо ажиллахгүй байна. Дараа дахин оролдоно уу.', 'bot');
      return false;
    }
  }

  async function toggle() {
    state.open = !state.open;
    panel.classList.toggle('is-open', state.open);
    fab.classList.toggle('is-open', state.open);
    fab.textContent = state.open ? '×' : '💬';
    if (state.open) {
      if (!state.booted) {
        const ok = await boot();
        if (ok) showWelcome();
      }
      setTimeout(() => input && input.focus(), 100);
    }
  }

  async function onSubmit(e) {
    e.preventDefault();
    const text = (input.value || '').trim();
    if (!text) return;
    input.value = '';
    send(text);
  }

  async function send(message) {
    if (state.busy) return;
    if (!state.booted) {
      const ok = await boot();
      if (!ok) return;
    }

    const welcome = body.querySelector('.lcw-welcome');
    if (welcome) {
      welcome.remove();
      const firstChips = body.querySelector('.lcw-chips');
      if (firstChips) firstChips.remove();
    }

    addBubble(message, 'user');
    state.busy = true;
    sendBtn.disabled = true;
    showTyping();

    try {
      const res = await fetch(API + '/api/user/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tenantId : state.tenantId,
          chatToken: state.chatToken,
          userId   : state.userId,
          channel  : 'web',
          message,
        }),
      });
      const json = await res.json();
      hideTyping();

      if (!res.ok || !json.success) {
        addBubble('Уучлаарай, алдаа гарлаа. Дахин оролдоно уу.', 'bot');
        return;
      }

      const reply = json.data || {};
      if (reply.text) addBubble(reply.text, 'bot');

      if (Array.isArray(reply.cards) && reply.cards.length) {
        const summary = reply.cards
          .slice(0, 5)
          .map((c) => '• ' + (c.title || c.name || '...'))
          .join('\n');
        if (summary) addBubble(summary, 'bot');
      }

      const qrs = reply.quick_replies || reply.quickReplies || [];
      if (Array.isArray(qrs) && qrs.length) {
        addQuickReplies(qrs);
      } else if (reply.show_main_menu) {
        addQuickReplies(['🏠 Цэс', '🤖 Чатбот гэж юу вэ?', 'Холбоо барих']);
      }
    } catch (err) {
      hideTyping();
      addBubble('Сүлжээний алдаа. Интернет холболтоо шалгана уу.', 'bot');
    } finally {
      state.busy = false;
      sendBtn.disabled = false;
      input.focus();
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildWidget);
  } else {
    buildWidget();
  }
})();
