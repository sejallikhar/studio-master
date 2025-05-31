// src/ai/flows/curate-trending-tech.ts
'use server';

/**
 * @fileOverview AI-curated feed of trending tech news from GitHub, Hacker News, and X feeds.
 *
 * - curateTrendingTechFeed - A function that returns a curated list of trending tech news.
 * - CurateTrendingTechFeedInput - The input type for the curateTrendingTechFeed function.
 * - CurateTrendingTechFeedOutput - The return type for the curateTrendingTechFeed function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CurateTrendingTechFeedInputSchema = z.object({
  newsItems: z.array(z.string()).describe('An array of news items from various sources.'),
});
export type CurateTrendingTechFeedInput = z.infer<typeof CurateTrendingTechFeedInputSchema>;

const CurateTrendingTechFeedOutputSchema = z.object({
  curatedNews: z
    .array(z.string())
    .describe('A curated list of trending tech news items.'),
});
export type CurateTrendingTechFeedOutput = z.infer<typeof CurateTrendingTechFeedOutputSchema>;

export async function curateTrendingTechFeed(input: CurateTrendingTechFeedInput): Promise<CurateTrendingTechFeedOutput> {
  return curateTrendingTechFeedFlow(input);
}

const shouldIncludeNewsItem = ai.defineTool({
  name: 'shouldIncludeNewsItem',
  description: 'Determines whether a given news item is relevant and should be included in the trending tech feed.',
  inputSchema: z.object({
    newsItem: z.string().describe('The news item to evaluate.'),
  }),
  outputSchema: z.boolean().describe('Whether the news item should be included (true) or not (false).'),
},
async (input) => {
  // Basic implementation (replace with more sophisticated logic if needed)
  return !input.newsItem.includes('advertisement'); // Exclude any news item including the word advertisement
});

const curateTrendingTechFeedPrompt = ai.definePrompt({
  name: 'curateTrendingTechFeedPrompt',
  tools: [shouldIncludeNewsItem],
  input: {schema: CurateTrendingTechFeedInputSchema},
  output: {schema: CurateTrendingTechFeedOutputSchema},
  prompt: `You are an AI assistant that curates a trending tech news feed.

  Given a list of news items, you must decide which ones are relevant and should be included in the curated feed.
  Use the shouldIncludeNewsItem tool to determine whether each news item is relevant.

  News Items:
  {{#each newsItems}}
  - {{{this}}}
  {{/each}}`,
  system: `You are an expert AI curator for trending tech news. You will receive a list of news items, and you must use the shouldIncludeNewsItem tool to determine which ones are relevant to the trending tech feed. Return a curated list of trending tech news items.`, // Added system prompt
});

const curateTrendingTechFeedFlow = ai.defineFlow(
  {
    name: 'curateTrendingTechFeedFlow',
    inputSchema: CurateTrendingTechFeedInputSchema,
    outputSchema: CurateTrendingTechFeedOutputSchema,
  },
  async input => {
    const curatedNews: string[] = [];

    for (const newsItem of input.newsItems) {
      const shouldInclude = await shouldIncludeNewsItem({
        newsItem: newsItem,
      });

      if (shouldInclude) {
        curatedNews.push(newsItem);
      }
    }

    return {curatedNews: curatedNews};
  }
);
