import {
  PrismaProductDetailRepository
} from '../../../repositories/implementations/prisma/PrismaProductDetailRepository'
import { DeleteProductDetailController } from './DeleteProductDetailController'
import { DeleteProductDetailUseCase } from './DeleteProductDetailUseCase'


export const deleteProductDetailFactory = () => {
  const prismaProductDetailRepository = new PrismaProductDetailRepository();
  const deleteProductDetailUseCase = new DeleteProductDetailUseCase(prismaProductDetailRepository)
  const deleteProductDetailController = new DeleteProductDetailController(deleteProductDetailUseCase)

  return deleteProductDetailController
}