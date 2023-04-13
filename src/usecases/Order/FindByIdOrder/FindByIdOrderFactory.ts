import {
  PrismaOrderRepository
} from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { FindByIdOrderController } from './FindByIdOrderController'
import { FindByIdOrderUseCase } from './FindByIdOrderUseCase'


export const findByIdOrderFactory = () => {
  const prismaOrderRepository = new PrismaOrderRepository();
  const findByIdOrderUseCase = new FindByIdOrderUseCase(prismaOrderRepository)
  const findByIdOrderController = new FindByIdOrderController(findByIdOrderUseCase)

  return findByIdOrderController
}