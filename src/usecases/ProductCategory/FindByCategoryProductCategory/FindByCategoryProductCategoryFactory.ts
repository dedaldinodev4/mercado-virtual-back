import {
  PrismaProductCategoryRepository
} from '../../../repositories/implementations/prisma/PrismaProductCategoryRepository'
import { FindByCategoryProductCategoryController } from './FindByCategoryProductCategoryController'
import { FindByCategoryProductCategoryUseCase } from './FindByCategoryProductCategoryUseCase'


export const findByCategoryProductCategoryFactory = () => {
  const prismaProductCategoryRepository = new PrismaProductCategoryRepository();
  const findByCategoryProductCategoryUseCase = new FindByCategoryProductCategoryUseCase(prismaProductCategoryRepository)
  const findByCategoryProductCategoryController = new FindByCategoryProductCategoryController(findByCategoryProductCategoryUseCase)

  return findByCategoryProductCategoryController
}