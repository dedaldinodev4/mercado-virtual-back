import {
  PrismaShopRepository
} from '../../../repositories/implementations/prisma/PrismaShopRepository'
import { FindByOwnerShopController } from './FindByOwnerShopController'
import { FindByOwnerShopUseCase } from './FindByOwnerShopUseCase'


export const findByOwnerShopFactory = () => {
  const prismaShopRepository = new PrismaShopRepository();
  const findByOwnerShopUseCase = new FindByOwnerShopUseCase(prismaShopRepository)
  const findByOwnerShopController = new FindByOwnerShopController(findByOwnerShopUseCase)

  return findByOwnerShopController
}