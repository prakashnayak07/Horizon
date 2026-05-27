const SERVICES_MENU = [
  { n: '01', href: 'digital-variable-data-printing.html', title: 'Digital & variable data printing', desc: 'Short runs, personalised pieces.',     img: 'https://images.pexels.com/photos/9550363/pexels-photo-9550363.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '02', href: 'web-offset-printing.html',            title: 'Web offset printing',              desc: 'High-volume catalogues & magazines.',  img: 'https://images.pexels.com/photos/6620992/pexels-photo-6620992.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '03', href: 'sheetfed-offset-printing.html',       title: 'Sheetfed offset printing',         desc: 'Premium brochures & annual reports.',  img: 'https://images.pexels.com/photos/36559330/pexels-photo-36559330.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '04', href: 'print-on-demand-portal.html',         title: 'Print on demand portal',           desc: 'Order pre-approved print online.',     img: 'https://images.pexels.com/photos/19124461/pexels-photo-19124461.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '05', href: 'online-inventory-ordering.html',      title: 'Online inventory ordering',        desc: 'Live stock, easy reorder.',            img: 'https://images.pexels.com/photos/31112238/pexels-photo-31112238.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '06', href: 'pos-solutions.html',                  title: 'POS solutions',                    desc: 'Displays, shelf talkers, signage.',    img: 'https://images.pexels.com/photos/12935048/pexels-photo-12935048.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '07', href: 'mailhouse-services.html',             title: 'Mailhouse services',               desc: 'Addressed mail & bulk lodgement.',     img: 'https://images.pexels.com/photos/10202984/pexels-photo-10202984.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '08', href: 'pick-and-pack.html',                  title: 'Pick & pack',                      desc: 'Kits, campaigns, one-off orders.',     img: 'https://images.pexels.com/photos/4440887/pexels-photo-4440887.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '09', href: 'letterbox-distribution.html',         title: 'Letterbox distribution',           desc: 'Unaddressed drops via Aus Post.',      img: 'https://images.pexels.com/photos/1550334/pexels-photo-1550334.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
  { n: '10', href: 'storage-and-distribution.html',       title: 'Storage & distribution',           desc: 'Warehousing & tracked dispatch.',      img: 'https://images.pexels.com/photos/10834810/pexels-photo-10834810.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop' },
];

const megaItems = SERVICES_MENU.map(s => `
  <a href="${s.href}" class="mega-item group">
    <span class="mega-thumb"><img src="${s.img}" alt="" loading="lazy" /></span>
    <span class="mega-text">
      <span class="mega-title-row">
        <span class="mega-num">${s.n}</span>
        <span class="mega-title">${s.title}</span>
      </span>
      <span class="mega-desc">${s.desc}</span>
    </span>
  </a>`).join('');

const mobileServicesItems = SERVICES_MENU.map(s => `
  <a href="${s.href}" class="mobile-svc-item">
    <span class="mobile-svc-thumb"><img src="${s.img}" alt="" loading="lazy" /></span>
    <span class="mobile-svc-text">
      <span class="mobile-svc-title-row">
        <span class="mobile-svc-num">${s.n}</span>
        <span class="mobile-svc-title">${s.title}</span>
      </span>
      <span class="mobile-svc-desc">${s.desc}</span>
    </span>
  </a>`).join('');

document.querySelector('header').innerHTML = `
  <!-- Announcement bar -->
  <div id="announce" class="announce relative bg-site text-white">
    <div class="wrap py-2 sm:py-2.5 flex items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-[13px] font-display tracking-[0.04em] leading-tight">
      <span class="inline-flex items-center gap-1.5 sm:gap-2 text-center">
        <span class="inline-block w-1.5 h-1.5 rounded-full bg-white/80 animate-pulse shrink-0" aria-hidden="true"></span>
        <span class="sm:hidden"><strong class="font-medium">2026 Benchmark Report</strong></span>
        <span class="hidden sm:inline">New: <strong class="font-medium">2026 Print Procurement Benchmark Report</strong> — see how your spend compares.</span>
        <a href="contact.html" class="underline underline-offset-2 hover:no-underline whitespace-nowrap">
          <span class="sm:hidden">Get access →</span>
          <span class="hidden sm:inline">Request access →</span>
        </a>
      </span>
      <button id="announce-close" type="button" class="ml-2 inline-flex items-center justify-center w-7 h-7 rounded-full hover:bg-white/15 transition-colors" aria-label="Dismiss announcement">
        <svg class="w-3.5 h-3.5" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
          <path d="M3 3l8 8M11 3l-8 8" />
        </svg>
      </button>
    </div>
  </div>

  <!-- Sticky main header with pill nav -->
  <div id="site-header" class="sticky top-0 z-[100] py-3 md:py-4" role="banner">
    <div class="wrap">
      <div class="nav-pill flex items-center justify-between gap-4 bg-ink text-cream rounded-full pl-4 pr-2 md:pl-6 md:pr-3 py-2 border border-line-ink shadow-card">
        <a href="index.html" class="inline-flex items-center" aria-label="Horizon Print Management — home">
          <img src="https://images.squarespace-cdn.com/content/v1/55764a8ae4b0377e73c34806/1542755523480-8UVIX9GP4RKV1ZFBY437/Horizon3.png?format=400w" alt="Horizon Print Management" class="h-7 md:h-8 w-auto" />
        </a>

        <nav class="hidden lg:flex items-center gap-7 font-display text-[14px] uppercase tracking-[0.05em]" aria-label="Primary">
          <a href="about.html" class="nav-link">About</a>
          <div class="mega-wrap relative" data-mega>
            <button type="button" class="nav-link inline-flex items-center gap-1.5" aria-haspopup="true" aria-expanded="false" data-mega-btn>
             SERVICES
              <svg class="w-3 h-3 transition-transform" data-mega-chev viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 5l4 4 4-4"/></svg>
            </button>
          </div>
          <a href="network.html" class="nav-link">Network</a>
          <a href="sustainability.html" class="nav-link">Sustainability</a>
          <a href="contact.html" class="nav-link">Contact</a>
        </nav>

        <div class="flex items-center gap-3">
          <a href="http://www.cullamark.com.au/hpm/index/" target="_blank" rel="noopener" class="hidden lg:inline-block text-cream/70 text-[13px] font-display uppercase tracking-[0.06em] hover:text-cream transition-colors">Client login</a>
          <a href="contact.html" class="btn btn-primary !rounded-full !h-10 !px-5 !text-[13px]">
            Get a quote
            <svg class="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M2 7h10M8 3l4 4-4 4" />
            </svg>
          </a>
          <button id="menu-btn" class="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/30 text-cream" aria-label="Open menu" aria-expanded="false">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Desktop mega menu panel -->
      <div id="mega-panel" class="mega-panel hidden lg:block" data-mega-panel aria-hidden="true">
        <div class="mega-inner">
          <div class="mega-head">
            <p class="eyebrow eyebrow-indigo m-0">Our services</p>
            <h3 class="m-0 text-[22px] leading-tight mt-1">Everything you need printed, in one place.</h3>
            <a href="services.html" class="mega-all">View all services
              <svg width="12" height="12" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M2 7h10M8 3l4 4-4 4"/></svg>
            </a>
          </div>
          <div class="mega-grid">${megaItems}</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  <nav id="mobile-menu" class="mobile-menu lg:hidden" aria-label="Mobile" aria-hidden="true">
    <div class="mobile-menu__inner">
      <a href="about.html" class="mobile-link">About</a>

      <div class="mobile-acc" data-mobile-acc>
        <button type="button" class="mobile-link mobile-acc__btn" aria-expanded="false">
          <span>Services</span>
          <svg class="w-4 h-4 transition-transform" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 5l4 4 4-4"/></svg>
        </button>
        <div class="mobile-acc__body">
          <a href="services.html" class="block py-2.5 text-cream text-[14px] font-display uppercase tracking-[0.1em]">All services →</a>
          ${mobileServicesItems}
        </div>
      </div>

      <a href="network.html" class="mobile-link">Network</a>
      <a href="sustainability.html" class="mobile-link">Sustainability</a>
      <a href="contact.html" class="mobile-link">Contact</a>
    </div>
  </nav>
`;

(function initNav() {
  // Desktop mega menu
  const wrap = document.querySelector('[data-mega]');
  const btn = document.querySelector('[data-mega-btn]');
  const panel = document.querySelector('[data-mega-panel]');
  const chev = document.querySelector('[data-mega-chev]');
  if (wrap && btn && panel) {
    let openTimer, closeTimer;
    const open = () => {
      clearTimeout(closeTimer);
      panel.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      panel.setAttribute('aria-hidden', 'false');
      if (chev) chev.style.transform = 'rotate(180deg)';
    };
    const close = () => {
      panel.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
      if (chev) chev.style.transform = '';
    };
    const scheduleClose = () => { clearTimeout(openTimer); closeTimer = setTimeout(close, 150); };
    const scheduleOpen = () => { clearTimeout(closeTimer); openTimer = setTimeout(open, 60); };

    wrap.addEventListener('mouseenter', scheduleOpen);
    wrap.addEventListener('mouseleave', scheduleClose);
    panel.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    panel.addEventListener('mouseleave', scheduleClose);
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      panel.classList.contains('is-open') ? close() : open();
    });
    btn.addEventListener('focus', open);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
    document.addEventListener('click', (e) => {
      if (!wrap.contains(e.target) && !panel.contains(e.target)) close();
    });
  }

  // Mobile services accordion
  document.querySelectorAll('[data-mobile-acc]').forEach(acc => {
    const b = acc.querySelector('.mobile-acc__btn');
    b?.addEventListener('click', () => {
      const isOpen = acc.classList.toggle('is-open');
      b.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  });
})();
