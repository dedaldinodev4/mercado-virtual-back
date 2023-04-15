import {
  PrismaProductShopOrderRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopOrderRepository'
import { FindByOrderProductOrderController } from './FindByOrderProductOrderController'
import { FindByOrderProductOrderUseCase } from './FindByOrderProductOrderUseCase'


export const findByOrderProductShopOrderFactory = () => {
  const prismaProductShopOrderRepository = new PrismaProductShopOrderRepository();
  const findByOrderProductOrderUseCase = new FindByOrderProductOrderUseCase(prismaProductShopOrderRepository)
  const findByOrderProductOrderController = new FindByOrderProductOrderController(findByOrderProductOrderUseCase)

  return findByOrderProductOrderController
}