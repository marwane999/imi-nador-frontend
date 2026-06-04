'use client';
import { useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '212666611390';
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'مرحباً، أريد معلومات عن دوراتكم';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="راسلنا على واتساب"
      className={cn(
        'whatsapp-float fixed bottom-6 left-6 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 text-white shadow-xl hover:bg-green-600 hover:scale-110 transition-all duration-300',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      )}
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
