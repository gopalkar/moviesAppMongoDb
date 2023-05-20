export default (dependencies) => {

    const { reviewSchema } = dependencies;

    const validateReview = async (request, response, next) => {
        // Input
        try {
            //const validated = await accountSchema['account'].validateAsync(request.body);
            await reviewSchema['reviews'].validateAsync(request.body);
            //request.body = validated;
            next();
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validateReview
    };
};
