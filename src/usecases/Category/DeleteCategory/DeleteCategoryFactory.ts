import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { DeleteCategoryController } from './DeleteCategoryController'
import { DeleteCategoryUseCase } from './DeleteCategoryUseCase'


export const deleteCategoryFactory = () => {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const deleteCategoryUseCase = new DeleteCategoryUseCase(prismaCategoryRepository)
  const deleteCategoryController = new DeleteCategoryController(deleteCategoryUseCase)

  return deleteCategoryController
}