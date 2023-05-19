import { response } from 'express';
import reviewsService from '../services';

export default (dependencies) => {
  const createReviews = async (request, response, next) => {
    // Input
    const { results } = request.body;
    const movieId = request.params.id
    // Treatment
    const review = await reviewsService.registerReviews(movieId, results, dependencies);
    // output
    response.status(201).json(review);
  };
  const getReviews = async (request, response, next) => {
    // Treatment
    const movieId = request.params.id
    const review = await reviewsService.getReviews(movieId, dependencies);
    // output
    response.status(200).json(review);
  };
  const updateReviews = async (request, response, next) => {
    // Treatment
    const { author, content, created_at, updated_at } = request.body;
    const movieId = request.params.id
    const updStatus = await reviewsService.updateReviews(movieId, author, content, created_at, updated_at, dependencies);
    // output
    response.status(200).json(updStatus);
  };
  return {
    createReviews,
    getReviews,
    updateReviews,
  };
};
