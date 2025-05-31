import { config } from 'dotenv';
config(); // Load environment variables from .env file

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({apiKey: "AIzaSyDjLOnbV5HwrEBxJfq-Br39EvFD3SZl6qc"}),
  ],
  model: 'googleai/gemini-2.0-flash',
});
