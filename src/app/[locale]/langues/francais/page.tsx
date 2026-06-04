'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Star, Target, Pen, GraduationCap } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const formulas = [
  { icon: Users, title: 'المجموعة (مساء)', desc: '3 حصص في الأسبوع، مدة كل حصة ساعتان', tag: 'الأكثر انتشاراً', color: 'bg-secondary-100 text-secondary-600' },
  { icon: Clock, title: 'المجموعة (صباح)', desc: 'حصتان في الأسبوع، مدة كل حصة ساعتان', tag: 'صباحي', color: 'bg-accent-100 text-accent-600' },
  { icon: Star, title: 'دروس خصوصية', desc: 'برنامج مكثف مخصص حسب احتياجاتك', tag: 'مميز', color: 'bg-primary-100 text-primary-600' },
  { icon: Target, title: 'خصوصي مكثف', desc: 'برنامج يومي مكثف للوصول السريع للهدف', tag: 'مكثف', color: 'bg-green-100 text-green-600' },
  { icon: Pen, title: 'Jeune Au Pair', desc: 'برنامج خاص للأطفال والشباب', tag: 'أطفال', color: 'bg-purple-100 text-purple-600' },
  { icon: BookOpen, title: 'Orthographe / Rédaction', desc: 'دورة متخصصة في تحسين الكتابة والإملاء', tag: 'متخصص', color: 'bg-orange-100 text-orange-600' },
];

const levels = [
  { level: 'A1', label: 'مبتدئ', desc: 'فهم واستعمال التعابير اليومية الأساسية' },
  { level: 'A2', label: 'أساسي', desc: 'التواصل في المهام البسيطة والروتينية' },
  { level: 'B1', label: 'مستقل', desc: 'التحدث بطلاقة في مواقف السفر والعمل' },
  { level: 'B2', label: 'متقدم', desc: 'فهم الأفكار الرئيسية للنصوص المعقدة' },
  { level: 'C1', label: 'متقن', desc: 'التعبير بطلاقة وتلقائية دون عناء' },
  { level: 'C2', label: 'خبير', desc: 'فهم كل ما يقرأ ويسمع بسهولة تامة' },
];

const certs = ['DELF A1-A2', 'DELF B1-B2', 'DALF C1-C2', 'DELF Junior', 'DELF Pro'];

export default function FrancaisPage() {
  const { ref: formulaRef, controls: formulaControls, variants: formulaVariants } = useScrollAnimation();
  const { ref: levelRef, controls: levelControls, variants: levelVariants } = useScrollAnimation();
  const { ref: certRef, controls: certControls, variants: certVariants } = useScrollAnimation();
  const { ref: methodRef, controls: methodControls, variants: methodVariants } = useScrollAnimation();

  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-black text-white leading-tight mb-4">
              Français في <span className="text-secondary-500">IMI الناظور</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl leading-relaxed">
              تعلم الفرنسية على يد أساتذة ناطقين أصليين بالطريقة المباشرة. من A1 إلى C2.
              حضّر لشهادات DELF و DALF المعترف بها دولياً.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="صيغ التكوين" subtitle="اختر الصيغة التي تناسب جدولك وأهدافك" />
          <motion.div
            ref={formulaRef}
            animate={formulaControls}
            initial="hidden"
            variants={formulaVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {formulas.map((f) => (
              <Card key={f.title} className="group hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-3 left-3 px-2 py-0.5 rounded-full text-xs font-bold text-white ${f.color.split(' ')[0]} bg-opacity-100 bg-primary-500`}>
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

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <SectionHeading title="مستويات CEFR" subtitle="من A1 إلى C2 حسب الإطار الأوروبي المرجعي المشترك" />
          <motion.div
            ref={levelRef}
            animate={levelControls}
            initial="hidden"
            variants={levelVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
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

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title="الشهادات" subtitle="شهادات رسمية معترف بها دولياً" />
          <motion.div
            ref={certRef}
            animate={certControls}
            initial="hidden"
            variants={certVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            {certs.map((cert) => (
              <Badge key={cert} variant="secondary" className="text-base px-6 py-2">
                {cert}
              </Badge>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              ref={methodRef}
              animate={methodControls}
              initial="hidden"
              variants={methodVariants}
              className="flex-1"
            >
              <div className="w-full h-80 rounded-2xl bg-blue-100 flex items-center justify-center">
                <GraduationCap className="w-32 h-32 text-blue-300" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <SectionHeading title="الطريقة المباشرة" className="text-right" />
              <p className="text-gray-600 leading-relaxed">
                في IMI، نعتمد الطريقة المباشرة (Direct Method) لتعليم الفرنسية. يتم التحدث
                بالفرنسية فقط منذ الحصة الأولى، مما يسرع عملية التعلم ويكسر حاجز الخوف.
                أساتذتنا الناطقون الأصليون يستخدمون تقنيات تفاعلية حديثة لضمان تقدم سريع
                ومستدام في جميع المهارات: القراءة، الكتابة، الاستماع، والتحدث.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-primary-500">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading title="ابدأ تعلم Français اليوم" subtitle="اختبار تحديد مستوى مجاني - احجز موعدك الآن" light />
          <Button variant="accent" size="xl" asChild>
            <Link href="/inscription">سجل الآن وحدد مستواك مجاناً</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
