import { response } from 'express';
import reviewsService from '../services';

export default (dependencies) => {
  const createReviews = async (request, response, next) => {
    // Input
    const { results } = request.body;
    const movieId = request.params.id
    console.log("controller", request.body.json)
    // Treatment
    const review = await reviewsService.registerReviews(movieId, results, dependencies);
    // output
    response.status(201).json(review);
  };
  const getReviews = async (request, response, next) => {
    // Treatment
    const review = await reviewsService.getReviews(dependencies);
    // output
    response.status(200).json(review);
  };
  const updateReviews = async (request, response, next) => {
    // Treatment
    const delStatus = await reviewsService.deleteReviews(dependencies);
    // output
    response.status(200).json(delStatus);
  };
  return {
    createReviews,
    getReviews,
    updateReviews,
  };
};
