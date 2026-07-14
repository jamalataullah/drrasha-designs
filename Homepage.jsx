<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dr Rasha — Homepage</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Jost:wght@200;300;400&display=swap" rel="stylesheet"/>
  <style>
    :root{--near-black:#0A0A0A;--cream:#F5F0E8;--warm-bg:#EDE8DC;--gold:#B8965A;--white:#FFFFFF;--mid-grey:#6B6560;--border:rgba(10,10,10,0.12)}
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    html{scroll-behavior:smooth}
    body{background:var(--cream);color:var(--near-black);font-family:'Jost',sans-serif;font-weight:300;-webkit-font-smoothing:antialiased;overflow-x:hidden}
    .announce-bar{background:var(--near-black);color:var(--white);font-size:10px;letter-spacing:.12em;text-transform:uppercase;display:flex;align-items:center;justify-content:center;height:36px;overflow:hidden;white-space:nowrap}
    .announce-item{padding:0 16px}.announce-sep{opacity:.3}
    .hide-mobile{display:flex;align-items:center}
    .nav{background:var(--cream);border-bottom:1px solid var(--border);display:flex;align-items:stretch;height:64px;position:sticky;top:0;z-index:200}
    .nav-left{display:flex;align-items:stretch}
    .nav-cell{display:flex;align-items:center;padding:0 28px;border-right:1px solid var(--border);font-size:11px;letter-spacing:.14em;text-transform:uppercase;cursor:pointer;color:var(--near-black);text-decoration:none;white-space:nowrap;background:none;border-top:none;border-bottom:none;border-left:none;font-family:'Jost',sans-serif}
    .nav-logo{flex:1;display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:300;letter-spacing:.3em;text-transform:uppercase}
    .nav-right{display:flex;align-items:stretch;margin-left:auto}
    .nav-cell.shop{border-left:1px solid var(--border);border-right:none}
    .nav-cell.book{background:var(--near-black);color:var(--white);padding:0 28px;font-size:10px;letter-spacing:.2em;border:none}
    .nav-cart{display:flex;align-items:center;padding:0 18px;border-left:1px solid var(--border);cursor:pointer;position:relative}
    .nav-hamburger{display:none;align-items:center;justify-content:center;padding:0 20px;border-left:1px solid var(--border);cursor:pointer;background:none;border-top:none;border-right:none;border-bottom:none;flex-direction:column;gap:5px}
    .ham-line{width:22px;height:1px;background:var(--near-black);transition:transform .25s,opacity .25s;display:block}
    .mobile-menu{position:fixed;inset:0;top:100px;background:var(--cream);z-index:190;display:flex;flex-direction:column;padding:40px 28px;transform:translateX(100%);transition:transform .35s cubic-bezier(.25,.46,.45,.94);border-top:1px solid var(--border)}
    .mobile-menu.open{transform:translateX(0)}
    .mobile-menu-item{font-size:13px;letter-spacing:.16em;text-transform:uppercase;padding:22px 0;border-bottom:1px solid var(--border);color:var(--near-black);cursor:pointer;display:flex;align-items:center;justify-content:space-between}
    .mobile-menu-book{margin-top:32px;background:var(--near-black);color:var(--white);font-family:'Jost',sans-serif;font-size:10px;letter-spacing:.2em;text-transform:uppercase;padding:18px 32px;border:none;cursor:pointer;width:100%}
    .btn-primary{background:var(--near-black);color:var(--white);font-family:'Jost',sans-serif;font-size:10px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;padding:16px 36px;border:none;cursor:pointer;white-space:nowrap}
    .btn-primary:hover{background:#2a2a2a}
    .btn-ghost{background:transparent;color:var(--near-black);font-family:'Jost',sans-serif;font-size:10px;font-weight:300;letter-spacing:.18em;text-transform:uppercase;padding:16px 0;border:none;cursor:pointer;border-bottom:1px solid var(--near-black);white-space:nowrap}
    .btn-ghost:hover{color:var(--gold);border-color:var(--gold)}
    .btn-primary-white{background:var(--white);color:var(--near-black);font-family:'Jost',sans-serif;font-size:10px;font-weight:400;letter-spacing:.2em;text-transform:uppercase;padding:18px 52px;border:none;cursor:pointer}
    .btn-wa{background:transparent;color:var(--near-black);font-family:'Jost',sans-serif;font-size:10px;font-weight:300;letter-spacing:.18em;text-transform:uppercase;padding:16px 0;border:none;cursor:pointer;border-bottom:1px solid var(--near-black);display:flex;align-items:center;gap:8px;white-space:nowrap}
    .btn-wa svg{width:13px;height:13px;fill:currentColor;flex-shrink:0}
    .btn-wa-w{background:transparent;color:var(--white);font-family:'Jost',sans-serif;font-size:10px;font-weight:300;letter-spacing:.18em;text-transform:uppercase;padding:16px 0;border:none;cursor:pointer;border-bottom:1px solid rgba(255,255,255,.4);display:flex;align-items:center;gap:8px;white-space:nowrap}
    .btn-wa-w svg{width:13px;height:13px;fill:currentColor;flex-shrink:0}
    .sec{padding:88px 80px}.sec-alt{background:var(--warm-bg)}.sec-dark{background:var(--near-black);color:var(--white)}
    .sec-tag{font-size:9px;letter-spacing:.24em;text-transform:uppercase;color:var(--gold);margin-bottom:14px;display:block}
    .sec-title{font-family:'Cormorant Garamond',serif;font-size:clamp(30px,3.5vw,48px);font-weight:300;font-style:italic;line-height:1.1;color:inherit}
    .sec-header{display:flex;align-items:flex-end;justify-content:space-between;margin-bottom:52px;gap:16px}
    .hero{display:grid;grid-template-columns:1fr 1fr;min-height:600px;max-height:680px}
    .hero-content{display:flex;flex-direction:column;justify-content:center;padding:64px 64px 64px 80px;background:var(--cream)}
    .hero-tag{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:20px}
    .hero-title{font-family:'Cormorant Garamond',serif;font-size:clamp(44px,5vw,74px);font-weight:300;font-style:italic;line-height:1.02;letter-spacing:-.01em;margin-bottom:22px;color:var(--near-black)}
    .hero-sub{font-size:14px;font-weight:300;line-height:1.8;color:var(--mid-grey);max-width:380px;margin-bottom:8px;letter-spacing:.02em}
    .hero-bullets{display:flex;flex-direction:column;gap:10px;margin-bottom:32px;margin-top:-12px}
    .hero-bullet{display:flex;align-items:center;gap:10px;font-size:12px;font-weight:300;color:var(--mid-grey);letter-spacing:.04em}
    .hero-bullet-dot{width:4px;height:4px;border-radius:50%;background:var(--gold);flex-shrink:0;display:inline-block}
    .tp-row{display:flex;align-items:center;gap:10px;margin-top:2px}
    .tp-stars{display:flex;gap:2px}
    .hero-actions{display:flex;align-items:center;gap:28px;flex-wrap:wrap;margin-bottom:0}
    .hero-img{overflow:hidden;background:var(--warm-bg)}
    .hero-img-ph{width:100%;height:100%;min-height:300px;background:linear-gradient(160deg,#E4DDD0 0%,#C8BCA8 60%,#BFB09A 100%);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:12px;color:var(--mid-grey);font-size:11px;letter-spacing:.14em;text-transform:uppercase}
    .trust-bar{background:var(--cream);border-top:1px solid var(--border);border-bottom:1px solid var(--border);display:flex;align-items:stretch}
    .tbc{flex:1;display:flex;align-items:center;justify-content:center;gap:12px;padding:20px 24px;border-right:1px solid var(--border);white-space:nowrap}
    .tbc:last-child{border-right:none}
    .tbc-label{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:var(--near-black)}
    .tbc-sub{font-size:10px;letter-spacing:.08em;color:var(--mid-grey)}
    .tx-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-top:52px}
    .tx-card{display:flex;flex-direction:column;cursor:pointer}
    .tx-card:hover{opacity:.88}
    .tx-img{aspect-ratio:3/4;overflow:hidden}
    .tx-img-ph{width:100%;height:100%;display:flex;align-items:flex-end;padding:20px}
    .tx-card:nth-child(1) .tx-img-ph{background:linear-gradient(160deg,#E4DDD0 0%,#C8BCA8 100%)}
    .tx-card:nth-child(2) .tx-img-ph{background:linear-gradient(160deg,#DDD6C8 0%,#C0B49C 100%)}
    .tx-card:nth-child(3) .tx-img-ph{background:linear-gradient(160deg,#D8D0C2 0%,#B8AA92 100%)}
    .tx-card:nth-child(4) .tx-img-ph{background:linear-gradient(160deg,#D4CCC0 0%,#B4A890 100%)}
    .tx-body{padding:20px 0 0;display:flex;flex-direction:column;flex:1}
    .tx-cat{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:6px}
    .tx-name{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:300;font-style:italic;color:var(--near-black);line-height:1.15;margin-bottom:8px}
    .tx-desc{font-size:12px;font-weight:300;line-height:1.7;color:var(--mid-grey);flex:1}
    .why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:0;margin-top:56px;border-top:1px solid var(--border)}
    .why-card{padding:48px 48px 48px 0;border-right:1px solid var(--border);display:flex;flex-direction:column;gap:16px}
    .why-card:last-child{border-right:none;padding-right:0}
    .why-card:not(:first-child){padding-left:48px}
    .why-num{font-family:'Cormorant Garamond',serif;font-size:56px;font-weight:300;line-height:1;color:rgba(184,150,90,0.2);letter-spacing:-.02em}
    .why-title{font-size:10px;letter-spacing:.18em;text-transform:uppercase;color:var(--near-black)}
    .why-body{font-size:13px;font-weight:300;line-height:1.8;color:var(--mid-grey);letter-spacing:.02em}
    .rev-wrap{overflow:hidden}
    .rev-track{display:flex;gap:24px;transition:transform .5s cubic-bezier(.25,.46,.45,.94)}
    .rev-card{flex-shrink:0;border:1px solid var(--border);padding:36px 32px;background:var(--cream);display:flex;flex-direction:column;gap:18px}
    .rev-stars{display:flex;gap:3px}
    .star{color:var(--gold);font-size:12px}
    .rev-text{font-family:'Cormorant Garamond',serif;font-size:17px;font-style:italic;font-weight:300;line-height:1.65;color:var(--near-black);flex:1}
    .rev-meta{display:flex;align-items:center;justify-content:space-between;padding-top:18px;border-top:1px solid var(--border)}
    .rev-author{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--near-black)}
    .rev-ver{font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:var(--gold);display:flex;align-items:center;gap:5px}
    .rev-ctrl{display:flex;align-items:center;gap:14px;margin-top:36px}
    .rev-nav{width:44px;height:44px;border:1px solid var(--border);background:none;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--near-black)}
    .rev-nav:disabled{opacity:.3;cursor:default}
    .rev-dots{display:flex;gap:6px}
    .rdot{width:5px;height:5px;border-radius:50%;background:var(--border);cursor:pointer;transition:background .2s}
    .rdot.active{background:var(--near-black)}
    .cta-banner{background:var(--warm-bg);border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:36px 80px;display:flex;align-items:center;justify-content:space-between;gap:32px}
    .cta-banner-text{font-family:'Cormorant Garamond',serif;font-size:clamp(18px,2vw,26px);font-weight:300;font-style:italic;color:var(--near-black)}
    .cta-banner-sub{font-size:12px;font-weight:300;color:var(--mid-grey);margin-top:5px;letter-spacing:.04em}
    .cta-actions{display:flex;align-items:center;gap:28px;flex-shrink:0;flex-wrap:wrap}
    .cta-safety{display:flex;align-items:center;gap:16px;margin-top:10px;flex-wrap:wrap}
    .cta-si{display:flex;align-items:center;gap:6px;font-size:10px;font-weight:300;color:var(--mid-grey);letter-spacing:.06em}
    .cta-si::before{content:'';width:3px;height:3px;border-radius:50%;background:var(--gold);display:inline-block;flex-shrink:0}
    .ba-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:2px}
    .ba-label{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:var(--mid-grey);margin-top:14px;display:block}
    .ba-slider{position:relative;aspect-ratio:3/4;overflow:hidden;cursor:col-resize;user-select:none}
    .ba-after{position:absolute;inset:0;background:linear-gradient(135deg,#D8D0C2 0%,#C4BAA8 100%);display:flex;align-items:flex-end;padding:10px}
    .ba-before{position:absolute;inset:0;overflow:hidden}
    .ba-before-inner{position:absolute;inset:0;background:linear-gradient(135deg,#E8E0D0 0%,#D4C9B5 100%);display:flex;align-items:flex-end;padding:10px}
    .ba-slabel{font-size:8px;letter-spacing:.18em;text-transform:uppercase;color:rgba(10,10,10,.45);pointer-events:none}
    .ba-div{position:absolute;top:0;bottom:0;width:1px;background:#fff;pointer-events:none;z-index:3}
    .ba-handle{position:absolute;top:50%;transform:translate(-50%,-50%);width:36px;height:36px;border-radius:50%;background:#fff;border:1px solid rgba(10,10,10,.12);display:flex;align-items:center;justify-content:center;pointer-events:none;z-index:4;gap:5px;box-shadow:0 2px 8px rgba(0,0,0,.12)}
    .ba-arr{width:0;height:0;border-top:4px solid transparent;border-bottom:4px solid transparent}
    .ba-arr.l{border-right:5px solid rgba(10,10,10,.4)}
    .ba-arr.r{border-left:5px solid rgba(10,10,10,.4)}
    .ba-ph{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;pointer-events:none}
    .shop-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:2px;margin-top:0}
    .shop-card{display:flex;flex-direction:column;cursor:pointer}
    .shop-card:hover{opacity:.88}
    .shop-img{aspect-ratio:1/1;overflow:hidden}
    .shop-img-ph{width:100%;height:100%;display:flex;align-items:center;justify-content:center}
    .shop-card:nth-child(1) .shop-img-ph{background:linear-gradient(160deg,#E8E0D4 0%,#D0C8B8 100%)}
    .shop-card:nth-child(2) .shop-img-ph{background:linear-gradient(160deg,#E0D8CC 0%,#C8C0B0 100%)}
    .shop-card:nth-child(3) .shop-img-ph{background:linear-gradient(160deg,#D8D0C4 0%,#C0B8A8 100%)}
    .shop-card:nth-child(4) .shop-img-ph{background:linear-gradient(160deg,#D4CCC0 0%,#BCB4A4 100%)}
    .shop-body{padding:16px 0 0;display:flex;flex-direction:column;flex:1}
    .shop-brand{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:5px}
    .shop-name{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:300;font-style:italic;color:var(--near-black);line-height:1.2;margin-bottom:6px;flex:1}
    .shop-foot{display:flex;align-items:center;margin-top:12px;padding-top:12px;border-top:1px solid var(--border)}
    .shop-price{font-size:12px;font-weight:300;color:var(--near-black);letter-spacing:.04em}
    .sec-foot{display:flex;justify-content:center;margin-top:52px}
    .final-cta{background:var(--near-black);padding:100px 80px;display:flex;flex-direction:column;align-items:center;text-align:center}
    .final-eyebrow{font-size:9px;letter-spacing:.28em;text-transform:uppercase;color:var(--gold);margin-bottom:22px}
    .final-title{font-family:'Cormorant Garamond',serif;font-size:clamp(36px,5vw,60px);font-weight:300;font-style:italic;color:#fff;line-height:1.1;max-width:560px;margin-bottom:18px}
    .final-sub{font-size:12px;font-weight:300;color:rgba(255,255,255,.45);letter-spacing:.04em;margin-bottom:44px}
    .final-acts{display:flex;align-items:center;gap:28px;flex-wrap:wrap;justify-content:center;margin-bottom:28px}
    .cta-si-d{color:rgba(255,255,255,.4)}
    .cta-si-d::before{background:rgba(255,255,255,.3)}
    .trust-strip{display:flex;align-items:center;gap:36px;padding-top:44px;border-top:1px solid rgba(255,255,255,.1);flex-wrap:wrap;justify-content:center;margin-top:44px}
    .trust-item{display:flex;flex-direction:column;align-items:center;gap:5px}
    .trust-val{font-family:'Cormorant Garamond',serif;font-size:26px;font-weight:300;color:#fff;line-height:1}
    .trust-label{font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.4)}
    .trust-div{width:1px;height:36px;background:rgba(255,255,255,.1)}
    .footer{background:var(--near-black);border-top:1px solid rgba(255,255,255,.08);padding:64px 80px 40px}
    .foot-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:64px;margin-bottom:64px}
    .foot-logo{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:300;letter-spacing:.3em;text-transform:uppercase;color:#fff;margin-bottom:20px}
    .foot-tag{font-size:12px;font-weight:300;line-height:1.75;color:rgba(255,255,255,.4);max-width:240px}
    .foot-col-title{font-size:9px;letter-spacing:.2em;text-transform:uppercase;color:var(--gold);margin-bottom:20px;display:block}
    .foot-link{display:block;font-size:12px;font-weight:300;color:rgba(255,255,255,.55);letter-spacing:.06em;margin-bottom:12px;cursor:pointer;text-decoration:none}
    .foot-link:hover{color:#fff}
    .foot-ci{display:flex;flex-direction:column;gap:2px;margin-bottom:14px}
    .foot-cl{font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:rgba(255,255,255,.3)}
    .foot-cv{font-size:12px;font-weight:300;color:rgba(255,255,255,.55)}
    .foot-hr{display:flex;justify-content:space-between;font-size:11px;font-weight:300;color:rgba(255,255,255,.45);margin-bottom:8px}
    .foot-bottom{padding-top:32px;border-top:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
    .foot-legal{font-size:10px;letter-spacing:.08em;color:rgba(255,255,255,.25)}
    .foot-ll{display:flex;gap:24px}
    .foot-lla{font-size:10px;letter-spacing:.08em;color:rgba(255,255,255,.3);cursor:pointer;text-decoration:none}
    .cqc-badge{display:flex;align-items:center;gap:8px;font-size:9px;letter-spacing:.12em;text-transform:uppercase;color:rgba(255,255,255,.35)}
    .cqc-icon{width:28px;height:28px;border:1px solid rgba(255,255,255,.15);display:flex;align-items:center;justify-content:center;font-family:'Cormorant Garamond',serif;font-size:10px;color:rgba(255,255,255,.4)}
    @media(max-width:768px){
      .hide-mobile{display:none}
      .nav{height:56px}.nav-left{display:none}.nav-cell.shop,.nav-cell.book{display:none}
      .nav-logo{font-size:17px;letter-spacing:.22em}
      .nav-hamburger{display:flex}
      .hero{grid-template-columns:1fr;grid-template-rows:auto 60vw;min-height:unset;max-height:unset}
      .hero-content{grid-row:1;padding:40px 20px 44px}
      .hero-title{font-size:clamp(38px,9vw,52px)}
      .hero-img{grid-row:2;min-height:60vw}
      .sec{padding:52px 20px}
      .sec-header{flex-direction:column;align-items:flex-start;margin-bottom:32px}
      .cta-banner{padding:28px 20px;flex-direction:column;align-items:flex-start;gap:20px}
      .cta-actions{flex-direction:column;align-items:stretch;gap:12px;width:100%}
      .btn-primary,.btn-wa{width:100%;justify-content:center;text-align:center}
      .tx-grid{grid-template-columns:1fr 1fr;gap:16px 2px}
      .why-grid{grid-template-columns:1fr}
      .why-card{padding:32px 0;border-right:none;border-bottom:1px solid var(--border)}
      .why-card:last-child{border-bottom:none}
      .why-card:not(:first-child){padding-left:0}
      .ba-grid{grid-template-columns:1fr;gap:24px}
      .ba-slider{aspect-ratio:4/3}
      .rev-card{min-width:calc(100vw - 40px);padding:24px 20px}
      .shop-grid{grid-template-columns:1fr 1fr;gap:16px 2px}
      .final-cta{padding:64px 20px}
      .final-acts{flex-direction:column;align-items:stretch}
      .btn-primary-white,.btn-wa-w{width:100%;justify-content:center;text-align:center}
      .trust-strip{gap:16px;padding-top:32px}
      .trust-div{display:none}
      .footer{padding:52px 20px 32px}
      .foot-grid{grid-template-columns:1fr 1fr;gap:40px}
      .foot-bottom{flex-direction:column;align-items:flex-start}
    }
    @media(max-width:480px){
      .sec{padding:40px 16px}.cta-banner{padding:24px 16px}.final-cta{padding:52px 16px}
      .hero-content{padding:32px 16px 44px}.tx-grid{grid-template-columns:1fr}
      .foot-grid{grid-template-columns:1fr;gap:32px}.footer{padding:44px 16px 28px}
    }
  </style>
</head>
<body>

<!-- Announcement Bar -->
<div class="announce-bar">
  <span class="announce-item">Lorem ipsum dolor sit amet</span>
  <span class="hide-mobile">
    <span class="announce-sep">&nbsp;·&nbsp;</span>
    <span class="announce-item">Consectetur adipiscing elit</span>
    <span class="announce-sep">&nbsp;·&nbsp;</span>
    <span class="announce-item">Lorem</span>
  </span>
</div>

<!-- Nav -->
<nav class="nav">
  <div class="nav-left">
    <a class="nav-cell">Treatments</a>
    <a class="nav-cell">The Clinic</a>
  </div>
  <div class="nav-logo">D R &nbsp; R A S H A</div>
  <div class="nav-right">
    <a class="nav-cell shop">Shop</a>
    <button class="nav-cell book">Book Consultation</button>
    <div class="nav-cart">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
    </div>
    <button class="nav-hamburger" id="ham-btn">
      <span class="ham-line" id="hl1"></span>
      <span class="ham-line" id="hl2"></span>
      <span class="ham-line" id="hl3"></span>
    </button>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobile-menu">
  <div class="mobile-menu-item">Treatments<span>›</span></div>
  <div class="mobile-menu-item">The Clinic<span>›</span></div>
  <div class="mobile-menu-item">Shop<span>›</span></div>
  <div class="mobile-menu-item">About Dr Rasha<span>›</span></div>
  <div class="mobile-menu-item">Patient Results<span>›</span></div>
  <button class="mobile-menu-book">Book Consultation</button>
</div>

<!-- Hero -->
<section class="hero">
  <div class="hero-content">
    <span class="hero-tag">Location</span>
    <h1 class="hero-title">Lorem Ipsum<br>Dolor Sit<br>Amet</h1>
    <p class="hero-sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <div class="hero-bullets">
      <div class="hero-bullet"><span class="hero-bullet-dot"></span>Lorem ipsum dolor sit amet</div>
      <div class="hero-bullet"><span class="hero-bullet-dot"></span>Consectetur adipiscing elit</div>
      <div class="tp-row">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" style="flex-shrink:0"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 3.8 2.4-7.4L2 9.4h7.6z"/></svg>
        <span style="font-size:11px;font-weight:400;color:var(--near-black);letter-spacing:.06em">Trustpilot</span>
        <div class="tp-stars">
          <span style="color:var(--gold);font-size:12px">★</span>
          <span style="color:var(--gold);font-size:12px">★</span>
          <span style="color:var(--gold);font-size:12px">★</span>
          <span style="color:var(--gold);font-size:12px">★</span>
          <span style="color:var(--gold);font-size:12px">★</span>
        </div>
        <span style="font-size:11px;font-weight:300;color:var(--mid-grey);letter-spacing:.04em">0.0 · 000 reviews</span>
      </div>
    </div>
    <div class="hero-actions">
      <button class="btn-primary">Book Consultation</button>
      <button class="btn-wa"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp Us</button>
    </div>
  </div>
  <div class="hero-img"><div class="hero-img-ph"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.2)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg><span>Hero Image</span></div></div>
</section>

<!-- Trust Bar -->
<div class="trust-bar" id="trust-bar"></div>

<!-- Treatments -->
<section class="sec">
  <div class="sec-header">
    <div><span class="sec-tag">Treatments</span><h2 class="sec-title">Lorem ipsum</h2></div>
  </div>
  <div class="tx-grid" id="tx-grid"></div>
</section>

<!-- Why Us -->
<section class="sec sec-alt">
  <div class="sec-header">
    <div><span class="sec-tag">Why Us</span><h2 class="sec-title">Lorem ipsum dolor</h2></div>
  </div>
  <div class="why-grid" id="why-grid"></div>
</section>

<!-- Reviews -->
<section class="sec sec-alt">
  <div class="sec-header">
    <div><span class="sec-tag">Testimonials</span><h2 class="sec-title">Lorem ipsum</h2></div>
    <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
      <span style="color:var(--gold);font-size:12px">★★★★★</span>
      <span style="font-size:11px;letter-spacing:.1em;color:var(--mid-grey);text-transform:uppercase;white-space:nowrap">0.0 · 000</span>
    </div>
  </div>
  <div class="rev-wrap"><div class="rev-track" id="rev-track"></div></div>
  <div class="rev-ctrl">
    <button class="rev-nav" id="rev-prev">←</button>
    <button class="rev-nav" id="rev-next">→</button>
    <div class="rev-dots" id="rev-dots"></div>
  </div>
</section>

<!-- CTA Banner -->
<div class="cta-banner">
  <div>
    <p class="cta-banner-text">Lorem ipsum dolor sit amet.</p>
    <p class="cta-banner-sub">Consectetur adipiscing elit sed do eiusmod tempor.</p>
    <div class="cta-safety">
      <span class="cta-si">Lorem</span><span class="cta-si">Ipsum</span><span class="cta-si">Dolor</span>
    </div>
  </div>
  <div class="cta-actions">
    <button class="btn-primary">Book Consultation</button>
    <button class="btn-wa"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp Us</button>
  </div>
</div>

<!-- Before & After -->
<section class="sec sec-alt">
  <div class="sec-header"><div><span class="sec-tag">Results</span><h2 class="sec-title">Before &amp; After</h2></div></div>
  <div class="ba-grid" id="ba-grid"></div>
</section>

<!-- Shop -->
<section class="sec">
  <div class="sec-header"><div><span class="sec-tag">Shop</span><h2 class="sec-title">Lorem ipsum</h2></div></div>
  <p style="font-size:14px;font-weight:300;line-height:1.85;color:var(--mid-grey);letter-spacing:.02em;max-width:560px;margin-bottom:52px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.</p>
  <div class="shop-grid" id="shop-grid"></div>
  <div class="sec-foot"><button class="btn-primary">Lorem ipsum</button></div>
</section>

<!-- Final CTA -->
<section class="final-cta">
  <p class="final-eyebrow">Lorem</p>
  <h2 class="final-title">Lorem ipsum dolor sit</h2>
  <p class="final-sub">Consectetur · Adipiscing · Elit</p>
  <div class="final-acts">
    <button class="btn-primary-white">Book Consultation</button>
    <button class="btn-wa-w"><svg viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>WhatsApp Us</button>
  </div>
  <div class="cta-safety" style="justify-content:center;margin-bottom:0">
    <span class="cta-si cta-si-d">Lorem</span><span class="cta-si cta-si-d">Ipsum</span><span class="cta-si cta-si-d">Dolor</span>
  </div>
  <div class="trust-strip">
    <div class="trust-item"><span class="trust-val">000+</span><span class="trust-label">Lorem</span></div>
    <div class="trust-div"></div>
    <div class="trust-item"><span class="trust-val">0.0★</span><span class="trust-label">Ipsum</span></div>
    <div class="trust-div"></div>
    <div class="trust-item"><span class="trust-val">ABC</span><span class="trust-label">Dolor</span></div>
    <div class="trust-div"></div>
    <div class="trust-item"><span class="trust-val">0000</span><span class="trust-label">Amet</span></div>
  </div>
</section>

<!-- Footer -->
<footer class="footer">
  <div class="foot-grid">
    <div>
      <div class="foot-logo">D R &nbsp; R A S H A</div>
      <p class="foot-tag">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
    </div>
    <div>
      <span class="foot-col-title">Navigation</span>
      <a class="foot-link">Lorem</a><a class="foot-link">Ipsum</a><a class="foot-link">Dolor</a><a class="foot-link">Amet</a><a class="foot-link">Consectetur</a><a class="foot-link">Adipiscing</a>
    </div>
    <div>
      <span class="foot-col-title">Contact</span>
      <div class="foot-ci"><span class="foot-cl">Phone</span><span class="foot-cv">000 000 0000</span></div>
      <div class="foot-ci"><span class="foot-cl">WhatsApp</span><span class="foot-cv">00000 000000</span></div>
      <div class="foot-ci"><span class="foot-cl">Email</span><span class="foot-cv">lorem@ipsum.com</span></div>
      <div class="foot-ci"><span class="foot-cl">Address</span><span class="foot-cv">000 Lorem Road, XX0 0XX</span></div>
    </div>
    <div>
      <span class="foot-col-title">Hours</span>
      <div class="foot-hr"><span>Monday – Friday</span><span>00am – 00pm</span></div>
      <div class="foot-hr"><span>Saturday</span><span>00am – 00pm</span></div>
      <div class="foot-hr"><span>Sunday</span><span>00am – 00pm</span></div>
    </div>
  </div>
  <div class="foot-bottom">
    <span class="foot-legal">© 0000 Lorem Ipsum. All Rights Reserved.</span>
    <div class="foot-ll"><a class="foot-lla">Lorem</a><a class="foot-lla">Ipsum</a><a class="foot-lla">Dolor</a></div>
    <div class="cqc-badge"><div class="cqc-icon">ABC</div><span>Lorem Ipsum</span></div>
  </div>
</footer>

<script>
// Mobile menu
const hamBtn=document.getElementById('ham-btn');
const mobileMenu=document.getElementById('mobile-menu');
const hl1=document.getElementById('hl1'),hl2=document.getElementById('hl2'),hl3=document.getElementById('hl3');
let menuOpen=false;
hamBtn.onclick=()=>{menuOpen=!menuOpen;mobileMenu.classList.toggle('open',menuOpen);hl1.style.transform=menuOpen?'translateY(6px) rotate(45deg)':'';hl2.style.opacity=menuOpen?'0':'1';hl3.style.transform=menuOpen?'translateY(-6px) rotate(-45deg)':''};

// Trust bar
const TRUST=[{icon:'★',label:'Lorem',sub:'0.0 · 000'},{icon:'◇',label:'Ipsum',sub:'Award 0000'},{icon:'✦',label:'Dolor',sub:'Sit amet'},{icon:'◈',label:'Consectetur',sub:'Adipiscing'}];
const tbar=document.getElementById('trust-bar');
TRUST.forEach(t=>{const d=document.createElement('div');d.className='tbc';d.innerHTML=`<span style="font-size:14px;color:var(--gold)">${t.icon}</span><div><div class="tbc-label">${t.label}</div><div class="tbc-sub">${t.sub}</div></div>`;tbar.appendChild(d)});

// Treatment categories
const CATS=[{tag:'Category',name:'Lorem<br>Ipsum',desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.'},{tag:'Category',name:'Dolor<br>Sit',desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.'},{tag:'Category',name:'Amet<br>Consectetur',desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.'},{tag:'Category',name:'Adipiscing<br>Elit',desc:'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor.'}];
const tgrid=document.getElementById('tx-grid');
CATS.forEach(c=>{const d=document.createElement('div');d.className='tx-card';d.innerHTML=`<div class="tx-img"><div class="tx-img-ph"></div></div><div class="tx-body"><p class="tx-cat">${c.tag}</p><h3 class="tx-name">${c.name}</h3><p class="tx-desc">${c.desc}</p></div>`;tgrid.appendChild(d)});

// Why Us
const WHY=[{num:'01',title:'Lorem',body:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},{num:'02',title:'Ipsum',body:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.'},{num:'03',title:'Dolor',body:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.'}];
const wgrid=document.getElementById('why-grid');
WHY.forEach(w=>{const d=document.createElement('div');d.className='why-card';d.innerHTML=`<span class="why-num">${w.num}</span><h3 class="why-title">${w.title}</h3><p class="why-body">${w.body}</p>`;wgrid.appendChild(d)});

// Reviews carousel
const REVIEWS=[{text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.',author:'A. Lorem'},{text:'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.',author:'B. Ipsum'},{text:'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.',author:'C. Dolor'},{text:'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis.',author:'D. Amet'}];
let ridx=0;
const vis=()=>window.innerWidth<=768?1:3;
const rtrack=document.getElementById('rev-track');
REVIEWS.forEach(r=>{const d=document.createElement('div');d.className='rev-card';d.innerHTML=`<div class="rev-stars">${'★★★★★'.split('').map(s=>`<span class="star">${s}</span>`).join('')}</div><p class="rev-text">"${r.text}"</p><div class="rev-meta"><span class="rev-author">${r.author}</span><span class="rev-ver">✓ Verified</span></div>`;rtrack.appendChild(d)});
const rdots=document.getElementById('rev-dots');
function buildDots(){rdots.innerHTML='';const m=Math.max(0,REVIEWS.length-vis());for(let i=0;i<=m;i++){const d=document.createElement('div');d.className='rdot'+(i===ridx?' active':'');d.onclick=()=>goRev(i);rdots.appendChild(d)}}
function goRev(i){ridx=i;const v=vis();const m=Math.max(0,REVIEWS.length-v);ridx=Math.min(ridx,m);rtrack.querySelectorAll('.rev-card').forEach(c=>{c.style.minWidth=`calc(${100/v}% - ${v>1?16:0}px)`});rtrack.style.transform=`translateX(calc(-${ridx*(100/v)}% - ${ridx*24}px))`;buildDots();document.getElementById('rev-prev').disabled=ridx===0;document.getElementById('rev-next').disabled=ridx>=m}
document.getElementById('rev-prev').onclick=()=>{if(ridx>0){ridx--;goRev(ridx)}};
document.getElementById('rev-next').onclick=()=>{const m=Math.max(0,REVIEWS.length-vis());if(ridx<m){ridx++;goRev(ridx)}};
window.addEventListener('resize',()=>goRev(ridx));
goRev(0);

// Before & After sliders
const BA=['Lorem','Ipsum','Dolor'];
const bagrid=document.getElementById('ba-grid');
BA.forEach(concern=>{
  const wrap=document.createElement('div');
  wrap.innerHTML=`<div class="ba-slider" data-concern="${concern}"><div class="ba-after"><div class="ba-ph"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.18)" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div><span class="ba-slabel">After</span></div><div class="ba-before" style="width:50%"><div class="ba-before-inner"><div class="ba-ph"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.18)" stroke-width="1"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/></svg></div><span class="ba-slabel">Before</span></div></div><div class="ba-div" style="left:50%"></div><div class="ba-handle" style="left:50%"><span class="ba-arr l"></span><span class="ba-arr r"></span></div></div><span class="ba-label">${concern}</span>`;
  bagrid.appendChild(wrap);
  const slider=wrap.querySelector('.ba-slider');
  const before=wrap.querySelector('.ba-before');
  const div=wrap.querySelector('.ba-div');
  const handle=wrap.querySelector('.ba-handle');
  let drag=false;
  const upd=p=>{before.style.width=p+'%';div.style.left=p+'%';handle.style.left=p+'%'};
  const gp=x=>{const r=slider.getBoundingClientRect();return Math.max(0,Math.min((x-r.left)/r.width*100,100))};
  slider.onmousedown=e=>{drag=true;e.preventDefault()};
  document.addEventListener('mousemove',e=>{if(drag)upd(gp(e.clientX))});
  document.addEventListener('mouseup',()=>drag=false);
  slider.addEventListener('touchmove',e=>upd(gp(e.touches[0].clientX)),{passive:true});
});

// Shop products
const SHOP=[{brand:'Brand',name:'Lorem Ipsum<br>Serum',price:'£00.00'},{brand:'Brand',name:'Dolor Sit<br>Amet',price:'£00.00'},{brand:'Brand',name:'Consectetur<br>Cream',price:'£00.00'},{brand:'Brand',name:'Adipiscing<br>Elite',price:'£00.00'}];
const sgrid=document.getElementById('shop-grid');
SHOP.forEach(p=>{const d=document.createElement('div');d.className='shop-card';d.innerHTML=`<div class="shop-img"><div class="shop-img-ph"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.2)" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="1"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg></div></div><div class="shop-body"><p class="shop-brand">${p.brand}</p><h3 class="shop-name">${p.name}</h3><div class="shop-foot"><span class="shop-price">${p.price}</span></div></div>`;sgrid.appendChild(d)});
</script>
</body>
</html>
