import {
  PrismaOrderRepository
} from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { FindAllOrdersController } from './FindAllOrdersController'
import { FindAllOrdersUseCase } from './FindAllOrdersUseCase'


export const findAllOrdersFactory = () => {
  const prismaOrderRepository = new PrismaOrderRepository();
  const findAllOrdersUseCase = new FindAllOrdersUseCase(prismaOrderRepository)
  const findAllOrdersController = new FindAllOrdersController(findAllOrdersUseCase)

  return findAllOrdersController
}