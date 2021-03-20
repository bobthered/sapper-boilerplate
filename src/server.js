// libraries
import compression from 'compression';
import express from 'express';
import * as sapper from '@sapper/server';
import sirv from 'sirv';

// initiate express app;
const app = express();

// env variables
const { NODE_ENV, PORT } = process.env;
const dev = NODE_ENV === 'development';

// express server
const server = app
  .use(
    compression({ threshold: 0 }),
    sirv('public', { dev }),
    express.json(),
    sapper.middleware()
  )
  .listen(PORT || 90, () => {
    console.log(`Listening at http://localhost:${PORT || 80}`);
  });
