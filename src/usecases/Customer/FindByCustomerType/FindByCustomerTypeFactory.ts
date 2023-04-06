
import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { FindByCustomerTypeController } from './FindByCustomerTypeController'
import { FindByCustomerTypeUseCase } from './FindByCustomerTypeUseCase'


export const findByCustomerTypeFactory = () => {
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const findByCustomerTypeUseCase = new FindByCustomerTypeUseCase(prismaCustomerRepository)
  const findByCustomerTypeController = new FindByCustomerTypeController(findByCustomerTypeUseCase)

  return findByCustomerTypeController
}