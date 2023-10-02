import {
  PrismaProductShopOrderRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopOrderRepository'
import { FindByShopProductShopOrderController } from './FindByShopProductShopOrderController'
import { FindByShopProductShopOrderUseCase } from './FindByShopProductShopOrderUseCase'


export const findByShopProductShopOrderFactory = () => {
  const prismaProductShopOrderRepository = new PrismaProductShopOrderRepository();
  const findByShopProductShopOrderUseCase = new FindByShopProductShopOrderUseCase(prismaProductShopOrderRepository)
  const findByShopProductShopOrderController = new FindByShopProductShopOrderController(findByShopProductShopOrderUseCase)

  return findByShopProductShopOrderController
}