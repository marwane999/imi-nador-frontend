'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, MessageCircle, Mail, Clock, Facebook, Send, ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ContactForm from '@/components/forms/ContactForm';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const contactInfo = [
  { icon: MapPin, title: 'العنوان', value: 'الناظور، المغرب', sub: 'المنطقة المركزية قرب المدارس' },
  { icon: Phone, title: 'الهاتف', value: '0536-33-07-07', sub: 'أيام الاثنين إلى السبت' },
  { icon: MessageCircle, title: 'الجوال', value: '+212-536-33-07-07', sub: 'متاح على واتساب' },
  { icon: Mail, title: 'البريد الإلكتروني', value: 'contact@imi-nador.com', sub: 'نرد خلال 24 ساعة' },
  { icon: Clock, title: 'ساعات العمل', value: '09:00 - 20:00', sub: 'الاثنين - السبت' },
];

export default function ContactPage() {
  const heroAnimation = useScrollAnimation();
  const infoAnimation = useScrollAnimation();
  const socialAnimation = useScrollAnimation();

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
            title="اتصل بنا — نحن هنا لمساعدتك"
            subtitle="فريقنا جاهز للرد على استفساراتكم وتقديم المساعدة"
            light
          />
        </motion.div>
      </section>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            <div className="lg:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle>أرسل لنا رسالة</CardTitle>
                  <CardDescription>املأ النموذج وسنتواصل معك في أقرب وقت</CardDescription>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <motion.div
                ref={infoAnimation.ref}
                variants={infoAnimation.variants}
                initial="hidden"
                animate={infoAnimation.controls}
              >
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-6">معلومات الاتصال</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-800">{info.title}</p>
                        <p className="text-sm text-gray-700">{info.value}</p>
                        {info.sub && <p className="text-xs text-gray-500">{info.sub}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <Separator />

              <motion.div
                ref={socialAnimation.ref}
                variants={socialAnimation.variants}
                initial="hidden"
                animate={socialAnimation.controls}
              >
                <h3 className="text-xl font-heading font-bold text-primary-500 mb-4">تابعنا على</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook className="w-5 h-5" />
                      فيسبوك
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="gap-2" asChild>
                    <a href="https://wa.me/212536330707" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      واتساب
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="موقعنا على الخريطة"
            subtitle="زرنا في مقر المعهد"
          />
          <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.0!2d-2.933!3d35.167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEwJzAxLjIiTiAwMsKwNTUnNTguOCJX!5e0!3m2!1sar!2sma!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع IMI الناظور"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="إجراءات سريعة"
            subtitle="تواصل معنا بالطريقة التي تناسبك"
          />
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="accent" size="xl" className="gap-2" asChild>
              <a href="https://wa.me/212536330707" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                واتساب
              </a>
            </Button>
            <Button variant="default" size="xl" className="gap-2" asChild>
              <a href="tel:0536330707">
                <Phone className="w-5 h-5" />
                اتصال
              </a>
            </Button>
            <Button variant="outline" size="xl" className="gap-2" asChild>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                <MapPin className="w-5 h-5" />
                زيارة
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
