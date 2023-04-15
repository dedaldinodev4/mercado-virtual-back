import {
  PrismaShopRepository
} from '../../../repositories/implementations/prisma/PrismaShopRepository'
import { DeleteShopController } from './DeleteShopController'
import { DeleteShopUseCase } from './DeleteShopUseCase'


export const deleteShopFactory = () => {
  const prismaShopRepository = new PrismaShopRepository();
  const deleteShopUseCase = new DeleteShopUseCase(prismaShopRepository)
  const deleteShopController = new DeleteShopController(deleteShopUseCase)

  return deleteShopController
}