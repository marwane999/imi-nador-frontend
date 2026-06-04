'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ClipboardList, FileText, CreditCard, CheckCircle, MapPin, Phone, MessageCircle, Shield, Clock, Gift } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import InscriptionForm from '@/components/forms/InscriptionForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const steps = [
  { icon: ClipboardList, title: 'اختيار الدورة', desc: 'تصفح برامجنا واختر ما يناسبك' },
  { icon: FileText, title: 'ملء الاستمارة', desc: 'أدخل معلوماتك في استمارة التسجيل' },
  { icon: CreditCard, title: 'تأكيد الدفع', desc: 'اختر طريقة الدفع المناسبة لك' },
  { icon: CheckCircle, title: 'بدء التعلم', desc: 'انضم إلينا وابدأ رحلتك التعليمية' },
];

const trustSignals = [
  { icon: Shield, title: 'معلومات آمنة', desc: 'جميع معلوماتك الشخصية محمية ومشفرة' },
  { icon: Clock, title: 'رد خلال 24 ساعة', desc: 'فريقنا يرد على استفساراتكم بسرعة' },
  { icon: Gift, title: 'تسجيل مجاني', desc: 'التسجيل مجاني ولا توجد رسوم مخفية' },
];

export default function InscriptionPage() {
  const heroAnimation = useScrollAnimation();
  const stepsAnimation = useScrollAnimation();
  const trustAnimation = useScrollAnimation();

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
            title="سجل الآن — ابدأ رحلتك التعليمية"
            subtitle="اختر برنامجك التعليمي واملأ استمارة التسجيل للانضمام إلى IMI"
            light
          />
        </motion.div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>استمارة التسجيل</CardTitle>
                  <CardDescription>املأ المعلومات التالية للتسجيل في البرنامج الذي تختاره</CardDescription>
                </CardHeader>
                <CardContent>
                  <InscriptionForm />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <motion.div
                ref={stepsAnimation.ref}
                variants={stepsAnimation.variants}
                initial="hidden"
                animate={stepsAnimation.controls}
              >
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-6">خطوات التسجيل</h3>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center flex-shrink-0">
                          <step.icon className="w-5 h-5 text-white" />
                        </div>
                        {index < steps.length - 1 && <div className="w-0.5 h-12 bg-gray-200" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">{step.title}</h4>
                        <p className="text-sm text-gray-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <Separator />

              <div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">معلومات إضافية</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-800">العنوان</p>
                      <p className="text-sm text-gray-600">الناظور، المغرب</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-800">الهاتف</p>
                      <p className="text-sm text-gray-600">0536-33-07-07</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MessageCircle className="w-5 h-5 text-secondary-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-bold text-gray-800">واتساب</p>
                      <p className="text-sm text-gray-600">+212-536-33-07-07</p>
                    </div>
                  </div>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">معلومات الدفع</h3>
                <Card className="bg-gray-50">
                  <CardContent className="pt-6">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      نوفر عدة طرق دفع مرنة تتناسب مع احتياجاتكم. يمكنكم الدفع نقداً أو بالتقسيط.
                      فريقنا سيتواصل معكم لتأكيد طريقة الدفع بعد تقديم طلب التسجيل.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            ref={trustAnimation.ref}
            variants={trustAnimation.variants}
            initial="hidden"
            animate={trustAnimation.controls}
          >
            <SectionHeading
              title="لماذا تثق فينا؟"
              subtitle="نضع خصوصية وراحة عملائنا في المقام الأول"
            />
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {trustSignals.map((signal) => (
              <motion.div
                key={signal.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="text-center h-full">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-full bg-primary-50 flex items-center justify-center mx-auto mb-2">
                      <signal.icon className="w-7 h-7 text-primary-500" />
                    </div>
                    <CardTitle className="text-lg">{signal.title}</CardTitle>
                    <CardDescription>{signal.desc}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
