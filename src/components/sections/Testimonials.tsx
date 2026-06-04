'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'سارة أمين',
    course: 'IELTS Preparation',
    rating: 5,
    quote: '"الحمد لله، بفضل IMI قدرت نجيب 7 في IELTS وحصلت على قبول في كندا. الأساتذة كانو فالمستوى والجو رائع."',
  },
  {
    name: 'محمد العلوي',
    course: 'Français - DELF B2',
    rating: 5,
    quote: '"كنت عندي مشكل كبير في الفرنسية، ولكن من بعد ما دوزت الدورة ف IMI تحسنت بزاف وجبت DELF B2. شكراً IMI"',
  },
  {
    name: 'فاطمة الرفاعي',
    course: 'Englisch - B2',
    rating: 5,
    quote: '"الطريقة المباشرة ساعداتني بزاف فالتحدث باللغة بدون خوف. الأساتذة ناطقين أصليين وهاد شي فرق كبير."',
  },
  {
    name: 'أم هشام',
    course: 'والدة تلميذة بالإعدادي',
    rating: 5,
    quote: '"بنتي كانت عندها صعوبات في الرياضيات والفرنسية. من ما بدات ف IMI تحسنت علاماتها بزاف."',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="ماذا يقول طلابنا؟"
          subtitle="آلاف الطلاب وضعوا ثقتهم في IMI"
        />
        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              className="relative bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100"
            >
              <Quote className="w-10 h-10 text-secondary-200 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed mb-6">{t.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-heading font-bold text-primary-500">{t.name}</div>
                  <div className="text-sm text-gray-400">{t.course}</div>
                </div>
                <div className="text-secondary-500">
                  {'★'.repeat(t.rating)}
                  {'☆'.repeat(5 - t.rating)}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-3 mt-6">
            <Button variant="outline" size="icon" onClick={prev}>
              <ChevronRight className="h-5 w-5" />
            </Button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`w-3 h-3 rounded-full transition ${
                    i === current ? 'bg-secondary-500' : 'bg-gray-300'
                  }`}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
            <Button variant="outline" size="icon" onClick={next}>
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
