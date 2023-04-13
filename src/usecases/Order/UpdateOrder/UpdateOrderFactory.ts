import {
  PrismaOrderRepository
} from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { UpdateOrderController } from './UpdateOrderController'
import { UpdateOrderUseCase } from './UpdateOrderUseCase'


export const updateOrderFactory = () => {
  const prismaOrderRepository = new PrismaOrderRepository();
  const updateOrderUseCase = new UpdateOrderUseCase(prismaOrderRepository)
  const updateOrderController = new UpdateOrderController(updateOrderUseCase)

  return updateOrderController
}