import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { FindByIdCategoryController } from './FindByIdCategoryController'
import { FindByIdCategoryUseCase } from './FindByIdCategoryUseCase'


export const findByIdCategoryFactory = () => {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const findByIdCategoryUseCase = new FindByIdCategoryUseCase(prismaCategoryRepository)
  const findByIdCategoryController = new FindByIdCategoryController(findByIdCategoryUseCase)

  return findByIdCategoryController
}