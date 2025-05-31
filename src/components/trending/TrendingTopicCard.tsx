import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, MessageCircle, Rss } from 'lucide-react'; // Assuming X is similar to Rss/Twitter
import type { TrendingTopic } from '@/types';

interface TrendingTopicCardProps {
  topic: TrendingTopic;
}

const SourceIcon = ({ source }: { source: string }) => {
  if (source.toLowerCase().includes('github')) return <Github className="mr-2 h-4 w-4" />;
  if (source.toLowerCase().includes('hacker news')) return <MessageCircle className="mr-2 h-4 w-4" />;
  if (source.toLowerCase().includes('x') || source.toLowerCase().includes('twitter')) return <Rss className="mr-2 h-4 w-4" />; // Lucide doesn't have X/Twitter icon
  return <Rss className="mr-2 h-4 w-4" />;
};


export default function TrendingTopicCard({ topic }: TrendingTopicCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      {topic.imageUrl && (
         <div className="relative h-48 w-full">
            <Image
                src={topic.imageUrl}
                alt={topic.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                data-ai-hint="technology abstract"
            />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl">{topic.title}</CardTitle>
        <div className="flex items-center text-xs text-muted-foreground pt-1">
          <SourceIcon source={topic.source} />
          <span>{topic.source}</span>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm line-clamp-3 h-[3.75rem]">{topic.summary}</CardDescription>
        <div className="flex flex-wrap gap-2 mt-3">
          {topic.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-4 border-t">
        <Button asChild size="sm" className="w-full">
          <Link href={topic.url} target="_blank" rel="noopener noreferrer">
            Read More
            <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
