import {
  PrismaProductShopRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopRepository'
import { UpdateProductShopController } from './UpdateProductShopController'
import { UpdateProductShopUseCase } from './UpdateProductShopUseCase'


export const updateProductShopFactory = () => {
  const prismaProductShopRepository = new PrismaProductShopRepository();
  const updateProductShopUseCase = new UpdateProductShopUseCase(prismaProductShopRepository)
  const updateProductShopController = new UpdateProductShopController(updateProductShopUseCase)

  return updateProductShopController
}