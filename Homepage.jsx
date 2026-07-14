import { useState, useRef } from "react";

const FontLink = () => (
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Jost:wght@200;300;400&display=swap"
    rel="stylesheet"
  />
);

const css = `
  :root {
    --near-black: #0A0A0A;
    --cream: #F5F0E8;
    --warm-bg: #EDE8DC;
    --gold: #B8965A;
    --white: #FFFFFF;
    --mid-grey: #6B6560;
    --border: rgba(10,10,10,0.12);
  }
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    background: var(--cream);
    color: var(--near-black);
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  /* ── Announcement Bar ── */
  .announce-bar {
    background: var(--near-black);
    color: var(--white);
    font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase;
    display: flex; align-items: center; justify-content: center;
    height: 36px; overflow: hidden; white-space: nowrap;
  }
  .announce-item { padding: 0 16px; }
  .announce-sep { opacity: 0.3; }
  .hide-mobile { display: flex; align-items: center; }

  /* ── Nav ── */
  .nav {
    background: var(--cream); border-bottom: 1px solid var(--border);
    display: flex; align-items: stretch; height: 64px;
    position: sticky; top: 0; z-index: 200;
  }
  .nav-left { display: flex; align-items: stretch; }
  .nav-cell {
    display: flex; align-items: center; padding: 0 28px;
    border-right: 1px solid var(--border);
    font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
    cursor: pointer; color: var(--near-black); text-decoration: none;
    white-space: nowrap; background: none;
    border-top: none; border-bottom: none; border-left: none;
    font-family: 'Jost', sans-serif;
  }
  .nav-logo {
    flex: 1; display: flex; align-items: center; justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px; font-weight: 300; letter-spacing: 0.3em; text-transform: uppercase;
  }
  .nav-right { display: flex; align-items: stretch; margin-left: auto; }
  .nav-cell.shop { border-left: 1px solid var(--border); border-right: none; }
  .nav-cell.book {
    background: var(--near-black); color: var(--white);
    padding: 0 28px; font-size: 10px; letter-spacing: 0.2em; border: none;
  }
  .nav-cart {
    display: flex; align-items: center; padding: 0 18px;
    border-left: 1px solid var(--border); cursor: pointer; position: relative;
  }
  .cart-badge {
    position: absolute; top: 14px; right: 10px;
    background: var(--gold); color: var(--white);
    font-size: 9px; width: 14px; height: 14px; border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Jost', sans-serif;
  }
  .nav-hamburger {
    display: none; align-items: center; justify-content: center;
    padding: 0 20px; border-left: 1px solid var(--border);
    cursor: pointer; background: none;
    border-top: none; border-right: none; border-bottom: none;
    flex-direction: column; gap: 5px;
  }
  .ham-line {
    width: 22px; height: 1px; background: var(--near-black);
    transition: transform 0.25s, opacity 0.25s; display: block;
  }
  .mobile-menu {
    position: fixed; inset: 0; top: 100px; background: var(--cream);
    z-index: 190; display: flex; flex-direction: column;
    padding: 40px 28px; transform: translateX(100%);
    transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94);
    border-top: 1px solid var(--border);
  }
  .mobile-menu.open { transform: translateX(0); }
  .mobile-menu-item {
    font-size: 13px; letter-spacing: 0.16em; text-transform: uppercase;
    padding: 22px 0; border-bottom: 1px solid var(--border);
    color: var(--near-black); cursor: pointer;
    display: flex; align-items: center; justify-content: space-between;
  }
  .mobile-menu-book {
    margin-top: 32px; background: var(--near-black); color: var(--white);
    font-family: 'Jost', sans-serif; font-size: 10px; letter-spacing: 0.2em;
    text-transform: uppercase; padding: 18px 32px; border: none; cursor: pointer; width: 100%;
  }

  /* ── Buttons ── */
  .btn-primary {
    background: var(--near-black); color: var(--white);
    font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 400;
    letter-spacing: 0.2em; text-transform: uppercase;
    padding: 16px 36px; border: none; cursor: pointer; transition: background 0.2s; white-space: nowrap;
  }
  .btn-primary:hover { background: #2a2a2a; }
  .btn-ghost {
    background: transparent; color: var(--near-black);
    font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 300;
    letter-spacing: 0.18em; text-transform: uppercase; padding: 16px 0;
    border: none; cursor: pointer; border-bottom: 1px solid var(--near-black);
    transition: color 0.2s, border-color 0.2s; white-space: nowrap;
  }
  .btn-ghost:hover { color: var(--gold); border-color: var(--gold); }
  .btn-primary-white {
    background: var(--white); color: var(--near-black);
    font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 400;
    letter-spacing: 0.2em; text-transform: uppercase;
    padding: 18px 52px; border: none; cursor: pointer; transition: background 0.2s;
  }
  .btn-primary-white:hover { background: var(--cream); }
  .btn-whatsapp {
    background: transparent; color: var(--near-black);
    font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 300;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 16px 0; border: none; cursor: pointer;
    border-bottom: 1px solid var(--near-black);
    display: flex; align-items: center; gap: 8px;
    transition: color 0.2s, border-color 0.2s; white-space: nowrap;
  }
  .btn-whatsapp:hover { color: var(--gold); border-color: var(--gold); }
  .btn-whatsapp svg { width: 13px; height: 13px; fill: currentColor; flex-shrink: 0; }
  .btn-whatsapp-white {
    background: transparent; color: var(--white);
    font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 300;
    letter-spacing: 0.18em; text-transform: uppercase;
    padding: 16px 0; border: none; cursor: pointer;
    border-bottom: 1px solid rgba(255,255,255,0.4);
    display: flex; align-items: center; gap: 8px;
    transition: color 0.2s, border-color 0.2s; white-space: nowrap;
  }
  .btn-whatsapp-white svg { width: 13px; height: 13px; fill: currentColor; flex-shrink: 0; }

  /* ── Section base ── */
  .section { padding: 88px 80px; }
  .section-alt { background: var(--warm-bg); }
  .section-dark { background: var(--near-black); color: var(--white); }
  .section-tag {
    font-size: 9px; letter-spacing: 0.24em; text-transform: uppercase;
    color: var(--gold); margin-bottom: 14px; display: block;
  }
  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(30px, 3.5vw, 48px); font-weight: 300; font-style: italic;
    line-height: 1.1; color: inherit;
  }
  .section-header {
    display: flex; align-items: flex-end; justify-content: space-between;
    margin-bottom: 52px; gap: 16px;
  }

  /* ── Hero ── */
  .hero {
    display: grid; grid-template-columns: 1fr 1fr;
    min-height: 600px; max-height: 680px;
  }
  .hero-content {
    display: flex; flex-direction: column; justify-content: center;
    padding: 64px 64px 64px 80px; background: var(--cream);
  }
  .hero-tag { font-size: 10px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; }
  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(44px, 5vw, 74px); font-weight: 300; font-style: italic;
    line-height: 1.02; letter-spacing: -0.01em; margin-bottom: 22px; color: var(--near-black);
  }
  .hero-subtitle {
    font-size: 14px; font-weight: 300; line-height: 1.8; color: var(--mid-grey);
    max-width: 380px; margin-bottom: 36px; letter-spacing: 0.02em;
  }
  .hero-actions { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; }
  .hero-image { overflow: hidden; background: var(--warm-bg); position: relative; }
  .hero-image-placeholder {
    width: 100%; height: 100%; min-height: 300px;
    background: linear-gradient(160deg, #E4DDD0 0%, #C8BCA8 60%, #BFB09A 100%);
    display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 12px; color: var(--mid-grey);
    font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  }

  /* ── Trust Bar ── */
  .trust-bar {
    background: var(--cream); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    display: flex; align-items: stretch;
  }
  .trust-bar-cell {
    flex: 1; display: flex; align-items: center; justify-content: center; gap: 12px;
    padding: 20px 24px; border-right: 1px solid var(--border);
    white-space: nowrap;
  }
  .trust-bar-cell:last-child { border-right: none; }
  .trust-bar-label {
    font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--near-black);
  }
  .trust-bar-sub {
    font-size: 10px; letter-spacing: 0.08em; color: var(--mid-grey);
  }
  .trust-bar-stars { display: flex; gap: 2px; }
  .trust-bar-star { color: var(--gold); font-size: 10px; }

  /* ── Treatments Grid ── */
  .treatments-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin-top: 52px;
  }
  .treatment-card {
    display: flex; flex-direction: column; cursor: pointer;
    transition: opacity 0.2s;
  }
  .treatment-card:hover { opacity: 0.88; }
  .treatment-card-image {
    aspect-ratio: 3/4; overflow: hidden; position: relative;
  }
  .treatment-card-img-placeholder {
    width: 100%; height: 100%;
    display: flex; align-items: flex-end; padding: 20px;
  }
  .treatment-card:nth-child(1) .treatment-card-img-placeholder { background: linear-gradient(160deg, #E4DDD0 0%, #C8BCA8 100%); }
  .treatment-card:nth-child(2) .treatment-card-img-placeholder { background: linear-gradient(160deg, #DDD6C8 0%, #C0B49C 100%); }
  .treatment-card:nth-child(3) .treatment-card-img-placeholder { background: linear-gradient(160deg, #D8D0C2 0%, #B8AA92 100%); }
  .treatment-card:nth-child(4) .treatment-card-img-placeholder { background: linear-gradient(160deg, #D4CCC0 0%, #B4A890 100%); }
  .treatment-card-body { padding: 20px 0 0; display: flex; flex-direction: column; flex: 1; }
  .treatment-card-cat {
    font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 6px;
  }
  .treatment-card-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px; font-weight: 300; font-style: italic;
    color: var(--near-black); line-height: 1.15; margin-bottom: 8px;
  }
  .treatment-card-desc {
    font-size: 12px; font-weight: 300; line-height: 1.7; color: var(--mid-grey); flex: 1;
  }
  .treatment-card-footer {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border);
  }
  .treatment-card-link {
    display: inline-flex; align-items: center; gap: 6px;
    font-size: 9px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--near-black);
    border-bottom: 1px solid var(--border); padding-bottom: 2px;
  }
  .treatment-card-price {
    font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--mid-grey);
  }
  .treatments-footer { display: flex; justify-content: center; margin-top: 52px; }

  /* ── Shop / Ecom ── */
  .shop-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; margin-top: 52px;
  }
  .shop-card { display: flex; flex-direction: column; cursor: pointer; transition: opacity 0.2s; }
  .shop-card:hover { opacity: 0.88; }
  .shop-card-image { aspect-ratio: 1/1; overflow: hidden; position: relative; }
  .shop-card-img-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
  .shop-card:nth-child(1) .shop-card-img-placeholder { background: linear-gradient(160deg, #E8E0D4 0%, #D0C8B8 100%); }
  .shop-card:nth-child(2) .shop-card-img-placeholder { background: linear-gradient(160deg, #E0D8CC 0%, #C8C0B0 100%); }
  .shop-card:nth-child(3) .shop-card-img-placeholder { background: linear-gradient(160deg, #D8D0C4 0%, #C0B8A8 100%); }
  .shop-card:nth-child(4) .shop-card-img-placeholder { background: linear-gradient(160deg, #D4CCC0 0%, #BCB4A4 100%); }
  .shop-card-body { padding: 16px 0 0; display: flex; flex-direction: column; flex: 1; }
  .shop-card-brand { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 5px; }
  .shop-card-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px; font-weight: 300; font-style: italic;
    color: var(--near-black); line-height: 1.2; margin-bottom: 6px; flex: 1;
  }
  .shop-card-footer {
    display: flex; align-items: center; justify-content: space-between;
    margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border);
  }
  .shop-card-price { font-size: 12px; font-weight: 300; color: var(--near-black); letter-spacing: 0.04em; }
  .shop-card-add {
    font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--near-black);
    background: none; border: 1px solid var(--border); padding: 7px 12px; cursor: pointer;
    transition: background 0.2s, color 0.2s; font-family: 'Jost', sans-serif;
  }
  .shop-card-add:hover { background: var(--near-black); color: var(--white); }

  /* ── Why Us ── */
  .why-grid {
    display: grid; grid-template-columns: repeat(3, 1fr);
    gap: 0; margin-top: 56px; border-top: 1px solid var(--border);
  }
  .why-card {
    padding: 48px 48px 48px 0;
    border-right: 1px solid var(--border);
    display: flex; flex-direction: column; gap: 16px;
  }
  .why-card:last-child { border-right: none; padding-right: 0; }
  .why-card:not(:first-child) { padding-left: 48px; }
  .why-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 56px; font-weight: 300; line-height: 1;
    color: rgba(184,150,90,0.2); letter-spacing: -0.02em;
  }
  .why-title {
    font-size: 10px; letter-spacing: 0.18em; text-transform: uppercase; color: var(--near-black);
  }
  .why-body {
    font-size: 13px; font-weight: 300; line-height: 1.8; color: var(--mid-grey); letter-spacing: 0.02em;
  }

  /* ── Shop intro ── */
  .shop-intro {
    display: grid; grid-template-columns: 1fr 1fr; gap: 80px;
    align-items: end; margin-bottom: 52px;
  }
  .shop-intro-body {
    font-size: 14px; font-weight: 300; line-height: 1.85; color: var(--mid-grey); letter-spacing: 0.02em; text-align: left;
  }

  /* ── About ── */
  .about-grid {
    display: grid; grid-template-columns: 1fr 1fr; gap: 0; align-items: stretch;
  }
  .about-image {
    background: linear-gradient(175deg, #E0D8C8 0%, #C4B89A 100%);
    min-height: 560px; display: flex; align-items: center; justify-content: center;
    flex-direction: column; gap: 10px; color: var(--mid-grey);
    font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase;
  }
  .about-content {
    padding: 72px 80px; display: flex; flex-direction: column; justify-content: center; background: var(--warm-bg);
  }
  .about-body {
    font-size: 14px; font-weight: 300; line-height: 1.85; color: var(--mid-grey);
    margin-top: 28px; margin-bottom: 36px; max-width: 440px;
  }
  .about-awards { display: flex; gap: 20px; margin-top: 36px; padding-top: 36px; border-top: 1px solid var(--border); flex-wrap: wrap; }
  .award-badge {
    display: flex; align-items: center; gap: 10px;
    font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase; color: var(--near-black);
  }
  .award-icon {
    width: 36px; height: 36px; border: 1px solid var(--border);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
  }
  .award-icon svg { width: 18px; height: 18px; stroke: var(--gold); fill: none; stroke-width: 1.25; }

  /* ── CTA Banner ── */
  .cta-banner {
    background: var(--warm-bg); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);
    padding: 36px 80px; display: flex; align-items: center; justify-content: space-between; gap: 32px;
  }
  .cta-banner-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(18px, 2vw, 26px); font-weight: 300; font-style: italic; color: var(--near-black);
  }
  .cta-banner-sub { font-size: 12px; font-weight: 300; color: var(--mid-grey); margin-top: 5px; letter-spacing: 0.04em; }
  .cta-actions { display: flex; align-items: center; gap: 28px; flex-shrink: 0; flex-wrap: wrap; }

  /* ── B&A ── */
  .ba-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
  .ba-label { font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--mid-grey); margin-top: 14px; display: block; }
  .ba-slider {
    position: relative; aspect-ratio: 3/4; overflow: hidden; cursor: col-resize; user-select: none;
  }
  .ba-slider-after {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #D8D0C2 0%, #C4BAA8 100%);
    display: flex; align-items: flex-end; justify-content: flex-start; padding: 10px;
  }
  .ba-slider-before {
    position: absolute; inset: 0; overflow: hidden;
  }
  .ba-slider-before-inner {
    position: absolute; inset: 0;
    background: linear-gradient(135deg, #E8E0D0 0%, #D4C9B5 100%);
    display: flex; align-items: flex-end; justify-content: flex-start; padding: 10px;
  }
  .ba-slide-label {
    font-size: 8px; letter-spacing: 0.18em; text-transform: uppercase;
    color: rgba(10,10,10,0.45); pointer-events: none;
  }
  .ba-divider {
    position: absolute; top: 0; bottom: 0; width: 1px;
    background: var(--white); pointer-events: none; z-index: 3;
  }
  .ba-handle {
    position: absolute; top: 50%; transform: translate(-50%, -50%);
    width: 36px; height: 36px; border-radius: 50%;
    background: var(--white); border: 1px solid rgba(10,10,10,0.12);
    display: flex; align-items: center; justify-content: center;
    pointer-events: none; z-index: 4; gap: 5px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.12);
  }
  .ba-handle-arrow { width: 0; height: 0; border-top: 4px solid transparent; border-bottom: 4px solid transparent; }
  .ba-handle-arrow.left { border-right: 5px solid rgba(10,10,10,0.4); }
  .ba-handle-arrow.right { border-left: 5px solid rgba(10,10,10,0.4); }
  .ba-placeholder-person {
    position: absolute; inset: 0;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px;
    pointer-events: none;
  }

  /* ── Reviews ── */
  .reviews-track-wrapper { overflow: hidden; }
  .reviews-track {
    display: flex; gap: 24px;
    transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94); will-change: transform;
  }
  .review-card {
    flex-shrink: 0; border: 1px solid var(--border); padding: 36px 32px;
    background: var(--cream); display: flex; flex-direction: column; gap: 18px;
  }
  .review-stars { display: flex; gap: 3px; }
  .star { color: var(--gold); font-size: 12px; }
  .review-text {
    font-family: 'Cormorant Garamond', serif;
    font-size: 17px; font-style: italic; font-weight: 300; line-height: 1.65;
    color: var(--near-black); flex: 1;
  }
  .review-meta {
    display: flex; align-items: center; justify-content: space-between;
    padding-top: 18px; border-top: 1px solid var(--border);
  }
  .review-author { font-size: 10px; letter-spacing: 0.16em; text-transform: uppercase; color: var(--near-black); }
  .review-verified {
    font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold);
    display: flex; align-items: center; gap: 5px;
  }
  .review-controls { display: flex; align-items: center; gap: 14px; margin-top: 36px; }
  .review-nav {
    width: 44px; height: 44px; border: 1px solid var(--border);
    background: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    font-size: 16px; color: var(--near-black); transition: background 0.2s, color 0.2s;
  }
  .review-nav:hover { background: var(--near-black); color: var(--white); }
  .review-nav:disabled { opacity: 0.3; cursor: default; }
  .review-dots { display: flex; gap: 6px; }
  .rdot { width: 5px; height: 5px; border-radius: 50%; background: var(--border); cursor: pointer; transition: background 0.2s; }
  .rdot.active { background: var(--near-black); }

  /* ── UGC ── */
  .ugc-intro { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 40px; gap: 20px; }
  .ugc-handle { font-size: 11px; letter-spacing: 0.12em; color: var(--mid-grey); display: flex; align-items: center; gap: 7px; }
  .ugc-handle svg { width: 14px; height: 14px; fill: var(--mid-grey); }
  .ugc-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
  .ugc-card { position: relative; aspect-ratio: 9/16; overflow: hidden; background: var(--warm-bg); cursor: pointer; }
  .ugc-card:hover .ugc-play { transform: translate(-50%, -50%) scale(1.08); }
  .ugc-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; }
  .ugc-card:nth-child(1) .ugc-placeholder { background: linear-gradient(160deg, #E4DDD0 0%, #CFC8BA 100%); }
  .ugc-card:nth-child(2) .ugc-placeholder { background: linear-gradient(160deg, #DDD6C8 0%, #C8C0B0 100%); }
  .ugc-card:nth-child(3) .ugc-placeholder { background: linear-gradient(160deg, #D8D0C2 0%, #C4BAA8 100%); }
  .ugc-card:nth-child(4) .ugc-placeholder { background: linear-gradient(160deg, #D4CCC0 0%, #C0B8A6 100%); }
  .ugc-play {
    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
    width: 48px; height: 48px; border-radius: 50%;
    background: rgba(255,255,255,0.18); backdrop-filter: blur(4px);
    border: 1px solid rgba(255,255,255,0.4);
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.2s;
  }
  .ugc-play svg { width: 14px; height: 14px; fill: var(--white); margin-left: 2px; }
  .ugc-meta {
    position: absolute; bottom: 0; left: 0; right: 0; padding: 16px;
    background: linear-gradient(to top, rgba(10,10,10,0.72) 0%, transparent 100%);
  }
  .ugc-name { font-size: 10px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--white); display: block; }
  .ugc-tag { font-size: 9px; letter-spacing: 0.08em; color: rgba(255,255,255,0.6); margin-top: 3px; display: block; }
  .ugc-footer { margin-top: 28px; text-align: center; font-size: 11px; font-weight: 300; letter-spacing: 0.1em; color: var(--mid-grey); }
  .ugc-footer a { color: var(--near-black); border-bottom: 1px solid var(--border); padding-bottom: 2px; text-decoration: none; }

  /* ── FAQ (homepage) ── */
  .hp-faq-list { margin-top: 48px; border-top: 1px solid var(--border); max-width: 760px; }
  .hp-faq-item { border-bottom: 1px solid var(--border); }
  .hp-faq-q {
    width: 100%; padding: 22px 0; display: flex; align-items: center; justify-content: space-between;
    background: none; border: none; cursor: pointer; text-align: left;
    font-family: 'Cormorant Garamond', serif; font-size: 19px; font-weight: 300; font-style: italic;
    color: var(--near-black); gap: 20px;
  }
  .hp-faq-icon { font-size: 22px; font-weight: 200; color: var(--gold); flex-shrink: 0; transition: transform 0.3s; font-style: normal; font-family: 'Jost', sans-serif; }
  .hp-faq-icon.open { transform: rotate(45deg); }
  .hp-faq-a { overflow: hidden; max-height: 0; opacity: 0; transition: max-height 0.35s ease, opacity 0.3s; }
  .hp-faq-a.open { max-height: 200px; opacity: 1; }
  .hp-faq-a-inner { padding-bottom: 22px; font-size: 13px; font-weight: 300; line-height: 1.8; color: var(--mid-grey); }

  /* ── Sticky Mobile CTA Bar ── */
  .sticky-cta-bar {
    display: none;
  }
  @media (max-width: 768px) {
    .sticky-cta-bar {
      display: flex; flex-direction: column; gap: 0;
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 300;
      box-shadow: 0 -4px 20px rgba(0,0,0,0.12);
    }
    .sticky-cta-main {
      background: var(--near-black); color: var(--white);
      font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 400;
      letter-spacing: 0.2em; text-transform: uppercase;
      padding: 18px 24px; border: none; cursor: pointer; text-align: center;
    }
    .sticky-cta-sub {
      background: var(--cream); border-top: 1px solid var(--border);
      display: flex; align-items: center; justify-content: center; gap: 20px;
      padding: 10px 24px;
    }
    .sticky-cta-signal {
      font-size: 9px; letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--mid-grey); display: flex; align-items: center; gap: 5px;
    }
    .sticky-cta-signal::before {
      content: ''; width: 4px; height: 4px; border-radius: 50%;
      background: var(--gold); display: inline-block; flex-shrink: 0;
    }
    /* Add bottom padding to page so content isn't hidden behind bar */
    body { padding-bottom: 88px; }
  }

  /* ── CTA Safety Signal ── */
  .cta-safety {
    display: flex; align-items: center; gap: 16px; margin-top: 16px; flex-wrap: wrap;
  }
  .cta-safety-item {
    display: flex; align-items: center; gap: 6px;
    font-size: 10px; font-weight: 300; color: var(--mid-grey); letter-spacing: 0.06em;
  }
  .cta-safety-item::before {
    content: ''; width: 3px; height: 3px; border-radius: 50%;
    background: var(--gold); display: inline-block; flex-shrink: 0;
  }
  .cta-safety-dark .cta-safety-item { color: rgba(255,255,255,0.4); }

  /* ── Final CTA ── */
  .final-cta {
    background: var(--near-black); padding: 100px 80px;
    display: flex; flex-direction: column; align-items: center; text-align: center;
  }
  .final-cta-eyebrow { font-size: 9px; letter-spacing: 0.28em; text-transform: uppercase; color: var(--gold); margin-bottom: 22px; }
  .final-cta-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(36px, 5vw, 60px); font-weight: 300; font-style: italic;
    color: var(--white); line-height: 1.1; max-width: 560px; margin-bottom: 18px;
  }
  .final-cta-sub { font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.45); letter-spacing: 0.04em; margin-bottom: 44px; }
  .final-cta-actions { display: flex; align-items: center; gap: 28px; flex-wrap: wrap; justify-content: center; margin-bottom: 52px; }
  .trust-strip { display: flex; align-items: center; gap: 36px; padding-top: 44px; border-top: 1px solid rgba(255,255,255,0.1); flex-wrap: wrap; justify-content: center; }
  .trust-item { display: flex; flex-direction: column; align-items: center; gap: 5px; }
  .trust-val { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 300; color: var(--white); line-height: 1; }
  .trust-label { font-size: 9px; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
  .trust-divider { width: 1px; height: 36px; background: rgba(255,255,255,0.1); }

  /* ── Footer ── */
  .footer {
    background: var(--near-black); border-top: 1px solid rgba(255,255,255,0.08);
    padding: 64px 80px 40px;
  }
  .footer-grid {
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 64px; margin-bottom: 64px;
  }
  .footer-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px; font-weight: 300; letter-spacing: 0.3em; text-transform: uppercase;
    color: var(--white); margin-bottom: 20px;
  }
  .footer-tagline { font-size: 12px; font-weight: 300; line-height: 1.75; color: rgba(255,255,255,0.4); max-width: 240px; }
  .footer-col-title { font-size: 9px; letter-spacing: 0.2em; text-transform: uppercase; color: var(--gold); margin-bottom: 20px; display: block; }
  .footer-link {
    display: block; font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.55);
    letter-spacing: 0.06em; margin-bottom: 12px; cursor: pointer;
    transition: color 0.2s; text-decoration: none;
  }
  .footer-link:hover { color: var(--white); }
  .footer-contact-item { display: flex; flex-direction: column; gap: 2px; margin-bottom: 14px; }
  .footer-contact-label { font-size: 9px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,0.3); }
  .footer-contact-value { font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.55); }
  .footer-hours-row { display: flex; justify-content: space-between; font-size: 11px; font-weight: 300; color: rgba(255,255,255,0.45); margin-bottom: 8px; }
  .footer-bottom {
    padding-top: 32px; border-top: 1px solid rgba(255,255,255,0.08);
    display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;
  }
  .footer-legal { font-size: 10px; letter-spacing: 0.08em; color: rgba(255,255,255,0.25); }
  .footer-legal-links { display: flex; gap: 24px; }
  .footer-legal-link { font-size: 10px; letter-spacing: 0.08em; color: rgba(255,255,255,0.3); cursor: pointer; text-decoration: none; }
  .footer-legal-link:hover { color: rgba(255,255,255,0.6); }
  .cqc-badge {
    display: flex; align-items: center; gap: 8px;
    font-size: 9px; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255,255,255,0.35);
  }
  .cqc-icon {
    width: 28px; height: 28px; border: 1px solid rgba(255,255,255,0.15);
    display: flex; align-items: center; justify-content: center;
    font-family: 'Cormorant Garamond', serif; font-size: 10px; color: rgba(255,255,255,0.4);
  }

  /* ═══════════════ MOBILE ═══════════════ */
  @media (max-width: 768px) {
    .announce-bar { height: 32px; font-size: 9px; }
    .hide-mobile { display: none; }
    .nav { height: 56px; }
    .nav-left { display: none; }
    .nav-cell.shop, .nav-cell.book { display: none; }
    .nav-logo { font-size: 17px; letter-spacing: 0.22em; }
    .nav-hamburger { display: flex; }

    .hero { grid-template-columns: 1fr; grid-template-rows: auto 60vw; min-height: unset; max-height: unset; }
    .hero-content { grid-row: 1; padding: 40px 20px 44px; }
    .hero-title { font-size: clamp(38px, 9vw, 52px); margin-bottom: 14px; }
    .hero-subtitle { font-size: 13px; margin-bottom: 24px; max-width: 100%; }
    .hero-image { grid-row: 2; min-height: 60vw; }
    .btn-ghost { display: none; }
    .btn-primary { width: 100%; text-align: center; }
    .btn-whatsapp { width: 100%; justify-content: center; }
    .hero-actions { flex-direction: column; align-items: stretch; gap: 12px; }

    .trust-bar-cell { padding: 16px 20px; }

    .section { padding: 52px 20px; }
    .section-header { flex-direction: column; align-items: flex-start; margin-bottom: 32px; gap: 8px; }
    .section-title { font-size: clamp(28px, 7vw, 36px); }

    .treatments-grid { grid-template-columns: 1fr 1fr; gap: 16px 2px; }
    .shop-grid { grid-template-columns: 1fr 1fr; gap: 16px 2px; }
    .shop-intro { grid-template-columns: 1fr; gap: 16px; margin-bottom: 32px; }
    .why-grid { grid-template-columns: 1fr; margin-top: 36px; }
    .why-card { padding: 32px 0; border-right: none; border-bottom: 1px solid var(--border); }
    .why-card:last-child { border-bottom: none; }
    .why-card:not(:first-child) { padding-left: 0; }
    .treatments-footer { margin-top: 36px; }
    .treatments-footer .btn-primary { width: 100%; text-align: center; }

    .about-grid { grid-template-columns: 1fr; }
    .about-image { min-height: 60vw; }
    .about-content { padding: 44px 20px; }
    .about-body { font-size: 13px; margin-bottom: 24px; max-width: 100%; }

    .cta-banner { padding: 28px 20px; flex-direction: column; align-items: flex-start; gap: 20px; }
    .cta-banner .btn-primary { width: 100%; text-align: center; }
    .cta-actions { flex-direction: column; align-items: stretch; gap: 12px; width: 100%; }

    .ba-grid { grid-template-columns: 1fr; gap: 24px; }
    .ba-slider { aspect-ratio: 4/3; }

    .review-card { min-width: calc(100vw - 40px); padding: 24px 20px; }
    .review-controls { margin-top: 20px; }

    .ugc-grid { grid-template-columns: repeat(2, 1fr); }
    .ugc-intro { flex-direction: column; align-items: flex-start; gap: 10px; }

    .final-cta { padding: 64px 20px; }
    .final-cta-title { font-size: clamp(30px, 8vw, 40px); }
    .final-cta-actions { flex-direction: column; align-items: stretch; }
    .btn-primary-white { width: 100%; text-align: center; }
    .btn-whatsapp-white { justify-content: center; width: 100%; }
    .trust-strip { gap: 16px; padding-top: 32px; }
    .trust-divider { display: none; }

    .footer { padding: 52px 20px 32px; }
    .footer-grid { grid-template-columns: 1fr 1fr; gap: 40px; }
    .footer-bottom { flex-direction: column; align-items: flex-start; gap: 16px; }
  }

  @media (max-width: 480px) {
    .section { padding: 40px 16px; }
    .hero-content { padding: 32px 16px 44px; }
    .treatments-grid { grid-template-columns: 1fr; }
    .cta-banner { padding: 24px 16px; }
    .final-cta { padding: 52px 16px; }
    .footer { padding: 44px 16px 28px; }
    .footer-grid { grid-template-columns: 1fr; gap: 32px; }
  }
`;

// ─── Data ────────────────────────────────────────────────────────────────────
const REVIEWS = [
  { stars: 5, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim.", author: "A. Lorem" },
  { stars: 5, text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.", author: "B. Ipsum" },
  { stars: 5, text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.", author: "C. Dolor" },
  { stars: 5, text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed perspiciatis.", author: "D. Amet" },
];

const TREATMENT_CATS = [
  { tag: "Category", name: "Lorem\nIpsum", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor." },
  { tag: "Category", name: "Dolor\nSit", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor." },
  { tag: "Category", name: "Amet\nConsectetur", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor." },
  { tag: "Category", name: "Adipiscing\nElit", desc: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor." },
];

const BA_PAIRS = [{ concern: "Lorem" }, { concern: "Ipsum" }, { concern: "Dolor" }];

// ─── Sub-components ───────────────────────────────────────────────────────────
const WA_ICON = () => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function StarRow({ n }) {
  return (
    <div className="review-stars">
      {Array.from({ length: n }).map((_, i) => <span key={i} className="star">★</span>)}
    </div>
  );
}

function ReviewCarousel() {
  const [idx, setIdx] = useState(0);
  const visible = typeof window !== "undefined" && window.innerWidth <= 768 ? 1 : 3;
  const max = Math.max(0, REVIEWS.length - visible);
  const cardPct = 100 / visible;
  return (
    <div>
      <div className="reviews-track-wrapper">
        <div className="reviews-track" style={{ transform: `translateX(calc(-${idx * cardPct}% - ${idx * 24}px))` }}>
          {REVIEWS.map((r, i) => (
            <div key={i} className="review-card" style={{ minWidth: `calc(${cardPct}% - ${visible > 1 ? 16 : 0}px)` }}>
              <StarRow n={r.stars} />
              <p className="review-text">"{r.text}"</p>
              <div className="review-meta">
                <span className="review-author">{r.author}</span>
                <span className="review-verified">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4.5" stroke="#B8965A" />
                    <path d="M2.5 5l1.8 1.8 3.2-3.2" stroke="#B8965A" strokeWidth="1" strokeLinecap="round" />
                  </svg>
                  Verified patient
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="review-controls">
        <button className="review-nav" onClick={() => setIdx(i => Math.max(0, i - 1))} disabled={idx === 0}>←</button>
        <button className="review-nav" onClick={() => setIdx(i => Math.min(max, i + 1))} disabled={idx >= max}>→</button>
        <div className="review-dots">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <div key={i} className={`rdot ${i === idx ? "active" : ""}`} onClick={() => setIdx(i)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function BaSlider({ concern }) {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);
  const dragging = useRef(false);
  const getPos = (clientX) => {
    const rect = ref.current.getBoundingClientRect();
    return (Math.max(0, Math.min(clientX - rect.left, rect.width)) / rect.width) * 100;
  };
  return (
    <div className="ba-slider" ref={ref}
      onMouseDown={(e) => { dragging.current = true; e.preventDefault(); }}
      onMouseMove={(e) => { if (dragging.current) setPos(getPos(e.clientX)); }}
      onMouseUp={() => { dragging.current = false; }}
      onMouseLeave={() => { dragging.current = false; }}
      onTouchMove={(e) => setPos(getPos(e.touches[0].clientX))}
    >
      <div className="ba-slider-after">
        <div className="ba-placeholder-person">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.18)" strokeWidth="1">
            <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
          </svg>
        </div>
        <span className="ba-slide-label">After</span>
      </div>
      <div className="ba-slider-before" style={{ width: `${pos}%` }}>
        <div className="ba-slider-before-inner">
          <div className="ba-placeholder-person">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.18)" strokeWidth="1">
              <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
          </div>
          <span className="ba-slide-label">Before</span>
        </div>
      </div>
      <div className="ba-divider" style={{ left: `${pos}%` }} />
      <div className="ba-handle" style={{ left: `${pos}%` }}>
        <span className="ba-handle-arrow left" />
        <span className="ba-handle-arrow right" />
      </div>
    </div>
  );
}

function CtaBanner({ headline, sub }) {
  return (
    <div className="cta-banner">
      <div>
        <p className="cta-banner-text">{headline}</p>
        {sub && <p className="cta-banner-sub">{sub}</p>}
        <div className="cta-safety" style={{ marginTop: 10 }}>
          {["Lorem", "Ipsum", "Dolor"].map(s => (
            <span key={s} className="cta-safety-item">{s}</span>
          ))}
        </div>
      </div>
      <div className="cta-actions">
        <button className="btn-primary">Book Consultation</button>
        <button className="btn-whatsapp"><WA_ICON /> WhatsApp Us</button>
      </div>
    </div>
  );
}

const HP_FAQS = [
  { q: "Lorem ipsum dolor sit amet?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim." },
  { q: "Consectetur adipiscing elit?", a: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor reprehenderit." },
  { q: "Sed do eiusmod tempor?", a: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non." },
  { q: "Ut labore et dolore magna?", a: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis." },
];

const SHOP_PRODUCTS = [
  { brand: "Brand", name: "Lorem Ipsum\nSerum", price: "£00.00" },
  { brand: "Brand", name: "Dolor Sit\nAmet", price: "£00.00" },
  { brand: "Brand", name: "Consectetur\nCream", price: "£00.00" },
  { brand: "Brand", name: "Adipiscing\nElite", price: "£00.00" },
];

function HpFaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="hp-faq-item">
      <button className="hp-faq-q" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className={`hp-faq-icon ${open ? "open" : ""}`}>+</span>
      </button>
      <div className={`hp-faq-a ${open ? "open" : ""}`}>
        <div className="hp-faq-a-inner">{a}</div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Homepage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <FontLink />
      <style>{css}</style>

      {/* Announcement Bar */}
      <div className="announce-bar">
        <span className="announce-item">Lorem ipsum dolor sit amet</span>
        <span className="hide-mobile">
          <span className="announce-sep">&nbsp;·&nbsp;</span>
          <span className="announce-item">Consectetur adipiscing elit</span>
          <span className="announce-sep">&nbsp;·&nbsp;</span>
          <span className="announce-item">Lorem</span>
        </span>
      </div>

      {/* Nav */}
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-cell">Treatments</a>
          <a className="nav-cell">The Clinic</a>
        </div>
        <div className="nav-logo">D R &nbsp; R A S H A</div>
        <div className="nav-right">
          <a className="nav-cell shop">Shop</a>
          <button className="nav-cell book">Book Consultation</button>
          <div className="nav-cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="ham-line" style={menuOpen ? { transform: "translateY(6px) rotate(45deg)" } : {}} />
            <span className="ham-line" style={menuOpen ? { opacity: 0 } : {}} />
            <span className="ham-line" style={menuOpen ? { transform: "translateY(-6px) rotate(-45deg)" } : {}} />
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {["Treatments", "The Clinic", "About Dr Rasha", "Shop", "Patient Results"].map(item => (
          <div key={item} className="mobile-menu-item" onClick={() => setMenuOpen(false)}>{item}<span>›</span></div>
        ))}
        <button className="mobile-menu-book" onClick={() => setMenuOpen(false)}>Book Consultation</button>
      </div>

      {/* ① Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Location</span>
          <h1 className="hero-title">Lorem Ipsum<br />Dolor Sit<br />Amet</h1>
          <p className="hero-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32, marginTop: -12 }}>
            {[
              "Lorem ipsum dolor sit amet",
              "Consectetur adipiscing elit",
            ].map(b => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, fontWeight: 300, color: "var(--mid-grey)", letterSpacing: "0.04em" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold)", flexShrink: 0, display: "inline-block" }} />
                {b}
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 2 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" style={{ flexShrink: 0 }}>
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 3.8 2.4-7.4L2 9.4h7.6z"/>
              </svg>
              <span style={{ fontSize: 11, fontWeight: 400, color: "var(--near-black)", letterSpacing: "0.06em" }}>Trustpilot</span>
              <div style={{ display: "flex", gap: 2 }}>
                {[1,2,3,4,5].map(i => <span key={i} style={{ color: "var(--gold)", fontSize: 12 }}>★</span>)}
              </div>
              <span style={{ fontSize: 11, fontWeight: 300, color: "var(--mid-grey)", letterSpacing: "0.04em" }}>0.0 · 000 reviews</span>
            </div>
          </div>
          <div className="hero-actions">
            <button className="btn-primary">Book Consultation</button>
            <button className="btn-whatsapp"><WA_ICON /> WhatsApp Us</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-placeholder">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.2)" strokeWidth="1">
              <rect x="3" y="3" width="18" height="18" rx="1" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
            </svg>
            <span>Hero Image</span>
          </div>
        </div>
      </section>

      {/* ② Trust Bar */}
      <div className="trust-bar">
        {[
          { icon: "★", label: "Lorem", sub: "0.0 · 000" },
          { icon: "◇", label: "Ipsum", sub: "Award 0000" },
          { icon: "✦", label: "Dolor", sub: "Sit amet" },
          { icon: "◈", label: "Consectetur", sub: "Adipiscing" },
        ].map((item) => (
          <div key={item.label} className="trust-bar-cell">
            <span style={{ fontSize: 14, color: "var(--gold)", flexShrink: 0 }}>{item.icon}</span>
            <div>
              <div className="trust-bar-label">{item.label}</div>
              <div className="trust-bar-sub">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ③ Treatments */}
      <section className="section">
        <div className="section-header">
          <div>
            <span className="section-tag">Treatments</span>
            <h2 className="section-title">Lorem ipsum</h2>
          </div>
          </div>
        <div className="treatments-grid">
          {TREATMENT_CATS.map((t, i) => (
            <div key={i} className="treatment-card">
              <div className="treatment-card-image">
                <div className="treatment-card-img-placeholder">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.2)" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="1" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
              <div className="treatment-card-body">
                <p className="treatment-card-cat">{t.tag}</p>
                <h3 className="treatment-card-name">
                  {t.name.split("\n").map((line, j) => <span key={j}>{line}{j < t.name.split("\n").length - 1 && <br />}</span>)}
                </h3>
                <p className="treatment-card-desc">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ④ Why Us */}
      <section className="section section-alt">
        <div className="section-header">
          <div>
            <span className="section-tag">Why Us</span>
            <h2 className="section-title">Lorem ipsum dolor</h2>
          </div>
        </div>
        <div className="why-grid">
          {[
            { num: "01", title: "Lorem", body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            { num: "02", title: "Ipsum", body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure." },
            { num: "03", title: "Dolor", body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat." },
          ].map((item) => (
            <div key={item.num} className="why-card">
              <span className="why-num">{item.num}</span>
              <h3 className="why-title">{item.title}</h3>
              <p className="why-body">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ⑤ Reviews */}
      <section className="section section-alt">
        <div className="section-header">
          <div>
            <span className="section-tag">Testimonials</span>
            <h2 className="section-title">Lorem ipsum</h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
            <StarRow n={5} />
            <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--mid-grey)", textTransform: "uppercase", whiteSpace: "nowrap" }}>0.0 · 000</span>
          </div>
        </div>
        <ReviewCarousel />
      </section>

      {/* ⑤ CTA Banner */}
      <CtaBanner
        headline="Lorem ipsum dolor sit amet."
        sub="Consectetur adipiscing elit sed do eiusmod tempor."
      />

      {/* ⑥ Before & After */}
      <section className="section section-alt">
        <div className="section-header">
          <div>
            <span className="section-tag">Results</span>
            <h2 className="section-title">Before &amp; After</h2>
          </div>
        </div>
        <div className="ba-grid">
          {BA_PAIRS.map((pair, i) => (
            <div key={i}>
              <BaSlider concern={pair.concern} />
              <span className="ba-label">{pair.concern}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ⑨ Shop */}
      <section className="section">
        <div className="section-header">
          <div>
            <span className="section-tag">Shop</span>
            <h2 className="section-title">Lorem ipsum</h2>
          </div>
        </div>
        <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.85, color: "var(--mid-grey)", letterSpacing: "0.02em", maxWidth: 560, marginBottom: 52 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco.
        </p>
        <div className="shop-grid">
          {SHOP_PRODUCTS.map((p, i) => (
            <div key={i} className="shop-card">
              <div className="shop-card-image">
                <div className="shop-card-img-placeholder">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(10,10,10,0.2)" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="1" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
              </div>
              <div className="shop-card-body">
                <p className="shop-card-brand">{p.brand}</p>
                <h3 className="shop-card-name">
                  {p.name.split("\n").map((line, j) => <span key={j}>{line}{j < p.name.split("\n").length - 1 && <br />}</span>)}
                </h3>
                <div className="shop-card-footer">
                  <span className="shop-card-price">{p.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="treatments-footer">
          <button className="btn-primary">Lorem ipsum</button>
        </div>
      </section>

      {/* ⑩ Final CTA */}
      <section className="final-cta">
        <p className="final-cta-eyebrow">Lorem</p>
        <h2 className="final-cta-title">Lorem ipsum dolor sit</h2>
        <p className="final-cta-sub">Consectetur · Adipiscing · Elit</p>
        <div className="final-cta-actions">
          <button className="btn-primary-white">Book Consultation</button>
          <button className="btn-whatsapp-white"><WA_ICON /> WhatsApp Us</button>
        </div>
        <div className="cta-safety cta-safety-dark" style={{ justifyContent: "center", marginBottom: 44 }}>
          {["Lorem", "Ipsum", "Dolor"].map(s => (
            <span key={s} className="cta-safety-item">{s}</span>
          ))}
        </div>
        <div className="trust-strip">
          <div className="trust-item"><span className="trust-val">000+</span><span className="trust-label">Lorem</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-val">0.0★</span><span className="trust-label">Ipsum</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-val">ABC</span><span className="trust-label">Dolor</span></div>
          <div className="trust-divider" />
          <div className="trust-item"><span className="trust-val">0000</span><span className="trust-label">Amet</span></div>
        </div>
      </section>

      {/* ⑩ Footer */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">D R &nbsp; R A S H A</div>
            <p className="footer-tagline">Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
          </div>
          <div>
            <span className="footer-col-title">Navigation</span>
            {["Lorem", "Ipsum", "Dolor", "Amet", "Consectetur", "Adipiscing"].map(l => (
              <a key={l} className="footer-link">{l}</a>
            ))}
          </div>
          <div>
            <span className="footer-col-title">Contact</span>
            {[
              { label: "Phone", value: "000 000 0000" },
              { label: "WhatsApp", value: "00000 000000" },
              { label: "Email", value: "lorem@ipsum.com" },
              { label: "Address", value: "000 Lorem Road, Ipsum, XX0 0XX" },
            ].map(c => (
              <div key={c.label} className="footer-contact-item">
                <span className="footer-contact-label">{c.label}</span>
                <span className="footer-contact-value">{c.value}</span>
              </div>
            ))}
          </div>
          <div>
            <span className="footer-col-title">Hours</span>
            {[
              { day: "Monday – Friday", hours: "00am – 00pm" },
              { day: "Saturday", hours: "00am – 00pm" },
              { day: "Sunday", hours: "00am – 00pm" },
            ].map(h => (
              <div key={h.day} className="footer-hours-row">
                <span>{h.day}</span>
                <span>{h.hours}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-legal">© 0000 Lorem Ipsum. All Rights Reserved.</span>
          <div className="footer-legal-links">
            {["Lorem", "Ipsum", "Dolor"].map(l => (
              <a key={l} className="footer-legal-link">{l}</a>
            ))}
          </div>
          <div className="cqc-badge">
            <div className="cqc-icon">ABC</div>
            <span>Lorem Ipsum</span>
          </div>
        </div>
      </footer>
    </>
  );
}
