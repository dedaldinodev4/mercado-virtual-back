import {
  PrismaProductImageRepository
} from '../../../repositories/implementations/prisma/PrismaProductImageRepository'
import { FindAllProductImagesController } from './FindAllProductImagesController'
import { FindAllProductImagesUseCase } from './FindAllProductImagesUseCase'


export const findAllProductImagesFactory = () => {
  const prismaProductImageRepository = new PrismaProductImageRepository();
  const findAllProductImagesUseCase = new FindAllProductImagesUseCase(prismaProductImageRepository)
  const findAllProductImagesController = new FindAllProductImagesController(findAllProductImagesUseCase)

  return findAllProductImagesController
}