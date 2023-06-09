import Generes from '../entities/Generes';
import mongoose from 'mongoose';
import GeneresRepository from './Repository';
import { number } from 'joi';

export default class extends GeneresRepository {

    constructor() {
        super();

        const generesSchema = new mongoose.Schema({
            generes: []
        });
        this.model = mongoose.model('Generes', generesSchema);
    }

    async persist(generesEntity) {
        const generes = generesEntity;
        const result = new this.model(generes);
        await result.save();
        return generesEntity;
    }

    async merge(generesEntity) {
        const {genere } = generesEntity;
        await this.model.UpdateOne( { genere });
        console.log({genere });
        return generesEntity;
    }

    async remove() {
        return this.model.deleteMany();
    }

    async get() {
        const result = await this.model.findOne({},{'_id' : 0});
        return result;
    }
}
