
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, Clock, Lightbulb, AppWindow, Users, LifeBuoy, Book } from 'lucide-react';
import type { TechDoc, LinkItem } from '@/types';

interface TechDocCardProps {
  doc: TechDoc;
}

const LinkSection: React.FC<{ title: string; links: LinkItem[]; icon: React.ElementType }> = ({ title, links, icon: Icon }) => {
  if (!links || links.length === 0) return null;
  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold mb-1.5 flex items-center text-muted-foreground">
        <Icon className="mr-2 h-4 w-4 text-primary" />
        {title}
      </h4>
      <div className="flex flex-col space-y-1">
        {links.map((link) => (
          <Button
            key={link.url}
            variant="link"
            size="sm"
            asChild
            className="p-0 h-auto justify-start text-muted-foreground hover:text-primary hover:no-underline -ml-1"
          >
            <Link href={link.url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 h-3 w-3" />
              {link.name}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default function TechDocCard({ doc }: TechDocCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
            {doc.favicon && (
                <Image 
                  src={doc.favicon} 
                  alt={`${doc.title} favicon`} 
                  width={24} 
                  height={24} 
                  className="mr-3 rounded"
                  data-ai-hint="logo brand"
                />
            )}
            <CardTitle className="font-headline text-xl mb-1 flex-grow">{doc.title}</CardTitle>
            <Button variant="ghost" size="icon" className="ml-2 -mt-1 -mr-1 shrink-0">
                <Star className="h-5 w-5" />
                <span className="sr-only">Favorite</span>
            </Button>
        </div>
        <CardDescription className="text-sm line-clamp-3 h-[3.75rem]">{doc.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {doc.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <LinkSection title="App Showcase" links={doc.appLinks || []} icon={AppWindow} />
        <LinkSection title="Community" links={doc.communityLinks || []} icon={Users} />
        <LinkSection title="Support" links={doc.supportLinks || []} icon={LifeBuoy} />

      </CardContent>
      <CardFooter className="flex flex-col items-start gap-3 pt-4 border-t">
        {doc.lastUpdated && (
            <div className="text-xs text-muted-foreground flex items-center w-full">
                <Clock className="h-3 w-3 mr-1.5" />
                Updated: {new Date(doc.lastUpdated).toLocaleDateString()}
            </div>
        )}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2">
            <Button asChild size="sm" className="w-full">
            <Link href={doc.url} target="_blank" rel="noopener noreferrer">
                <Book className="mr-2 h-4 w-4" />
                View Docs
            </Link>
            </Button>
            {doc.tutorialUrl && (
            <Button asChild variant="outline" size="sm" className="w-full">
                <Link href={doc.tutorialUrl} target="_blank" rel="noopener noreferrer">
                <Lightbulb className="mr-2 h-4 w-4" />
                View Tutorial
                </Link>
            </Button>
            )}
        </div>
      </CardFooter>
    </Card>
  );
}
