import React from "react";

const Styles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400;1,600;1,700&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300;1,9..40,400&family=Fira+Code:wght@400;500&display=swap');

    :root {
      --bg:    #0B111A;
      --bg2:   #121B2A;
      --bg3:   #1C2940;
      --ink:   #EDF3FF;
      --ink2:  #B5C4D9;
      --ink3:  #7F96B5;
      --inkDark:#060A12;
      --red:   #FF7A59;
      --red2:  #FF5A3D;
      --redBg: rgba(255,122,89,.14);
      --redBd: rgba(255,122,89,.38);
      --bdr:   rgba(173,198,255,.16);
      --bdr2:  rgba(173,198,255,.3);
      --white: #121D2E;
      --r:     12px;
      --r2:    7px;
    }

    *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
    html { scroll-behavior:smooth; }
    body { background:var(--bg); color:var(--ink); font-family:'DM Sans',sans-serif; overflow-x:hidden; cursor:none; -webkit-font-smoothing:antialiased; }
    .site-shell { position:relative;min-height:100vh; }
    .site-content { position:relative;z-index:2; }
    .site-particles {
      position:fixed;inset:0;pointer-events:none;z-index:3;overflow:hidden;
    }
    .site-particle {
      position:absolute;
      left:calc(var(--x) * 1%);
      top:calc(var(--y) * 1%);
      width:calc(var(--s) * 1px);
      height:calc(var(--s) * 1px);
      border-radius:50%;
      opacity:calc(var(--o) * 1.08);
      background:radial-gradient(circle, rgba(255,122,89,.98) 0%, rgba(255,122,89,.34) 42%, rgba(255,122,89,0) 100%);
      transform:translate3d(0, calc(var(--sy, 0px) * var(--d)), 0);
      animation:siteParticleFloat calc(var(--t) * 1s) ease-in-out infinite;
      animation-delay:calc(var(--i) * -.55s);
      mix-blend-mode:normal;
      will-change:transform;
    }
    .site-particle.alt {
      background:radial-gradient(circle, rgba(59,164,255,.98) 0%, rgba(59,164,255,.36) 42%, rgba(59,164,255,0) 100%);
    }
    @keyframes siteParticleFloat {
      0%,100% { transform:translate3d(calc(var(--mx) * -.55px), calc(var(--sy, 0px) * var(--d)), 0) scale(1); }
      50% { transform:translate3d(calc(var(--mx) * 1.45px), calc(var(--sy, 0px) * var(--d) - 24px), 0) scale(1.22); }
    }
    ::selection { background:var(--red); color:#fff; }
    ::-webkit-scrollbar { width:3px; }
    ::-webkit-scrollbar-thumb { background:var(--red); }
    a { text-decoration:none; color:inherit; }

    /* ── CURSOR ── */
    #cd { position:fixed;z-index:9999;pointer-events:none;width:8px;height:8px;border-radius:50%;background:#8DE6FF;transform:translate(-50%,-50%);mix-blend-mode:normal;box-shadow:0 0 0 2px rgba(11,17,26,.55),0 0 14px rgba(59,164,255,.88);transition:width .2s,height .2s,background .2s,box-shadow .2s; }
    #cr { position:fixed;z-index:9998;pointer-events:none;width:32px;height:32px;border-radius:50%;border:1.5px solid rgba(141,230,255,.86);transform:translate(-50%,-50%);box-shadow:0 0 0 1px rgba(11,17,26,.38),0 0 18px rgba(59,164,255,.4);transition:width .3s cubic-bezier(.16,1,.3,1),height .3s,border-color .3s,box-shadow .3s; }
    #cd.hov { width:16px;height:16px;background:#fff;box-shadow:0 0 0 2px rgba(11,17,26,.56),0 0 16px rgba(255,255,255,.85); }
    #cr.hov { width:52px;height:52px;border-color:rgba(255,255,255,.95);box-shadow:0 0 0 1px rgba(11,17,26,.28),0 0 24px rgba(255,122,89,.5); }

    /* ══════════════════════════════════════
       PAGE LOADER
    ══════════════════════════════════════ */
    .loader {
      position:fixed;inset:0;z-index:9000;
      background:var(--inkDark);
      display:flex;flex-direction:column;align-items:center;justify-content:center;
      gap:28px;
      transition:opacity .6s cubic-bezier(.16,1,.3,1), transform .6s cubic-bezier(.16,1,.3,1);
    }
    .loader.out { opacity:0;transform:scale(1.04);pointer-events:none; }
    .loader.gone { display:none; }
    .loader-logo {
      font-family:'Playfair Display',serif;font-weight:800;font-size:52px;
      letter-spacing:-.04em;color:var(--ink);
      animation:loaderPop .6s cubic-bezier(.16,1,.3,1) both;
    }
    .loader-logo em { color:var(--red);font-style:normal; }
    @keyframes loaderPop { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
    .loader-bar-wrap {
      width:160px;height:2px;background:rgba(234,242,255,.18);border-radius:2px;overflow:hidden;
      animation:loaderPop .6s .1s cubic-bezier(.16,1,.3,1) both;
    }
    .loader-bar {
      height:100%;background:var(--red);border-radius:2px;
      animation:loaderFill 1.4s .2s cubic-bezier(.4,0,.2,1) both;
    }
    @keyframes loaderFill { from{width:0%} to{width:100%} }
    .loader-label {
      font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.22em;
      text-transform:uppercase;color:rgba(234,242,255,.44);
      animation:loaderPop .6s .15s cubic-bezier(.16,1,.3,1) both;
    }

    /* ── NAV ── */
    .nav {
      position:fixed;top:0;left:0;right:0;z-index:400;height:60px;
      display:flex;align-items:center;justify-content:space-between;
      padding:0 56px;
      background:rgba(5,10,20,.75);backdrop-filter:blur(16px);
      border-bottom:1px solid transparent;transition:border-color .4s;
    }
    .nav.sc { border-bottom-color:var(--bdr); }
    .nav-logo { font-family:'Playfair Display',serif;font-size:18px;font-weight:700;letter-spacing:-.02em;color:var(--ink); }
    .nav-logo span { color:var(--red); }
    .nav-links { display:flex;gap:2px; }
    .nav-a { font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.05em;text-transform:uppercase;color:var(--ink3);padding:7px 13px;border-radius:40px;transition:all .2s;cursor:none; }
    .nav-a:hover, .nav-a.act { color:var(--ink);background:var(--bg3); }
    /* nav right group */
    .nav-right { display:flex;align-items:center;gap:8px; }
    .nav-resume {
      font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;
      color:var(--red);background:var(--redBg);border:1.5px solid var(--redBd);
      padding:8px 16px;border-radius:40px;transition:all .3s;cursor:none;
      display:inline-flex;align-items:center;gap:6px;
    }
    .nav-resume:hover { background:var(--red);color:#fff;border-color:var(--red); }
    .nav-hire { font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.08em;text-transform:uppercase;background:var(--inkDark);color:var(--ink);padding:9px 20px;border-radius:40px;transition:all .3s;cursor:none;position:relative;overflow:hidden; }
    .nav-hire::before { content:'';position:absolute;inset:0;background:var(--red);transform:translateX(-101%);transition:transform .35s cubic-bezier(.16,1,.3,1); }
    .nav-hire:hover::before { transform:translateX(0); }
    .nav-hire span { position:relative;z-index:1; }

    /* hamburger button — hidden on desktop */
    .nav-burger {
      display:none;flex-direction:column;justify-content:center;gap:5px;
      width:36px;height:36px;background:none;border:1.5px solid var(--bdr);
      border-radius:var(--r2);padding:7px;cursor:pointer;transition:border-color .25s;
    }
    .nav-burger:hover { border-color:var(--bdr2); }
    .nav-burger span {
      display:block;width:100%;height:1.5px;background:var(--ink);
      border-radius:2px;transition:all .35s cubic-bezier(.16,1,.3,1);transform-origin:center;
    }
    .nav-burger.open span:nth-child(1) { transform:translateY(6.5px) rotate(45deg); }
    .nav-burger.open span:nth-child(2) { opacity:0;transform:scaleX(0); }
    .nav-burger.open span:nth-child(3) { transform:translateY(-6.5px) rotate(-45deg); }

    /* mobile drawer */
    .nav-drawer {
      position:fixed;top:60px;left:0;right:0;z-index:399;
      background:rgba(5,10,20,.94);backdrop-filter:blur(20px);
      border-bottom:1px solid var(--bdr);
      display:flex;flex-direction:column;gap:2px;padding:16px 20px 20px;
      transform:translateY(-110%);opacity:0;
      transition:transform .4s cubic-bezier(.16,1,.3,1),opacity .3s;
      pointer-events:none;
    }
    .nav-drawer.open { transform:translateY(0);opacity:1;pointer-events:all; }
    .nav-drawer-a {
      font-family:'Fira Code',monospace;font-size:13px;letter-spacing:.07em;text-transform:uppercase;
      color:var(--ink2);padding:13px 16px;border-radius:var(--r);
      transition:all .2s;border:1px solid transparent;
    }
    .nav-drawer-a:hover,.nav-drawer-a.act { color:var(--ink);background:var(--bg3);border-color:var(--bdr); }
    .nav-drawer-resume {
      margin-top:4px;text-align:center;
      font-family:'Fira Code',monospace;font-size:12px;letter-spacing:.1em;text-transform:uppercase;
      color:var(--red);background:var(--redBg);border:1.5px solid var(--redBd);
      padding:13px;border-radius:var(--r);transition:all .3s;
      display:flex;align-items:center;justify-content:center;gap:8px;
    }
    .nav-drawer-resume:hover { background:var(--red);color:#fff; }
    .nav-drawer-hire {
      margin-top:4px;text-align:center;
      font-family:'Fira Code',monospace;font-size:12px;letter-spacing:.1em;text-transform:uppercase;
      background:var(--inkDark);color:var(--ink);padding:13px;border-radius:var(--r);
      transition:background .3s;
    }
    .nav-drawer-hire:hover { background:var(--red); }

    /* ── resume download button (hero) ── */
    .btn-resume {
      font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.09em;text-transform:uppercase;
      color:var(--red);background:var(--redBg);border:1.5px solid var(--redBd);
      padding:13px 24px;border-radius:40px;cursor:none;transition:all .3s;
      display:inline-flex;align-items:center;gap:8px;
    }
    .btn-resume:hover { background:var(--red);color:#fff;border-color:var(--red);transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,122,89,.25); }
    .btn-resume-icon { font-size:13px;transition:transform .3s; }
    .btn-resume:hover .btn-resume-icon { transform:translateY(2px); }

    /* ── touch devices: show cursor ── */
    @media (hover:none) {
      body { cursor:auto; }
      #cd, #cr { display:none; }
      .nav-a,.nav-hire,.nav-resume,.btn-primary,.btn-outline,.btn-resume,.nav-burger,.sk-tab,.sk-chip,.exp-btn,.pacc-trigger,.aacc-trigger,.cf,.show-more,.footer-up,.plink,.cc-cert-link,.copy-btn,.h-badge,.cred-card,.cacc-trigger { cursor:pointer; }
    }

    .scroll-progress {
      position:fixed;top:0;left:0;right:0;height:3px;z-index:500;
      transform-origin:left center;
      background:linear-gradient(90deg,#FF7A59 0%,#FF5A3D 48%,#3BA4FF 100%);
      box-shadow:0 0 22px rgba(255,122,89,.38);
      pointer-events:none;
    }

    /* ════════════════ HERO ════════════════ */
    .hero {
      height:100vh;max-height:100vh;display:flex;flex-direction:column;
      align-items:center;justify-content:center;
      text-align:center;padding:60px 56px 40px;
      position:relative;overflow:hidden;gap:0;isolation:isolate;
      background:
        radial-gradient(circle at 16% 20%, rgba(255,122,89,.2), transparent 38%),
        radial-gradient(circle at 84% 76%, rgba(59,164,255,.16), transparent 36%),
        linear-gradient(180deg,#0B111A 0%,#111A2B 100%);
    }
    .hero-grid {
      position:absolute;inset:0;pointer-events:none;
      background-image:
        linear-gradient(rgba(176,199,228,.11) 1px,transparent 1px),
        linear-gradient(90deg,rgba(176,199,228,.11) 1px,transparent 1px);
      background-size:60px 60px;
      transform:translateY(calc(var(--sy, 0px) * .12));
      opacity:calc(var(--o) * 1.06);
      z-index:0;
      mix-blend-mode:normal;
      position:absolute;border-radius:50%;pointer-events:none;
      background:radial-gradient(circle,rgba(59,164,255,.18),transparent 65%);
      z-index:0;
    }
    .hero-particles {
    }
    .hero-particle {
      position:absolute;
      left:calc(var(--x) * 1%);
      top:calc(var(--y) * 1%);
      width:calc(var(--s) * 1px);
      height:calc(var(--s) * 1px);
      border-radius:50%;
      opacity:var(--o);
      background:radial-gradient(circle, rgba(255,255,255,.99) 0%, rgba(255,255,255,.42) 46%, rgba(255,255,255,0) 100%);
      filter:drop-shadow(0 0 16px rgba(255,122,89,.36));
      mix-blend-mode:screen;
      transform:translate3d(calc(var(--dx) * -.35px), calc(var(--sy, 0px) * var(--d)), 0);
      animation:particleFloat calc(var(--t) * 1s) ease-in-out infinite;
      animation-delay:calc(var(--i) * -.65s);
      will-change:transform;
    }
    .hero-particle.alt {
      background:radial-gradient(circle, rgba(59,164,255,.98) 0%, rgba(59,164,255,.42) 44%, rgba(59,164,255,0) 100%);
      filter:drop-shadow(0 0 18px rgba(59,164,255,.34));
    }
    @keyframes particleFloat {
      0%,100% { transform:translate3d(calc(var(--dx) * -.5px), calc(var(--sy, 0px) * var(--d)), 0) scale(1); }
      50% { transform:translate3d(calc(var(--dx) * 1.5px), calc(var(--sy, 0px) * var(--d) - 32px), 0) scale(1.27); }
    }
    @keyframes orb { 0%,100%{transform:translate(0,0)} 50%{transform:translate(16px,-18px)} }

    /* availability badge */
    .avail-badge {
      display:inline-flex;align-items:center;gap:8px;
      font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;
      color:var(--ink2);background:var(--white);border:1px solid var(--bdr);
      padding:7px 16px;border-radius:40px;margin-bottom:20px;
      position:relative;z-index:1;
      animation:fadeD .6s cubic-bezier(.16,1,.3,1) both;
      box-shadow:0 2px 8px rgba(26,24,21,.06);
    }
    .av-dot { width:7px;height:7px;border-radius:50%;background:#22c55e;flex-shrink:0;animation:pulse 2.5s ease-in-out infinite; }
    @keyframes pulse { 0%,100%{opacity:1;box-shadow:0 0 0 0 rgba(34,197,94,.45)} 50%{opacity:.7;box-shadow:0 0 0 5px rgba(34,197,94,0)} }
    @keyframes fadeD { from{opacity:0;transform:translateY(-14px)} to{opacity:1;transform:none} }
    @keyframes fadeU { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }

    /* GLITCH — full name, more intense */
    .glitch-wrap { position:relative;z-index:1;display:inline-block;animation:fadeU .7s .1s cubic-bezier(.16,1,.3,1) both;margin-bottom:4px; }
    .g-line { display:block;position:relative; }
    .g-base {
      font-family:'Playfair Display',serif;font-weight:800;
      font-size:clamp(44px,7vw,100px);line-height:.92;letter-spacing:-.035em;
      color:var(--ink);display:block;
    }
    .g-base.red { color:var(--red); }
    .g-layer {
      position:absolute;inset:0;font-family:'Playfair Display',serif;font-weight:800;
      font-size:clamp(44px,7vw,100px);line-height:.92;letter-spacing:-.035em;
      display:block;pointer-events:none;
    }
    .g-r { color:#d03030;animation:gR 3s steps(1) infinite;mix-blend-mode:multiply; }
    .g-b { color:#3050d0;animation:gB 3s steps(1) infinite;mix-blend-mode:multiply; }
    .g-r2 { color:#d03030;animation:gR 3s .15s steps(1) infinite;mix-blend-mode:multiply; }
    .g-b2 { color:#3050d0;animation:gB 3s .15s steps(1) infinite;mix-blend-mode:multiply; }
    @keyframes gR {
      0%,78%,100%{clip-path:none;transform:none;opacity:0}
      79%{clip-path:inset(8% 0 80% 0);transform:translate(-4px,0);opacity:.8}
      80%{clip-path:inset(52% 0 22% 0);transform:translate(4px,0);opacity:.8}
      81%{clip-path:inset(28% 0 55% 0);transform:translate(-3px,1px);opacity:.8}
      82%{clip-path:inset(70% 0 10% 0);transform:translate(5px,0);opacity:.8}
      83%{clip-path:inset(40% 0 38% 0);transform:translate(-2px,0);opacity:.8}
      84%{clip-path:none;transform:translate(-1px,0);opacity:.35}
    }
    @keyframes gB {
      0%,78%,100%{clip-path:none;transform:none;opacity:0}
      79%{clip-path:inset(65% 0 15% 0);transform:translate(5px,0);opacity:.8}
      80%{clip-path:inset(18% 0 68% 0);transform:translate(-4px,0);opacity:.8}
      81%{clip-path:inset(42% 0 38% 0);transform:translate(3px,-1px);opacity:.8}
      82%{clip-path:inset(10% 0 75% 0);transform:translate(-5px,0);opacity:.8}
      83%{clip-path:inset(55% 0 28% 0);transform:translate(2px,0);opacity:.8}
      84%{clip-path:none;transform:translate(1px,0);opacity:.35}
    }

    /* hero text */
    .hero-role {
      font-family:'DM Sans',sans-serif;font-style:italic;font-weight:300;
      font-size:clamp(14px,1.5vw,19px);color:var(--ink2);
      margin-top:16px;letter-spacing:.01em;
      animation:fadeU .7s .22s cubic-bezier(.16,1,.3,1) both;
      position:relative;z-index:1;
    }
    .hero-desc {
      font-size:15px;color:var(--ink2);line-height:1.7;font-weight:300;
      max-width:580px;margin:14px auto 0;
      animation:fadeU .7s .32s cubic-bezier(.16,1,.3,1) both;
      position:relative;z-index:1;
    }

    /* ── HERO SOCIAL BADGES ── */
    .hero-badges {
      display:flex;gap:10px;flex-wrap:wrap;justify-content:center;
      margin-top:20px;
      animation:fadeU .7s .42s cubic-bezier(.16,1,.3,1) both;
      position:relative;z-index:1;
    }
    .h-badge {
      display:inline-flex;align-items:center;gap:8px;
      font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.07em;
      padding:9px 18px;border-radius:40px;
      border:1.5px solid var(--bdr2);background:var(--white);
      color:var(--ink2);cursor:none;transition:all .3s;
      box-shadow:0 2px 8px rgba(26,24,21,.06);
    }
    .h-badge:hover { border-color:var(--red);color:var(--ink);transform:translateY(-2px);box-shadow:0 6px 20px rgba(255,122,89,.14); }
    .h-badge-icon { width:14px;height:14px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0; }
    .h-badge-icon svg { width:100%;height:100%;display:block; }

    /* ── CTA BUTTONS ── */
    .hero-actions {
      display:flex;gap:10px;flex-wrap:wrap;justify-content:center;
      margin-top:16px;
      animation:fadeU .7s .5s cubic-bezier(.16,1,.3,1) both;
      position:relative;z-index:1;
    }
    .btn-primary {
      font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.09em;text-transform:uppercase;
      background:var(--red);color:#fff;padding:13px 28px;border-radius:40px;
      transition:all .3s;cursor:none;border:none;
    }
    .btn-primary:hover { background:var(--red2);transform:translateY(-2px);box-shadow:0 8px 24px rgba(255,122,89,.28); }
    .btn-outline {
      font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.09em;text-transform:uppercase;
      background:transparent;color:var(--ink2);padding:13px 24px;border-radius:40px;
      border:1.5px solid var(--bdr2);cursor:none;transition:all .3s;
    }
    .btn-outline:hover { border-color:var(--ink);color:var(--ink);transform:translateY(-2px); }

    /* hero stats */
    .hero-stats {
      display:flex;border-top:1px solid var(--bdr);margin-top:28px;width:100%;
      justify-content:center;
      animation:fadeU .7s .56s cubic-bezier(.16,1,.3,1) both;
      position:relative;z-index:1;
    }
    .hs { padding:20px 40px;border-right:1px solid var(--bdr);text-align:center; }
    .hs:last-child { border-right:none; }
    .hs-v { font-family:'Playfair Display',serif;font-size:34px;font-weight:700;color:var(--red);letter-spacing:-.03em;line-height:1; }
    .hs-l { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:var(--ink3);margin-top:5px; }

    /* ── MARQUEE ── */
    .mq-sec { border-top:1px solid var(--bdr);border-bottom:1px solid var(--bdr);background:rgba(6,10,18,.84);overflow:hidden;padding:14px 0; }
    .mq-track { display:flex;width:max-content;animation:mq 30s linear infinite; }
    @keyframes mq { from{transform:translateX(0)} to{transform:translateX(-50%)} }
    .mq-item { display:flex;align-items:center;gap:16px;padding:0 24px;white-space:nowrap;font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:rgba(245,242,236,.35); }
    .mq-dot { color:var(--red);font-size:12px; }
    /* hero content constrained width */
    .hero-inner-cap { max-width:min(1320px,92vw);margin:0 auto;width:100%;display:flex;flex-direction:column;align-items:center;position:relative;z-index:1;transform:translateY(calc(var(--sy, 0px) * -.055));transition:transform .12s linear; }
    .hero-inner-cap > * { position:relative;z-index:1; }

    /* ═══════════ SECTION BASE ═══════════ */
    .sec,.contact-sec {
      position:relative;overflow:hidden;isolation:isolate;
      --secShift:0px;--secGlow:0;
    }
    .sec::before,.contact-sec::before {
      content:'';position:absolute;left:-8%;right:-8%;top:-22%;height:72%;
      background:radial-gradient(70% 90% at 50% 0%, rgba(255,122,89,.2), rgba(59,164,255,.12) 42%, transparent 78%);
      opacity:calc(var(--secGlow,0) * .9);
      transform:translateY(calc(var(--secShift,0px) * -.45));
      transition:opacity .2s linear,transform .2s linear;
      pointer-events:none;z-index:0;
    }
    .sec { padding:96px 56px;scroll-margin-top:60px; }
    .sec+.sec { border-top:1px solid var(--bdr); }
    /* universal content cap — keeps content centered on wide screens */
    .sec-inner,.hero-inner,.mq-inner,.contact-inner-wrap,.footer-inner {
      max-width:min(1600px,94vw);margin:0 auto;width:100%;
      position:relative;z-index:1;
      transform:translateY(var(--secShift,0px));
      transition:transform .2s linear;
    }
    .sec-pill { display:inline-flex;align-items:center;gap:7px;font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--red);background:var(--redBg);border:1px solid var(--redBd);padding:5px 13px;border-radius:40px;margin-bottom:18px; }
    .sec-head { text-align:center;display:flex;flex-direction:column;align-items:center;transform:translateY(calc(var(--secShift,0px) * .55));transition:transform .2s linear; }
    .sec-h { font-family:'Playfair Display',serif;font-size:clamp(38px,5.5vw,68px);font-weight:700;letter-spacing:-.03em;line-height:.95;color:var(--ink);margin-bottom:14px; }
    .sec-h em { font-style:italic;color:var(--red); }
    .sec-sub { font-size:15px;color:var(--ink2);line-height:1.8;font-weight:300;max-width:500px;margin-bottom:48px;text-align:center; }

    /* ═══════════ ABOUT ═══════════ */
    .about-top-cols {
      display:block;
      max-width:min(1220px,100%);
      margin:0 auto 16px;
    }
    .about-copy-col { display:flex;flex-direction:column;gap:12px; }
    .about-body-wrap {
      margin-bottom:0;
      padding-inline:clamp(0px,0.3vw,4px);
    }
    .about-body {
      font-size:16.5px;
      color:var(--ink2);
      line-height:1.9;
      font-weight:300;
      text-align:center;
      max-width:1180px;
      margin:0 auto;
    }
    .about-body strong { color:var(--ink);font-weight:600; }
    .about-body .red { color:var(--red);font-weight:500; }
    /* highlights — full width single column below */
    .hl-list-full { display:flex;flex-direction:column; }
    .hl-row { display:flex;gap:16px;align-items:flex-start;padding:15px 0;border-bottom:1px solid var(--bdr);font-size:13.5px;color:var(--ink2);line-height:1.6;font-weight:400;transition:all .25s;cursor:default; }
    .hl-row:hover { color:var(--ink);padding-left:6px; }
    .hl-n { font-family:'Playfair Display',serif;font-size:22px;font-weight:700;color:var(--bg3);line-height:1;flex-shrink:0;transition:color .25s;min-width:26px; }
    .hl-row:hover .hl-n { color:var(--red); }

    /* ═══════════ SKILLS ═══════════ */
    .sk-tabs { display:flex;gap:6px;flex-wrap:wrap;margin-bottom:32px;justify-content:center; }
    .sk-tab { font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;padding:9px 18px;border-radius:var(--r2);border:1.5px solid var(--bdr);background:transparent;color:var(--ink3);cursor:none;transition:all .22s; }
    .sk-tab.on { background:var(--red);color:#fff;border-color:var(--red); }
    .sk-tab:hover:not(.on) { border-color:var(--bdr2);color:var(--ink2); }
    .sk-grid { display:grid;grid-template-columns:repeat(4,1fr);gap:9px; }
    .sk-chip { background:var(--white);border:1.5px solid var(--bdr);border-radius:var(--r2);padding:13px 16px;text-align:center;font-size:13.5px;font-weight:400;color:var(--ink2);transition:all .3s;cursor:none;position:relative;overflow:hidden; }
    .sk-chip::before { content:'';position:absolute;inset:0;background:var(--red);transform:scaleX(0);transform-origin:left;transition:transform .32s cubic-bezier(.16,1,.3,1); }
    .sk-chip span { position:relative;z-index:1;transition:color .32s; }
    .sk-chip:hover { border-color:var(--red);transform:translateY(-2px);box-shadow:0 5px 16px rgba(255,122,89,.18); }
    .sk-chip:hover::before { transform:scaleX(1); }
    .sk-chip:hover span { color:#fff; }

    /* ═══════════ EXPERIENCE ═══════════ */
    .exp-items { display:flex;flex-direction:column; }
    .exp-item { border-bottom:1px solid var(--bdr); }
    .exp-btn { width:100%;display:flex;align-items:center;justify-content:space-between;padding:26px 0;background:none;border:none;text-align:left;cursor:none;transition:all .28s; }
    .exp-btn:hover { padding-left:8px; }
    .exp-btn:hover .exp-role-t { color:var(--red); }
    .exp-period { font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.07em;color:var(--ink3);margin-bottom:6px; }
    .exp-role-t { font-family:'Playfair Display',serif;font-size:22px;font-weight:700;letter-spacing:-.02em;color:var(--ink);transition:color .28s;line-height:1.1; }
    .exp-co { font-size:13px;color:var(--red);font-weight:500;margin-top:4px;opacity:.9; }
    .exp-toggle { width:30px;height:30px;border-radius:50%;border:1.5px solid var(--bdr);display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--ink3);transition:all .4s cubic-bezier(.16,1,.3,1);flex-shrink:0; }
    .exp-item.open .exp-toggle { transform:rotate(45deg);background:var(--red);border-color:var(--red);color:#fff; }
    .exp-body { overflow:hidden;max-height:0;transition:max-height .55s cubic-bezier(.16,1,.3,1),padding-bottom .4s;padding-bottom:0; }
    .exp-item.open .exp-body { max-height:300px;padding-bottom:24px; }
    .exp-pts { display:flex;flex-direction:column;gap:11px; }
    .exp-pt { display:flex;gap:14px;font-size:14px;color:var(--ink2);line-height:1.75;font-weight:300; }
    .ep-dot { width:5px;height:5px;border-radius:50%;background:var(--red);flex-shrink:0;margin-top:9px; }

    /* ════════════════════════════════
       PROJECTS  — Magazine hierarchy
       ════════════════════════════════
       Featured (full width, horizontal)
       2-col middle row
       3-col grid for expanded
    ════════════════════════════════ */

    /* --- Featured card (1st project) --- */
    .proj-featured {
      display:grid;grid-template-columns:1fr 1fr;
      background:var(--white);border:1.5px solid var(--bdr);
      border-radius:var(--r);overflow:hidden;margin-bottom:16px;
      transition:all .4s cubic-bezier(.16,1,.3,1);cursor:none;
    }
    .proj-featured:hover { border-color:var(--red);box-shadow:0 16px 48px rgba(26,24,21,.1);transform:translateY(-4px); }
    .pf-left { padding:40px;display:flex;flex-direction:column;justify-content:space-between;border-right:1.5px solid var(--bdr); }
    .pf-right { background:var(--bg);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:40px; }
    .pf-number { font-family:'Playfair Display',serif;font-size:96px;font-weight:800;color:var(--bg3);line-height:1;letter-spacing:-.04em;transition:color .3s; }
    .proj-featured:hover .pf-number { color:var(--redBd); }
    .pf-tag { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink3);border:1px solid var(--bdr);padding:5px 10px;border-radius:4px;margin-bottom:16px; }
    .pf-title { font-family:'Playfair Display',serif;font-size:28px;font-weight:700;letter-spacing:-.025em;color:var(--ink);line-height:1.15;margin-bottom:14px;transition:color .3s; }
    .proj-featured:hover .pf-title { color:var(--red); }
    .pf-desc { font-size:14px;color:var(--ink2);line-height:1.75;font-weight:300;margin-bottom:20px; }
    .pf-pills { display:flex;flex-wrap:wrap;gap:6px;margin-bottom:24px; }
    .proj-pill { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.04em;color:var(--ink3);background:var(--bg2);padding:4px 10px;border-radius:4px;border:1px solid var(--bdr); }
    .pf-links { display:flex;gap:10px; }
    .pf-em { font-size:52px;margin-bottom:20px;display:block; }
    .pf-accent-bar { width:48px;height:3px;background:var(--red);border-radius:2px;margin-bottom:16px; }
    .pf-right-title { font-family:'Playfair Display',serif;font-size:16px;font-weight:600;color:var(--ink);margin-bottom:8px; }
    .pf-right-text { font-size:13px;color:var(--ink3);line-height:1.65; }

    /* --- Mid row (2 cards) --- */
    .proj-mid-row { display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px; }
    .proj-mid-card {
      background:var(--white);border:1.5px solid var(--bdr);border-radius:var(--r);
      overflow:hidden;display:flex;flex-direction:column;
      transition:all .4s cubic-bezier(.16,1,.3,1);cursor:none;
    }
    .proj-mid-card:hover { border-color:var(--red);box-shadow:0 12px 36px rgba(26,24,21,.09);transform:translateY(-4px); }
    .pm-bar { height:3px; }
    .pm-body { padding:26px;flex:1;display:flex;flex-direction:column; }
    .pm-head { display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:16px; }
    .pm-em { font-size:26px; }
    .pm-cat { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);border:1px solid var(--bdr);padding:4px 9px;border-radius:4px; }
    .pm-title { font-family:'Playfair Display',serif;font-size:20px;font-weight:700;letter-spacing:-.02em;color:var(--ink);margin-bottom:10px;line-height:1.2;transition:color .3s; }
    .proj-mid-card:hover .pm-title { color:var(--red); }
    .pm-desc { font-size:13px;color:var(--ink2);line-height:1.7;font-weight:300;margin-bottom:16px;flex:1; }
    .pm-pills { display:flex;flex-wrap:wrap;gap:5px;margin-bottom:16px; }
    .pm-foot { border-top:1px solid var(--bdr);padding-top:16px;display:flex;gap:9px;margin-top:auto; }

    /* --- Small grid (for expanded) --- */
    .proj-small-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:16px; }
    .proj-small-card {
      background:var(--white);border:1.5px solid var(--bdr);border-radius:var(--r);
      padding:22px;display:flex;flex-direction:column;
      transition:all .4s cubic-bezier(.16,1,.3,1);cursor:none;
    }
    .proj-small-card:hover { border-color:var(--red);transform:translateY(-4px);box-shadow:0 10px 28px rgba(26,24,21,.08); }
    .ps-em { font-size:24px;margin-bottom:12px; }
    .ps-cat { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.1em;text-transform:uppercase;color:var(--red);opacity:.7;margin-bottom:8px; }
    .ps-title { font-family:'Playfair Display',serif;font-size:17px;font-weight:700;letter-spacing:-.02em;color:var(--ink);margin-bottom:8px;line-height:1.2;transition:color .3s; }
    .proj-small-card:hover .ps-title { color:var(--red); }
    .ps-desc { font-size:12.5px;color:var(--ink3);line-height:1.65;font-weight:300;flex:1; }
    .ps-foot { margin-top:16px;padding-top:14px;border-top:1px solid var(--bdr);display:flex;gap:8px; }

    /* shared project link buttons */
    .plink { display:inline-flex;align-items:center;gap:5px;font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.07em;text-transform:uppercase;padding:8px 14px;border-radius:var(--r2);transition:all .25s;cursor:none; }
    .plink-ico { width:13px;height:13px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0; }
    .plink-ico svg { width:100%;height:100%;display:block; }
    .plink.pri { background:var(--redBg);border:1.5px solid var(--redBd);color:var(--red); }
    .plink.pri:hover { background:var(--red);color:#fff;border-color:var(--red); }
    .plink.sec { border:1.5px solid var(--bdr);color:var(--ink3); }
    .plink.sec:hover { border-color:var(--bdr2);color:var(--ink); }

    /* show more */
    .show-more-wrap { text-align:center;margin-top:28px; }
    .show-more { display:inline-flex;align-items:center;gap:9px;font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--red);background:var(--redBg);border:1.5px solid var(--redBd);padding:11px 26px;border-radius:40px;cursor:none;transition:all .3s; }
    .show-more:hover { background:var(--red);color:#fff;border-color:var(--red); }
    .sm-icon { font-size:13px;transition:transform .4s cubic-bezier(.16,1,.3,1); }
    .show-more.open .sm-icon { transform:rotate(180deg); }
    .expandable { overflow:hidden;transition:max-height .7s cubic-bezier(.16,1,.3,1),opacity .5s; }
    .expandable.closed { max-height:0;opacity:0; }
    .expandable.open { opacity:1; }

    /* ═══════════ PROJECTS ACCORDION ═══════════ */
    .proj-acc { display:flex;flex-direction:column;gap:0; }
    .pacc-item { border-bottom:1px solid var(--bdr);overflow:hidden; }
    .pacc-trigger {
      width:100%;display:flex;align-items:center;gap:24px;
      padding:24px 0;background:none;border:none;text-align:left;cursor:none;
      transition:all .28s;
    }
    .pacc-trigger:hover { padding-left:8px; }
    .pacc-trigger:hover .pacc-title { color:var(--red); }
    .pacc-num { font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:var(--bg3);line-height:1;flex-shrink:0;width:48px;transition:color .28s; }
    .pacc-item.open .pacc-num { color:var(--red); }
    .pacc-mid { flex:1; }
    .pacc-cat { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink3);margin-bottom:5px; }
    .pacc-title { font-family:'Playfair Display',serif;font-size:22px;font-weight:700;letter-spacing:-.02em;color:var(--ink);transition:color .28s;line-height:1.1; }
    .pacc-short { font-size:13px;color:var(--ink3);margin-top:4px; }
    .pacc-right { display:flex;align-items:center;gap:10px;flex-shrink:0; }
    .pacc-em { width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;color:var(--ink2); }
    .pacc-em svg { width:100%;height:100%;display:block; }
    .pacc-icon { width:28px;height:28px;border-radius:50%;border:1.5px solid var(--bdr);display:flex;align-items:center;justify-content:center;color:var(--ink3);transition:all .4s cubic-bezier(.16,1,.3,1);flex-shrink:0; }
    .pacc-icon svg { width:12px;height:12px;display:block; }
    .pacc-item.open .pacc-icon { transform:rotate(180deg);background:var(--red);border-color:var(--red);color:#fff; }
    .pacc-body { overflow:hidden;max-height:0;transition:max-height .55s cubic-bezier(.16,1,.3,1),padding .4s;padding-bottom:0; }
    .pacc-item.open .pacc-body { max-height:400px;padding-bottom:28px; }
    .pacc-inner { padding-left:72px;display:grid;grid-template-columns:1fr auto;gap:32px;align-items:start; }
    .pacc-desc { font-size:14.5px;color:var(--ink2);line-height:1.8;font-weight:300;margin-bottom:16px; }
    .pacc-detail { font-size:13.5px;color:var(--ink3);line-height:1.75;font-weight:300;margin-bottom:18px; }
    .pacc-pills { display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px; }
    .pacc-links { display:flex;gap:9px; }
    .pacc-aside { text-align:right; }
    .pacc-aside-em { font-size:52px;display:block;margin-bottom:8px; }
    .pacc-aside-bar { width:100%;height:3px;border-radius:2px;margin-bottom:0; }

    /* projects footer CTA */
    .explore-projects { display:flex;justify-content:center;margin-top:30px; }
    .explore-projects-btn {
      display:inline-flex;align-items:center;gap:8px;
      font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;
      color:var(--red);background:var(--redBg);border:1.5px solid var(--redBd);
      padding:12px 24px;border-radius:40px;cursor:none;transition:all .28s;
    }
    .explore-projects-btn:hover {
      background:var(--red);color:#fff;border-color:var(--red);transform:translateY(-2px);
    }

    /* ═══════════ ACHIEVEMENT ACCORDION ═══════════ */
    .ach-acc { display:flex;flex-direction:column;gap:0; }
    .aacc-item { border-bottom:1px solid var(--bdr);overflow:hidden; }
    .aacc-trigger {
      width:100%;display:flex;align-items:center;gap:20px;
      padding:20px 0;background:none;border:none;text-align:left;cursor:none;transition:all .28s;
    }
    .aacc-trigger:hover { padding-left:8px; }
    .aacc-trigger:hover .aacc-title { color:var(--red); }
    .aacc-n { font-family:'Playfair Display',serif;font-size:28px;font-weight:700;color:var(--bg3);line-height:1;flex-shrink:0;width:44px;transition:color .28s; }
    .aacc-item.open .aacc-n { color:var(--red); }
    .aacc-title { font-size:14.5px;font-weight:500;color:var(--ink);transition:color .28s;flex:1;line-height:1.55; }
    .aacc-icon { width:26px;height:26px;border-radius:50%;border:1.5px solid var(--bdr);display:flex;align-items:center;justify-content:center;font-size:12px;color:var(--ink3);transition:all .4s cubic-bezier(.16,1,.3,1);flex-shrink:0; }
    .aacc-item.open .aacc-icon { transform:rotate(45deg);background:var(--red);border-color:var(--red);color:#fff; }
    .aacc-body { overflow:hidden;max-height:0;transition:max-height .5s cubic-bezier(.16,1,.3,1),padding .4s;padding-bottom:0; }
    .aacc-item.open .aacc-body { max-height:200px;padding-bottom:20px; }
    .aacc-content { padding-left:64px;font-size:13.5px;color:var(--ink3);line-height:1.75;font-weight:300; }


    /* ═══════════ CREDENTIALS FILTER BAR ═══════════ */
    .cred-bar { display:flex;align-items:center;gap:9px;flex-wrap:wrap;margin-bottom:24px; }
    .cred-fs { display:flex;gap:6px;flex-wrap:wrap;flex:1; }
    .cf { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.09em;text-transform:uppercase;padding:7px 13px;border-radius:var(--r2);border:1.5px solid var(--bdr);background:transparent;color:var(--ink3);cursor:none;transition:all .2s; }
    .cf.on { background:var(--inkDark);color:var(--ink);border-color:var(--inkDark); }
    .cf:hover:not(.on) { border-color:var(--bdr2);color:var(--ink2); }
    .cfs { background:var(--white);border:1.5px solid var(--bdr);color:var(--ink);font-family:'DM Sans',sans-serif;font-size:13px;padding:8px 14px;border-radius:var(--r2);outline:none;width:190px;transition:border-color .25s; }
    .cfs:focus { border-color:var(--red); }
    .cfs::placeholder { color:var(--ink3); }

    /* ═══════════ CREDENTIALS CARD GRID ═══════════ */
    .cred-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:14px; }
    .cred-card {
      background:var(--white);border:1.5px solid var(--bdr);border-radius:var(--r);
      cursor:none;transition:all .35s cubic-bezier(.16,1,.3,1);
      position:relative;overflow:hidden;
    }
    .cred-card::before { content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--red);transform:scaleX(0);transform-origin:left;transition:transform .35s cubic-bezier(.16,1,.3,1); }
    .cred-card:hover { border-color:rgba(255,122,89,.3);box-shadow:0 8px 28px rgba(11,18,32,.11); }
    .cred-card:hover::before { transform:scaleX(1); }
    .cred-card.active { border-color:var(--red);box-shadow:0 12px 40px rgba(255,122,89,.18);grid-column:span 3; }
    .cred-card.active::before { transform:scaleX(1); }
    /* collapsed view */
    .cc-head { padding:20px 22px; }
    .cc-row1 { display:flex;justify-content:space-between;align-items:center;margin-bottom:8px; }
    .cc-type { font-family:'Fira Code',monospace;font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:var(--red);background:var(--redBg);border:1px solid var(--redBd);padding:3px 8px;border-radius:4px; }
    .cc-yr { font-family:'Fira Code',monospace;font-size:9px;color:var(--ink3); }
    .cc-name { font-size:13.5px;font-weight:500;color:var(--ink);line-height:1.45;margin-bottom:8px; }
    .cc-tap { font-family:'Fira Code',monospace;font-size:10px;color:var(--ink3);display:flex;align-items:center;gap:5px; }
    .cc-tap-icon { font-size:12px;transition:transform .4s cubic-bezier(.16,1,.3,1); }
    .cred-card.active .cc-tap-icon { transform:rotate(45deg); }
    /* expanded view */
    .cc-expand { overflow:hidden;max-height:0;transition:max-height .55s cubic-bezier(.16,1,.3,1); }
    .cred-card.active .cc-expand { max-height:600px; }
    .cc-exp-inner { padding:0 22px 22px;border-top:1px solid var(--bdr); }
    .cc-exp-layout { display:grid;grid-template-columns:1fr 1fr;gap:24px;padding-top:18px; }
    .cc-summary { font-size:14px;color:var(--ink2);line-height:1.78;font-weight:300; }
    .cc-skills-side {}
    .cc-skills-lbl { font-family:'Fira Code',monospace;font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink3);margin-bottom:10px; }
    .cc-skills-wrap { display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px; }
    .cc-skill { font-size:12px;font-weight:400;color:var(--ink2);background:var(--bg2);border:1px solid var(--bdr);padding:4px 10px;border-radius:6px; }
    .cc-cert-link { display:inline-flex;align-items:center;gap:5px;font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.07em;text-transform:uppercase;color:var(--red);background:var(--redBg);border:1px solid var(--redBd);padding:7px 14px;border-radius:var(--r2);transition:all .25s; }
    .cc-summary-link { margin-top:12px; }
    .cc-cert-link:hover { background:var(--red);color:#fff;border-color:var(--red); }

    /* ═══════════ EDUCATION ═══════════ */
    .edu-grid { display:grid;grid-template-columns:1fr 1fr;gap:18px;margin-bottom:44px; }
    .edu-card { background:var(--white);border:1.5px solid var(--bdr);border-radius:var(--r);padding:30px;transition:all .3s;position:relative;overflow:hidden;cursor:none; }
    .edu-card::before { content:'';position:absolute;top:0;left:0;right:0;height:3px;background:var(--red);opacity:0;transition:opacity .3s; }
    .edu-card:hover { border-color:rgba(255,122,89,.28);box-shadow:0 10px 32px rgba(11,18,32,.1); }
    .edu-card:hover::before { opacity:1; }
    .edu-badge { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.13em;text-transform:uppercase;color:var(--red);margin-bottom:14px;display:flex;align-items:center;gap:6px; }
    .edu-dot { width:5px;height:5px;border-radius:50%;background:var(--red);flex-shrink:0; }
    .edu-school { font-family:'Playfair Display',serif;font-size:20px;font-weight:700;color:var(--ink);margin-bottom:7px;letter-spacing:-.02em; }
    .edu-deg { font-size:13px;color:var(--red);font-weight:500;margin-bottom:7px; }
    .edu-meta { font-family:'Fira Code',monospace;font-size:10px;color:var(--ink3);margin-bottom:11px; }
    .edu-note { font-size:13px;color:var(--ink3);line-height:1.6; }
    .ach-list { display:flex;flex-direction:column; }
    .ach-row { display:flex;gap:18px;align-items:flex-start;padding:18px 0;border-bottom:1px solid var(--bdr);transition:all .25s;cursor:default; }
    .ach-row:hover { padding-left:8px; }
    .ach-n { font-family:'Playfair Display',serif;font-size:32px;font-weight:700;color:var(--bg3);line-height:1;flex-shrink:0;transition:color .25s; }
    .ach-row:hover .ach-n { color:var(--red); }
    .ach-t { font-size:14px;color:var(--ink2);line-height:1.65;font-weight:300;padding-top:5px; }

    /* ═══════════ CONTACT ═══════════ */
    .contact-sec { background:linear-gradient(180deg,rgba(6,10,18,.86),rgba(6,10,18,.9));padding:96px 56px;scroll-margin-top:60px; }
    .contact-inner { display:grid;grid-template-columns:1.15fr .85fr;gap:72px;align-items:start;max-width:min(1600px,94vw);margin:0 auto; }
    .ct-eyebrow { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:rgba(245,242,236,.28);margin-bottom:18px; }
    .ct-big { font-family:'Playfair Display',serif;font-size:clamp(48px,6.5vw,86px);font-weight:700;letter-spacing:-.035em;line-height:.93;color:var(--ink);margin-bottom:22px; }
    .ct-big em { color:var(--red);font-style:italic; }
    .ct-desc { font-size:15px;color:rgba(245,242,236,.45);line-height:1.82;font-weight:300;max-width:460px;margin-bottom:32px; }
    .ct-avail { display:inline-flex;align-items:center;gap:8px;font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:rgba(245,242,236,.3);border:1px solid rgba(245,242,236,.1);padding:9px 18px;border-radius:40px; }
    .ct-gr-dot { width:6px;height:6px;border-radius:50%;background:#22c55e;flex-shrink:0;animation:pulse 2.5s ease-in-out infinite; }
    .email-block { margin-bottom:28px; }
    .email-lbl { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.15em;text-transform:uppercase;color:rgba(245,242,236,.28);margin-bottom:9px; }
    .email-row { display:flex;align-items:center;gap:10px;flex-wrap:wrap; }
    .email-addr { font-family:'Playfair Display',serif;font-size:19px;font-weight:700;color:var(--ink);letter-spacing:-.02em; }
    .copy-btn { font-family:'Fira Code',monospace;font-size:10px;letter-spacing:.09em;text-transform:uppercase;padding:7px 13px;border-radius:var(--r2);border:1px solid rgba(245,242,236,.14);background:transparent;color:rgba(245,242,236,.45);cursor:none;transition:all .25s; }
    .copy-btn:hover { border-color:rgba(255,122,89,.4);color:var(--red); }
    .copy-btn.ok { background:var(--red);color:#fff;border-color:var(--red); }
    .ct-links { display:flex;flex-direction:column; }
    .ct-lnk { display:flex;align-items:center;justify-content:space-between;padding:18px 0;border-bottom:1px solid rgba(245,242,236,.06);text-decoration:none;transition:all .28s;cursor:none; }
    .ct-lnk:first-child { border-top:1px solid rgba(245,242,236,.06); }
    .ct-lnk:hover { padding-left:8px; }
    .ct-lnk:hover .cln { color:var(--red); }
    .ct-lnk:hover .cla { color:var(--red);transform:translate(3px,-3px); }
    .ct-ll { display:flex;align-items:center;gap:14px; }
    .ct-ico { width:38px;height:38px;border-radius:9px;background:rgba(245,242,236,.06);border:1px solid rgba(245,242,236,.08);display:flex;align-items:center;justify-content:center; }
    .ct-ico svg { width:18px;height:18px;display:block; }
    .cln { font-size:15px;font-weight:500;color:rgba(245,242,236,.75);transition:color .28s; }
    .cls { font-family:'Fira Code',monospace;font-size:11px;color:rgba(245,242,236,.24);margin-top:2px; }
    .cla { font-size:18px;color:rgba(245,242,236,.22);transition:all .28s; }

    /* ═══════════ FOOTER ═══════════ */
    .footer { background:rgba(6,10,18,.9);border-top:1px solid rgba(245,242,236,.06);padding:26px 56px;display:flex;justify-content:space-between;align-items:center; }
    .footer-l { font-family:'Fira Code',monospace;font-size:11px;color:rgba(245,242,236,.22);letter-spacing:.06em; }
    .footer-l em { color:var(--red);font-style:normal; }
    .footer-up { font-family:'Fira Code',monospace;font-size:11px;letter-spacing:.09em;text-transform:uppercase;color:rgba(245,242,236,.28);background:transparent;border:1px solid rgba(245,242,236,.1);padding:7px 16px;border-radius:40px;cursor:none;transition:all .25s; }
    .footer-up:hover { border-color:rgba(255,122,89,.4);color:var(--red); }

    /* ── REVEAL ── */
    .rv { opacity:0;transform:translateY(22px);transition:opacity .65s cubic-bezier(.16,1,.3,1),transform .65s cubic-bezier(.16,1,.3,1); }
    .rv.in { opacity:1;transform:none; }
    .d1{transition-delay:.07s}.d2{transition-delay:.14s}.d3{transition-delay:.21s}.d4{transition-delay:.28s}

    /* ── RESPONSIVE ── */
    @media(max-width:1024px){
      .sec,.contact-sec{padding:72px 28px}
      .nav{padding:0 20px}
      .footer{padding:22px 24px}
      .about-top-cols{max-width:100%}
      .site-particle:nth-child(n+29){display:none}
      .hl-grid{grid-template-columns:1fr}
      .sk-grid{grid-template-columns:repeat(3,1fr)}
      .cred-grid{grid-template-columns:1fr 1fr}
      .edu-grid{grid-template-columns:1fr}
      .contact-inner{grid-template-columns:1fr;gap:44px}
      .hero{padding:62px 28px 22px;height:auto;max-height:none;min-height:auto;justify-content:flex-start}
      .hero-inner-cap{margin-top:0;transform:none}
      .hero-stats{flex-wrap:wrap;margin-top:14px}
      .hs{padding:14px 16px}
      .nav-resume{display:none}
    }
    @media(max-width:640px){
      .nav-links{display:none}
      .nav-hire{display:none}
      .nav-resume{display:none}
      .nav-burger{display:flex}
      .hero { padding-top:116px; height:auto; max-height:none; min-height:100vh; justify-content:flex-start; }
      .g-base,.g-layer { font-size:clamp(36px,12vw,72px); }
      .hero-inner-cap { margin-top:0;transform:none; }
      .hero-stats{margin-top:20px;padding-bottom:6px}
      .hs{padding:14px 16px;flex:1 1 30%}
      .hs-v{font-size:28px}
      .hs-l{font-size:9px;letter-spacing:.1em}
      .about-top-cols { max-width:100%; }
      .hl-list-full { margin-top:8px; }
      .sk-grid{grid-template-columns:repeat(2,1fr)}
      .cred-grid{grid-template-columns:1fr}
      .cred-card.active{grid-column:span 1}
      .cc-exp-layout{grid-template-columns:1fr}
      .hero-stats{flex-wrap:wrap}
      .hero-particle:nth-child(n+27){display:none}
      .site-particle:nth-child(n+15){display:none}
      .hs{padding:16px 20px;flex:1 1 45%}
      .pacc-inner{grid-template-columns:1fr;padding-left:0}
      .hero-desc br{display:none}
    }
  `}</style>
);

export default Styles;
