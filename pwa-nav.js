(function () {
  var isStandalone = ('standalone' in navigator && navigator.standalone)
    || window.matchMedia('(display-mode: standalone)').matches;

  if (!isStandalone) return;

  var style = document.createElement('style');
  style.textContent = [
    '.pwa-nav-bar{position:fixed;bottom:0;left:0;right:0;height:52px;background:#1a3a5c;',
    'border-top:2px solid #00A651;display:flex;align-items:center;',
    'padding:0 20px;gap:12px;z-index:9999;font-family:IBM Plex Sans,DM Sans,sans-serif;}',
    '.pwa-nav-bar button{background:transparent;border:none;color:rgba(255,255,255,0.7);',
    'font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;padding:6px 10px;',
    'border-radius:6px;transition:all .15s;}',
    '.pwa-nav-bar button:hover{background:rgba(255,255,255,0.1);color:#fff;}',
    '.pwa-nav-bar .pwa-home{color:#00A651;font-weight:600;}',
    '.pwa-nav-bar .pwa-title{color:rgba(255,255,255,0.4);font-size:11px;',
    'font-family:IBM Plex Mono,DM Mono,monospace;letter-spacing:.08em;margin-left:auto;}',
    'body{padding-bottom:52px !important;}'
  ].join('');
  document.head.appendChild(style);

  function buildNav() {
    var bar = document.createElement('div');
    bar.className = 'pwa-nav-bar';

    var isHome = (window.location.pathname === '/' || window.location.pathname === '/index.html');

    if (!isHome) {
      var backBtn = document.createElement('button');
      backBtn.innerHTML = '&#8249; Back';
      backBtn.onclick = function () { history.back(); };
      bar.appendChild(backBtn);

      var homeBtn = document.createElement('button');
      homeBtn.className = 'pwa-home';
      homeBtn.innerHTML = '&#8962; Home';
      homeBtn.onclick = function () { window.location.href = '/'; };
      bar.appendChild(homeBtn);
    } else {
      var homeLabel = document.createElement('button');
      homeLabel.className = 'pwa-home';
      homeLabel.innerHTML = '&#8962; LOOMI';
      homeLabel.style.cursor = 'default';
      homeLabel.style.pointerEvents = 'none';
      bar.appendChild(homeLabel);
    }

    var title = document.createElement('span');
    title.className = 'pwa-title';
    title.textContent = 'LOOMI';
    bar.appendChild(title);

    document.body.appendChild(bar);
  }

  if (document.body) {
    buildNav();
  } else {
    document.addEventListener('DOMContentLoaded', buildNav);
  }
})();
