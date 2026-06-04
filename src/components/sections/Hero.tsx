'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              {['DELF', 'Goethe', 'IELTS', 'TOEFL', 'DELE'].map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/20"
                >
                  {cert}
                </span>
              ))}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
              بوابتك للغات والإعلاميات...
              <br />
              <span className="text-secondary-500">من الناظور إلى العالم</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed">
              أكثر من 15 عاماً من الخبرة في تدريس اللغات والإعلاميات بأساتذة ناطقين أصليين وشهادات معترف بها دولياً
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" size="xl" asChild>
                <Link href="/inscription">سجل الآن - الأماكن محدودة</Link>
              </Button>
              <Button
                variant="outline"
                size="xl"
                asChild
                className="border-white text-white hover:bg-white hover:text-primary-500"
              >
                <Link href="/contact">اطلب استشارة مجانية</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
