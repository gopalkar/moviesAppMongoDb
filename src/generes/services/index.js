import Generes from '../entities/Generes';

export default {
  registerGeneres: async (generes, { generesRepository}) => {
    const cGeneres = new Generes(generes);
    return generesRepository.persist(cGeneres);
  },
  getGeneres: ( { generesRepository }) => {
    return generesRepository.get();
  },
  deleteGeneres: ( { generesRepository }) => {
    return generesRepository.remove();
  }
};
