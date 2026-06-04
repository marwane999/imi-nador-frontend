'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, GraduationCap, Star, CheckCircle, Users, Target, Award, Quote } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const levels = [
  {
    level: 'ابتدائي',
    subjects: ['اللغة العربية', 'الفرنسية', 'الرياضيات', 'النشاط العلمي', 'التربية الإسلامية'],
    color: 'bg-green-50',
    borderColor: 'border-green-200',
    badgeColor: 'success' as const,
  },
  {
    level: 'إعدادي',
    subjects: ['العربية', 'الفرنسية', 'الإنجليزية', 'الرياضيات', 'الفيزياء والكيمياء', 'علوم الحياة والأرض'],
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
    badgeColor: 'default' as const,
  },
  {
    level: 'ثانوي',
    subjects: ['جميع الشعب: الأداب، العلوم التجريبية، الرياضيات، العلوم الاقتصادية'],
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
    badgeColor: 'accent' as const,
  },
  {
    level: 'جامعي',
    subjects: ['دورات تقوية في اللغات، الإعلاميات، والمهارات الأكاديمية'],
    color: 'bg-orange-50',
    borderColor: 'border-orange-200',
    badgeColor: 'secondary' as const,
  },
];

const formulas = [
  {
    title: 'أ. المساعدة في الواجبات',
    icon: BookOpen,
    description: 'مساعدة التلميذ في إنجاز واجباته المدرسية اليومية وفهم الدروس',
    features: ['متابعة يومية للواجبات', 'تصحيح الأخطاء', 'شرح الدروس الصعبة'],
  },
  {
    title: 'ب. تعزيز المكتسبات',
    icon: Star,
    description: 'دروس تقوية لتعزيز فهم المواد الدراسية وتحسين المستوى',
    features: ['تمارين إضافية', 'مراجعة شاملة', 'تقنيات الحفظ والفهم'],
  },
  {
    title: 'ج. دورات المراجعة والعطلة',
    icon: GraduationCap,
    description: 'برامج مكثفة خلال العطل المدرسية للمراجعة والاستعداد للامتحانات',
    features: ['دورات مكثفة', 'نماذج امتحانات', 'استعداد للامتحانات'],
  },
];

const whyChoose = [
  { icon: Users, title: 'متابعة فردية', desc: 'اهتمام شخصي بكل تلميذ حسب مستواه واحتياجاته' },
  { icon: Award, title: 'أساتذة متخصصون', desc: 'نخبة من الأساتذة ذوي الخبرة والكفاءة العالية' },
  { icon: Target, title: 'نتائج مضمونة', desc: 'تحسن ملحوظ في المستوى الدراسي والنتائج' },
];

const testimonial = {
  name: 'أم أحمد',
  role: 'ولي أمر تلميذ',
  text: 'ابني كان يعاني من صعوبات في الرياضيات، وبعد التحاقه بدروس الدعم في IMI تحسنت مستواه بشكل كبير. أشكر القائمين على المعهد على اهتمامهم ومتابعتهم المستمرة.',
};

export default function SoutienScolairePage() {
  const heroAnimation = useScrollAnimation();
  const levelsAnimation = useScrollAnimation();
  const formulasAnimation = useScrollAnimation();
  const whyAnimation = useScrollAnimation();
  const testimonialAnimation = useScrollAnimation();
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
            title="الدعم المدرسي — لأن مستقبل أبنائنا يستحق الأفضل"
            subtitle="برامج دعم مدرسي متكاملة لجميع المستويات الدراسية بإشراف أساتذة متخصصين"
            light
          />
          <Button variant="accent" size="xl" asChild>
            <Link href="/contact">سجل ابنك الآن</Link>
          </Button>
        </motion.div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            ref={levelsAnimation.ref}
            variants={levelsAnimation.variants}
            initial="hidden"
            animate={levelsAnimation.controls}
          >
            <SectionHeading
              title="المستويات والمواد"
              subtitle="نقدم الدعم المدرسي لجميع المستويات التعليمية"
            />
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {levels.map((item) => (
              <motion.div
                key={item.level}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className={`border-r-4 ${item.borderColor} h-full`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>{item.level}</CardTitle>
                      <Badge variant={item.badgeColor}>{item.subjects.length} مواد</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {item.subjects.map((subject) => (
                        <li key={subject} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                          {subject}
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
            ref={formulasAnimation.ref}
            variants={formulasAnimation.variants}
            initial="hidden"
            animate={formulasAnimation.controls}
          >
            <SectionHeading
              title="عروضنا التعليمية"
              subtitle="ثلاث صيغ متكاملة تناسب احتياجات كل تلميذ"
            />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {formulas.map((formula, index) => (
              <motion.div
                key={formula.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-secondary-50 flex items-center justify-center mx-auto mb-3">
                      <formula.icon className="w-8 h-8 text-secondary-500" />
                    </div>
                    <CardTitle className="text-lg">{formula.title}</CardTitle>
                    <CardDescription>{formula.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-right">
                      {formula.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 justify-center">
                          <CheckCircle className="w-4 h-4 text-secondary-500 flex-shrink-0" />
                          {feature}
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

      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            ref={whyAnimation.ref}
            variants={whyAnimation.variants}
            initial="hidden"
            animate={whyAnimation.controls}
          >
            <SectionHeading
              title="لماذا تختار IMI للدعم المدرسي؟"
              subtitle="نقدم أفضل بيئة تعليمية لأبنائكم"
            />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {whyChoose.map((item) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-2">
                      <item.icon className="w-7 h-7 text-primary-500" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-500 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            ref={testimonialAnimation.ref}
            variants={testimonialAnimation.variants}
            initial="hidden"
            animate={testimonialAnimation.controls}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-secondary-500 mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
              {testimonial.text}
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-12 h-12 rounded-full bg-secondary-500 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-white font-bold">{testimonial.name}</div>
                <div className="text-white/70 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 overflow-hidden">
        <motion.div
          ref={ctaAnimation.ref}
          variants={ctaAnimation.variants}
          initial="hidden"
          animate={ctaAnimation.controls}
          className="container mx-auto px-4 text-center"
        >
          <SectionHeading
            title="سجل ابنك الآن وضمن له النجاح"
            subtitle="ابدأ رحلة التفوق الدراسي مع IMI — اتصل بنا اليوم للحجز"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" asChild>
              <Link href="/contact">سجل الآن</Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="tel:0536330707">0536-33-07-07</a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500">اتصل بنا الآن للحجز والاستفسار</p>
        </motion.div>
      </section>
    </>
  );
}


