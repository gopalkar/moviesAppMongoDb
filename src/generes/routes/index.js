import express from 'express';
import GeneresController from '../controllers';
//import ValidationController from '../validators/ValidationController';

const createRouter = (dependencies) => {
  const router = express.Router();
  // load controller with dependencies
  //const validationController = ValidationController(dependencies);
  const generesController = GeneresController(dependencies);

  router.route('/')
        .post(generesController.createGeneres); 

  router.route('/')
    .get(generesController.getGeneres);

  router.route('/')
    .delete(generesController.removeGeneres);

  return router;
};
export default createRouter;
