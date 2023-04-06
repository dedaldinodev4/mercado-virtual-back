
import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { FindAllCustomersController } from './FindAllCustomersController'
import { FindAllCustomersUseCase } from './FindAllCustomersUseCase'


export const findAllCustomersFactory = () => {
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const findAllCustomersUseCase = new FindAllCustomersUseCase(prismaCustomerRepository)
  const findAllCustomersController = new FindAllCustomersController(findAllCustomersUseCase)

  return findAllCustomersController
}