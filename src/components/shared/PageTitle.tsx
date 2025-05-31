import type { ReactNode } from 'react';

interface PageTitleProps {
  children: ReactNode;
  className?: string;
}

export default function PageTitle({ children, className }: PageTitleProps) {
  return (
    <h1
      className={`font-headline text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl mb-8 ${className || ''}`}
    >
      {children}
    </h1>
  );
}
