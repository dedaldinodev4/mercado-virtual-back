import { 
  PrismaCartRepository 
} from '../../../repositories/implementations/prisma/PrismaCartRepository'
import { FindByIdCartController } from './FindByIdCartController'
import { FindByIdCartUseCase } from './FindByIdCartUseCase'


export const findByIdCartFactory = () => {
  const prismaCartRepository = new PrismaCartRepository();
  const findByIdCartUseCase = new FindByIdCartUseCase(prismaCartRepository)
  const findByIdCartController = new FindByIdCartController(findByIdCartUseCase)

  return findByIdCartController
}