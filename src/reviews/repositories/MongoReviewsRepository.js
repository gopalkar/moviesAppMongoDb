import Reviews from '../entities/Reviews';
import mongoose from 'mongoose';
import ReviewsRepository from './Repository';
import { number } from 'joi';

export default class extends ReviewsRepository {

    constructor() {
        super();

        const results = new mongoose.Schema({
            author: String,
            content: String,
            created_at: String,
            updated_at: String
        });

        const reviewsSchema = new mongoose.Schema({
            id: String,
            results: [results]
        });
        
        this.model = mongoose.model('Reviews', reviewsSchema);
    }

    async persist(reviewsEntity) {
        console.log(reviewsEntity);
        const { id, results } = reviewsEntity;
        const result = new this.model({id, results});
        await result.save();
        return reviewsEntity;
    }

    async merge(reviewsEntity) {
        const {review } = reviewsEntity;
        await this.model.UpdateOne( { review });
        console.log({review });
        return reviewsEntity;
    }

    async remove() {
        return this.model.findOneAndDelete();
    }

    async get() {
        const result = await this.model.find();
        return new Reviews(result);
    }
}
