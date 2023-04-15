import {
  PrismaProductShopOrderRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopOrderRepository'
import { DeleteProductShopOrderController } from './DeleteProductShopOrderController'
import { DeleteProductShopOrderUseCase } from './DeleteProductShopOrderUseCase'


export const deleteProductShopOrderFactory = () => {
  const prismaProductShopOrderRepository = new PrismaProductShopOrderRepository();
  const deleteProductShopOrderUseCase = new DeleteProductShopOrderUseCase(prismaProductShopOrderRepository)
  const deleteProductShopOrderController = new DeleteProductShopOrderController(deleteProductShopOrderUseCase)

  return deleteProductShopOrderController
}