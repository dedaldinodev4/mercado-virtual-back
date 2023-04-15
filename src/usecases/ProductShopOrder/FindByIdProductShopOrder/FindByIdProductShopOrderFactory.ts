import {
  PrismaProductShopOrderRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopOrderRepository'
import { FindByIdProductShopOrderController } from './FindByIdProductShopOrderController'
import { FindByIdProductShopOrderUseCase } from './FindByIdProductShopOrderUseCase'


export const findByIdProductShopOrderFactory = () => {
  const prismaProductShopOrderRepository = new PrismaProductShopOrderRepository();
  const findByIdProductShopOrderUseCase = new FindByIdProductShopOrderUseCase(prismaProductShopOrderRepository)
  const findByIdProductShopOrderController = new FindByIdProductShopOrderController(findByIdProductShopOrderUseCase)

  return findByIdProductShopOrderController
}