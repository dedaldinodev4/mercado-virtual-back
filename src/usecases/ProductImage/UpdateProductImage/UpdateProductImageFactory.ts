import {
  PrismaProductImageRepository
} from '../../../repositories/implementations/prisma/PrismaProductImageRepository'
import { UpdateProductImageController } from './UpdateProductImageController'
import { UpdateProductImageUseCase } from './UpdateProductImageUseCase'


export const updateProductImageFactory = () => {
  const prismaProductImageRepository = new PrismaProductImageRepository();
  const updateProductImageUseCase = new UpdateProductImageUseCase(prismaProductImageRepository)
  const updateProductImageController = new UpdateProductImageController(updateProductImageUseCase)

  return updateProductImageController
}