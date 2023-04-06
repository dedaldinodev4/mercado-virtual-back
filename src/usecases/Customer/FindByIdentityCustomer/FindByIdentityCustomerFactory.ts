import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { FindByIdentityCustomerController } from './FindByIdentityCustomerController'
import { FindByIdentityCustomerUseCase } from './FindByIdentityCustomerUseCase'


export const findByIdentityCustomerFactory = () => {
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const findByIdentityCustomerUseCase = new FindByIdentityCustomerUseCase(prismaCustomerRepository)
  const findByIdentityCustomerController = new FindByIdentityCustomerController(findByIdentityCustomerUseCase)

  return findByIdentityCustomerController
}