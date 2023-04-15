import {
  PrismaPaymentRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentRepository'
import { DeletePaymentController } from './DeletePaymentController'
import { DeletePaymentUseCase } from './DeletePaymentUseCase'


export const deletePaymentFactory = () => {
  const prismaPaymentRepository = new PrismaPaymentRepository();
  const deletePaymentUseCase = new DeletePaymentUseCase(prismaPaymentRepository)
  const deletePaymentController = new DeletePaymentController(deletePaymentUseCase)

  return deletePaymentController
}