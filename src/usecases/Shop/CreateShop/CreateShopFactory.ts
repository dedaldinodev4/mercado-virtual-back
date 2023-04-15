import {
  PrismaShopRepository
} from '../../../repositories/implementations/prisma/PrismaShopRepository'
import {
  PrismaAddressRepository
} from '../../../repositories/implementations/prisma/PrismaAddressRepository'
import {
  PrismaOwnerRepository
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { CreateShopController } from './CreateShopController'
import { CreateShopUseCase } from './CreateShopUseCase'


export const createShopFactory = () => {
  const prismaShopRepository = new PrismaShopRepository();
  const prismaAddressRepository = new PrismaAddressRepository();
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const createShopUseCase = new CreateShopUseCase(
    prismaShopRepository,
    prismaAddressRepository,
    prismaOwnerRepository
  )
  const createShopController = new CreateShopController(createShopUseCase)

  return createShopController
}