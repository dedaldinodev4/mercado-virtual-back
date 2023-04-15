import {
  PrismaProductShopOrderRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopOrderRepository'
import { FindAllProductShopOrdersController } from './FindAllProductShopOrdersController'
import { FindAllProductShopOrdersUseCase } from './FindAllProductShopOrdersUseCase'


export const findAllProductShopOrdersFactory = () => {
  const prismaProductShopOrderRepository = new PrismaProductShopOrderRepository();
  const findAllProductShopOrdersUseCase = new FindAllProductShopOrdersUseCase(prismaProductShopOrderRepository)
  const findAllProductShopOrdersController = new FindAllProductShopOrdersController(findAllProductShopOrdersUseCase)

  return findAllProductShopOrdersController
}