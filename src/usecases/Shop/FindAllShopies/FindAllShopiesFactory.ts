import {
  PrismaShopRepository
} from '../../../repositories/implementations/prisma/PrismaShopRepository'
import { FindAllShopiesController } from './FindAllShopiesController'
import { FindAllShopiesUseCase } from './FindAllShopiesUseCase'


export const findAllShopiesFactory = () => {
  const prismaShopRepository = new PrismaShopRepository();
  const findAllShopsUseCase = new FindAllShopiesUseCase(prismaShopRepository)
  const findAllShopsController = new FindAllShopiesController(findAllShopsUseCase)

  return findAllShopsController
}