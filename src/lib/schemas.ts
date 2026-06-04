import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'الاسم يجب أن يكون أكثر من حرفين').max(100),
  phone: z
    .string()
    .regex(/^0[5-7]\d{8}$/, 'رقم الهاتف غير صحيح (يبدأ بـ 05، 06، 07 ويتبعه 8 أرقام)'),
  email: z.string().email('البريد الإلكتروني غير صحيح').optional().or(z.literal('')),
  subject: z.string().optional(),
  message: z.string().min(5, 'الرسالة يجب أن تكون أكثر من 5 أحرف').max(2000),
});

export const inscriptionSchema = z.object({
  fullName: z.string().min(2, 'الاسم يجب أن يكون أكثر من حرفين').max(100),
  phone: z
    .string()
    .regex(/^0[5-7]\d{8}$/, 'رقم الهاتف غير صحيح'),
  email: z.string().email('البريد الإلكتروني غير صحيح').optional().or(z.literal('')),
  courseType: z.enum(['langue', 'informatique', 'soutien', 'formation'], {
    errorMap: () => ({ message: 'اختر نوع الدورة' }),
  }),
  courseName: z.string().min(1, 'اختر الدورة المطلوبة'),
  level: z.string().optional(),
  paymentMethod: z.string().optional(),
  message: z.string().max(2000).optional(),
});

export const newsletterSchema = z.object({
  email: z.string().email('البريد الإلكتروني غير صحيح'),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type InscriptionFormData = z.infer<typeof inscriptionSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
