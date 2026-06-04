'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  value: string;
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const Accordion = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { type?: string }
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('space-y-2', className)} {...props} />
));
Accordion.displayName = 'Accordion';

const AccordionItem: React.FC<AccordionItemProps & { open?: boolean; onToggle?: () => void }> = ({
  trigger,
  children,
  open,
  onToggle,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between bg-white px-6 py-4 text-right font-bold text-primary-500 hover:bg-gray-50 transition"
      >
        {trigger}
        <ChevronDown
          className={cn(
            'h-5 w-5 shrink-0 transition-transform duration-200',
            open && 'rotate-180'
          )}
        />
      </button>
      {open && <div className="px-6 pb-4 text-gray-600">{children}</div>}
    </div>
  );
};
AccordionItem.displayName = 'AccordionItem';

export { Accordion, AccordionItem };
