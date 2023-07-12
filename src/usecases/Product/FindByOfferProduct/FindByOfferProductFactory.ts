import {
  PrismaProductRepository
} from '../../../repositories/implementations/prisma/PrismaProductRepository'
import { FindByOfferProductController } from './FindByOfferProductController'
import { FindByOfferProductUseCase } from './FindByOfferProductUseCase'


export const findByOfferProductFactory = () => {
  const prismaProductRepository = new PrismaProductRepository();
  const findByOfferProductUseCase = new FindByOfferProductUseCase(
    prismaProductRepository
  )
  const findByOfferProductController = new FindByOfferProductController(findByOfferProductUseCase)

  return findByOfferProductController
}