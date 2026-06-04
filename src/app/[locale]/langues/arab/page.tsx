'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Users, BookOpen, GraduationCap, Pen } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const formulas = [
  { icon: Users, title: 'خصوصي أو مجموعات صغيرة', desc: 'حسب الطلب — برنامج مخصص يناسب احتياجاتك', tag: 'حسب الطلب', color: 'bg-secondary-100 text-secondary-600' },
];

const levels = [
  { level: 'A1', label: 'مبتدئ', desc: 'فهم واستعمال التعابير اليومية الأساسية' },
  { level: 'A2', label: 'أساسي', desc: 'التواصل في المهام البسيطة والروتينية' },
  { level: 'B1', label: 'مستقل', desc: 'التحدث بطلاقة في مواقف السفر والعمل' },
];

const options = [
  { icon: BookOpen, title: 'اللغة والثقافة', desc: 'تعلم اللغة العربية من خلال الثقافة والأدب والفنون' },
  { icon: Pen, title: 'القراءة والكتابة', desc: 'دورة مكثفة لتحسين مهارات القراءة والكتابة بالعربية' },
];

export default function ArabPage() {
  const { ref: formulaRef, controls: formulaControls, variants: formulaVariants } = useScrollAnimation();
  const { ref: levelRef, controls: levelControls, variants: levelVariants } = useScrollAnimation();

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-green-600 via-green-700 to-green-900 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight mb-4">
              العربية في <span className="text-secondary-500">IMI الناظور</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              تعلم اللغة العربية الفصحى والدارجة بطرق تفاعلية حديثة. من A1 إلى B1.
              برنامج خاص باللغة والثقافة والقراءة والكتابة.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading title="صيغ التكوين" subtitle="برنامج مخصص حسب طلبك" />
          <motion.div
            ref={formulaRef}
            animate={formulaControls}
            initial="hidden"
            variants={formulaVariants}
            className="grid grid-cols-1 md:grid-cols-1 max-w-md mx-auto gap-6"
          >
            {formulas.map((f) => (
              <Card key={f.title} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white bg-primary-500">
                  {f.tag}
                </div>
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl ${f.color} flex items-center justify-center mb-2`}>
                    <f.icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="text-primary-500">{f.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{f.desc}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading title="المستويات" subtitle="من A1 إلى B1" />
          <motion.div
            ref={levelRef}
            animate={levelControls}
            initial="hidden"
            variants={levelVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
          >
            {levels.map((l) => (
              <Card key={l.level} className="text-center hover:shadow-lg transition">
                <CardContent className="p-6">
                  <div className="text-3xl font-heading font-black text-secondary-500 mb-2">{l.level}</div>
                  <div className="font-bold text-primary-500 mb-2">{l.label}</div>
                  <p className="text-sm text-gray-500">{l.desc}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading title="خيارات إضافية" subtitle="اختر المسار الذي يناسبك" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {options.map((opt) => (
              <Card key={opt.title} className="text-center hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-500 flex items-center justify-center mx-auto mb-4">
                    <opt.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-500 mb-3">{opt.title}</h3>
                  <p className="text-gray-600">{opt.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <SectionHeading
              title="شهادة IMI"
              subtitle="في نهاية الدورة، تحصل على شهادة معتمدة من معهد IMI الناظور"
            />
            <Badge variant="secondary" className="text-lg px-8 py-3">
              شهادة IMI الناظور
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="ابدأ تعلم العربية اليوم" subtitle="اختبار تحديد مستوى مجاني - احجز موعدك الآن" light />
          <Button variant="accent" size="xl" asChild>
            <Link href="/inscription">سجل الآن وحدد مستواك مجاناً</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
