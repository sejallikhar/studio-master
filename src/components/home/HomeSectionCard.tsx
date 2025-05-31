import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

interface HomeSectionCardProps {
  title: string;
  description: string;
  linkHref: string;
  linkText: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export default function HomeSectionCard({
  title,
  description,
  linkHref,
  linkText,
  icon,
  children,
}: HomeSectionCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="font-headline text-2xl">{title}</CardTitle>
          {icon && <div className="text-primary">{icon}</div>}
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        {children}
      </CardContent>
      <div className="p-6 pt-0 mt-auto">
        <Button asChild variant="outline" className="w-full sm:w-auto">
          <Link href={linkHref}>
            {linkText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Card>
  );
}
