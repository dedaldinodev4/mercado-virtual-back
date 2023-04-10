import { 
  PrismaCustomerTypeRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerTypeRepository'
import { FindByIdCustomerTypeController } from './FindByIdCustomerTypeController'
import { FindByIdCustomerTypeUseCase } from './FindByIdCustomerTypeUseCase'


export const findByIdCustomerTypeFactory = () => {
  const prismaCustomerTypeRepository = new PrismaCustomerTypeRepository();
  const findByIdCustomerTypeUseCase = new FindByIdCustomerTypeUseCase(prismaCustomerTypeRepository)
  const findByIdCustomerTypeController = new FindByIdCustomerTypeController(findByIdCustomerTypeUseCase)

  return findByIdCustomerTypeController
}