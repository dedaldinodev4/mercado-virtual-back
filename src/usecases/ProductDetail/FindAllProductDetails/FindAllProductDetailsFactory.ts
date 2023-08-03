import {
  PrismaProductDetailRepository
} from '../../../repositories/implementations/prisma/PrismaProductDetailRepository'
import { FindAllProductDetailsController } from './FindAllProductDetailsController'
import { FindAllProductDetailsUseCase } from './FindAllProductDetailsUseCase'


export const findAllProductDetailsFactory = () => {
  const prismaProductDetailRepository = new PrismaProductDetailRepository();
  const findAllProductDetailsUseCase = new FindAllProductDetailsUseCase(prismaProductDetailRepository)
  const findAllProductDetailsController = new FindAllProductDetailsController(findAllProductDetailsUseCase)

  return findAllProductDetailsController
}