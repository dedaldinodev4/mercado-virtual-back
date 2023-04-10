import { 
  PrismaCustomerTypeRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerTypeRepository'
import { DeleteCustomerTypeController } from './DeleteCustomerTypeController'
import { DeleteCustomerTypeUseCase } from './DeleteCustomerTypeUseCase'


export const deleteCustomerTypeFactory = () => {
  const prismaCustomerTypeRepository = new PrismaCustomerTypeRepository();
  const deleteCustomerTypeUseCase = new DeleteCustomerTypeUseCase(prismaCustomerTypeRepository)
  const deleteCustomerTypeController = new DeleteCustomerTypeController(deleteCustomerTypeUseCase)

  return deleteCustomerTypeController
}