import {
  PrismaOrderRepository
} from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { FindByTokenOrderController } from './FindByTokenOrderController'
import { FindByTokenOrderUseCase } from './FindByTokenOrderUseCase'


export const findByTokenOrderFactory = () => {
  const prismaOrderRepository = new PrismaOrderRepository();
  const findByTokenOrderUseCase = new FindByTokenOrderUseCase(prismaOrderRepository)
  const findByTokenOrderController = new FindByTokenOrderController(findByTokenOrderUseCase)

  return findByTokenOrderController
}