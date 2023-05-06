import express from 'express';
import AccountsController from '../controllers';
import ValidationController from '../validators/ValidationController';

const createRouter = (dependencies) => {
  const router = express.Router();
  // load controller with dependencies
  const validationController = ValidationController(dependencies);
  const accountsController = AccountsController(dependencies);
  router.route('/security/token')
        .post(accountsController.authenticateAccount);
        
  router.route('/')
        .post(validationController.validateAccount,accountsController.createAccount); 

  //router.route('/')
  //  .post(accountsController.createAccount);

  router.route('/')
    .get(accountsController.listAccounts);

  router.route('/:id')
    .get(accountsController.getAccount);

  router.route('/')
    .put(accountsController.updateAccount);

  router.route('/:id/favourites')
    .post(accountsController.addFavourite);
  
    router.route('/:id/favourites')
    .get(accountsController.getFavourites);

  return router;
};
export default createRouter;
