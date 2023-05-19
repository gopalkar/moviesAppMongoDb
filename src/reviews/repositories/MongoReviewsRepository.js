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
        const { id, results } = reviewsEntity;
        const result = new this.model({id, results});
        await result.save();
        return reviewsEntity;
    }

    async merge(reviewsEntity) {
        const {id, results } = reviewsEntity;
        await this.model.findOneAndUpdate(id, { results });
        return reviewsEntity;
    }

    async remove(reviewsEntity) {
        const {id } = reviewsEntity;
        return this.model.findOneAndDelete(id);
    }

    async get(reviewsEntity) {
        const mid = reviewsEntity;
        const reviews = await this.model.findOne({id: mid});
        const {id, results} = reviews;
        return new Reviews(id, results);
    }
}
