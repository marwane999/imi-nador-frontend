'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Phone, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  {
    label: 'اللغات',
    children: [
      { href: '/langues/francais', label: 'Français' },
      { href: '/langues/english', label: 'English' },
      { href: '/langues/deutsch', label: 'Deutsch' },
      { href: '/langues/espanol', label: 'Español' },
      { href: '/langues/arab', label: 'العربية' },
      { href: '/langues/dutch', label: 'Dutch' },
    ],
  },
  { href: '/informatiques', label: 'الإعلاميات' },
  { href: '/formation', label: 'التكوين' },
  { href: '/soutien-scolaire', label: 'الدعم المدرسي' },
  { href: '/inscription', label: 'التسجيل' },
  { href: '/contact', label: 'اتصل بنا' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/ar' || pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/head_01.jpg"
              alt="IMI Nador"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setLangOpen(true)}
                  onMouseLeave={() => setLangOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-bold text-gray-700 hover:text-primary-500 hover:bg-primary-50 transition">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  <AnimatePresence>
                    {langOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-full right-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 p-2 min-w-[180px]"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={cn(
                              'block px-4 py-2 rounded-lg text-sm font-bold transition',
                              isActive(child.href)
                                ? 'text-secondary-500 bg-secondary-50'
                                : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                            )}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={cn(
                    'px-3 py-2 rounded-lg text-sm font-bold transition',
                    isActive(link.href!)
                      ? 'text-secondary-500 bg-secondary-50'
                      : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                  )}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:0536330707"
              dir="ltr"
              className="flex items-center gap-2 text-sm font-bold text-primary-500 hover:text-primary-600 transition"
            >
              <Phone className="h-4 w-4" />
              0536-33-07-07
            </a>
            <Button variant="accent" size="sm" asChild>
              <Link href="/inscription">سجل الآن</Link>
            </Button>
          </div>

          <button
            className="lg:hidden p-2 text-primary-500"
            onClick={() => setMobileOpen(true)}
            aria-label="فتح القائمة"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 lg:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <Image
                  src="/images/head_01.jpg"
                  alt="IMI Nador"
                  width={100}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-gray-500 hover:text-primary-500"
                  aria-label="إغلاق القائمة"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="p-4 space-y-1">
                {navLinks.map((link) =>
                  link.children ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setMobileLangOpen(!mobileLangOpen)}
                        className="flex items-center justify-between w-full px-4 py-3 rounded-lg text-sm font-bold text-gray-700 hover:text-primary-500 hover:bg-gray-50 transition"
                      >
                        {link.label}
                        <ChevronDown className={cn('h-4 w-4 transition', mobileLangOpen && 'rotate-180')} />
                      </button>
                      {mobileLangOpen && (
                        <div className="mr-4 space-y-1">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className="block px-4 py-2 rounded-lg text-sm font-bold text-gray-600 hover:text-primary-500 hover:bg-gray-50 transition"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href!}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'block px-4 py-3 rounded-lg text-sm font-bold transition',
                        isActive(link.href!)
                          ? 'text-secondary-500 bg-secondary-50'
                          : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
                      )}
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="pt-4 space-y-3">
                  <Button variant="accent" className="w-full" asChild>
                    <Link href="/inscription" onClick={() => setMobileOpen(false)}>سجل الآن</Link>
                  </Button>
                  <a
                    href="tel:0536330707"
                    dir="ltr"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border-2 border-primary-500 text-primary-500 font-bold hover:bg-primary-50 transition"
                  >
                    <Phone className="h-4 w-4" />
                    0536-33-07-07
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
