import Link from 'next/link';
import { motion } from 'framer-motion';
import { Globe, Monitor, BookOpen, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SectionHeading from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const courses = [
  {
    icon: Globe,
    title: 'اللغات',
    desc: 'Français, English, Deutsch, Español, العربية, Dutch',
    href: '/langues',
    color: 'text-secondary-500 bg-secondary-50',
  },
  {
    icon: Monitor,
    title: 'الإعلاميات',
    desc: 'تكوين في البرمجة والشبكات والمعلوميات',
    href: '/informatiques',
    color: 'text-primary-500 bg-primary-50',
  },
  {
    icon: BookOpen,
    title: 'الدعم المدرسي',
    desc: 'دعم في الرياضيات، الفيزياء، الفرنسية، العربية',
    href: '/soutien-scolaire',
    color: 'text-accent-500 bg-accent-50',
  },
  {
    icon: Briefcase,
    title: 'التكوين المهني',
    desc: 'برامج تكوينية معتمدة للشباب والمهنيين',
    href: '/formation',
    color: 'text-green-600 bg-green-50',
  },
];

export default function CourseGrid() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <SectionHeading title="برامجنا التعليمية" subtitle="اختر المسار الذي يناسب أهدافك" />
        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {courses.map((course) => (
            <Card key={course.title} className="group hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-2xl ${course.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition`}>
                  <course.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{course.desc}</p>
                <Button variant="outline" size="sm" asChild>
                  <Link href={course.href}>اكتشف المزيد</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
