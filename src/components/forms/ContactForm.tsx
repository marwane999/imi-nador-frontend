'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { contactSchema, type ContactFormData } from '@/lib/schemas';
import { contactApi } from '@/lib/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const subjects = [
  { value: 'general', label: 'استفسار عن دورات' },
  { value: 'registration', label: 'تسجيل' },
  { value: 'complaint', label: 'شكوى' },
  { value: 'suggestion', label: 'اقتراح' },
  { value: 'other', label: 'أخرى' },
];

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await contactApi.submit(data);
      toast.success('تم استلام رسالتك بنجاح، سنتصل بك قريباً');
      reset();
    } catch {
      toast.error('حدث خطأ، الرجاء المحاولة مرة أخرى');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div>
        <Label htmlFor="name">الاسم الكامل</Label>
        <Input id="name" placeholder="أدخل اسمك الكامل" {...register('name')} />
        {errors.name && <p className="text-sm text-accent-500 mt-1">{errors.name.message}</p>}
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
        <Label htmlFor="subject">الموضوع</Label>
        <Select id="subject" options={subjects} placeholder="اختر الموضوع" {...register('subject')} />
      </div>
      <div>
        <Label htmlFor="message">الرسالة</Label>
        <Textarea id="message" placeholder="اكتب رسالتك هنا..." {...register('message')} />
        {errors.message && <p className="text-sm text-accent-500 mt-1">{errors.message.message}</p>}
      </div>
      <Button type="submit" variant="accent" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
      </Button>
    </form>
  );
}
