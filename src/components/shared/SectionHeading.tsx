import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, className, light }: SectionHeadingProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-500 mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className={cn('text-lg max-w-2xl mx-auto', light ? 'text-gray-300' : 'text-gray-600')}>
          {subtitle}
        </p>
      )}
      <div className="w-20 h-1 bg-secondary-500 mx-auto mt-6 rounded-full" />
    </div>
  );
}
