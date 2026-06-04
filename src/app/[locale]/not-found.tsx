import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-heading font-black text-primary-500 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">الصفحة غير موجودة</p>
        <Button variant="default" size="lg" asChild>
          <Link href="/">العودة إلى الرئيسية</Link>
        </Button>
      </div>
    </div>
  );
}
