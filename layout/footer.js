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
      <button class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-sky/50 text-brand-sky text-[13px] hover:bg-brand-sky/10 transition-colors" aria-label="Select language">
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
        </svg>
        English
        <svg class="w-3 h-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.8">
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>
    </div>

    <!-- Link columns -->
    <div class="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:gap-14 pb-10">
      <div>
        <h5 class="text-brand-sky font-display text-[13px] uppercase tracking-[0.18em] font-medium m-0 mb-5">Quick Links</h5>
        <ul class="list-none p-0 m-0 grid gap-3 text-cream/80 text-[15px]">
          <li><a href="index.html" class="hover:text-cream transition-colors">Home</a></li>
          <li><a href="about.html" class="hover:text-cream transition-colors">About us</a></li>
          <li><a href="index.html#faq" class="hover:text-cream transition-colors">FAQ</a></li>
          <li><a href="contact.html" class="hover:text-cream transition-colors">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <h5 class="text-brand-sky font-display text-[13px] uppercase tracking-[0.18em] font-medium m-0 mb-5">Services</h5>
        <ul class="list-none p-0 m-0 grid gap-3 text-cream/80 text-[15px]">
          <li><a href="services.html" class="hover:text-cream transition-colors">Print Procurement</a></li>
          <li><a href="services.html" class="hover:text-cream transition-colors">Brand Standards</a></li>
          <li><a href="services.html" class="hover:text-cream transition-colors">Production &amp; Fulfilment</a></li>
          <li><a href="services.html" class="hover:text-cream transition-colors">Promotional Merch</a></li>
          <li><a href="sustainability.html" class="hover:text-cream transition-colors">Carbon‑Neutral Print</a></li>
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
        <a href="#" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.6-1.5H16.5V4.4C16.2 4.4 15.2 4.3 14 4.3c-2.5 0-4.2 1.5-4.2 4.2v2H7.3v3h2.5V21h3.7z" />
          </svg>
          Facebook
        </a>
        <a href="#" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M22 5.8c-.7.3-1.5.6-2.4.7.9-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.8-.8-1.9-1.3-3.2-1.3-2.4 0-4.3 1.9-4.3 4.3 0 .3 0 .7.1 1C7.7 9 4.7 7.4 2.7 4.9c-.4.6-.6 1.4-.6 2.2 0 1.5.8 2.8 1.9 3.6-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.8 3.4 4.2-.4.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.7 2.1 2.9 4 3-1.5 1.1-3.3 1.8-5.3 1.8H1.5c1.9 1.2 4.1 1.9 6.5 1.9 7.8 0 12-6.4 12-12v-.5c.8-.6 1.5-1.3 2-2.2z" />
          </svg>
          Twitter
        </a>
        <a href="#" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          Instagram
        </a>
        <a href="#" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56v14H.22V8zM8 8h4.37v1.9h.06c.61-1.15 2.1-2.36 4.32-2.36 4.62 0 5.47 3.04 5.47 7v9.46h-4.55v-8.39c0-2 0-4.57-2.78-4.57s-3.21 2.17-3.21 4.42V22H8V8z" />
          </svg>
          LinkedIn
        </a>
        <a href="#" class="inline-flex items-center gap-1.5 hover:text-cream transition-colors">
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.5a3 3 0 00-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 00.5 6.5C.1 8.4.1 12 .1 12s0 3.6.4 5.5a3 3 0 002.1 2.1c1.9.4 9.4.4 9.4.4s7.5 0 9.4-.4a3 3 0 002.1-2.1c.4-1.9.4-5.5.4-5.5s0-3.6-.4-5.5zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
          </svg>
          YouTube
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
        <li><a href="#" class="hover:text-cream transition-colors">Cups Galore</a></li>
        <li aria-hidden="true" class="text-brand-sky/40">·</li>
        <li><a href="#" class="hover:text-cream transition-colors">Digital Press</a></li>
        <li aria-hidden="true" class="text-brand-sky/40">·</li>
        <li><a href="#" class="hover:text-cream transition-colors" aria-current="page">Horizon Print Management</a></li>
        <li aria-hidden="true" class="text-brand-sky/40">·</li>
        <li><a href="#" class="hover:text-cream transition-colors">Westman Printing</a></li>
        <li aria-hidden="true" class="text-brand-sky/40">·</li>
        <li><a href="#" class="hover:text-cream transition-colors">Reacon Group</a></li>
      </ul>
    </div>
  </div>
`;
})();
