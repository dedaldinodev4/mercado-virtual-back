import {
  PrismaProductRepository
} from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { PrismaCategoryRepository } from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { PrismaDiscountRepository } from '../../../repositories/implementations/prisma/PrismaDiscountRepository'
import { CreateProductController } from './CreateProductController'
import { CreateProductUseCase } from './CreateProductUseCase'


export const createProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository();
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const prismaDiscountRepository = new PrismaDiscountRepository();
  const createProductUseCase = new CreateProductUseCase(
    prismaProductRepository, 
    prismaCategoryRepository,
    prismaDiscountRepository
  )
  const createProductController = new CreateProductController(createProductUseCase)

  return createProductController
}