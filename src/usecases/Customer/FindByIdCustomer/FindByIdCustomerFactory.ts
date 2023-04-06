import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { FindByIdCustomerController } from './FindByIdCustomerController'
import { FindByIdCustomerUseCase } from './FindByIdCustomerUseCase'


export const findByIdCustomerFactory = () => {
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const findByIdCustomerUseCase = new FindByIdCustomerUseCase(prismaCustomerRepository)
  const findByIdCustomerController = new FindByIdCustomerController(findByIdCustomerUseCase)

  return findByIdCustomerController
}