'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { GraduationCap, Building, Clock, Award, CheckCircle, BookOpen, Users, Target } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const trainingPrograms = [
  {
    title: 'تكوين المدربين (TOT)',
    duration: '3 أشهر',
    certification: 'شهادة IMI',
    description: 'برنامج متكامل لإعداد المدربين المحترفين في مختلف المجالات',
    features: ['طرق التدريس الحديثة', 'إدارة القاعات', 'تقنيات التقييم'],
  },
  {
    title: 'الإدارة المكتبية',
    duration: 'شهرين',
    certification: 'شهادة IMI',
    description: 'تطوير المهارات الإدارية والمكتبية للعمل في المؤسسات والشركات',
    features: ['إدارة المكاتب', 'الأرشفة الإلكترونية', 'التواصل المهني'],
  },
  {
    title: 'التسويق الرقمي',
    duration: '3 أشهر',
    certification: 'شهادة IMI',
    description: 'إتقان أدوات واستراتيجيات التسويق الرقمي الحديثة',
    features: ['SEO/SEM', 'Social Media', 'Google Analytics'],
  },
  {
    title: 'الموارد البشرية',
    duration: '3 أشهر',
    certification: 'شهادة IMI',
    description: 'تأهيل متخصصين في إدارة الموارد البشرية والتوظيف',
    features: ['التوظيف', 'إدارة الأداء', 'قانون الشغل'],
  },
  {
    title: 'المحاسبة',
    duration: '3 أشهر',
    certification: 'شهادة IMI',
    description: 'تكوين شامل في مبادئ المحاسبة المالية والإدارية',
    features: ['المحاسبة المالية', 'المحاسبة التحليلية', 'الضرائب'],
  },
  {
    title: 'اللغة الإنجليزية للأعمال',
    duration: '3 أشهر',
    certification: 'شهادة IMI',
    description: 'تطوير مهارات اللغة الإنجليزية في سياق الأعمال',
    features: ['Business Writing', 'Presentations', 'Meetings'],
  },
];

const corporateBenefits = [
  { icon: Building, title: 'تدريب مخصص', desc: 'برامج مصممة حسب احتياجات مؤسستك' },
  { icon: Users, title: 'مدربون معتمدون', desc: 'نخبة من المدربين ذوي الخبرة المهنية' },
  { icon: Target, title: 'نتائج مضمونة', desc: 'تقييم دوري لضمان تحقيق أهداف التدريب' },
  { icon: Award, title: 'شهادات معتمدة', desc: 'شهادات IMI معتمدة دولياً' },
];

export default function FormationPage() {
  const heroAnimation = useScrollAnimation();
  const programsAnimation = useScrollAnimation();
  const corporateAnimation = useScrollAnimation();
  const ctaAnimation = useScrollAnimation();

  return (
    <>
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-primary-500 to-primary-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
        </div>
        <motion.div
          ref={heroAnimation.ref}
          variants={heroAnimation.variants}
          initial="hidden"
          animate={heroAnimation.controls}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <SectionHeading
            title="التكوين المهني — طور مهاراتك وعزز فرصك"
            subtitle="برامج تكوين مهني معتمدة تؤهلك لسوق العمل وتعزز فرصك المهنية"
            light
          />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">استفسر عن برامج التكوين</Link>
            </Button>
            <Button variant="outline" size="xl" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/inscription">سجل الآن</Link>
            </Button>
          </div>
        </motion.div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={programsAnimation.ref}
            variants={programsAnimation.variants}
            initial="hidden"
            animate={programsAnimation.controls}
          >
            <SectionHeading
              title="برامج التكوين المهني"
              subtitle="مجموعة متنوعة من البرامج التكوينية لتطوير مهاراتك المهنية"
            />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {trainingPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl">{program.title}</CardTitle>
                      <GraduationCap className="w-6 h-6 text-secondary-500 flex-shrink-0" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">
                        <Clock className="w-3 h-3 ml-1 inline" />
                        {program.duration}
                      </Badge>
                      <Badge variant="accent">{program.certification}</Badge>
                    </div>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {program.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" size="sm" className="w-full mt-4" asChild>
                      <Link href="/contact">اطلب المزيد من التفاصيل</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <motion.div
            ref={corporateAnimation.ref}
            variants={corporateAnimation.variants}
            initial="hidden"
            animate={corporateAnimation.controls}
          >
            <SectionHeading
              title="التكوين المهني للمؤسسات"
              subtitle="برامج تدريبية مخصصة للمؤسسات والشركات لتطوير كفاءات فرق العمل"
            />
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {corporateBenefits.map((benefit) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-2">
                      <benefit.icon className="w-7 h-7 text-primary-500" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                    <CardDescription>{benefit.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <Link href="/contact">تواصل معنا لبرنامج مؤسستك</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <motion.div
          ref={ctaAnimation.ref}
          variants={ctaAnimation.variants}
          initial="hidden"
          animate={ctaAnimation.controls}
          className="container mx-auto px-4 text-center"
        >
          <SectionHeading
            title="استفسر عن برامج التكوين"
            subtitle="فريقنا جاهز للإجابة عن جميع استفساراتكم وتقديم المعلومات اللازمة"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">اتصل بنا الآن</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/inscription">سجل في برنامج تكويني</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">أو اتصل بنا على 0536-33-07-07</p>
        </motion.div>
      </section>
    </>
  );
}
