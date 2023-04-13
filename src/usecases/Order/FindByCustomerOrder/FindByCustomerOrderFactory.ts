import {
  PrismaOrderRepository
} from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { FindByCustomerOrderController } from './FindByCustomerOrderController'
import { FindByCustomerOrderUseCase } from './FindByCustomerOrderUseCase'


export const findByCustomerOrderFactory = () => {
  const prismaOrderRepository = new PrismaOrderRepository();
  const findByCustomerOrderUseCase = new FindByCustomerOrderUseCase(prismaOrderRepository)
  const findByCustomerOrderController = new FindByCustomerOrderController(findByCustomerOrderUseCase)

  return findByCustomerOrderController
}