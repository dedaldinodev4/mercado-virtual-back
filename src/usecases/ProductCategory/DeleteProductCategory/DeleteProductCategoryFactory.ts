import {
  PrismaProductCategoryRepository
} from '../../../repositories/implementations/prisma/PrismaProductCategoryRepository'
import { DeleteProductCategoryController } from './DeleteProductCategoryController'
import { DeleteProductCategoryUseCase } from './DeleteProductCategoryUseCase'


export const deleteProductCategoryFactory = () => {
  const prismaProductCategoryRepository = new PrismaProductCategoryRepository();
  const deleteProductCategoryUseCase = new DeleteProductCategoryUseCase(prismaProductCategoryRepository)
  const deleteProductCategoryController = new DeleteProductCategoryController(deleteProductCategoryUseCase)

  return deleteProductCategoryController
}