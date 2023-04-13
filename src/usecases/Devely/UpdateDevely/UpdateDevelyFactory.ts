import {
  PrismaDevelyRepository
} from '../../../repositories/implementations/prisma/PrismaDevelyRepository'
import { UpdateDevelyController } from './UpdateDevelyController'
import { UpdateDevelyUseCase } from './UpdateDevelyUseCase'


export const updateDevelyFactory = () => {
  const prismaDevelyRepository = new PrismaDevelyRepository();
  const updateDevelyUseCase = new UpdateDevelyUseCase(prismaDevelyRepository)
  const updateDevelyController = new UpdateDevelyController(updateDevelyUseCase)

  return updateDevelyController
}