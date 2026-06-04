'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Users, Award } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import SectionHeading from '@/components/shared/SectionHeading';

const stats = [
  { icon: GraduationCap, value: 3000, suffix: '+', label: 'طالب متخرج', color: 'text-secondary-500' },
  { icon: Globe, value: 6, suffix: '', label: 'لغات للاختيار من بينها', color: 'text-accent-500' },
  { icon: Users, value: 15, suffix: '+', label: 'أستاذ ناطق أصلي', color: 'text-green-600' },
  { icon: Award, value: 8, suffix: '+', label: 'شهادات دولية معترف بها', color: 'text-secondary-500' },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (target === 0) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function StatsCounter() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="أرقام تتحدث عن أنفسنا" />
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 rounded-xl bg-white shadow-md hover:shadow-lg transition">
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl md:text-4xl font-heading font-black text-primary-500 mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-gray-600 font-bold">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
