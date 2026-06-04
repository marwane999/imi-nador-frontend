'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { inscriptionSchema, type InscriptionFormData } from '@/lib/schemas';
import { contactApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const courseTypes = [
  { value: 'langue', label: 'لغة' },
  { value: 'informatique', label: 'إعلاميات' },
  { value: 'soutien', label: 'دعم مدرسي' },
  { value: 'formation', label: 'تكوين مهني' },
];

const coursesByType: Record<string, { value: string; label: string }[]> = {
  langue: [
    { value: 'francais', label: 'Français' },
    { value: 'english', label: 'English' },
    { value: 'deutsch', label: 'Deutsch' },
    { value: 'espanol', label: 'Español' },
    { value: 'arab', label: 'العربية' },
    { value: 'dutch', label: 'Dutch' },
  ],
  informatique: [
    { value: 'basics', label: 'أساسيات الحاسوب' },
    { value: 'programming', label: 'برمجة' },
    { value: 'networks', label: 'شبكات' },
    { value: 'maintenance', label: 'صيانة' },
    { value: 'design', label: 'تصميم جرافيكي' },
  ],
  soutien: [
    { value: 'primary', label: 'ابتدائي' },
    { value: 'middle', label: 'إعدادي' },
    { value: 'secondary', label: 'ثانوي' },
    { value: 'university', label: 'جامعي' },
  ],
  formation: [
    { value: 'tot', label: 'تكوين المدربين (TOT)' },
    { value: 'office', label: 'الإدارة المكتبية' },
    { value: 'marketing', label: 'التسويق الرقمي' },
    { value: 'hr', label: 'الموارد البشرية' },
    { value: 'accounting', label: 'المحاسبة' },
    { value: 'business_english', label: 'الإنجليزية للأعمال' },
  ],
};

const levels = [
  { value: 'beginner', label: 'مبتدئ (A1-A2)' },
  { value: 'intermediate', label: 'متوسط (B1-B2)' },
  { value: 'advanced', label: 'متقدم (C1-C2)' },
];

const paymentMethods = [
  { value: 'cash', label: 'نقداً' },
  { value: 'installment', label: 'تقسيط' },
];

export default function InscriptionForm() {
  const [courseType, setCourseType] = useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InscriptionFormData>({
    resolver: zodResolver(inscriptionSchema),
  });

  const selectedType = watch('courseType');

  const onSubmit = async (data: InscriptionFormData) => {
    try {
      await contactApi.inscription({
        full_name: data.fullName,
        phone: data.phone,
        email: data.email || undefined,
        course_type: data.courseType,
        course_name: data.courseName,
        level: data.level || undefined,
        payment_method: data.paymentMethod || undefined,
        message: data.message || undefined,
      });
      toast.success('تم استلام طلب التسجيل، سنتصل بك لتأكيد الموعد');
      reset();
      setCourseType('');
    } catch {
      toast.error('حدث خطأ، الرجاء المحاولة مرة أخرى');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="fullName">الاسم الكامل</Label>
        <Input id="fullName" placeholder="أدخل اسمك الكامل" {...register('fullName')} />
        {errors.fullName && <p className="text-sm text-accent-500 mt-1">{errors.fullName.message}</p>}
      </div>
      <div>
        <Label htmlFor="phone">رقم الهاتف</Label>
        <Input id="phone" placeholder="06XXXXXXXX" dir="ltr" {...register('phone')} />
        {errors.phone && <p className="text-sm text-accent-500 mt-1">{errors.phone.message}</p>}
      </div>
      <div>
        <Label htmlFor="email">البريد الإلكتروني</Label>
        <Input id="email" type="email" placeholder="email@example.com" dir="ltr" {...register('email')} />
        {errors.email && <p className="text-sm text-accent-500 mt-1">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="courseType">نوع الدورة</Label>
        <select
          id="courseType"
          className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          {...register('courseType', {
            onChange: (e) => setCourseType(e.target.value),
          })}
        >
          <option value="">اختر نوع الدورة</option>
          {courseTypes.map((t) => (
            <option key={t.value} value={t.value}>
              {t.label}
            </option>
          ))}
        </select>
        {errors.courseType && <p className="text-sm text-accent-500 mt-1">{errors.courseType.message}</p>}
      </div>
      {selectedType && (
        <div>
          <Label htmlFor="courseName">الدورة المطلوبة</Label>
          <select
            id="courseName"
            className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
            {...register('courseName')}
          >
            <option value="">اختر الدورة</option>
            {(coursesByType[selectedType] || []).map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          {errors.courseName && <p className="text-sm text-accent-500 mt-1">{errors.courseName.message}</p>}
        </div>
      )}
      <div>
        <Label htmlFor="level">المستوى الحالي</Label>
        <select
          id="level"
          className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          {...register('level')}
        >
          <option value="">اختر مستواك</option>
          {levels.map((l) => (
            <option key={l.value} value={l.value}>
              {l.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="paymentMethod">طريقة الدفع</Label>
        <select
          id="paymentMethod"
          className="flex h-12 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
          {...register('paymentMethod')}
        >
          <option value="">اختر طريقة الدفع</option>
          {paymentMethods.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <Label htmlFor="message">رسالة إضافية</Label>
        <Textarea id="message" placeholder="أي معلومات إضافية..." {...register('message')} />
      </div>
      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال طلب التسجيل'}
      </Button>
    </form>
  );
}
