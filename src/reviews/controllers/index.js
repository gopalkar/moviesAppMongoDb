import { response } from 'express';
import reviewsService from '../services';

export default (dependencies) => {
  const createReviews = async (request, response, next) => {
    // Input
    const { author, content, created_at, updated_at } = request.body;
    const movieId = request.params.id
    // Treatment
    const review = await reviewsService.registerReviews(movieId, author, content, created_at, updated_at, dependencies);
    // output
    response.status(201).json(review);
  };
  const getReviews = async (request, response, next) => {
    // Treatment
    const movieId = request.params.id
    const review = await reviewsService.getReviews(movieId, dependencies);
    // output
    // review.results
    // .map((reviewresults) => reviewresults._id)
    // .forEach(async (resultsid) => {
    //     console.log(resultsid);
    // });
    //console.log("Reviews: ", review)
    response.status(200).json(review);
  };
  const updateReviews = async (request, response, next) => {
    // Treatment
    try {
      const { author, content, updated_at } = request.body;
      const movieId = request.params.id
      const updStatus = await reviewsService.updateReviews(movieId, author, content, updated_at, dependencies);
      // output
      response.status(200).json(updStatus);
    } catch (err) {
      next(new Error(`Invalid Data ${err.message}`));
    }
  };
  return {
    createReviews,
    getReviews,
    updateReviews,
  };
};
