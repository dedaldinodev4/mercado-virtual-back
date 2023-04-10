import { 
  PrismaCustomerTypeRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerTypeRepository'
import { FindAllCustomerTypesController } from './FindAllCustomerTypesController'
import { FindAllCustomerTypesUseCase } from './FindAllCustomerTypesUseCase'


export const findAllCustomerTypesFactory = () => {
  const prismaCustomerTypeRepository = new PrismaCustomerTypeRepository();
  const findAllCustomerTypesUseCase = new FindAllCustomerTypesUseCase(prismaCustomerTypeRepository)
  const findAllCustomerTypesController = new FindAllCustomerTypesController(findAllCustomerTypesUseCase)

  return findAllCustomerTypesController
}