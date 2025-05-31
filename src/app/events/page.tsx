import PageTitle from '@/components/shared/PageTitle';
import EventCard from '@/components/events/EventCard';
import { mockTechEvents } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Filter, Calendar } from 'lucide-react';

export default function EventsPage() {
  return (
    <div>
      <PageTitle>Upcoming Tech Events</PageTitle>
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <Input
          type="search"
          placeholder="Search events (e.g., AI, Frontend, DevOps)..."
          className="max-w-sm"
        />
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter by Tech/Region
        </Button>
        <Button variant="outline">
          <Calendar className="mr-2 h-4 w-4" />
          Calendar View
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTechEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
