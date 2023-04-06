import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { DeleteCustomerController } from './DeleteCustomerController'
import { DeleteCustomerUseCase } from './DeleteCustomerUseCase'


export const deleteCustomerFactory = () => {
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const deleteCustomerUseCase = new DeleteCustomerUseCase(prismaCustomerRepository)
  const deleteCustomerController = new DeleteCustomerController(deleteCustomerUseCase)

  return deleteCustomerController
}