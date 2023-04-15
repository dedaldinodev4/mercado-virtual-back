import {
  PrismaShopRepository
} from '../../../repositories/implementations/prisma/PrismaShopRepository'
import { FindByAddressShopController } from './FindByAddressShopController'
import { FindByAddressShopUseCase } from './FindByAddressShopUseCase'


export const findByAddressShopFactory = () => {
  const prismaShopRepository = new PrismaShopRepository();
  const findByAddressShopUseCase = new FindByAddressShopUseCase(prismaShopRepository)
  const findByAddressShopController = new FindByAddressShopController(findByAddressShopUseCase)

  return findByAddressShopController
}