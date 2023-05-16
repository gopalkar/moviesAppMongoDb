import { response } from 'express';
import genereService from '../services';

export default (dependencies) => {
  const createGeneres = async (request, response, next) => {
    // Input
    const { generes } = request.body;
    // Treatment
    const rGeneres = await genereService.registerGeneres(generes, dependencies);
    // output
    response.status(201).json(rGeneres);
  };
  const getGeneres = async (request, response, next) => {
    // Treatment
    const generes = await genereService.getGeneres(dependencies);
    // output
    response.status(200).json(generes);
  };
  const removeGeneres = async (request, response, next) => {
    // Treatment
    const delStatus = await genereService.deleteGeneres(dependencies);
    // output
    response.status(200).json(delStatus);
  };
  return {
    createGeneres,
    getGeneres,
    removeGeneres,
  };
};
