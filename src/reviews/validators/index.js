//* validators/register.validator.js
import Joi from 'joi';

const reviewSchema = Joi.object({
    author: Joi.string().email().lowercase().required(),
    content: Joi.string().required().regex(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[0-9]){25,1000}$/),
    created_at: Joi.string().required().regex(/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/),
    updated_at: Joi.string().required().regex(/^[0-3]?[0-9].[0-3]?[0-9].(?:[0-9]{2})?[0-9]{2}$/)
});

export default {reviews: reviewSchema};
