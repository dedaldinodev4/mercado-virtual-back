import {
  PrismaProductDetailRepository
} from '../../../repositories/implementations/prisma/PrismaProductDetailRepository'
import { PrismaProductRepository } from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { CreateProductDetailController } from './CreateProductDetailController'
import { CreateProductDetailUseCase } from './CreateProductDetailUseCase'


export const createProductDetailFactory = () => {
  const prismaProductDetailRepository = new PrismaProductDetailRepository();
  const prismaProductRepository = new PrismaProductRepository();
  const createProductDetailUseCase = new CreateProductDetailUseCase(
    prismaProductDetailRepository, prismaProductRepository
  )
  const createProductDetailController = new CreateProductDetailController(createProductDetailUseCase)

  return createProductDetailController
}