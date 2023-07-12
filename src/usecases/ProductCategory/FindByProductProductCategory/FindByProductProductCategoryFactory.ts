import {
  PrismaProductCategoryRepository
} from '../../../repositories/implementations/prisma/PrismaProductCategoryRepository'
import { FindByProductProductCategoryController } from './FindByProductProductCategoryController'
import { FindByProductProductCategoryUseCase } from './FindByProductProductCategoryUseCase'


export const findByProductProductCategoryFactory = () => {
  const prismaProductCategoryRepository = new PrismaProductCategoryRepository();
  const findByProductProductCategoryUseCase = new FindByProductProductCategoryUseCase(prismaProductCategoryRepository)
  const findByProductProductCategoryController = new FindByProductProductCategoryController(findByProductProductCategoryUseCase)

  return findByProductProductCategoryController
}