import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { CreateCategoryController } from './CreateCategoryController'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'


export const createCategoryFactory = () => {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const createCategoryUseCase = new CreateCategoryUseCase(prismaCategoryRepository)
  const createCategoryController = new CreateCategoryController(createCategoryUseCase)

  return createCategoryController
}