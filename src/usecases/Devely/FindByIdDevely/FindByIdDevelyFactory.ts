import {
  PrismaDevelyRepository
} from '../../../repositories/implementations/prisma/PrismaDevelyRepository'
import { FindByIdDevelyController } from './FindByIdDevelyController'
import { FindByIdDevelyUseCase } from './FindByIdDevelyUseCase'


export const findByIdDevelyFactory = () => {
  const prismaDevelyRepository = new PrismaDevelyRepository();
  const findByIdDevelyUseCase = new FindByIdDevelyUseCase(prismaDevelyRepository)
  const findByIdDevelyController = new FindByIdDevelyController(findByIdDevelyUseCase)

  return findByIdDevelyController
}