import {
  PrismaOrderRepository
} from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { DeleteOrderController } from './DeleteOrderController'
import { DeleteOrderUseCase } from './DeleteOrderUseCase'


export const deleteOrderFactory = () => {
  const prismaOrderRepository = new PrismaOrderRepository();
  const deleteOrderUseCase = new DeleteOrderUseCase(prismaOrderRepository)
  const deleteOrderController = new DeleteOrderController(deleteOrderUseCase)

  return deleteOrderController
}