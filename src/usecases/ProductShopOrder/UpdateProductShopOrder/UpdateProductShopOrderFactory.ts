import {
  PrismaProductShopOrderRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopOrderRepository'
import { UpdateProductShopOrderController } from './UpdateProductShopOrderController'
import { UpdateProductShopOrderUseCase } from './UpdateProductShopOrderUseCase'


export const updateProductShopOrderFactory = () => {
  const prismaProductShopOrderRepository = new PrismaProductShopOrderRepository();
  const updateProductShopOrderUseCase = new UpdateProductShopOrderUseCase(prismaProductShopOrderRepository)
  const updateProductShopOrderController = new UpdateProductShopOrderController(updateProductShopOrderUseCase)

  return updateProductShopOrderController
}