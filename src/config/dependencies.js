import AccountsRepositoryInMemory from '../accounts/repositories/InMemoryRepository';
import AccountsRepositoryMongo from '../accounts/repositories/MongoAccountRepository';
import GeneresRepositoryMongo from '../generes/repositories/MongoGeneresRepository';
import ReviewsRepositoryMongo from '../reviews/repositories/MongoReviewsRepository';
import AccountSchema from '../accounts/validators';
import Authenticator from '../accounts/security/BCryptAuthenticator';
import TokenManager from '../accounts/security/JWTToken';

const buildDependencies = () => {
  const dependencies = {
    validators: AccountSchema,
    authenticator: new Authenticator(),
    tokenManager: new TokenManager()
  };

  dependencies.accountSchema = AccountSchema;

  if (process.env.DATABASE_DIALECT === 'in-memory') {
    dependencies.accountsRepository = new AccountsRepositoryInMemory();
  } else if (process.env.DATABASE_DIALECT === 'mongo') {
    dependencies.accountsRepository = new AccountsRepositoryMongo();
    dependencies.generesRepository = new GeneresRepositoryMongo();
    dependencies.reviewsRepository = new ReviewsRepositoryMongo();
  } else if (process.env.DATABASE_DIALECT === 'mysql') {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
