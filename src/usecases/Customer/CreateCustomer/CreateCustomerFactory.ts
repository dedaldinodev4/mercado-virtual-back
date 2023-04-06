import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { PrismaCustomerTypeRepository } from '../../../repositories/implementations/prisma/PrismaCustomerTypeRepository';
import { PrismaUserRepository } from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { CreateCustomerController } from './CreateCustomerController'
import { CreateCustomerUseCase } from './CreateCustomerUseCase'


export const createCustomerFactory = () => {
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const prismaCustomerTypeRepository = new PrismaCustomerTypeRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const createCustomerUseCase = new CreateCustomerUseCase(
    prismaCustomerRepository, 
    prismaUserRepository, 
    prismaCustomerTypeRepository
  )
  const createCustomerController = new CreateCustomerController(createCustomerUseCase)

  return createCustomerController
}