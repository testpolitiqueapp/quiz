// Fichier : api/counter.ts
// Ce code est une Fonction Serverless Vercel

import { kv } from '@vercel/kv';
import type { VercelRequest, VercelResponse } from '@vercel/node';

const COUNTER_KEY = 'welcome-screen-starts';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method === 'GET') {
    try {
      const count = await kv.get(COUNTER_KEY);
      return res.status(200).json({ count: Number(count) || 1200 });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ count: 1200 });
    }
  }

  if (req.method === 'POST') {
    try {
      const newCount = await kv.incr(COUNTER_KEY);
      return res.status(200).json({ count: newCount });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end(`Method ${req.method} Not Allowed`);
}