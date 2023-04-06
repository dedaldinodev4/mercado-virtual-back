import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { FindByIdUserCustomerController } from './FindByIdUserCustomerController'
import { FindByIdUserCustomerUseCase } from './FindByIdUserCustomerUseCase'


export const findByIdUserCustomerFactory = () => {
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const findByIdUserCustomerUseCase = new FindByIdUserCustomerUseCase(prismaCustomerRepository)
  const findByIdUserCustomerController = new FindByIdUserCustomerController(findByIdUserCustomerUseCase)

  return findByIdUserCustomerController
}