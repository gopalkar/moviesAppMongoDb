import express from 'express';
import ReviewsController from '../controllers';
import ValidationController from '../validators/ValidationController';

const createRouter = (dependencies) => {
  const router = express.Router();
  // load controller with dependencies
  const validationController = ValidationController(dependencies);
  const reviewsController = ReviewsController(dependencies);

  router.route('/:id')
        .post(reviewsController.createReviews); 

  router.route('/:id')
    .get(reviewsController.getReviews);

  router.route('/:id')
    .put(validationController.validateReview,reviewsController.updateReviews);

  return router;
};
export default createRouter;
