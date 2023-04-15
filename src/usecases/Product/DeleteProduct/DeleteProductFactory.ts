import {
  PrismaProductRepository
} from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { DeleteProductController } from './DeleteProductController'
import { DeleteProductUseCase } from './DeleteProductUseCase'


export const deleteProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository();
  const deleteProductUseCase = new DeleteProductUseCase(prismaProductRepository)
  const deleteProductController = new DeleteProductController(deleteProductUseCase)

  return deleteProductController
}