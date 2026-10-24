import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useEnquiry } from '../context/EnquiryContext';
import { SITE_CONFIG, getWhatsAppUrl } from '../config/site';

export function FloatingWhatsApp() {
  const { openWhatsAppNotice } = useEnquiry();
  const directUrl = getWhatsAppUrl();

  const handleClick = (e: React.MouseEvent) => {
    if (!SITE_CONFIG.contact.whatsappNumber) {
      e.preventDefault();
      openWhatsAppNotice();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-30">
      <a
        href={directUrl || '#whatsapp-inquiry'}
        onClick={handleClick}
        target={directUrl ? '_blank' : '_self'}
        rel={directUrl ? 'noopener noreferrer' : undefined}
        className="flex items-center gap-2.5 px-4 py-3 bg-[#10243D] text-white hover:bg-[#183653] shadow-lg rounded-full border border-[#DCE2E8]/40 transition-all duration-200 hover:scale-105 group"
        aria-label="Direct WhatsApp Trade Desk Inquiry"
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4 text-white" />
        </div>
        <div className="text-left hidden sm:block pr-1">
          <span className="block text-[11px] font-semibold tracking-wide uppercase text-white leading-tight">
            WhatsApp Desk
          </span>
          <span className="block text-[10px] text-[#AEB8C4] leading-tight">
            Quick Quote
          </span>
        </div>
      </a>
    </div>
  );
}
