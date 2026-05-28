(() => {
  const el = document.querySelector('footer');
  el.className = 'relative text-cream pt-16 pb-8 overflow-hidden border-t border-line-ink';
  el.setAttribute('role', 'contentinfo');
  el.style.background = 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,119,188,0.16) 0%, rgba(20,25,31,0) 55%), #14191F';
  el.innerHTML = `
  <div class="wrap relative">
    <!-- Top row: wordmark + language switcher -->
    <div class="flex items-center justify-between gap-4 mb-10">
      <a href="index.html" class="inline-flex items-center" aria-label="Horizon Print Management — home">
        <img src="https://images.squarespace-cdn.com/content/v1/55764a8ae4b0377e73c34806/1542755523480-8UVIX9GP4RKV1ZFBY437/Horizon3.png?format=400w" alt="Horizon Print Management" class="h-9 w-auto" />
      </a>
      <div class="relative" id="lang-switcher">
        <button type="button" id="lang-btn" class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-sky/50 text-brand-sky text-[13px] hover:bg-brand-sky/10 transition-colors" aria-haspopup="listbox" aria-expanded="false" aria-label="Select language">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
          </svg>
          <span id="lang-current">English</span>
          <svg class="w-3 h-3 transition-transform" id="lang-caret" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M3 5l3 3 3-3" />
          </svg>
        </button>
        <ul id="lang-menu" role="listbox" aria-labelledby="lang-btn" class="hidden absolute right-0 top-full mt-2 min-w-40 rounded-xl border border-brand-sky/30 shadow-lg py-1 z-10 list-none m-0" style="background:#14191F;">
          <li role="option" data-lang="English" class="px-4 py-2 text-[13px] hover:bg-brand-sky/10 cursor-pointer" style="color:#F5EFE0;" aria-selected="true">English</li>
          <li role="option" data-lang="Español" class="px-4 py-2 text-[13px] hover:bg-brand-sky/10 cursor-pointer" style="color:rgba(245,239,224,0.75);">Español</li>
          <li role="option" data-lang="Français" class="px-4 py-2 text-[13px] hover:bg-brand-sky/10 cursor-pointer" style="color:rgba(245,239,224,0.75);">Français</li>
          <li role="option" data-lang="中文" class="px-4 py-2 text-[13px] hover:bg-brand-sky/10 cursor-pointer" style="color:rgba(245,239,224,0.75);">中文</li>
        </ul>
      </div>
    </div>

    <!-- Link columns -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-14 pb-10">
      <div>
        <h5 class="text-brand-sky font-display text-[13px] uppercase tracking-[0.18em] font-medium m-0 mb-5">Quick Links</h5>
        <ul class="list-none p-0 m-0 grid gap-3 text-cream/80 text-[15px]">
          <li><a href="index.html" class="hover:text-cream transition-colors">Home</a></li>
          <li><a href="about.html" class="hover:text-cream transition-colors">About us</a></li>
          <li><a href="network.html" class="hover:text-cream transition-colors">Our Network</a></li>
          <li><a href="faq.html" class="hover:text-cream transition-colors">FAQ</a></li>
          <li><a href="contact.html" class="hover:text-cream transition-colors">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-brand-sky font-display text-[13px] uppercase tracking-[0.18em] font-medium m-0 mb-5">Services</h5>
        <ul class="list-none p-0 m-0 grid gap-3 text-cream/80 text-[15px]">
          <li><a href="digital-variable-data-printing.html" class="hover:text-cream transition-colors">Digital &amp; Variable Data</a></li>
          <li><a href="web-offset-printing.html" class="hover:text-cream transition-colors">Web Offset Printing</a></li>
          <li><a href="sheetfed-offset-printing.html" class="hover:text-cream transition-colors">Sheetfed Offset</a></li>
          <li><a href="print-on-demand-portal.html" class="hover:text-cream transition-colors">Print on Demand Portal</a></li>
          <li><a href="mailhouse-services.html" class="hover:text-cream transition-colors">Mailhouse Services</a></li>
          <li><a href="storage-and-distribution.html" class="hover:text-cream transition-colors">Storage &amp; Distribution</a></li>
          <li><a href="services.html" class="hover:text-cream transition-colors font-medium text-brand-sky">View all services →</a></li>
        </ul>
      </div>
      <div class="col-span-2 sm:col-span-1">
        <h5 class="text-brand-sky font-display text-[13px] uppercase tracking-[0.18em] font-medium m-0 mb-5">Industries</h5>
        <ul class="list-none p-0 m-0 grid grid-cols-2 sm:grid-cols-1 gap-3 text-cream/80 text-[15px]">
          <li><a href="#" class="hover:text-cream transition-colors">Banking &amp; Finance</a></li>
          <li><a href="#" class="hover:text-cream transition-colors">Health &amp; Pharma</a></li>
          <li><a href="#" class="hover:text-cream transition-colors">E‑Commerce</a></li>
          <li><a href="#" class="hover:text-cream transition-colors">Not‑For‑Profit</a></li>
          <li><a href="#" class="hover:text-cream transition-colors">Hospitality</a></li>
          <li><a href="#" class="hover:text-cream transition-colors">Government</a></li>
        </ul>
      </div>
    </div>

    <!-- Social row with hairlines -->
    <div class="flex items-center gap-5 py-6">
      <span class="flex-1 h-px bg-brand-sky/25"></span>
      <div class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-brand-sky text-[13px] font-display tracking-[0.06em]">
        <a href="https://www.facebook.com/Horizon-Print-Management-236461980230440/" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.6-1.5H16.5V4.4C16.2 4.4 15.2 4.3 14 4.3c-2.5 0-4.2 1.5-4.2 4.2v2H7.3v3h2.5V21h3.7z" />
          </svg>
          Facebook
        </a>
        <a href="https://x.com/HPMprint" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
          X
        </a>
        <a href="https://plus.google.com/116699962449614893805" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 11v2.4h4c-.2 1-1.2 3-4 3-2.4 0-4.4-2-4.4-4.4S5.6 7.6 8 7.6c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.8 9.9 5 8 5 4.1 5 1 8.1 1 12s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2zm15-1h-2V8h-2v2h-2v2h2v2h2v-2h2z"/>
          </svg>
          Google+
        </a>
        <a href="mailto:sales@horizonprintmanagement.com.au?subject=Website%20enquiry" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2"/>
            <path d="M3 7l9 6 9-6"/>
          </svg>
          Email
        </a>
      </div>
      <span class="flex-1 h-px bg-brand-sky/25"></span>
    </div>

    <!-- Copyright + legal -->
    <div class="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5 text-[13px] text-cream/65">
      <p class="m-0">© <span id="yr">2026</span> — Horizon Print Management</p>
      <nav class="flex flex-wrap items-center gap-x-6 gap-y-2" aria-label="Legal">
        <a href="terms.html" class="hover:text-cream transition-colors">Terms of Trade</a>
        <a href="privacy.html" class="hover:text-cream transition-colors">Privacy Policy</a>
        <a href="cookies.html" class="hover:text-cream transition-colors">Cookie Policy</a>
        <a href="sitemap.html" class="hover:text-cream transition-colors">Sitemap</a>
      </nav>
    </div>

    <!-- Sibling network row -->
    <div class="mt-4 pt-5 border-t border-brand-sky/20">
      <ul class="flex flex-wrap justify-center items-center gap-x-8 gap-y-2 list-none p-0 m-0 text-cream/75 text-[13px] font-display tracking-[0.04em]">
        <li><a href="https://cupsgalore.com.au/" target="_blank" rel="noopener" class="hover:text-cream transition-colors">Cups Galore</a></li>
        <li aria-hidden="true" class="text-brand-sky/40">·</li>
        <li><a href="https://www.digitalpress.com.au/" target="_blank" rel="noopener" class="hover:text-cream transition-colors">Digital Press</a></li>
        <li aria-hidden="true" class="text-brand-sky/40">·</li>
        <li><a href="network.html" class="hover:text-cream transition-colors" aria-current="page">Horizon Print Management</a></li>
        <li aria-hidden="true" class="text-brand-sky/40">·</li>
        <li><a href="https://westmanprinting.com.au/" target="_blank" rel="noopener" class="hover:text-cream transition-colors">Westman Printing</a></li>
        <li aria-hidden="true" class="text-brand-sky/40">·</li>
        <li><a href="https://www.reacongroup.com/" target="_blank" rel="noopener" class="hover:text-cream transition-colors">Reacon Group</a></li>
      </ul>
    </div>
  </div>
`;

  const btn = el.querySelector('#lang-btn');
  const menu = el.querySelector('#lang-menu');
  const current = el.querySelector('#lang-current');
  const caret = el.querySelector('#lang-caret');
  const close = () => {
    menu.classList.add('hidden');
    btn.setAttribute('aria-expanded', 'false');
    caret.style.transform = '';
  };
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = menu.classList.toggle('hidden');
    btn.setAttribute('aria-expanded', String(!open));
    caret.style.transform = open ? '' : 'rotate(180deg)';
  });
  menu.querySelectorAll('[role="option"]').forEach((opt) => {
    opt.addEventListener('click', () => {
      menu.querySelectorAll('[role="option"]').forEach((o) => {
        o.setAttribute('aria-selected', 'false');
        o.style.color = 'rgba(245,239,224,0.75)';
      });
      opt.setAttribute('aria-selected', 'true');
      opt.style.color = '#F5EFE0';
      current.textContent = opt.dataset.lang;
      close();
    });
  });
  document.addEventListener('click', (e) => {
    if (!el.querySelector('#lang-switcher').contains(e.target)) close();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
})();
