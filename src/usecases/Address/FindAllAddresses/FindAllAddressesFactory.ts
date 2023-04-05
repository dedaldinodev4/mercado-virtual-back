import { 
  PrismaAddressRepository 
} from '../../../repositories/implementations/prisma/PrismaAddressRepository'
import { FindAllAddressesController } from './FindAllAddressesController'
import { FindAllAddressesUseCase } from './FindAllAddressesUseCase'


export const findAllAddressesFactory = () => {
  const prismaAddressRepository = new PrismaAddressRepository();
  const findAllAddressesUseCase = new FindAllAddressesUseCase(prismaAddressRepository)
  const findAllAddressesController = new FindAllAddressesController(findAllAddressesUseCase)

  return findAllAddressesController
}