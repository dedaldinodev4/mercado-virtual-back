import {
  PrismaProductShopRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopRepository'
import { FindAllProductShopiesController } from './FindAllProductShopiesController'
import { FindAllProductShopiesUseCase } from './FindAllProductShopiesUseCase'


export const findAllProductShopiesFactory = () => {
  const prismaProductShopRepository = new PrismaProductShopRepository();
  const findAllProductShopiesUseCase = new FindAllProductShopiesUseCase(prismaProductShopRepository)
  const findAllProductShopiesController = new FindAllProductShopiesController(findAllProductShopiesUseCase)

  return findAllProductShopiesController
}