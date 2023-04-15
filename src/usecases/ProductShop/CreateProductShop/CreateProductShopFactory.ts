import {
  PrismaProductShopRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopRepository'
import { PrismaProductRepository } from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { PrismaShopRepository } from '../../../repositories/implementations/prisma/PrismaShopRepository'
import { CreateProductShopController } from './CreateProductShopController'
import { CreateProductShopUseCase } from './CreateProductShopUseCase'


export const createProductShopFactory = () => {
  const prismaProductShopRepository = new PrismaProductShopRepository();
  const prismaProductRepository = new PrismaProductRepository();
  const prismaShopRepository = new PrismaShopRepository();
  const createProductShopUseCase = new CreateProductShopUseCase(
    prismaProductShopRepository,
    prismaProductRepository,
    prismaShopRepository
  )
  const createProductShopController = new CreateProductShopController(createProductShopUseCase)

  return createProductShopController
}