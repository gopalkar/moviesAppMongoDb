import Reviews from '../entities/Reviews';

export default {
  registerReviews: async (reviews, { reviewsRepository}) => {
    const review = new Reviews(reviews);
    return reviewsRepository.persist(review);
  },
  getReviews: ( { reviewsRepository }) => {
    return reviewsRepository.get();
  },
  updateReviews: ( { reviewsRepository }) => {
    return reviewsRepository.update();
  }
};
