'use client';
import { useState } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import { Accordion, AccordionItem } from '@/components/ui/accordion';

const faqs = [
  { q: 'كيف أعرف مستواي في اللغة؟', a: 'نقدم اختبار تحديد مستوى مجاني في المركز. يمكنك حجز موعد للاختبار عبر الهاتف أو من خلال نموذج الاتصال.' },
  { q: 'ما هي مدة الدورة؟', a: 'تختلف مدة الدورات حسب النوع والمستوى. دورات اللغات تتراوح بين 3 و 9 أشهر. الدورات المكثفة أقصر مدة.' },
  { q: 'هل يمكنني الدفع على أقساط؟', a: 'نعم، نقدم خيارات دفع مرنة تناسب الجميع. يمكنك الدفع نقداً أو على أقساط شهرية ميسرة.' },
  { q: 'هل الشهادات معترف بها دولياً؟', a: 'نعم، جميع شهاداتنا معتمدة دولياً. DELF, Goethe, IELTS, TOEFL, DELE وغيرها معترف بها في أكثر من 50 دولة.' },
  { q: 'كم عدد الطلاب في المجموعة؟', a: 'أقصى عدد هو 8 طلاب في المجموعة لضمان جودة التعليم والمتابعة الفردية.' },
  { q: 'هل يوجد اختبار تحديد مستوى مجاني؟', a: 'نعم، اختبار تحديد المستوى مجاني ودون أي التزام. احجز موعدك الآن.' },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <SectionHeading title="الأسئلة الشائعة" />
        <Accordion>
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              trigger={faq.q}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            >
              {faq.a}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
