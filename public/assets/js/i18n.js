/* StoreApp landing — lightweight i18n
 * Loads /assets/i18n/{lang}.json, replaces text in [data-i18n] elements,
 * persists choice in localStorage, exposes window.i18n.setLang(code).
 */
(function () {
  'use strict';

  var SUPPORTED = ['mn', 'en', 'cs'];
  var DEFAULT_LANG = 'mn';
  var STORAGE_KEY = 'storeapp_lang';

  var dict = {};
  var currentLang = DEFAULT_LANG;

  function detect() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) { /* localStorage may be disabled */ }
    var browser = (navigator.language || navigator.userLanguage || DEFAULT_LANG)
      .slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(browser) !== -1 ? browser : DEFAULT_LANG;
  }

  function get(key, source) {
    if (!key) return undefined;
    var ref = source || dict;
    var parts = key.split('.');
    for (var i = 0; i < parts.length; i++) {
      if (ref == null) return undefined;
      ref = ref[parts[i]];
    }
    return ref;
  }

  function applyDict() {
    // textContent replacements
    var textNodes = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < textNodes.length; i++) {
      var el = textNodes[i];
      var key = el.getAttribute('data-i18n');
      var val = get(key);
      if (val == null) continue;
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = val;
      } else {
        el.textContent = val;
      }
    }
    // attribute replacements: data-i18n-attr="placeholder:input.placeholder,title:nav.menu_aria"
    var attrNodes = document.querySelectorAll('[data-i18n-attr]');
    for (var j = 0; j < attrNodes.length; j++) {
      var node = attrNodes[j];
      var spec = node.getAttribute('data-i18n-attr');
      var pairs = spec.split(',');
      for (var k = 0; k < pairs.length; k++) {
        var pair = pairs[k].split(':');
        if (pair.length !== 2) continue;
        var attr = pair[0].trim();
        var attrKey = pair[1].trim();
        var attrVal = get(attrKey);
        if (attrVal != null) node.setAttribute(attr, attrVal);
      }
    }
    document.documentElement.setAttribute('lang', currentLang);
    syncSwitcher();
    document.dispatchEvent(new CustomEvent('i18n:applied', { detail: { lang: currentLang } }));
  }

  function syncSwitcher() {
    var buttons = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var code = btn.getAttribute('data-lang');
      if (code === currentLang) {
        btn.classList.add('is-active');
        btn.setAttribute('aria-current', 'true');
      } else {
        btn.classList.remove('is-active');
        btn.removeAttribute('aria-current');
      }
    }
    // Update visible "current language" label, e.g. <span data-lang-current></span>
    var labels = document.querySelectorAll('[data-lang-current]');
    var labelText = ({ mn: 'MN', en: 'EN', cs: 'CS' })[currentLang] || currentLang.toUpperCase();
    for (var j = 0; j < labels.length; j++) labels[j].textContent = labelText;
  }

  function load(lang) {
    return fetch('/assets/i18n/' + lang + '.json', { cache: 'no-cache' })
      .then(function (r) {
        if (!r.ok) throw new Error('i18n load failed: ' + r.status);
        return r.json();
      });
  }

  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    return load(lang).then(function (data) {
      dict = data;
      currentLang = lang;
      try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
      applyDict();
    }).catch(function (err) {
      console.warn('[i18n]', err.message);
    });
  }

  function bindSwitcher() {
    document.addEventListener('click', function (ev) {
      var target = ev.target.closest && ev.target.closest('[data-lang]');
      if (!target) return;
      var lang = target.getAttribute('data-lang');
      if (lang) {
        ev.preventDefault();
        setLang(lang);
        // Close any open dropdown
        var dropdown = target.closest('.lang-dd');
        if (dropdown) dropdown.classList.remove('is-open');
      }
    });

    // Toggle dropdown on .lang-dd-btn click
    document.addEventListener('click', function (ev) {
      var toggle = ev.target.closest && ev.target.closest('.lang-dd-btn');
      if (toggle) {
        ev.preventDefault();
        var dd = toggle.closest('.lang-dd');
        if (dd) dd.classList.toggle('is-open');
        return;
      }
      // Click outside → close all
      var openDD = document.querySelectorAll('.lang-dd.is-open');
      for (var i = 0; i < openDD.length; i++) {
        if (!openDD[i].contains(ev.target)) openDD[i].classList.remove('is-open');
      }
    });

    // ESC closes dropdown
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') {
        var openDD = document.querySelectorAll('.lang-dd.is-open');
        for (var i = 0; i < openDD.length; i++) openDD[i].classList.remove('is-open');
      }
    });
  }

  function init() {
    bindSwitcher();
    setLang(detect());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.i18n = {
    setLang: setLang,
    getLang: function () { return currentLang; },
    t: function (key) { return get(key); },
  };
})();
