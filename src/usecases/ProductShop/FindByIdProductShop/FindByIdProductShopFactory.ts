import {
  PrismaProductShopRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopRepository'
import { FindByIdProductShopController } from './FindByIdProductShopController'
import { FindByIdProductShopUseCase } from './FindByIdProductShopUseCase'


export const findByIdProductShopFactory = () => {
  const prismaProductShopRepository = new PrismaProductShopRepository();
  const findByIdProductShopUseCase = new FindByIdProductShopUseCase(prismaProductShopRepository)
  const findByIdProductShopController = new FindByIdProductShopController(findByIdProductShopUseCase)

  return findByIdProductShopController
}