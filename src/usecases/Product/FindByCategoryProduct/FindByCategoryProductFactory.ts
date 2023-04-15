import {
  PrismaProductRepository
} from '../../../repositories/implementations/prisma/PrismaProductRepository'
import {
  PrismaCategoryRepository
} from '../../../repositories/implementations/prisma/PrismaCategoryRepository'
import { FindByCategoryProductController } from './FindByCategoryProductController'
import { FindByCategoryProductUseCase } from './FindByCategoryProductUseCase'


export const findByCategoryProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository();
  const prismaCategoryRepository = new PrismaCategoryRepository();
  const findByCategoryProductUseCase = new FindByCategoryProductUseCase(
    prismaProductRepository,
    prismaCategoryRepository
  )
  const findByCategoryProductController = new FindByCategoryProductController(findByCategoryProductUseCase)

  return findByCategoryProductController
}