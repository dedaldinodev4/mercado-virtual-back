import { PrismaCustomerRepository } from '../../../repositories/implementations/prisma/PrismaCustomerRepository';
import {
  PrismaOrderRepository
} from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { CreateOrderController } from './CreateOrderController'
import { CreateOrderUseCase } from './CreateOrderUseCase'


export const createOrderFactory = () => {
  const prismaOrderRepository = new PrismaOrderRepository();
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const createOrderUseCase = new CreateOrderUseCase(prismaOrderRepository, prismaCustomerRepository)
  const createOrderController = new CreateOrderController(createOrderUseCase)

  return createOrderController
}