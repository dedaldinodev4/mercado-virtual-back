import {
  PrismaProductCategoryRepository
} from '../../../repositories/implementations/prisma/PrismaProductCategoryRepository'
import { FindByIdProductCategoryController } from './FindByIdProductCategoryController'
import { FindByIdProductCategoryUseCase } from './FindByIdProductCategoryUseCase'


export const findByIdProductCategoryFactory = () => {
  const prismaProductCategoryRepository = new PrismaProductCategoryRepository();
  const findByIdProductCategoryUseCase = new FindByIdProductCategoryUseCase(prismaProductCategoryRepository)
  const findByIdProductCategoryController = new FindByIdProductCategoryController(findByIdProductCategoryUseCase)

  return findByIdProductCategoryController
}