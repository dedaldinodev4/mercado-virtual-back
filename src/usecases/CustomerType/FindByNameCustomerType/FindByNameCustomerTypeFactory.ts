import { 
  PrismaCustomerTypeRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerTypeRepository'
import { FindByNameCustomerTypeController } from './FindByNameCustomerTypeController'
import { FindByNameCustomerTypeUseCase } from './FindByNameCustomerTypeUseCase'


export const findByNameCustomerTypeFactory = () => {
  const prismaCustomerTypeRepository = new PrismaCustomerTypeRepository();
  const findByNameCustomerTypeUseCase = new FindByNameCustomerTypeUseCase(prismaCustomerTypeRepository)
  const findByNameCustomerTypeController = new FindByNameCustomerTypeController(findByNameCustomerTypeUseCase)

  return findByNameCustomerTypeController
}