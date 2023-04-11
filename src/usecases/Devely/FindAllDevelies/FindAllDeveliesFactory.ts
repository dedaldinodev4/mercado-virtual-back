import {
  PrismaDevelyRepository
} from '../../../repositories/implementations/prisma/PrismaDevelyRepository'
import { FindAllDeveliesController } from './FindAllDeveliesController'
import { FindAllDeveliesUseCase } from './FindAllDeveliesUseCase'


export const findAllDeveliesFactory = () => {
  const prismaDevelyRepository = new PrismaDevelyRepository();
  const findAllDeveliesUseCase = new FindAllDeveliesUseCase(prismaDevelyRepository)
  const findAllDeveliesController = new FindAllDeveliesController(findAllDeveliesUseCase)

  return findAllDeveliesController
}