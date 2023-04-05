import { 
  PrismaAddressRepository 
} from '../../../repositories/implementations/prisma/PrismaAddressRepository'
import { UpdateAddressController } from './UpdateAddressController'
import { UpdateAddressUseCase } from './UpdateAddressUseCase'


export const updateAddressFactory = () => {
  const prismaAddressRepository = new PrismaAddressRepository();
  const updateAddressUseCase = new UpdateAddressUseCase(prismaAddressRepository)
  const updateAddressController = new UpdateAddressController(updateAddressUseCase)

  return updateAddressController
}