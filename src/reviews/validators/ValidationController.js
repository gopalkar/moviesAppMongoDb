export default (dependencies) => {

    //const { reviewSchema, reviewUpdSchema } = dependencies;
    const { reviewSchema} = dependencies;
    const { reviewUpdSchema } = dependencies;
    const validateReview = async (request, response, next) => {
        // Input
        try {
            //const validated = await accountSchema['account'].validateAsync(request.body);
            console.log("before val");
            await reviewSchema['reviews'].validateAsync(request.body);
            console.log("after val")
            //request.body = validated;
            next();
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    const validateUpdReview = async (request, response, next) => {
        // Input
        try {
            await reviewUpdSchema['updreviews'].validateAsync(request.body);
            //request.body = validated;
            next();
        } catch (err) {
            next(new Error(`Invalid Data ${err.message}`));
        }
    };

    return {
        validateReview,
        validateUpdReview
    };
};
