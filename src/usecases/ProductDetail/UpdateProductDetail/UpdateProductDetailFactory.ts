import {
  PrismaProductDetailRepository
} from '../../../repositories/implementations/prisma/PrismaProductDetailRepository'
import { UpdateProductDetailController } from './UpdateProductDetailController'
import { UpdateProductDetailUseCase } from './UpdateProductDetailUseCase'


export const updateProductDetailFactory = () => {
  const prismaProductDetailRepository = new PrismaProductDetailRepository();
  const updateProductDetailUseCase = new UpdateProductDetailUseCase(prismaProductDetailRepository)
  const updateProductDetailController = new UpdateProductDetailController(updateProductDetailUseCase)

  return updateProductDetailController
}