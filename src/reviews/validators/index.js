//* validators/register.validator.js
import Joi from 'joi';

const reviewSchema = Joi.object({
    author: Joi.string().email().lowercase().required(),
    content: Joi.string().regex(/^[a-zA-Z0-9_ ]{20,100}$/).required(),
    created_at: Joi.string().required().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?([Zz]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?$/),
    updated_at: Joi.string().required().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?([Zz]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?$/)
});

const reviewUpdSchema = Joi.object({
    author: Joi.string().email().lowercase().required(),
    content: Joi.string().regex(/^[a-zA-Z0-9_ ]{20,100}$/).required(),
    updated_at: Joi.string().required().regex(/^[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}:[0-9]{2}(\.[0-9]+)?([Zz]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?$/)
});

//export default {reviews: reviewSchema};
export default {reviews: reviewSchema, updreviews: reviewUpdSchema};
