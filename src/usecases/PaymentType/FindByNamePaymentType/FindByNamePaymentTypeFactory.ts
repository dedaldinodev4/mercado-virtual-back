import {
  PrismaPaymentTypeRepository
} from '../../../repositories/implementations/prisma/PrismaPaymentTypeRepository'
import { FindByNamePaymentTypeController } from './FindByNamePaymentTypeController'
import { FindByNamePaymentTypeUseCase } from './FindByNamePaymentTypeUseCase'


export const findByNamePaymentTypeFactory = () => {
  const prismaPaymentTypeRepository = new PrismaPaymentTypeRepository();
  const findByNamePaymentTypeUseCase = new FindByNamePaymentTypeUseCase(prismaPaymentTypeRepository)
  const findByNamePaymentTypeController = new FindByNamePaymentTypeController(findByNamePaymentTypeUseCase)

  return findByNamePaymentTypeController
}