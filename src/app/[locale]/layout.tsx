import type { Metadata } from 'next';
import { Tajawal, Cairo } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import '@/styles/globals.css';

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-tajawal',
  display: 'swap',
});

const cairo = Cairo({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cairo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'معهد IMI الناظور للغات والإعلاميات — أفضل معهد تعليم لغات وإعلاميات بالناظور',
  description:
    'أكثر من 15 عاماً من الخبرة في تدريس اللغات والإعلاميات في الناظور. أساتذة ناطقون أصليون، شهادات دولية معترف بها، طرق تعليم حديثة.',
  keywords: [
    'معهد لغات الناظور',
    'تعليم اللغة الإنجليزية الناظور',
    'دورات الإعلاميات الناظور',
    'IMI ناظور',
    'DELF الناظور',
    'IELTS الناظور',
    'الدعم المدرسي الناظور',
  ],
  openGraph: {
    title: 'IMI الناظور — بوابتك للغات والإعلاميات',
    description: 'أكثر من 15 عاماً من الخبرة في تدريس اللغات والإعلاميات في الناظور',
    locale: 'ar_MA',
    siteName: 'IMI Nador',
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${tajawal.variable} ${cairo.variable} font-body bg-white text-[#1A1A2E] antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
