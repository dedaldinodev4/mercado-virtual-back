import {
  PrismaProductCategoryRepository
} from '../../../repositories/implementations/prisma/PrismaProductCategoryRepository'
import { UpdateProductCategoryController } from './UpdateProductCategoryController'
import { UpdateProductCategoryUseCase } from './UpdateProductCategoryUseCase'


export const updateProductCategoryFactory = () => {
  const prismaProductCategoryRepository = new PrismaProductCategoryRepository();
  const updateProductCategoryUseCase = new UpdateProductCategoryUseCase(prismaProductCategoryRepository)
  const updateProductCategoryController = new UpdateProductCategoryController(updateProductCategoryUseCase)

  return updateProductCategoryController
}