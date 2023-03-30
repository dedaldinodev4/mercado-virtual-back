import { 
  PrismaCategoryRepository 
} from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { FindAllCategoriesController } from './FindAllCategoriesController'
import { FindAllCategoriesUseCase } from './FindAllCategoriesUseCase'


export const findAllCategoriesFactory = () => {
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const findAllCategoriesUseCase = new FindAllCategoriesUseCase(prismaCategoryRepository)
  const findAllCategoriesController = new FindAllCategoriesController(findAllCategoriesUseCase)

  return findAllCategoriesController
}