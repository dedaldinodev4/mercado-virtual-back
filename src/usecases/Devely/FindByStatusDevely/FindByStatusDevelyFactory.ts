import {
  PrismaDevelyRepository
} from '../../../repositories/implementations/prisma/PrismaDevelyRepository'
import { FindByStatusDevelyController } from './FindByStatusDevelyController'
import { FindByStatusDevelyUseCase } from './FindByStatusDevelyUseCase'


export const findByStatusDevelyFactory = () => {
  const prismaDevelyRepository = new PrismaDevelyRepository();
  const findByStatusDevelyUseCase = new FindByStatusDevelyUseCase(prismaDevelyRepository)
  const findByStatusDevelyController = new FindByStatusDevelyController(findByStatusDevelyUseCase)

  return findByStatusDevelyController
}