import { 
  PrismaAddressRepository 
} from '../../../repositories/implementations/prisma/PrismaAddressRepository'
import { DeleteAddressController } from './DeleteAddressController'
import { DeleteAddressUseCase } from './DeleteAddressUseCase'


export const deleteAddressFactory = () => {
  const prismaAddressRepository = new PrismaAddressRepository();
  const deleteAddressUseCase = new DeleteAddressUseCase(prismaAddressRepository)
  const deleteAddressController = new DeleteAddressController(deleteAddressUseCase)

  return deleteAddressController
}