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
    console.log("Get Reviews:", reviews);
    return reviews;
  },
  updateReviews: async ( movieId, author, content, updated_at, { reviewsRepository }) => {
    const review = await reviewsRepository.getReview({movieId, author});
    // const rauthor = results.map((results) => results.author);
    if (review && review.results.length > 0) {
      const review = {movieId, author, content, updated_at};
      return await reviewsRepository.updateReview(review);
    }
    else {
      throw new Error("Review for this author Not found");
    }
  },
  deleteReviews: async ( movieId, author, { reviewsRepository }) => {
    const review = await reviewsRepository.getReview({movieId, author});
    console.log("Del Reivew: ", review);
    if (review) {
      //const results = review.results;
      const review = {movieId, author};
      return await reviewsRepository.remove(review);
    }
    else {
      throw new Error("Review for this author Not found");
    }
  },
};
