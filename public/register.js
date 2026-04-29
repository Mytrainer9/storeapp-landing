(function () {
  const form = document.getElementById('regForm');
  if (!form) return;

  const pw = document.getElementById('regPw');
  const pwBar = document.getElementById('regPwBar');
  const pwToggle = document.getElementById('regPwToggle');
  const status = document.getElementById('regStatus');
  const submit = document.getElementById('regSubmit');
  const submitTxt = submit.querySelector('.reg-submit-txt');

  const t = (key, fallback) => (window.i18n && window.i18n.t(key)) || fallback;

  // Password strength meter
  const scorePassword = (val) => {
    let score = 0;
    if (!val) return 0;
    if (val.length >= 8) score += 1;
    if (val.length >= 12) score += 1;
    if (/[A-Z]/.test(val)) score += 1;
    if (/[a-z]/.test(val)) score += 1;
    if (/\d/.test(val)) score += 1;
    if (/[^A-Za-z0-9]/.test(val)) score += 1;
    return Math.min(score, 4);
  };

  const meterStates = ['', 'weak', 'fair', 'good', 'strong'];
  pw.addEventListener('input', () => {
    const s = scorePassword(pw.value);
    pwBar.className = 'reg-pw-bar';
    if (s > 0) pwBar.classList.add('reg-pw-bar--' + meterStates[s]);
  });

  // Show/hide toggle
  pwToggle.addEventListener('click', () => {
    const isPw = pw.type === 'password';
    pw.type = isPw ? 'text' : 'password';
    pwToggle.classList.toggle('is-visible', isPw);
  });

  const showStatus = (kind, msg) => {
    status.hidden = false;
    status.className = 'reg-status reg-status--' + kind;
    status.textContent = (kind === 'ok' ? '✅ ' : '⚠️ ') + msg;
  };

  const clearStatus = () => {
    status.hidden = true;
    status.className = 'reg-status';
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearStatus();

    const fd = new FormData(form);
    const name = (fd.get('name') || '').toString().trim();
    const email = (fd.get('email') || '').toString().trim();
    const phone = (fd.get('phone') || '').toString().trim();
    const business = (fd.get('business') || '').toString().trim();
    const password = (fd.get('password') || '').toString();

    if (!name) return showStatus('err', t('messages.err_name_required', 'Нэрээ оруулна уу.'));
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return showStatus('err', t('messages.err_email_invalid', 'Имэйл хаяг буруу байна.'));
    }
    if (password.length < 8) return showStatus('err', t('messages.err_password_min8', 'Нууц үг дор хаяж 8 тэмдэгттэй байх ёстой.'));
    if (!/[A-Z]/.test(password)) return showStatus('err', t('messages.err_password_uppercase', 'Нууц үгэнд том үсэг оруулна уу.'));
    if (!/\d/.test(password)) return showStatus('err', t('messages.err_password_digit', 'Нууц үгэнд тоо оруулна уу.'));
    if (!document.getElementById('regTos').checked) {
      return showStatus('err', t('messages.err_tos_required', 'Үйлчилгээний нөхцлийг зөвшөөрнө үү.'));
    }

    submit.disabled = true;
    const origTxt = submitTxt.textContent;
    submitTxt.textContent = t('messages.registering', 'Бүртгэж байна...');

    try {
      const captchaInput = document.querySelector('[name="cf-turnstile-response"]');
      const cfTurnstileResponse = captchaInput && captchaInput.value ? captchaInput.value : null;
      const body = { name, email, phone, business, password };
      if (cfTurnstileResponse) body.cfTurnstileResponse = cfTurnstileResponse;
      const res = await fetch('/api/register', {
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
          t('messages.success_register', 'Бүртгэл амжилттай! Админ таны лицензийг идэвхжүүлсний дараа нэвтрэх боломжтой.');
        showStatus('ok', okMsg);
        form.reset();
        pwBar.className = 'reg-pw-bar';
        submitTxt.textContent = t('messages.redirecting', 'Нэвтрэх хуудас руу шилжиж байна...');
        setTimeout(() => {
          window.location.href = 'https://ai.storeapp.us/seller/login.html';
        }, 2500);
        return;
      }

      const errMsg =
        data.error ||
        data.message ||
        t('messages.err_register_failed', 'Бүртгэл амжилтгүй боллоо. Дахин оролдоно уу.');
      showStatus('err', errMsg);
    } catch (err) {
      showStatus('err', t('messages.err_network', 'Сүлжээний алдаа. Интернэт холболтоо шалгана уу.'));
    } finally {
      if (!status.classList.contains('reg-status--ok')) {
        submit.disabled = false;
        submitTxt.textContent = origTxt;
      }
    }
  });
})();
