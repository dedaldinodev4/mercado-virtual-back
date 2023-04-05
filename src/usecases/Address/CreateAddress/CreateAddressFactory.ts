import { 
  PrismaAddressRepository 
} from '../../../repositories/implementations/prisma/PrismaAddressRepository'
import { CreateAddressController } from './CreateAddressController'
import { CreateAddressUseCase } from './CreateAddressUseCase'


export const createAddressFactory = () => {
  const prismaAddressRepository = new PrismaAddressRepository();
  const createAddressUseCase = new CreateAddressUseCase(prismaAddressRepository)
  const createAddressController = new CreateAddressController(createAddressUseCase)

  return createAddressController
}