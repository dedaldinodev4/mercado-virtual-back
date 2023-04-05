import { 
  PrismaAddressRepository 
} from '../../../repositories/implementations/prisma/PrismaAddressRepository'
import { FindByIdUserAddressController } from './FindByIdUserAddressController'
import { FindByIdUserAddressUseCase } from './FindByIdUserAddressUseCase'


export const findByIdUserAddressFactory = () => {
  const prismaAddressRepository = new PrismaAddressRepository();
  const findByIdUserAddressUseCase = new FindByIdUserAddressUseCase(prismaAddressRepository)
  const findByIdUserAddressController = new FindByIdUserAddressController(findByIdUserAddressUseCase)

  return findByIdUserAddressController
}