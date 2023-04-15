import {
  PrismaShopRepository
} from '../../../repositories/implementations/prisma/PrismaShopRepository'
import { FindByIdShopController } from './FindByIdShopController'
import { FindByIdShopUseCase } from './FindByIdShopUseCase'


export const findByIdShopFactory = () => {
  const prismaShopRepository = new PrismaShopRepository();
  const findByIdShopUseCase = new FindByIdShopUseCase(prismaShopRepository)
  const findByIdShopController = new FindByIdShopController(findByIdShopUseCase)

  return findByIdShopController
}