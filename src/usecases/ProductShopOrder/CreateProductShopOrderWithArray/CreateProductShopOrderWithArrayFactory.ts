import {
  PrismaProductShopOrderRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopOrderRepository'
import { PrismaProductShopRepository } from '../../../repositories/implementations/prisma/PrismaProductShopRepository'
import { PrismaOrderRepository } from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { CreateProductShopOrderWithArrayController } from './CreateProductShopOrderWithArrayController'
import { CreateProductShopOrderWithArrayUseCase } from './CreateProductShopOrderWithArrayUseCase'


export const createProductShopOrderWithArrayFactory = () => {
  const prismaProductShopOrderRepository = new PrismaProductShopOrderRepository();
  const prismaProductShopRepository = new PrismaProductShopRepository();
  const prismaOrderRepository = new PrismaOrderRepository();
  const createProductShopOrderWithArrayUseCase = new CreateProductShopOrderWithArrayUseCase(
    prismaProductShopOrderRepository,
    prismaProductShopRepository,
    prismaOrderRepository
  )
  const createProductShopOrderWithArrayController = new CreateProductShopOrderWithArrayController(
    createProductShopOrderWithArrayUseCase
  )

  return createProductShopOrderWithArrayController
}