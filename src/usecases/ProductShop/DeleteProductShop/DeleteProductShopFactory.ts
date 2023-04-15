import {
  PrismaProductShopRepository
} from '../../../repositories/implementations/prisma/PrismaProductShopRepository'
import { DeleteProductShopController } from './DeleteProductShopController'
import { DeleteProductShopUseCase } from './DeleteProductShopUseCase'


export const deleteProductShopFactory = () => {
  const prismaProductShopRepository = new PrismaProductShopRepository();
  const deleteProductShopUseCase = new DeleteProductShopUseCase(prismaProductShopRepository)
  const deleteProductShopController = new DeleteProductShopController(deleteProductShopUseCase)

  return deleteProductShopController
}