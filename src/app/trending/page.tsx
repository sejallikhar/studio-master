import PageTitle from '@/components/shared/PageTitle';
import TrendingTopicCard from '@/components/trending/TrendingTopicCard';
import { curateTrendingTechFeed, type CurateTrendingTechFeedOutput } from '@/ai/flows/curate-trending-tech';
import { sampleNewsItemsForAICuration } from '@/lib/data';
import type { TrendingTopic } from '@/types';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

export default async function TrendingPage() {
  const trendingData: CurateTrendingTechFeedOutput = await curateTrendingTechFeed({ newsItems: sampleNewsItemsForAICuration });

  const trendingTopics: TrendingTopic[] = trendingData.curatedNews.map((item, index) => ({
    id: `trend-${index}`,
    title: item.length > 70 ? item.substring(0, 67) + '...' : item, // Keep titles a bit longer
    summary: item,
    source: index % 4 === 0 ? 'GitHub Trends' : (index % 4 === 1 ? 'Hacker News' : (index % 4 === 2 ? 'X Dev Feeds' : 'Tech Blogs')),
    url: '#', // Placeholder URL, in a real app this would be the source URL
    tags: ['AI', 'Frontend', 'DevOps', 'New', 'Hot'].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 2) + 1), // Random tags
    imageUrl: `https://placehold.co/600x400.png?text=Tech+Trend`, // Generic placeholder
  }));

  return (
    <div>
      <PageTitle>Trending Tech Feed</PageTitle>
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <Input
          type="search"
          placeholder="Search trends (e.g., AI, WebAssembly)..."
          className="max-w-sm"
        />
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter by Tag
        </Button>
      </div>
      {trendingTopics.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trendingTopics.map((topic) => (
            <TrendingTopicCard key={topic.id} topic={topic} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No trending topics found at the moment.</p>
          <p className="text-sm text-muted-foreground mt-2">The AI curator might be taking a break or there's no fresh news!</p>
        </div>
      )}
    </div>
  );
}
