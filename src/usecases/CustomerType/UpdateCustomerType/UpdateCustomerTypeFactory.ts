import { 
  PrismaCustomerTypeRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerTypeRepository'
import { UpdateCustomerTypeController } from './UpdateCustomerTypeController'
import { UpdateCustomerTypeUseCase } from './UpdateCustomerTypeUseCase'


export const updateCustomerTypeFactory = () => {
  const prismaCustomerTypeRepository = new PrismaCustomerTypeRepository();
  const updateCustomerTypeUseCase = new UpdateCustomerTypeUseCase(prismaCustomerTypeRepository)
  const updateCustomerTypeController = new UpdateCustomerTypeController(updateCustomerTypeUseCase)

  return updateCustomerTypeController
}