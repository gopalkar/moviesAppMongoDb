import dotenv from 'dotenv';
import express from 'express';
import generesRouter from './src/generes/routes';
import createAccountsRouter from './src/accounts/routes';
import buildDependencies from './src/config/dependencies';
import createMoviesRouter from './src/movies/routes';
import createReviewsRouter from './src/reviews/routes';
import db from './src/config/db';
import errorHandler from './src/utils/ErrorHandler';

dotenv.config();

db.init();

const app = express();

const port = process.env.PORT;

const dependencies = buildDependencies();

app.use(express.json());
app.use('/api/generes', generesRouter(dependencies));
app.use('/api/accounts', createAccountsRouter(dependencies));
app.use('/api/movies', createMoviesRouter(dependencies));
app.use('/api/reviews', createReviewsRouter(dependencies));
app.use(errorHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});
