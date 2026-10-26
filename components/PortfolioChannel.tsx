"use client";
import React from "react";

type Channel = { label: string; kicker: string; headline: string; emphasis: string; intro: string; rows: { tag: string; title: string; text: string }[] };
const channels: Record<number, Channel> = {
  1: { label: "EXPERTISE", kicker: "OPERATIONS / CONTENT / STRATEGY", headline: "The work behind", emphasis: "the marketplace.", intro: "Practical support for Amazon brands, from daily account operations to cross-border catalog strategy.", rows: [
    { tag: "01 / OPERATIONS", title: "Vendor & Seller Central", text: "Account operations, support cases, product availability, compliance follow-up and everyday troubleshooting." },
    { tag: "02 / CATALOG", title: "Content & localization", text: "Catalog quality, listings, A+ content and market-specific copy for European marketplaces." },
    { tag: "03 / PERFORMANCE", title: "Marketplace strategy", text: "Pricing, operational reporting and practical decisions informed by marketplace data." }
  ] },
  2: { label: "EXPERIENCE", kicker: "SELECTED PROFESSIONAL WORK", headline: "Real work.", emphasis: "Real complexity.", intro: "Experience grounded in the daily operational reality of European marketplaces, without inflated case studies.", rows: [
    { tag: "CURRENT / INDEPENDENT", title: "Amazon & Marketplace Consultant", text: "Supporting brands with Vendor and Seller Central operations, multilingual catalog management and ongoing marketplace projects." },
    { tag: "PREVIOUS / AGENCY", title: "Senior Marketplace Platform Specialist", text: "Hands-on marketplace account operations, content, case management, promotions and performance reporting." }
  ] },
  3: { label: "INSIGHTS", kicker: "A JOURNAL OF MARKETPLACE WORK", headline: "Field notes.", emphasis: "Not fluff.", intro: "Ideas for practical articles, grounded in challenges brands and operators actually face. These are placeholders, not published articles.", rows: [
    { tag: "ARTICLE IDEA / 01", title: "Catalog quality is an operational issue", text: "Why content, data and everyday account workflows cannot be separated." },
    { tag: "ARTICLE IDEA / 02", title: "Behind product availability", text: "The less visible work behind a product being purchasable on Amazon." },
    { tag: "ARTICLE IDEA / 03", title: "Localization beyond translation", text: "Why European marketplaces need language-native search and content decisions." }
  ] },
  4: { label: "ABOUT", kicker: "BEHIND THE SCREEN", headline: "Independent.", emphasis: "Hands-on.", intro: "I work at the intersection of Amazon operations, marketplace content and international e-commerce. My approach is practical, collaborative and built around real priorities.", rows: [
    { tag: "APPROACH", title: "Clarity over complexity", text: "Understand the issue, identify what matters, and move the right work forward." },
    { tag: "SCOPE", title: "Europe, across marketplaces", text: "Experience working with multi-country catalog and operational requirements." }
  ] },
  5: { label: "CONTACT", kicker: "OPEN CHANNEL / LET'S CONNECT", headline: "Let's solve", emphasis: "what matters.", intro: "Need a partner for Vendor Central, Seller Central or European marketplace operations? Let's start a conversation.", rows: [
    { tag: "NEXT STEP", title: "Get in touch", text: "Contact information and a booking link will be added before publication." }
  ] }
};
export default function PortfolioChannel({ number }: { number: number }) {
  const c = channels[number];
  if (!c) return null;
  return (
    <section id={`ch-0${number}`} data-ch={number} aria-label={`Channel 0${number}, ${c.label}`}
      style={{ position: "relative", minHeight: "100%", scrollSnapAlign: "start", padding: "clamp(70px,9cqw,118px) clamp(20px,6cqw,84px)", background: "var(--page,#15181e)", color: "var(--ink,#f5f3ed)", display: "flex", flexDirection: "column", gap: "clamp(20px,3cqw,44px)" }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", font: "clamp(13px,1.6cqw,20px) VT323,monospace", letterSpacing: ".1em", color: "var(--brand,#cfffcf)" }}>
        <span>CH 0{number} / {c.label}</span><span>{c.kicker}</span>
      </div>
      <div>
        <h2 style={{ margin: 0, maxWidth: 950, fontSize: "clamp(46px,8cqw,108px)", lineHeight: .96, letterSpacing: "-.065em", fontWeight: 500 }}>{c.headline}<br/><span style={{ color: "var(--brand,#cfffcf)" }}>{c.emphasis}</span></h2>
        <p style={{ maxWidth: 720, fontSize: "clamp(16px,2cqw,24px)", lineHeight: 1.48, opacity: .78, marginTop: 28 }}>{c.intro}</p>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,230px),1fr))", gap: 12 }}>
        {c.rows.map(r => <article key={r.tag} style={{ border: "1px solid var(--line,rgba(255,255,255,.2))", borderRadius: 16, padding: "clamp(18px,2.3cqw,30px)", background: "var(--pill-bg,rgba(255,255,255,.06))" }}>
          <div style={{ font: "clamp(13px,1.5cqw,18px) VT323,monospace", letterSpacing: ".08em", color: "var(--brand,#cfffcf)" }}>{r.tag}</div>
          <h3 style={{ fontSize: "clamp(21px,2.8cqw,34px)", letterSpacing: "-.04em", margin: "24px 0 10px", fontWeight: 500 }}>{r.title}</h3>
          <p style={{ margin: 0, fontSize: "clamp(15px,1.6cqw,19px)", opacity: .72, lineHeight: 1.5 }}>{r.text}</p>
        </article>)}
      </div>
      <div style={{ marginTop: "auto", font: "clamp(12px,1.4cqw,18px) VT323,monospace", letterSpacing: ".08em", opacity: .55 }}>MARKETPLACE JOURNAL / PORTFOLIO WORK IN PROGRESS</div>
    </section>
  );
}
