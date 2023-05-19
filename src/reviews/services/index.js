import Reviews from '../entities/Reviews';

export default {
  registerReviews: async (movieId, results, { reviewsRepository}) => {
    const review = new Reviews(movieId, results);
    return reviewsRepository.persist(review);
  },
  getReviews: ( { reviewsRepository }) => {
    return reviewsRepository.get();
  },
  updateReviews: ( { reviewsRepository }) => {
    return reviewsRepository.update();
  }
};
