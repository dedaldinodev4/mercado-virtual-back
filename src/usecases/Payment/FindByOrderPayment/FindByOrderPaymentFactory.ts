import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { FindByOrderPaymentController } from './FindByOrderPaymentController'
import { FindByOrderPaymentUseCase } from './FindByOrderPaymentUseCase'


export const findByOrderPaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const findByOrderPaymentUseCase = new FindByOrderPaymentUseCase(prismaPaymentRepository)
  const findByOrderPaymentController = new FindByOrderPaymentController(findByOrderPaymentUseCase)

  return findByOrderPaymentController
}