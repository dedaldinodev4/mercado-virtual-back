import {
  PrismaProductShopRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopRepository'
import { FindByShopProductShopController } from './FindByShopProductShopController'
import { FindByShopProductShopUseCase } from './FindByShopProductShopUseCase'


export const findByShopProductShopFactory = () => {
  const prismaProductShopRepository = new PrismaProductShopRepository();
  const findByShopProductShopUseCase = new FindByShopProductShopUseCase(prismaProductShopRepository)
  const findByShopProductShopController = new FindByShopProductShopController(findByShopProductShopUseCase)

  return findByShopProductShopController
}