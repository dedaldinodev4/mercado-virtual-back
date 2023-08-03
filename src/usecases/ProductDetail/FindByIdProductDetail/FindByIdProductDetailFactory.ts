import {
  PrismaProductDetailRepository
} from '../../../repositories/implementations/prisma/PrismaProductDetailRepository'
import { FindByIdProductDetailController } from './FindByIdProductDetailController'
import { FindByIdProductDetailUseCase } from './FindByIdProductDetailUseCase'


export const findByIdProductDetailFactory = () => {
  const prismaProductDetailRepository = new PrismaProductDetailRepository();
  const findByIdProductDetailUseCase = new FindByIdProductDetailUseCase(prismaProductDetailRepository)
  const findByIdProductDetailController = new FindByIdProductDetailController(findByIdProductDetailUseCase)

  return findByIdProductDetailController
}