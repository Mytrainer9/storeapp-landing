(function () {
  const form = document.getElementById('regForm');
  if (!form) return;

  const pw = document.getElementById('regPw');
  const pwBar = document.getElementById('regPwBar');
  const pwToggle = document.getElementById('regPwToggle');
  const status = document.getElementById('regStatus');
  const submit = document.getElementById('regSubmit');
  const submitTxt = submit.querySelector('.reg-submit-txt');

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

    if (!name) return showStatus('err', 'Нэрээ оруулна уу.');
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return showStatus('err', 'Имэйл хаяг буруу байна.');
    }
    if (password.length < 8) return showStatus('err', 'Нууц үг дор хаяж 8 тэмдэгттэй байх ёстой.');
    if (!/[A-Z]/.test(password)) return showStatus('err', 'Нууц үгэнд том үсэг оруулна уу.');
    if (!/\d/.test(password)) return showStatus('err', 'Нууц үгэнд тоо оруулна уу.');
    if (!document.getElementById('regTos').checked) {
      return showStatus('err', 'Үйлчилгээний нөхцлийг зөвшөөрнө үү.');
    }

    submit.disabled = true;
    const origTxt = submitTxt.textContent;
    submitTxt.textContent = 'Бүртгэж байна...';

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, business, password }),
      });
      const data = await res.json().catch(() => ({}));

      const ok = res.ok && data.ok !== false;
      if (ok) {
        const okMsg =
          (data.data && data.data.message) ||
          data.message ||
          'Бүртгэл амжилттай! Админ таны лицензийг идэвхжүүлсний дараа нэвтрэх боломжтой.';
        showStatus('ok', okMsg);
        form.reset();
        pwBar.className = 'reg-pw-bar';
        submitTxt.textContent = 'Нэвтрэх хуудас руу шилжиж байна...';
        setTimeout(() => {
          window.location.href = 'https://ai.storeapp.us/seller/login.html';
        }, 2500);
        return;
      }

      const errMsg = data.error || data.message || 'Бүртгэл амжилтгүй боллоо. Дахин оролдоно уу.';
      showStatus('err', errMsg);
    } catch (err) {
      showStatus('err', 'Сүлжээний алдаа. Интернэт холболтоо шалгана уу.');
    } finally {
      if (!status.classList.contains('reg-status--ok')) {
        submit.disabled = false;
        submitTxt.textContent = origTxt;
      }
    }
  });
})();
