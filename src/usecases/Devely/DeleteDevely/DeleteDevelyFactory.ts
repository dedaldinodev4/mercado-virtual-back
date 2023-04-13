import { 
  PrismaDevelyRepository 
} from '../../../repositories/implementations/prisma/PrismaDevelyRepository'
import { DeleteDevelyController } from './DeleteDevelyController'
import { DeleteDevelyUseCase } from './DeleteDevelyUseCase'


export const deleteDevelyFactory = () => {
  const prismaDevelyRepository = new PrismaDevelyRepository();
  const deleteDevelyUseCase = new DeleteDevelyUseCase(prismaDevelyRepository)
  const deleteDevelyController = new DeleteDevelyController(deleteDevelyUseCase)

  return deleteDevelyController
}