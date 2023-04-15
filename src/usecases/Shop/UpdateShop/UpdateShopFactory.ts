import {
  PrismaShopRepository
} from '../../../repositories/implementations/prisma/PrismaShopRepository'
import { UpdateShopController } from './UpdateShopController'
import { UpdateShopUseCase } from './UpdateShopUseCase'


export const updateShopFactory = () => {
  const prismaShopRepository = new PrismaShopRepository();
  const updateShopUseCase = new UpdateShopUseCase(prismaShopRepository)
  const updateShopController = new UpdateShopController(updateShopUseCase)

  return updateShopController
}