import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { UpdateCategoryController } from './UpdateCategoryController'
import { UpdateCategoryUseCase } from './UpdateCategoryUseCase'


export const updateCategoryFactory = () => {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const updateCategoryUseCase = new UpdateCategoryUseCase(prismaCategoryRepository)
  const updateCategoryController = new UpdateCategoryController(updateCategoryUseCase)

  return updateCategoryController
}