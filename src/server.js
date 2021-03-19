// libraries
import compression from 'compression';
import express from 'express';
import * as sapper from '@sapper/server';

// env variables
const { PORT } = process.env;

// express server
const server = app
	.use(
		compression({threshold: 0}),
		express.json(),
		sapper.middleware()
	)
	.listen(PORT || 90, () => {
		console.log(`Listening at http://localhost:${PORT || 80}`)
	})