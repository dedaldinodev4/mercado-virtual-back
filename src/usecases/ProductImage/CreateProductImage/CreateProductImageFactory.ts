import {
  PrismaProductImageRepository
} from '../../../repositories/implementations/prisma/PrismaProductImageRepository'
import { PrismaProductRepository } from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { CreateProductImageController } from './CreateProductImageController'
import { CreateProductImageUseCase } from './CreateProductImageUseCase'


export const createProductImageFactory = () => {
  const prismaProductImageRepository = new PrismaProductImageRepository();
  const prismaProductRepository = new PrismaProductRepository();
  const createProductImageUseCase = new CreateProductImageUseCase(
    prismaProductImageRepository, prismaProductRepository
  )
  const createProductImageController = new CreateProductImageController(createProductImageUseCase)

  return createProductImageController
}