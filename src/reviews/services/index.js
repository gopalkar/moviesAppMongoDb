import Reviews from '../entities/Reviews';

export default {
  registerReviews: async (movieId, results, { reviewsRepository}) => {
    const review = new Reviews(movieId, results);
    return reviewsRepository.persist(review);
  },
  getReviews: async ( movieId, { reviewsRepository }) => {
    const reviews = await reviewsRepository.get(movieId);
    return reviews;
  },
  updateReviews: async ( movieId, author, content, created_at, updated_at, { reviewsRepository }) => {
    const reviews = await reviewsRepository.get(movieId);
    if (reviews) {
      reviews.results.push({author, content, created_at, updated_at});
      return await reviewsRepository.merge(reviews);
    }
  },
  deleteReviews: ( movieId, { reviewsRepository }) => {
    return reviewsRepository.remove(movieId);
  },
};
