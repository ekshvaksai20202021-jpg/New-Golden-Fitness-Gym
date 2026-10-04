import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../../config/site';

export default function WhatsAppButton() {
  const message = encodeURIComponent(`Hi ${siteConfig.gymName}, I'm interested in joining!`);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group cursor-none"
      aria-label="Chat on WhatsApp"
      data-cursor="view"
    >
      <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-75 group-hover:hidden"></div>
      <MessageCircle size={28} className="relative z-10" />
    </a>
  );
}
