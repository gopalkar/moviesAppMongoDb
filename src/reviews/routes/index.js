import express from 'express';
import ReviewsController from '../controllers';
import ValidationController from '../validators/ValidationController';

const createRouter = (dependencies) => {
  const router = express.Router();
  // load controller with dependencies
  const validationController = ValidationController(dependencies);
  const reviewsController = ReviewsController(dependencies);

  router.route('/:id')
        .post(validationController.validateReview,reviewsController.createReviews); 

  router.route('/:id')
    .get(reviewsController.getReviews);

  router.route('/:id')
    .delete(reviewsController.removeReviews);

  router.route('/:id')
    .put(validationController.validateUpdReview,reviewsController.updateReviews);
//validationController.validateUpdReview,
  return router;
};
export default createRouter;
