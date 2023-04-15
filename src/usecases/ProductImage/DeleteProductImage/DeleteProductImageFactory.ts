import {
  PrismaProductImageRepository
} from '../../../repositories/implementations/prisma/PrismaProductImageRepository'
import { DeleteProductImageController } from './DeleteProductImageController'
import { DeleteProductImageUseCase } from './DeleteProductImageUseCase'


export const deleteProductImageFactory = () => {
  const prismaProductImageRepository = new PrismaProductImageRepository();
  const deleteProductImageUseCase = new DeleteProductImageUseCase(prismaProductImageRepository)
  const deleteProductImageController = new DeleteProductImageController(deleteProductImageUseCase)

  return deleteProductImageController
}