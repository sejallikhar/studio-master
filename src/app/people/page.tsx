import PageTitle from '@/components/shared/PageTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PeoplePage() {
  return (
    <div>
      <PageTitle>People with Similar Skills</PageTitle>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Coming Soon!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The ability to connect with peers based on skills and interests is under development.
            Stay tuned for updates on networking, collaboration, and mentorship features!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
