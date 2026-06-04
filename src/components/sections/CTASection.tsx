import Link from 'next/link';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/shared/SectionHeading';
import { cn } from '@/lib/utils';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref?: string;
  trust?: string;
  light?: boolean;
}

export default function CTASection({
  title,
  subtitle,
  buttonText,
  buttonHref = '/inscription',
  trust,
  light,
}: CTASectionProps) {
  return (
    <section className={light ? 'py-16 md:py-20 bg-primary-500' : 'py-16 md:py-20 bg-gray-50'}>
      <div className="container mx-auto px-4 text-center">
        <SectionHeading title={title} subtitle={subtitle} light={light} />
        <Button variant="accent" size="xl" asChild className="animate-pulse">
          <Link href={buttonHref}>{buttonText}</Link>
        </Button>
        {trust && <p className={cn('mt-4 text-sm', light ? 'text-gray-300' : 'text-gray-500')}>{trust}</p>}
      </div>
    </section>
  );
}
