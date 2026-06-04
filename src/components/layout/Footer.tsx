import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Smartphone, Mail, Facebook, MessageCircle } from 'lucide-react';

const quickLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/langues', label: 'اللغات' },
  { href: '/informatiques', label: 'الإعلاميات' },
  { href: '/formation', label: 'التكوين المهني' },
  { href: '/soutien-scolaire', label: 'الدعم المدرسي' },
  { href: '/inscription', label: 'التسجيل' },
  { href: '/contact', label: 'اتصل بنا' },
];

const languages = [
  { href: '/langues/francais', label: 'Français' },
  { href: '/langues/english', label: 'English' },
  { href: '/langues/deutsch', label: 'Deutsch' },
  { href: '/langues/espanol', label: 'Español' },
  { href: '/langues/arab', label: 'العربية' },
  { href: '/langues/dutch', label: 'Dutch' },
];

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Image
              src="/images/head_01.jpg"
              alt="IMI Nador"
              width={160}
              height={60}
              className="h-16 w-auto object-contain mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              معهد الإعلاميات والوسائط المتعددة بالناظور — متخصصون في تعليم اللغات الحية
              والإعلاميات منذ أكثر من 15 عاماً. شريكك الموثوق لتعلم اللغات والشهادات الدولية.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/Imi.nador"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-500 transition"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/212666611390"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary-500 transition"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary-500">روابط سريعة</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-secondary-500 transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary-500">اللغات</h3>
            <ul className="space-y-2">
              {languages.map((lang) => (
                <li key={lang.href}>
                  <Link
                    href={lang.href}
                    className="text-sm text-gray-300 hover:text-secondary-500 transition"
                  >
                    {lang.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-secondary-500">اتصل بنا</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-0.5 text-secondary-500 shrink-0" />
                <span>Bd F.A.R rue Moscou N° 4, Nador, CP: 62000</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-secondary-500 shrink-0" />
                <a href="tel:0536330707" className="hover:text-secondary-500 transition" dir="ltr">
                  0536-33-07-07
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-secondary-500 shrink-0" />
                <a href="tel:0666611390" className="hover:text-secondary-500 transition" dir="ltr">
                  0666-61-13-90
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-secondary-500 shrink-0" />
                <a
                  href="mailto:contact@iminador.com"
                  className="hover:text-secondary-500 transition"
                >
                  contact@iminador.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2026 IMI Nador — جميع الحقوق محفوظة</p>
          <p className="mt-2 md:mt-0">
            تصميم وتطوير بواسطة{' '}
            <a href="#" className="text-secondary-500 hover:underline">
              IMI Nador
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
