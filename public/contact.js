(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const status = document.getElementById('cfStatus');
  const submit = document.getElementById('cfSubmit');
  const submitTxt = submit.querySelector('.cf-submit-txt');

  const t = (key, fallback) => (window.i18n && window.i18n.t(key)) || fallback;

  const showStatus = (kind, msg) => {
    status.hidden = false;
    status.className = 'cf-status cf-status--' + kind;
    status.textContent = (kind === 'ok' ? '✅ ' : '⚠️ ') + msg;
  };

  const clearStatus = () => {
    status.hidden = true;
    status.className = 'cf-status';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearStatus();

    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const subject = (fd.get('subject') || '').toString().trim();
    const rawMsg = (fd.get('message') || '').toString().trim();

    if (!name) return showStatus('err', t('messages.err_name_required', 'Нэрээ оруулна уу.'));
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return showStatus('err', t('messages.err_email_invalid', 'Имэйл хаяг буруу байна.'));
    }
    if (!rawMsg) return showStatus('err', t('messages.err_message_required', 'Мессежээ оруулна уу.'));

    const message = subject ? `[${subject}]\n\n${rawMsg}` : rawMsg;

    submit.disabled = true;
    const origTxt = submitTxt.textContent;
    submitTxt.textContent = t('messages.submitting', 'Илгээж байна...');

    try {
      const captchaInput = document.querySelector('[name="cf-turnstile-response"]');
      const cfTurnstileResponse = captchaInput && captchaInput.value ? captchaInput.value : null;
      const body = { name, email, phone, message };
      if (cfTurnstileResponse) body.cfTurnstileResponse = cfTurnstileResponse;
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));

      const ok = res.ok && data.ok !== false;
      if (ok) {
        const okMsg =
          (data.data && data.data.message) ||
          data.message ||
          t('messages.success_contact', 'Мессеж амжилттай илгээгдлээ! Бид 24 цагийн дотор хариулна.');
        showStatus('ok', okMsg);
        form.reset();
      } else {
        const errMsg =
          data.error ||
          data.message ||
          t('messages.err_send_failed', 'Мессеж илгээхэд алдаа гарлаа. Дахин оролдоно уу.');
        showStatus('err', errMsg);
      }
    } catch (err) {
      showStatus('err', t('messages.err_network', 'Сүлжээний алдаа. Интернэт холболтоо шалгана уу.'));
    } finally {
      submit.disabled = false;
      submitTxt.textContent = origTxt;
    }
  });
})();
