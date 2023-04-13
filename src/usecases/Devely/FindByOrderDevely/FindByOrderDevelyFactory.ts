import {
  PrismaDevelyRepository
} from '../../../repositories/implementations/prisma/PrismaDevelyRepository'
import { FindByOrderDevelyController } from './FindByOrderDevelyController'
import { FindByOrderDevelyUseCase } from './FindByOrderDevelyUseCase'


export const findByOrderDevelyFactory = () => {
  const prismaDevelyRepository = new PrismaDevelyRepository();
  const findByOrderDevelyUseCase = new FindByOrderDevelyUseCase(prismaDevelyRepository)
  const findByOrderDevelyController = new FindByOrderDevelyController(findByOrderDevelyUseCase)

  return findByOrderDevelyController
}