import { createRequestHandler } from '@expo/server/adapter/vercel';
import { join } from 'path';

module.exports = createRequestHandler({
  build: join(__dirname, '../dist/server'),
});
