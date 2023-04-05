import { 
  PrismaAddressRepository 
} from '../../../repositories/implementations/prisma/PrismaAddressRepository'
import { FindByIdAddressController } from './FindByIdAddressController'
import { FindByIdAddressUseCase } from './FindByIdAddressUseCase'


export const findByIdAddressFactory = () => {
  const prismaAddressRepository = new PrismaAddressRepository();
  const findByIdAddressUseCase = new FindByIdAddressUseCase(prismaAddressRepository)
  const findByIdAddressController = new FindByIdAddressController(findByIdAddressUseCase)

  return findByIdAddressController
}