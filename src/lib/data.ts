
import type { TechDoc, TechEvent } from '@/types';

export const mockTechDocs: TechDoc[] = [
  {
    id: '1',
    title: 'React Official Documentation',
    description: 'Learn about React, the JavaScript library for building user interfaces.',
    url: 'https://reactjs.org',
    tags: ['React', 'JavaScript', 'Frontend'],
    lastUpdated: '2024-05-28',
    favicon: 'https://reactjs.org/favicon.ico',
    tutorialUrl: 'https://react.dev/learn',
    appLinks: [
      { name: 'React DevTools', url: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi' }
    ],
    communityLinks: [
      { name: 'React GitHub Discussions', url: 'https://github.com/facebook/react/discussions' },
      { name: 'Reactiflux Discord', url: 'https://www.reactiflux.com/' }
    ],
    supportLinks: [
      { name: 'Stack Overflow (React)', url: 'https://stackoverflow.com/questions/tagged/reactjs' }
    ]
  },
  {
    id: '2',
    title: 'Flutter Official Documentation',
    description: 'Build beautiful native apps in record time with Flutter.',
    url: 'https://flutter.dev',
    tags: ['Flutter', 'Dart', 'Mobile'],
    lastUpdated: '2024-05-30',
    favicon: 'https://flutter.dev/images/favicon.png',
    communityLinks: [
      { name: 'Flutter Community', url: 'https://flutter.dev/community'}
    ],
    supportLinks: [
      { name: 'Flutter GitHub Issues', url: 'https://github.com/flutter/flutter/issues'}
    ]
  },
  {
    id: '3',
    title: 'Kubernetes Documentation',
    description: 'Documentation for Kubernetes, an open-source system for automating deployment, scaling, and management of containerized applications.',
    url: 'https://kubernetes.io/docs/',
    tags: ['Kubernetes', 'DevOps', 'Containers'],
    lastUpdated: '2024-05-25',
    favicon: 'https://kubernetes.io/images/favicon.png',
  },
  {
    id: '4',
    title: 'MDN Web Docs: JavaScript',
    description: 'Comprehensive resources for JavaScript developers of all skill levels.',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    tags: ['JavaScript', 'Web Development', 'MDN'],
    favicon: 'https://developer.mozilla.org/favicon-48x48.cbbd161b.png'
  },
   {
    id: '5',
    title: 'Next.js Documentation',
    description: 'The React Framework for Production. Next.js gives you the best developer experience with all the features you need for production.',
    url: 'https://nextjs.org/docs',
    tags: ['Next.js', 'React', 'Fullstack', 'SSR'],
    lastUpdated: '2024-05-29',
    favicon: 'https://nextjs.org/favicon.ico',
    tutorialUrl: 'https://nextjs.org/learn',
    communityLinks: [
      { name: 'Next.js GitHub Discussions', url: 'https://github.com/vercel/next.js/discussions' },
      { name: 'Next.js Discord', url: 'https://nextjs.org/discord' }
    ],
    supportLinks: [
      { name: 'Next.js GitHub Issues', url: 'https://github.com/vercel/next.js/issues'}
    ]
  },
];

export const mockTechEvents: TechEvent[] = [
  {
    id: '1',
    title: 'Global AI Summit',
    date: '2025-07-15',
    location: 'Virtual',
    description: 'Join leading AI researchers and practitioners to explore the latest advancements in artificial intelligence.',
    url: '#',
    tags: ['AI', 'Machine Learning', 'Conference'],
    imageUrl: 'https://placehold.co/600x400.png?text=AI+Summit',
  },
  {
    id: '2',
    title: 'DevOps Days - Austin',
    date: '2025-08-05',
    location: 'Austin, TX',
    description: 'A worldwide series of technical conferences covering topics of software development, IT infrastructure operations, and the intersection between them.',
    url: '#',
    tags: ['DevOps', 'CI/CD', 'Cloud'],
    imageUrl: 'https://placehold.co/600x400.png?text=DevOps+Days',
  },
  {
    id: '3',
    title: 'Frontend Masters Workshop: Advanced React Patterns',
    date: '2025-09-10',
    location: 'Online Workshop',
    description: 'Deep dive into advanced React patterns for building scalable and maintainable applications.',
    url: '#',
    tags: ['React', 'Frontend', 'Workshop'],
    imageUrl: 'https://placehold.co/600x400.png?text=React+Workshop',
  },
  {
    id: '4',
    title: 'Hackathon: Future of FinTech',
    date: '2025-10-20',
    location: 'New York, NY',
    description: 'Innovate and build the next generation of financial technology solutions. Prizes and networking opportunities.',
    url: '#',
    tags: ['Hackathon', 'FinTech', 'Innovation'],
    imageUrl: 'https://placehold.co/600x400.png?text=FinTech+Hackathon'
  },
];

// Sample news items for the AI curator
export const sampleNewsItemsForAICuration: string[] = [
  "GitHub announces new Copilot features for enterprise.",
  "Hacker News discusses the rise of WebAssembly in server-side applications.",
  "Google X releases a new open-source ML framework.",
  "TechCrunch: Startup X raises $50M for AI-powered code generation.",
  "InfoQ: The State of Microservices in 2025.",
  "A new JavaScript runtime 'Bun' is gaining popularity.",
  "Sponsored: Try NewCloudProvider for 50% off!", // This should be filtered out by AI
  "Flutter 4.0 announced with major performance improvements.",
  "Developer survey results: Python still the most loved language.",
  "Reddit r/programming: What are your favorite VS Code extensions?",
];
