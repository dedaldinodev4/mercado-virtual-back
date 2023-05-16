import {
  PrismaProductImageRepository
} from '../../../repositories/implementations/prisma/PrismaProductImageRepository'
import { GetProductImageController } from './GetProductImageController'
import { GetProductImageUseCase } from './GetProductImageUseCase'


export const getProductImageFactory = () => {
  const prismaProductImageRepository = new PrismaProductImageRepository();
  const getProductImageUseCase = new GetProductImageUseCase(prismaProductImageRepository)
  const getProductImageController = new GetProductImageController(getProductImageUseCase)

  return getProductImageController
}