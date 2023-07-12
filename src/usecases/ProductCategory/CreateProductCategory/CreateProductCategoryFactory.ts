import {
  PrismaProductCategoryRepository
} from '../../../repositories/implementations/prisma/PrismaProductCategoryRepository'
import { PrismaProductRepository } from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { PrismaCategoryRepository } from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { CreateProductCategoryController } from './CreateProductCategoryController'
import { CreateProductCategoryUseCase } from './CreateProductCategoryUseCase'


export const createProductCategoryFactory = () => {
  const prismaProductCategoryRepository = new PrismaProductCategoryRepository();
  const prismaProductRepository = new PrismaProductRepository();
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const createProductCategoryUseCase = new CreateProductCategoryUseCase(
    prismaProductCategoryRepository,
    prismaProductRepository,
    prismaCategoryRepository
  )
  const createProductCategoryController = new CreateProductCategoryController(createProductCategoryUseCase)

  return createProductCategoryController
}