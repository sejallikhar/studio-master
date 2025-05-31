import PageTitle from '@/components/shared/PageTitle';
import HomeSectionCard from '@/components/home/HomeSectionCard';
import { mockTechDocs, mockTechEvents, sampleNewsItemsForAICuration } from '@/lib/data';
import TechDocCard from '@/components/docs/TechDocCard';
import EventCard from '@/components/events/EventCard';
import TrendingTopicCard from '@/components/trending/TrendingTopicCard';
import { BookOpen, CalendarDays, Zap } from 'lucide-react';
import { curateTrendingTechFeed, type CurateTrendingTechFeedOutput } from '@/ai/flows/curate-trending-tech';
import type { TrendingTopic } from '@/types';

export default async function HomePage() {
  const trendingData: CurateTrendingTechFeedOutput = await curateTrendingTechFeed({ newsItems: sampleNewsItemsForAICuration.slice(0,5) });
  const trendingTopics: TrendingTopic[] = trendingData.curatedNews.map((item, index) => ({
    id: `trend-${index}`,
    title: item.length > 50 ? item.substring(0, 47) + '...' : item,
    summary: item,
    source: index % 3 === 0 ? 'GitHub' : (index % 3 === 1 ? 'Hacker News' : 'X Feed'),
    url: '#', // Placeholder URL
    tags: ['New', 'Trending'],
    imageUrl: `https://placehold.co/600x400.png?text=Trend+${index+1}`
  }));

  return (
    <div className="space-y-12">
      <PageTitle>Welcome to TechPulse</PageTitle>

      <section>
        <HomeSectionCard
          title="Latest Tech Docs"
          description="Stay updated with the newest technical documentation."
          linkHref="/docs"
          linkText="View All Docs"
          icon={<BookOpen size={28} />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {mockTechDocs.slice(0, 3).map((doc) => (
              <TechDocCard key={doc.id} doc={doc} />
            ))}
          </div>
        </HomeSectionCard>
      </section>

      <section>
        <HomeSectionCard
          title="Upcoming Tech Events"
          description="Discover webinars, meetups, and conferences."
          linkHref="/events"
          linkText="View All Events"
          icon={<CalendarDays size={28} />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {mockTechEvents.slice(0, 3).map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </HomeSectionCard>
      </section>

      <section>
        <HomeSectionCard
          title="Trending Technologies"
          description="Explore AI-curated tech trends and news."
          linkHref="/trending"
          linkText="View Full Feed"
          icon={<Zap size={28} />}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {trendingTopics.slice(0, 3).map((topic) => (
              <TrendingTopicCard key={topic.id} topic={topic} />
            ))}
          </div>
        </HomeSectionCard>
      </section>
    </div>
  );
}
