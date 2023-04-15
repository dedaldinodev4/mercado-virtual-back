import {
  PrismaPaymentTypeRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentTypeRepository'
import { DeletePaymentTypeController } from './DeletePaymentTypeController'
import { DeletePaymentTypeUseCase } from './DeletePaymentTypeUseCase'


export const deletePaymentTypeFactory = () => {
  const prismaPaymentTypeRepository = new PrismaPaymentTypeRepository();
  const deletePaymentTypeUseCase = new DeletePaymentTypeUseCase(prismaPaymentTypeRepository)
  const deletePaymentTypeController = new DeletePaymentTypeController(deletePaymentTypeUseCase)

  return deletePaymentTypeController
}