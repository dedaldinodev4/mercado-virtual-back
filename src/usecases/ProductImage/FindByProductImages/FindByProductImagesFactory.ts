import {
  PrismaProductImageRepository
} from '../../../repositories/implementations/prisma/PrismaProductImageRepository'
import { FindByProductImagesController } from './FindByProductImagesController'
import { FindByProductImagesUseCase } from './FindByProductImagesUseCase'


export const findByProductImagesFactory = () => {
  const prismaProductImageRepository = new PrismaProductImageRepository();
  const findByProductImagesUseCase = new FindByProductImagesUseCase(prismaProductImageRepository)
  const findByProductImagesController = new FindByProductImagesController(findByProductImagesUseCase)

  return findByProductImagesController
}