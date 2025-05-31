import PageTitle from '@/components/shared/PageTitle';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function ChatPage() {
  return (
    <div>
      <PageTitle>Chat</PageTitle>
      <Card>
        <CardHeader>
          <CardTitle className="font-headline">Chat Feature - In Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Real-time messaging, group discussions, and sharing capabilities are being built.
            We're working hard to bring you a seamless communication experience within TechPulse.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
