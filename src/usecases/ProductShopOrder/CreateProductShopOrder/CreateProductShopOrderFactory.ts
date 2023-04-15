import {
  PrismaProductShopOrderRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopOrderRepository'
import { PrismaProductShopRepository } from '../../../repositories/implementations/prisma/PrismaProductShopRepository'
import { PrismaOrderRepository } from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { CreateProductShopOrderController } from './CreateProductShopOrderController'
import { CreateProductShopOrderUseCase } from './CreateProductShopOrderUseCase'


export const createProductShopOrderFactory = () => {
  const prismaProductShopOrderRepository = new PrismaProductShopOrderRepository();
  const prismaProductShopRepository = new PrismaProductShopRepository();
  const prismaOrderRepository = new PrismaOrderRepository();
  const createProductShopOrderUseCase = new CreateProductShopOrderUseCase(
    prismaProductShopOrderRepository,
    prismaProductShopRepository,
    prismaOrderRepository
  )
  const createProductShopOrderController = new CreateProductShopOrderController(createProductShopOrderUseCase)

  return createProductShopOrderController
}