import { 
  PrismaCustomerTypeRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerTypeRepository'
import { CreateCustomerTypeController } from './CreateCustomerTypeController'
import { CreateCustomerTypeUseCase } from './CreateCustomerTypeUseCase'


export const createCustomerTypeFactory = () => {
  const prismaCustomerTypeRepository = new PrismaCustomerTypeRepository();
  const createCustomerTypeUseCase = new CreateCustomerTypeUseCase(prismaCustomerTypeRepository)
  const createCustomerTypeController = new CreateCustomerTypeController(createCustomerTypeUseCase)

  return createCustomerTypeController
}