// Year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Theme toggle with persistence
const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) document.documentElement.setAttribute('data-theme', savedTheme);
function setIcon() {
  const t = document.documentElement.getAttribute('data-theme') || 'auto';
  if (toggle) {
    toggle.textContent = t === 'light' ? '🌞' : t === 'dark' ? '🌙' : '🌓';
    toggle.title = `Theme: ${t}`;
  }
}
setIcon();
if (toggle) {
  toggle.addEventListener('click', () => {
    const cur = document.documentElement.getAttribute('data-theme') || 'auto';
    const next = cur === 'auto' ? 'light' : cur === 'light' ? 'dark' : 'auto';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setIcon();
  });
}

// Mark active nav item by body data-page
(function(){
  const p = document.body.dataset.page;
  if (!p) return;
  document.querySelectorAll('.navlinks a').forEach(a=>{
    const href = a.getAttribute('href') || '';
    if (href.endsWith(`${p}.html`) || (p==='index' && href === 'index.html')) a.classList.add('active');
  });
})();

// Email helpers (works even if default mail client isn't configured)
const EMAIL = "emma.oyesola@gmail.com";
function copyEmail(){
  navigator.clipboard?.writeText(EMAIL).then(()=>alert("Email copied"))
  .catch(()=>{
    const t = document.createElement('textarea'); t.value = EMAIL; document.body.appendChild(t);
    t.select(); try{ document.execCommand('copy'); alert("Email copied"); }catch(e){ alert(EMAIL); }
    document.body.removeChild(t);
  });
}
document.getElementById('copyEmail')?.addEventListener('click', copyEmail);
document.getElementById('copyEmail2')?.addEventListener('click', copyEmail);
