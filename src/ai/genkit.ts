import { config } from 'dotenv';
config(); // Load environment variables from .env file

import {genkit} from 'genkit';
import {googleAI} from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({apiKey: process.env.GEMINI_API_KEY}),
  ],
  model: 'googleai/gemini-2.0-flash',
});
