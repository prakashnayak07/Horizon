/* main.js — site-wide JS */
        (() => {
          const tabs = document.querySelectorAll('.ind-tab');
          const panels = document.querySelectorAll('.ind-panel');
          const order = ['au', 'nz', 'cn', 'hk', 'na', 'in'];
          const setActive = (key) => {
            tabs.forEach(t => t.setAttribute('aria-selected', t.dataset.tab === key ? 'true' : 'false'));
            panels.forEach(p => { const on = p.id === 'ind-' + key; p.classList.toggle('is-active', on); if (on) p.removeAttribute('hidden'); else p.setAttribute('hidden', ''); });
          };
          tabs.forEach(t => {
            t.addEventListener('click', () => setActive(t.dataset.tab));
            t.addEventListener('keydown', (e) => {
              const i = order.indexOf(t.dataset.tab);
              if (e.key === 'ArrowDown') { e.preventDefault(); const n = order[(i + 1) % order.length]; setActive(n); document.getElementById('t-' + n)?.focus(); }
              if (e.key === 'ArrowUp') { e.preventDefault(); const n = order[(i - 1 + order.length) % order.length]; setActive(n); document.getElementById('t-' + n)?.focus(); }
            });
          });
        })();
        (() => {
          const start = () => {
            if (!window.Swiper) return setTimeout(start, 80);
            document.querySelectorAll('.tm-swiper').forEach(el => {
              const reverse = el.dataset.tmDir === 'right';
              new Swiper(el, {
                slidesPerView: 'auto',
                spaceBetween: 24,
                loop: true,
                speed: 6000,
                allowTouchMove: true,
                grabCursor: true,
                freeMode: { enabled: true, momentum: false },
                autoplay: { delay: 0, disableOnInteraction: false, reverseDirection: reverse, pauseOnMouseEnter: true },
              });
            });
          };
          start();
        })();
    // Hero Swiper
    (() => {
      if (!window.Swiper) return;
      const root = document.getElementById('hero-swiper');
      if (!root) return;
      let bar = document.getElementById('hero-bar');
      const cur = document.getElementById('hero-current');
      const tot = document.getElementById('hero-total');
      const slideCount = root.querySelectorAll('.swiper-slide').length;
      const AUTOPLAY = 6000;
      const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

      const swiper = new Swiper(root, {
        loop: true,
        speed: 700,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: reduce ? false : { delay: AUTOPLAY, disableOnInteraction: false, pauseOnMouseEnter: true },
        keyboard: { enabled: true },
        a11y: { enabled: true },
        navigation: { prevEl: '.hero-prev', nextEl: '.hero-next' },
        on: {
          slideChange(s) {
            const i = (s.realIndex ?? 0) + 1;
            if (cur) cur.textContent = String(i).padStart(2, '0');
            // Restart progress bar animation by re-cloning the element (animation lives on ::after)
            if (bar && bar.parentNode) {
              const clone = bar.cloneNode(true);
              bar.parentNode.replaceChild(clone, bar);
              bar = clone;
            }
          },
          autoplayPause() { root.classList.add('paused'); },
          autoplayResume() { root.classList.remove('paused'); },
        }
      });
      if (tot) tot.textContent = String(slideCount).padStart(2, '0');
    })();
    // World map (D3 + world-atlas)
    (async () => {
      const host = document.getElementById('world-map');
      if (!host || !window.d3 || !window.topojson) return;
      host.parentElement.classList.add('is-loading');
      try {
        const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json');
        if (!res.ok) throw new Error('atlas fetch failed');
        const topo = await res.json();
        const countries = topojson.feature(topo, topo.objects.countries);
        const W = 800, H = 420;
        const projection = d3.geoNaturalEarth1().fitSize([W, H], countries);
        const path = d3.geoPath(projection);
        const svg = d3.select(host).append('svg')
          .attr('viewBox', `0 0 ${W} ${H}`)
          .attr('preserveAspectRatio', 'xMidYMid meet');
        svg.append('g').selectAll('path').data(countries.features).join('path')
          .attr('d', path)
          .attr('class', d => (d.id === '036') ? 'land-au' : 'land-country');

        const pins = [
          { name: 'AUSTRALIA', coord: [134, -25], main: true },
          { name: 'NZ', coord: [174, -41], lo: 14, anchor: 'start' },
          { name: 'CHINA', coord: [104, 35], lo: -12 },
          { name: 'HONG KONG', coord: [114.17, 22.3], lo: 14, anchor: 'start' },
          { name: 'INDIA', coord: [78, 22], lo: -12 },
          { name: 'N. AMERICA', coord: [-95, 40], lo: -12 }
        ];
        const auXY = projection([134, -25]);
        pins.forEach(p => {
          if (p.main) return;
          const [x, y] = projection(p.coord);
          svg.append('line').attr('class', 'pin-line').attr('x1', auXY[0]).attr('y1', auXY[1]).attr('x2', x).attr('y2', y);
        });
        pins.forEach(p => {
          const [x, y] = projection(p.coord);
          if (p.main) {
            svg.append('circle').attr('class', 'pin-au-ring').attr('cx', x).attr('cy', y).attr('r', 8);
            svg.append('circle').attr('class', 'pin-au').attr('cx', x).attr('cy', y).attr('r', 6);
          } else {
            svg.append('circle').attr('class', 'pin-ring').attr('cx', x).attr('cy', y).attr('r', 7);
            svg.append('circle').attr('class', 'pin').attr('cx', x).attr('cy', y).attr('r', 3.5);
          }
          const tx = p.anchor === 'start' ? x + 10 : x;
          svg.append('text').attr('class', 'pin-label')
            .attr('x', tx).attr('y', y + (p.lo || -12))
            .attr('text-anchor', p.anchor || 'middle')
            .attr('dominant-baseline', p.lo > 0 ? 'middle' : 'auto')
            .text(p.name);
        });
      } catch (e) {
        host.innerHTML = '<div class="p-6 text-body-soft font-display text-[13px] uppercase tracking-[0.14em]">Map unavailable</div>';
      } finally {
        host.parentElement.classList.remove('is-loading');
      }
    })();
    // Year
    document.getElementById('yr').textContent = new Date().getFullYear();

    // FAQ toggle (supports both legacy .faq__item and new .faq2__item)
    document.querySelectorAll('.faq__item, .faq2__item').forEach(item => {
      const btn = item.querySelector('.faq__btn, .faq2__btn');
      btn?.addEventListener('click', () => {
        const open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });

    // Mobile menu
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    menuBtn?.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuBtn.querySelector('svg').innerHTML = open
        ? '<path d="M6 6l12 12M6 18L18 6" stroke="currentColor" stroke-width="1.6" fill="none"/>'
        : '<path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="1.6" fill="none"/>';
    });
    menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      menu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    }));

    // Header scrolled state (lifts pill shadow)
    const header = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
      header?.classList.toggle('is-scrolled', window.scrollY > 8);
    }, { passive: true });

    // Announcement bar dismiss (persists per session)
    const announce = document.getElementById('announce');
    const announceClose = document.getElementById('announce-close');
    if (announce && sessionStorage.getItem('announce-dismissed') === '1') {
      announce.classList.add('is-closed');
    }
    announceClose?.addEventListener('click', () => {
      announce.classList.add('is-closed');
      try { sessionStorage.setItem('announce-dismissed', '1'); } catch (e) { }
    });

    // Hero parallax (respects reduced motion)
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const media = document.getElementById('hero-media');
      window.addEventListener('scroll', () => {
        const y = Math.min(window.scrollY, 600);
        if (media) media.style.transform = `translate3d(0, ${y * 0.12}px, 0) scale(1.06)`;
      }, { passive: true });
    }

    // Fade-up on intersection
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('section').forEach(el => { el.classList.add('fade-up'); io.observe(el); });

    // Smart popover placement for .sv-tile (chooses top/bottom/left/right + horizontal align based on viewport space)
    (function () {
      const tiles = document.querySelectorAll('.sv-tiles > .sv-tile');
      if (!tiles.length) return;
      const POP_W = 380;   // matches CSS max width
      const POP_H_EST = 340; // rough estimate of popover height incl. image
      const GAP = 10;
      const EDGE = 12;     // viewport edge padding

      function place(tile) {
        const r = tile.getBoundingClientRect();
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const spaceBelow = vh - r.bottom;
        const spaceAbove = r.top;
        const spaceRight = vw - r.right;
        const spaceLeft = r.left;

        // Prefer side placement: right by default, left if tile is closer to the right edge.
        let v = (spaceRight >= spaceLeft) ? 'right' : 'left';

        // If chosen side can't fit the popover but the other side can, flip.
        if (v === 'right' && spaceRight < POP_W + GAP && spaceLeft >= POP_W + GAP) v = 'left';
        else if (v === 'left' && spaceLeft < POP_W + GAP && spaceRight >= POP_W + GAP) v = 'right';

        // If neither side fits, fall back to bottom/top.
        if ((v === 'right' && spaceRight < POP_W + GAP) || (v === 'left' && spaceLeft < POP_W + GAP)) {
          v = (spaceBelow >= spaceAbove) ? 'bottom' : 'top';
        }

        tile.setAttribute('data-pop', v);

        // Horizontal alignment only applies for top/bottom fallbacks
        if (v === 'bottom' || v === 'top') {
          const center = r.left + r.width / 2;
          const halfPop = POP_W / 2;
          let h = 'center';
          if (center - halfPop < EDGE) h = 'left';
          else if (center + halfPop > vw - EDGE) h = 'right';
          tile.setAttribute('data-pop-h', h);
        } else {
          tile.removeAttribute('data-pop-h');
        }
      }

      tiles.forEach(t => {
        const trigger = () => place(t);
        t.addEventListener('mouseenter', trigger);
        t.addEventListener('focusin', trigger);
      });
    })();
