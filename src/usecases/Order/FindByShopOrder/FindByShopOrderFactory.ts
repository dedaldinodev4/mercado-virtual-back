import {
  PrismaOrderRepository
} from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { FindByShopOrderController } from './FindByShopOrderController'
import { FindByShopOrderUseCase } from './FindByShopOrderUseCase'


export const findByShopOrderFactory = () => {
  const prismaOrderRepository = new PrismaOrderRepository();
  const findByShopOrderUseCase = new FindByShopOrderUseCase(prismaOrderRepository)
  const findByShopOrderController = new FindByShopOrderController(findByShopOrderUseCase)

  return findByShopOrderController
}