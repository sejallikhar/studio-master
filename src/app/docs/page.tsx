import PageTitle from '@/components/shared/PageTitle';
import TechDocCard from '@/components/docs/TechDocCard';
import { mockTechDocs } from '@/lib/data';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

export default function DocsPage() {
  return (
    <div>
      <PageTitle>Tech Documentation</PageTitle>
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <Input
          type="search"
          placeholder="Search documentation (e.g., React, Kubernetes)..."
          className="max-w-md"
        />
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {mockTechDocs.map((doc) => (
          <TechDocCard key={doc.id} doc={doc} />
        ))}
      </div>
    </div>
  );
}
