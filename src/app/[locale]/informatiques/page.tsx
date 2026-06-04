'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Monitor, Code, Network, Wrench, PenTool, CheckCircle, Users, TrendingUp, Calendar } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const courseCategories = [
  {
    icon: Monitor,
    title: 'أساسيات الحاسوب',
    description: 'Windows, Office, Internet, لوحة المفاتيح',
    items: ['Windows', 'Microsoft Office', 'Internet', 'لوحة المفاتيح'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Code,
    title: 'البرمجة',
    description: 'Python, JavaScript, Web Development',
    items: ['Python', 'JavaScript', 'تطوير الويب', 'قواعد البيانات'],
    color: 'text-green-500',
    bgColor: 'bg-green-50',
  },
  {
    icon: Network,
    title: 'الشبكات',
    description: 'CCBA, أساسيات الشبكات',
    items: ['CCNA', 'أساسيات الشبكات', 'TCP/IP', 'أمن الشبكات'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
  },
  {
    icon: Wrench,
    title: 'صيانة الحاسوب',
    description: 'Hardware, Software, Troubleshooting',
    items: ['صيانة Hardware', 'Software', 'Troubleshooting', 'أنظمة التشغيل'],
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
  },
  {
    icon: PenTool,
    title: 'التصميم الجرافيكي',
    description: 'Photoshop, Illustrator, Canva',
    items: ['Photoshop', 'Illustrator', 'Canva', 'UI/UX Basics'],
    color: 'text-pink-500',
    bgColor: 'bg-pink-50',
  },
];

const stats = [
  { icon: Users, value: '+500', label: 'متخرج' },
  { icon: TrendingUp, value: '85%', label: 'توظيف' },
  { icon: Calendar, value: '+10', label: 'سنوات خبرة' },
];

export default function InformatiquesPage() {
  const heroAnimation = useScrollAnimation();
  const coursesAnimation = useScrollAnimation();
  const whyAnimation = useScrollAnimation();
  const statsAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary-500 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>
        <motion.div
          ref={heroAnimation.ref}
          variants={heroAnimation.variants}
          initial="hidden"
          animate={heroAnimation.controls}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <SectionHeading
            title="الإعلاميات — كون مستقبلك الرقمي"
            subtitle="دورات تدريبية عملية في أحدث مجالات التكنولوجيا والمعلوماتية"
            light
          />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button variant="accent" size="xl" asChild>
              <Link href="/inscription">سجل الآن</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/contact">استفسر عن البرامج</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            ref={coursesAnimation.ref}
            variants={coursesAnimation.variants}
            initial="hidden"
            animate={coursesAnimation.controls}
          >
            <SectionHeading
              title="برامجنا التدريبية"
              subtitle="اختر مسارك في عالم الإعلاميات وابدأ رحلتك التعليمية"
            />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courseCategories.map((cat, index) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 group">
                  <CardHeader>
                    <div className={`w-14 h-14 rounded-xl ${cat.bgColor} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <cat.icon className={`w-7 h-7 ${cat.color}`} />
                    </div>
                    <CardTitle>{cat.title}</CardTitle>
                    <CardDescription>{cat.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            ref={whyAnimation.ref}
            variants={whyAnimation.variants}
            initial="hidden"
            animate={whyAnimation.controls}
          >
            <SectionHeading
              title="لماذا الإعلاميات في IMI؟"
              subtitle="تدريب عملي بأحدث التقنيات وبإشراف نخبة من المدربين المعتمدين"
            />
          </motion.div>
          <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <div className="w-full aspect-video bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
                  <Monitor className="w-24 h-24 text-primary-500/40" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary-500 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-lg">15+</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-bold text-primary-500 mb-3">تدريب عملي وتطبيقي</h3>
                <p className="text-gray-600 leading-relaxed">
                  نقدم تدريباً عملياً يركز على المهارات التطبيقية التي يحتاجها سوق العمل. ستتعامل مع أحدث البرامج والتقنيات تحت إشراف مدربين معتمدين.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { title: 'شهادات معتمدة', desc: 'شهادات IMI معترف بها في سوق العمل المغربي' },
                  { title: 'مشاريع تطبيقية', desc: 'تطبيق عملي على مشاريع حقيقية خلال فترة التدريب' },
                  { title: 'دعم مستمر', desc: 'متابعة فردية ودعم فني طوال فترة التكوين' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-800">{item.title}</h4>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-500 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            ref={statsAnimation.ref}
            variants={statsAnimation.variants}
            initial="hidden"
            animate={statsAnimation.controls}
          >
            <SectionHeading
              title="أرقام تتحدث عنا"
              subtitle="مسيرة حافلة بالنجاحات والإنجازات"
              light
            />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <stat.icon className="w-10 h-10 text-secondary-500 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <motion.div
          ref={ctaAnimation.ref}
          variants={ctaAnimation.variants}
          initial="hidden"
          animate={ctaAnimation.controls}
          className="container mx-auto px-4 text-center"
        >
          <SectionHeading
            title="ابدأ رحلتك في عالم التكنولوجيا"
            subtitle="انضم إلى مئات الخريجين وابدأ مسارك المهني في عالم الإعلاميات"
          />
          <Button variant="accent" size="xl" asChild>
            <Link href="/inscription">سجل الآن واحجز مقعدك</Link>
          </Button>
          <p className="mt-4 text-sm text-gray-500">عدد المقاعد محدودة — سجل الآن لضمان مكانك</p>
        </motion.div>
      </section>
    </>
  );
}
