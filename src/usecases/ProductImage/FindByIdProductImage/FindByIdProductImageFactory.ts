import {
  PrismaProductImageRepository
} from '../../../repositories/implementations/prisma/PrismaProductImageRepository'
import { FindByIdProductImageController } from './FindByIdProductImageController'
import { FindByIdProductImageUseCase } from './FindByIdProductImageUseCase'


export const findByIdProductImageFactory = () => {
  const prismaProductImageRepository = new PrismaProductImageRepository();
  const findByIdProductImageUseCase = new FindByIdProductImageUseCase(prismaProductImageRepository)
  const findByIdProductImageController = new FindByIdProductImageController(findByIdProductImageUseCase)

  return findByIdProductImageController
}