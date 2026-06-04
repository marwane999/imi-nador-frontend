'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Globe, GraduationCap, Briefcase, Plane, ArrowLeft } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const languages = [
  {
    flag: '🇫🇷',
    name: 'Français',
    href: '/langues/francais',
    color: 'from-blue-500 to-blue-700',
    badge: 'DELF / DALF',
  },
  {
    flag: '🇬🇧',
    name: 'English',
    href: '/langues/english',
    color: 'from-red-500 to-red-700',
    badge: 'IELTS / TOEFL / Cambridge',
  },
  {
    flag: '🇩🇪',
    name: 'Deutsch',
    href: '/langues/deutsch',
    color: 'from-yellow-500 to-yellow-700',
    badge: 'Goethe-Zertifikat',
  },
  {
    flag: '🇪🇸',
    name: 'Español',
    href: '/langues/espanol',
    color: 'from-orange-500 to-orange-700',
    badge: 'DELE',
  },
  {
    flag: '🇸🇦',
    name: 'العربية',
    href: '/langues/arab',
    color: 'from-green-500 to-green-700',
    badge: 'شهادة IMI',
  },
  {
    flag: '🇳🇱',
    name: 'Dutch',
    href: '/langues/dutch',
    color: 'from-cyan-500 to-cyan-700',
    badge: 'Inburgeringsexamen',
  },
];

const whyLearn = [
  {
    icon: GraduationCap,
    title: 'فرص دراسية',
    desc: 'اللغات تفتح لك أبواب الدراسة في أفضل الجامعات العالمية، وتمنحك فرص الحصول على منح دراسية في الخارج.',
  },
  {
    icon: Briefcase,
    title: 'فرص عمل',
    desc: 'إتقان اللغات الأجنبية يزيد من فرصك في سوق العمل المحلي والدولي، ويساعدك على الترقية في وظيفتك الحالية.',
  },
  {
    icon: Plane,
    title: 'سفر وهجرة',
    desc: 'اللغة هي مفتاح الاندماج في أي مجتمع جديد. تعلم اللغة يسهل إجراءات السفر والهجرة والاستقرار في الخارج.',
  },
];

export default function LanguesPage() {
  const { ref: cardRef, controls: cardControls, variants: cardVariants } = useScrollAnimation();
  const { ref: whyRef, controls: whyControls, variants: whyVariants } = useScrollAnimation();

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-500 overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black text-white leading-tight mb-6">
              اللغات — اختر لغتك وانطلق إلى العالم
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              تعلم على يد أساتذة ناطقين أصليين وبطرق تعليمية حديثة. اختر من بين 6 لغات
              مستوى من A1 إلى C2 مع شهادات معترف بها دولياً
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="اختر لغتك" subtitle="6 لغات للاختيار من بينها" />
          <motion.div
            ref={cardRef}
            animate={cardControls}
            initial="hidden"
            variants={cardVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {languages.map((lang) => (
              <Card key={lang.name} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${lang.color}`} />
                <CardHeader className="text-center">
                  <div className="text-6xl mb-4">{lang.flag}</div>
                  <CardTitle className="text-primary-500">{lang.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-sm text-gray-600">تعلم على يد أساتذة ناطقين أصليين</p>
                  <Badge variant="outline">A1 - C2</Badge>
                  <div className="flex flex-wrap justify-center gap-2">
                    <Badge variant="secondary" className="text-xs">{lang.badge}</Badge>
                  </div>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={lang.href}>
                      اكتشف المزيد <ArrowLeft className="w-4 h-4 mr-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <div className="w-full h-80 rounded-2xl bg-secondary-100 flex items-center justify-center">
                <BookOpen className="w-32 h-32 text-secondary-300" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <SectionHeading title="الطريقة المباشرة" className="text-right" />
              <p className="text-gray-600 leading-relaxed mb-6">
                نعتمد الطريقة المباشرة (Direct Method) في تدريس جميع اللغات، حيث يتم التحدث
                باللغة المستهدفة فقط منذ الحصة الأولى. هذه الطريقة المثبتة علمياً تساعدك على
                تطوير مهارات التحدث والاستماع بسرعة، وتكسر حاجز الخوف من التحدث بلغة جديدة.
              </p>
              <p className="text-gray-600 leading-relaxed">
                أساتذتنا الناطقون الأصليون يستخدمون تقنيات تفاعلية حديثة تشمل الحوار والمحاكاة
                والأنشطة الجماعية، مما يجعل التعلم ممتعاً وفعالاً.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="لماذا تتعلم لغة جديدة؟" />
          <motion.div
            ref={whyRef}
            animate={whyControls}
            initial="hidden"
            variants={whyVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {whyLearn.map((item) => (
              <Card key={item.title} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading
            title="حدد مستواك مجاناً"
            subtitle="اختبار تحديد مستوى مجاني بدون أي التزام. احجز موعدك الآن."
            light
          />
          <Button variant="accent" size="xl" asChild>
            <Link href="/inscription">احجز اختبار المستوى المجاني</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
