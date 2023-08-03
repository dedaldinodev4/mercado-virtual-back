import {
  PrismaProductDetailRepository
} from '../../../repositories/implementations/prisma/PrismaProductDetailRepository'
import { FindByProductDetailsController } from './FindByProductDetailsController'
import { FindByProductDetailsUseCase } from './FindByProductDetailsUseCase'


export const findByProductDetailsFactory = () => {
  const prismaProductDetailRepository = new PrismaProductDetailRepository();
  const findByProductDetailsUseCase = new FindByProductDetailsUseCase(prismaProductDetailRepository)
  const findByProductDetailsController = new FindByProductDetailsController(findByProductDetailsUseCase)

  return findByProductDetailsController
}