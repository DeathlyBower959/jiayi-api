import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DISCORD_WEBHOOK: z
      .string()
      .regex(/https:\/\/discord.com\/api\/webhooks\/\d+\/.+/),
    NODE_ENV: z.enum(['development', 'production']),
  },
  client: {},
  runtimeEnv: {
    DISCORD_WEBHOOK: process.env.DISCORD_WEBHOOK,
    NODE_ENV: process.env.NODE_ENV,
  },
});
