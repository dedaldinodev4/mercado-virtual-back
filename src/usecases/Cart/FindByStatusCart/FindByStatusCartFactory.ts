import {
  PrismaCartRepository
} from '../../../repositories/implementations/prisma/PrismaCartRepository'
import { FindByStatusCartController } from './FindByStatusCartController'
import { FindByStatusCartUseCase } from './FindByStatusCartUseCase'


export const findByStatusCartFactory = () => {
  const prismaCartRepository = new PrismaCartRepository();
  const findByStatusCartUseCase = new FindByStatusCartUseCase(prismaCartRepository)
  const findByStatusCartController = new FindByStatusCartController(findByStatusCartUseCase)

  return findByStatusCartController
}