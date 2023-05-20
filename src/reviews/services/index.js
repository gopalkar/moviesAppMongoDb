import Reviews from '../entities/Reviews';

export default {
  registerReviews: async (movieId, author, content, created_at, updated_at, { reviewsRepository}) => {
    const reviews = await reviewsRepository.get(movieId);
    if (!reviews) {
      const results = [{author, content, created_at, updated_at}]
      const review = new Reviews(movieId, results);
      return await reviewsRepository.persist(review);
    }
    else {
      reviews.results.push({author, content, created_at, updated_at});
      return await reviewsRepository.merge(reviews);
    }
  },
  getReviews: async ( movieId, { reviewsRepository }) => {
    const reviews = await reviewsRepository.get(movieId);
    return reviews;
  },
  updateReviews: async ( reviewId, author, content, created_at, updated_at, { reviewsRepository }) => {
    const reviews = await reviewsRepository.getReview(reviewId);
    if (reviews) {
      reviews.results.push({author, content, created_at, updated_at});
      return await reviewsRepository.merge(reviews);
    }
  },
  deleteReviews: async ( movieId, { reviewsRepository }) => {
    return await reviewsRepository.remove(movieId);
  },
};
