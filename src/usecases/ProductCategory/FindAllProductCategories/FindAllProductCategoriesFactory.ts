import {
  PrismaProductCategoryRepository
} from '../../../repositories/implementations/prisma/PrismaProductCategoryRepository'
import { FindAllProductCategoriesController } from './FindAllProductCategoriesController'
import { FindAllProductCategoriesUseCase } from './FindAllProductCategoriesUseCase'


export const findAllProductCategoriesFactory = () => {
  const prismaProductCategoryRepository = new PrismaProductCategoryRepository();
  const findAllProductCategoriesUseCase = new FindAllProductCategoriesUseCase(prismaProductCategoryRepository)
  const findAllProductCategoriesController = new FindAllProductCategoriesController(findAllProductCategoriesUseCase)

  return findAllProductCategoriesController
}