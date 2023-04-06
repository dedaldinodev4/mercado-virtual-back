import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { UpdateCustomerController } from './UpdateCustomerController'
import { UpdateCustomerUseCase } from './UpdateCustomerUseCase'


export const updateCustomerFactory = () => {
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const updateCustomerUseCase = new UpdateCustomerUseCase(prismaCustomerRepository)
  const updateCustomerController = new UpdateCustomerController(updateCustomerUseCase)

  return updateCustomerController
}