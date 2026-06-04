'use client';
import { motion } from 'framer-motion';
import SectionHeading from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const certs = [
  { name: 'DELF / DALF', desc: 'Français' },
  { name: 'IELTS', desc: 'English' },
  { name: 'TOEFL', desc: 'English' },
  { name: 'TOEIC', desc: 'English' },
  { name: 'Goethe', desc: 'Deutsch' },
  { name: 'DELE', desc: 'Español' },
  { name: 'Cambridge', desc: 'English' },
];

export default function Certifications() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="شهادات معترف بها دولياً"
          subtitle="كل دوراتنا تؤهلك للحصول على شهادات رسمية معتمدة عالمياً"
        />
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4"
        >
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="group relative p-6 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 text-center cursor-default"
            >
              <div className="text-lg font-heading font-bold text-primary-500 group-hover:text-secondary-500 transition">
                {cert.name}
              </div>
              <div className="text-xs text-gray-400 mt-1">{cert.desc}</div>
              <div className="absolute inset-0 rounded-xl bg-primary-500 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-xs leading-relaxed">
                افح لك أبواب الدراسة والعمل في أكثر من 50 دولة
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
