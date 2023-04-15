import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { PrismaOrderRepository } from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { CreatePaymentController } from './CreatePaymentController'
import { CreatePaymentUseCase } from './CreatePaymentUseCase'


export const createPaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const prismaOrderRepository = new PrismaOrderRepository();
  const createPaymentUseCase = new CreatePaymentUseCase(prismaPaymentRepository, prismaOrderRepository)
  const createPaymentController = new CreatePaymentController(createPaymentUseCase)

  return createPaymentController
}