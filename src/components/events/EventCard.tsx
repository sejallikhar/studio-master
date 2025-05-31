import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CalendarDays, MapPin, Users, ExternalLink } from 'lucide-react';
import type { TechEvent } from '@/types';

interface EventCardProps {
  event: TechEvent;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      {event.imageUrl && (
        <div className="relative h-48 w-full">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint="event conference"
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{event.title}</CardTitle>
        <CardDescription className="text-sm line-clamp-2 h-[2.5rem]">{event.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="mr-2 h-4 w-4" />
          <span>{new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="mr-2 h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <div className="flex flex-wrap gap-2 pt-1">
          {event.tags.slice(0,3).map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row justify-between items-center gap-2 pt-4 border-t">
        <Button variant="outline" size="sm" className="w-full sm:w-auto">
          <Users className="mr-2 h-4 w-4" />
          RSVP / Join
        </Button>
        <Button asChild size="sm" className="w-full sm:w-auto">
          <Link href={event.url} target="_blank" rel="noopener noreferrer">
            More Info
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
