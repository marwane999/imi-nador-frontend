'use client';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MessageCircle, CreditCard, Users, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Hero from '@/components/sections/Hero';
import TrustBadges from '@/components/sections/TrustBadges';
import StatsCounter from '@/components/sections/StatsCounter';
import CourseGrid from '@/components/sections/CourseGrid';
import Certifications from '@/components/sections/Certifications';
import Testimonials from '@/components/sections/Testimonials';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import SectionHeading from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const whyItems = [
  {
    icon: GraduationCap,
    title: 'أساتذة ناطقون أصليون',
    desc: 'جميع أساتذتنا ناطقون أصليون للغة التي يدرسونها، مما يضمن لك تعلم النطق الصحيح والتعبير الطبيعي منذ اليوم الأول.',
    color: 'bg-secondary-100 text-secondary-600',
  },
  {
    icon: Award,
    title: 'شهادات دولية معترف بها',
    desc: 'نؤهلك للحصول على شهادات معتمدة عالمياً مثل DELF، IELTS، Goethe، DELE وغيرها، لتفتح لك أبواب الدراسة والعمل في الخارج.',
    color: 'bg-accent-100 text-accent-600',
  },
  {
    icon: MessageCircle,
    title: 'الطريقة المباشرة',
    desc: 'نعتمد الطريقة المباشرة في التدريس، حيث يتم التحدث باللغة المستهدفة فقط من الحصة الأولى، مما يسرع عملية التعلم.',
    color: 'bg-primary-100 text-primary-600',
  },
  {
    icon: CreditCard,
    title: 'أسعار مناسبة وتقسيط مريح',
    desc: 'نقدم أسعاراً تنافسية مع إمكانية التقسيط الشهري المريح، لتناسب جميع الفئات.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Users,
    title: 'مجموعات صغيرة - 8 طلاب كحد أقصى',
    desc: 'نضمن جودة التعليم من خلال مجموعات لا تتجاوز 8 طلاب، مما يتيح متابعة فردية وتفاعلاً أفضل.',
    color: 'bg-purple-100 text-purple-600',
  },
];

function WhySection() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading title="لماذا IMI الناظور؟" subtitle="أكثر من 15 عاماً من التميز في تدريس اللغات والإعلاميات" />
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} className="space-y-12">
          {whyItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}
            >
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-primary-500">{item.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">{item.desc}</p>
              </div>
              <div className="flex-1">
                <div className={`w-full h-64 rounded-2xl ${item.color.replace('text-', '')} bg-opacity-20 flex items-center justify-center`}>
                  <item.icon className="w-24 h-24 opacity-30" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function MapSection() {
  const { ref, controls, variants } = useScrollAnimation();

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionHeading title="موقعنا" subtitle="زورونا في مركزنا بالناظور" />
        <motion.div ref={ref} animate={controls} initial="hidden" variants={variants} className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3198.0!2d-2.9333!3d35.1667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDEwJzAwLjAiTiAywrA1NicwMC4wIlc!5e0!3m2!1sar!2sma!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="موقع IMI الناظور"
          />
        </motion.div>
      </div>
    </section>
  );
}

function ContactBar() {
  return (
    <div className="bg-primary-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-sm">
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-secondary-500" />
            الناظور، المغرب
          </span>
          <span className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-secondary-500" />
            +212 6XX XXX XXX
          </span>
          <span className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-secondary-500" />
            contact@imi-nador.ma
          </span>
          <span className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary-500" />
            الإثنين - السبت: 9:00 - 18:00
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <StatsCounter />
      <WhySection />
      <CourseGrid />
      <Certifications />
      <Testimonials />
      <FAQSection />
      <CTASection
        title="ابدأ رحلتك اليوم"
        subtitle="لا تدع الفرصة تفوتك. الأماكن محدودة والعروض مستمرة."
        buttonText="سجل الآن واستفد من العرض الخاص"
        trust="يمكنك الإلغاء خلال 7 أيام واسترداد كامل المبلغ"
      />
      <MapSection />
      <ContactBar />
    </>
  );
}
