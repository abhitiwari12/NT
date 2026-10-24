import React from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  MessageCircle,
  ExternalLink,
  Building2,
  Users,
  Compass,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import { Link } from '../context/RouterContext';
import { useEnquiry } from '../context/EnquiryContext';
import { SITE_CONFIG, getTelLink, getMailtoLink, getWhatsAppUrl } from '../config/site';

export function HomePage() {
  const { openEnquiryModal } = useEnquiry();
  const { contact, founders, operatingPrinciples } = SITE_CONFIG;
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="bg-[#F5F7FA] text-[#0B1730]">
      {/* ========================================================
          SECTION B — HERO: STRONG BRAND STATEMENT
          Headline: "One Partner. Many Possibilities."
          Eyebrow: "COMMODITY TRADING & SOURCING"
          Supporting text: "NEXARIS connects commercial opportunities across spices, oilseeds and aluminium scrap..."
          Primary CTA: "Explore Our Products"
          Secondary CTA: "Partner With NEXARIS"
          ======================================================== */}
      <section className="relative bg-[#0B1730] text-white border-b border-[#162444] overflow-hidden">
        {/* Subtle decorative subtle background gradient grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#C7A45B_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C7A45B] flex items-center gap-2">
              <span>{SITE_CONFIG.heroEyebrow}</span>
              <span aria-hidden="true" className="text-[#64748B]">·</span>
              <span className="text-[#94A3B8] font-normal">Gandhinagar, Gujarat</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] font-display">
              One Partner.<br />
              <span className="text-[#C7A45B]">Many Possibilities.</span>
            </h1>

            <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-2xl">
              {SITE_CONFIG.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/spices-oilseeds"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B1730] bg-[#C7A45B] hover:bg-[#B89347] rounded-md transition-colors cursor-pointer shadow-xs"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>

              <a
                href="#enquiry"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white border border-[#64748B]/60 hover:bg-white/10 rounded-md transition-colors cursor-pointer"
              >
                <span>Partner With NEXARIS</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Minimal Sector Indicator Strip */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6 max-w-lg text-xs text-[#94A3B8]">
              <div>
                <div className="font-semibold text-white">Spices</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Wholesale Lots</div>
              </div>
              <div>
                <div className="font-semibold text-white">Oilseeds</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Graded Seeds</div>
              </div>
              <div>
                <div className="font-semibold text-white">Aluminium Scrap</div>
                <div className="text-[11px] text-[#64748B] mt-0.5">Remelting Grades</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION C — BUSINESS INTRODUCTION
          Eyebrow: ABOUT NEXARIS
          Heading: Built Around Trade. Driven by Possibility.
          Content verbatim from prompt Section 3C.
          ======================================================== */}
      <section id="about" className="py-20 lg:py-24 bg-white border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-6">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C7A45B]">
              ABOUT NEXARIS
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1730] font-display tracking-tight leading-tight">
              Built Around Trade. Driven by Possibility.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
              <p>
                NEXARIS is a commodity trading and sourcing business based in Gandhinagar, Gujarat, India. Our business spans agricultural commodities and aluminium scrap, with a focus on developing professional business relationships and exploring commercial opportunities.
              </p>
              <p>
                We aim to understand the requirements of buyers and suppliers, communicate clearly and approach trading opportunities with a long-term perspective.
              </p>
            </div>

            {/* Company Features Grid */}
            <div className="pt-4 border-t border-[#F5F7FA] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs max-w-xl">
              <div className="p-4 bg-[#F5F7FA] rounded-md border border-[#E2E8F0]">
                <div className="font-semibold text-[#0B1730] uppercase tracking-wider text-[11px]">Origin & Headquarters</div>
                <div className="text-[#64748B] mt-1">Gandhinagar, Gujarat, India</div>
              </div>
              <div className="p-4 bg-[#F5F7FA] rounded-md border border-[#E2E8F0]">
                <div className="font-semibold text-[#0B1730] uppercase tracking-wider text-[11px]">Commodity Scope</div>
                <div className="text-[#64748B] mt-1">Spices, Oilseeds & Aluminium Scrap</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION D — PRODUCT DIVISIONS
          Eyebrow: OUR COMMODITIES
          Heading: Explore Our Product Categories
          Supporting text: "Explore the commodity categories covered by NEXARIS and contact our team to discuss your requirements."
          Three Product Cards: Spices, Oilseeds, Aluminium Scrap
          ======================================================== */}
      <section id="products" className="py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C7A45B] mb-2">
              OUR COMMODITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1730] font-display tracking-tight">
              Explore Our Product Categories
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
              Explore the commodity categories covered by NEXARIS and contact our team to discuss your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 — Spices */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] hover:border-[#C7A45B] overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xs group">
              <div>
                <div className="aspect-16/10 relative overflow-hidden bg-slate-100">
                  <img
                    src="/src/assets/images/spices_division_banner_1792832350716.jpg"
                    alt="Spices commodity category for commercial sourcing"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1730]/90 backdrop-blur-md px-3 py-1 text-[#C7A45B] text-xs font-medium rounded border border-white/10">
                    Agricultural Commodities
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1730] font-display">
                    Spices
                  </h3>
                  <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                    Explore spice commodities for commercial sourcing and trading enquiries.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/spices-oilseeds"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1730] hover:bg-[#162444] rounded-md transition-colors"
                >
                  <span>Explore Spices</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Card 2 — Oilseeds */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] hover:border-[#C7A45B] overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xs group">
              <div>
                <div className="aspect-16/10 relative overflow-hidden bg-slate-100">
                  <img
                    src="/src/assets/images/cumin_seeds_bulk_1792832370398.jpg"
                    alt="Oilseeds commodity category for buyers and suppliers"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1730]/90 backdrop-blur-md px-3 py-1 text-[#C7A45B] text-xs font-medium rounded border border-white/10">
                    Graded Oilseeds
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1730] font-display">
                    Oilseeds
                  </h3>
                  <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                    Discover oilseed commodities for buyers, suppliers and related businesses.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/spices-oilseeds"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1730] hover:bg-[#162444] rounded-md transition-colors"
                >
                  <span>Explore Oilseeds</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            {/* Card 3 — Aluminium Scrap */}
            <div className="bg-white rounded-lg border border-[#E2E8F0] hover:border-[#C7A45B] overflow-hidden flex flex-col justify-between transition-all duration-200 shadow-xs group">
              <div>
                <div className="aspect-16/10 relative overflow-hidden bg-slate-100">
                  <img
                    src="/src/assets/images/aluminium_division_banner_1792832351480.jpg"
                    alt="Aluminium scrap category for industrial sourcing"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B1730]/90 backdrop-blur-md px-3 py-1 text-[#C7A45B] text-xs font-medium rounded border border-white/10">
                    Industrial Secondary Metals
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1730] font-display">
                    Aluminium Scrap
                  </h3>
                  <p className="mt-3 text-sm text-[#64748B] leading-relaxed">
                    Explore aluminium scrap categories for industrial sourcing and trading requirements.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/aluminium-scrap"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1730] hover:bg-[#162444] rounded-md transition-colors"
                >
                  <span>Explore Aluminium Scrap</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION E — WHY WORK WITH NEXARIS?
          Heading: A Practical Approach to Commodity Trade
          Four concise principle blocks verbatim from prompt 3E.
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C7A45B] mb-2">
              OUR APPROACH
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1730] font-display tracking-tight">
              A Practical Approach to Commodity Trade
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {operatingPrinciples.map((principle, idx) => (
              <div
                key={principle.title}
                className="p-6 rounded-lg bg-[#F5F7FA] border border-[#E2E8F0] hover:border-[#C7A45B]/60 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-semibold text-[#C7A45B] mb-3">
                    0{idx + 1}.
                  </div>
                  <h3 className="text-base font-bold text-[#0B1730] font-display mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION F — THE PEOPLE BEHIND NEXARIS
          MANDATORY HOMEPAGE SECTION
          Heading: The People Behind NEXARIS
          Supporting text: "Meet the partners bringing their individual expertise and responsibilities together to build NEXARIS."
          Founders:
          1. Mr. Abhi Nilesh Tiwari
          2. Mr. Krishnapalsinh Rajendrasinh Parmar
          3. Mr. Rudra Aniruddhkumar Pandya
          ======================================================== */}
      <section id="founders" className="py-20 lg:py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C7A45B] mb-2">
              LEADERSHIP
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1730] font-display tracking-tight">
              The People Behind NEXARIS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
              Meet the partners bringing their individual expertise and responsibilities together to build NEXARIS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="bg-white rounded-lg border border-[#E2E8F0] hover:border-[#C7A45B] transition-all duration-200 p-6 flex flex-col justify-between shadow-xs"
              >
                <div className="space-y-4">
                  {/* Monogram / Monogram Avatar & LinkedIn Button */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#F5F7FA]">
                    <div className="w-12 h-12 rounded-md bg-[#0B1730] text-[#C7A45B] flex items-center justify-center font-display font-bold text-base">
                      {founder.initials}
                    </div>

                    <a
                      href={founder.linkedIn}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-[#64748B] hover:text-[#0B1730] hover:bg-[#F5F7FA] rounded-md transition-colors"
                      aria-label={`View ${founder.name}'s LinkedIn profile`}
                      title="LinkedIn Profile (opens in a new tab)"
                    >
                      <Linkedin className="w-5 h-5 text-[#0B1730] hover:text-[#C7A45B] transition-colors" />
                    </a>
                  </div>

                  {/* Name and Role */}
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1730] font-display">
                      {founder.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#C7A45B] mt-1">
                      {founder.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {founder.description}
                  </p>
                </div>

                {/* Direct Clickable Email Link */}
                <div className="mt-6 pt-4 border-t border-[#E2E8F0] flex items-center text-xs">
                  <a
                    href={`mailto:${founder.email}`}
                    className="font-mono text-[#0B1730] hover:text-[#C7A45B] font-medium transition-colors inline-flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#C7A45B]" aria-hidden="true" />
                    <span>{founder.email}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION G — BUYER AND SUPPLIER ENQUIRIES
          Heading: Let's Explore an Opportunity Together.
          Supporting text: "Whether you are looking to source commodities or discuss a potential supply opportunity, connect with NEXARIS to start a conversation."
          Options:
          1. For Buyers: "Discuss your commodity requirements and sourcing enquiry." -> Submit a Buyer Enquiry
          2. For Suppliers: "Introduce your commodities and discuss potential trading opportunities." -> Submit a Supplier Enquiry
          ======================================================== */}
      <section id="enquiry" className="py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="text-xs font-semibold tracking-wider uppercase text-[#C7A45B] mb-2">
              TRADE ENQUIRIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1730] font-display tracking-tight">
              Let's Explore an Opportunity Together.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#64748B] leading-relaxed">
              Whether you are looking to source commodities or discuss a potential supply opportunity, connect with NEXARIS to start a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* For Buyers */}
            <div className="p-8 rounded-lg bg-[#F5F7FA] border border-[#E2E8F0] hover:border-[#C7A45B] transition-colors flex flex-col justify-between space-y-6">
              <div>
                <div className="w-10 h-10 rounded-md bg-[#0B1730] text-[#C7A45B] flex items-center justify-center font-bold text-sm mb-4">
                  B
                </div>
                <h3 className="text-xl font-bold text-[#0B1730] font-display">
                  For Buyers
                </h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                  Discuss your commodity requirements and sourcing enquiry.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openEnquiryModal(undefined, undefined, 'buyer')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1730] hover:bg-[#162444] rounded-md transition-colors cursor-pointer"
              >
                <span>Submit a Buyer Enquiry</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            {/* For Suppliers */}
            <div className="p-8 rounded-lg bg-[#F5F7FA] border border-[#E2E8F0] hover:border-[#C7A45B] transition-colors flex flex-col justify-between space-y-6">
              <div>
                <div className="w-10 h-10 rounded-md bg-[#0B1730] text-[#C7A45B] flex items-center justify-center font-bold text-sm mb-4">
                  S
                </div>
                <h3 className="text-xl font-bold text-[#0B1730] font-display">
                  For Suppliers
                </h3>
                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                  Introduce your commodities and discuss potential trading opportunities.
                </p>
              </div>

              <button
                type="button"
                onClick={() => openEnquiryModal(undefined, undefined, 'supplier')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0B1730] hover:bg-[#162444] rounded-md transition-colors cursor-pointer"
              >
                <span>Submit a Supplier Enquiry</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          SECTION H — CONTACT DETAILS
          Verified company contact info:
          Email: contact@nexaris.co.in
          Phone/WhatsApp: +91 98246 18484
          Location: Gandhinagar, Gujarat, India
          Website: https://nexaris.co.in
          Official LinkedIn: https://www.linkedin.com/company/nexaris1/home/?viewAsMember=true
          ======================================================== */}
      <section className="py-20 lg:py-24 bg-[#0B1730] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs font-semibold tracking-wider uppercase text-[#C7A45B]">
                DIRECT CONTACT
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                NEXARIS Trade Desk
              </h2>
              <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                Connect with our team directly for commodity trade opportunities, sourcing requests, or operational coordination.
              </p>
            </div>

            <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-lg p-8 space-y-5 text-sm text-[#94A3B8]">
              <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                <MapPin className="w-5 h-5 text-[#C7A45B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#94A3B8]/70 font-semibold">Location</div>
                  <div className="text-white font-medium mt-0.5">{contact.location}</div>
                </div>
              </div>

              <div className="flex items-start gap-4 pb-4 border-b border-white/10">
                <Mail className="w-5 h-5 text-[#C7A45B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#94A3B8]/70 font-semibold">Email</div>
                  <a
                    href={getMailtoLink()}
                    className="text-white hover:text-[#C7A45B] font-mono font-medium transition-colors mt-0.5 block"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-[#C7A45B] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#94A3B8]/70 font-semibold">Phone</div>
                    <a
                      href={getTelLink()}
                      className="text-white hover:text-[#C7A45B] font-medium transition-colors mt-0.5 block"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <div className="text-xs uppercase tracking-wider text-[#94A3B8]/70 font-semibold">WhatsApp</div>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-emerald-300 font-medium transition-colors mt-0.5 block"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Linkedin className="w-5 h-5 text-[#C7A45B] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#94A3B8]/70 font-semibold">Official LinkedIn</div>
                  <a
                    href={contact.companyLinkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#C7A45B] hover:text-white font-medium transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <span>Follow NEXARIS on LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
