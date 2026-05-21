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

        <nav class="hidden lg:flex gap-7 font-display text-[14px] uppercase tracking-[0.05em]" aria-label="Primary">
          <a href="about.html" class="nav-link">About</a>
          <a href="services.html" class="nav-link">Services</a>
          <a href="index.html#network" class="nav-link">Network</a>
          <a href="sustainability.html" class="nav-link">Sustainability</a>
          <a href="contact.html" class="nav-link">Contact</a>
        </nav>

        <div class="flex items-center gap-3">
          <a href="#login" class="hidden lg:inline-block text-cream/70 text-[13px] font-display uppercase tracking-[0.06em] hover:text-cream transition-colors">Client login</a>
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
    </div>
  </div>

  <!-- Mobile menu -->
  <nav id="mobile-menu" class="fixed inset-x-0 top-[72px] md:top-[88px] bottom-0 bg-ink text-cream px-5 md:px-8 py-12 z-[99] overflow-y-auto flex flex-col gap-4 invisible -translate-y-full transition-transform duration-300 ease-[cubic-bezier(.2,.8,.2,1)] [&.open]:visible [&.open]:translate-y-0" aria-label="Mobile">
    <a href="about.html" class="font-display text-2xl py-3.5 border-b border-line-ink">About</a>
    <a href="services.html" class="font-display text-2xl py-3.5 border-b border-line-ink">Services</a>
    <a href="index.html#network" class="font-display text-2xl py-3.5 border-b border-line-ink">Network</a>
    <a href="sustainability.html" class="font-display text-2xl py-3.5 border-b border-line-ink">Sustainability</a>
    <a href="contact.html" class="font-display text-2xl py-3.5 border-b border-line-ink">Contact</a>
    <a href="#login" class="text-lg text-cream/70">Client login</a>
    <a href="contact.html" class="btn btn-primary self-start mt-6">
      Get a quote
      <svg class="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true">
        <path d="M2 7h10M8 3l4 4-4 4" />
      </svg>
    </a>
  </nav>
`;
