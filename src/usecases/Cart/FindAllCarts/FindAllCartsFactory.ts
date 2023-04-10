import { 
  PrismaCartRepository 
} from '../../../repositories/implementations/prisma/PrismaCartRepository'
import { FindAllCartsController } from './FindAllCartsController'
import { FindAllCartsUseCase } from './FindAllCartsUseCase'


export const findAllCartsFactory = () => {
  const prismaCartRepository = new PrismaCartRepository();
  const findAllCartsUseCase = new FindAllCartsUseCase(prismaCartRepository)
  const findAllCartsController = new FindAllCartsController(findAllCartsUseCase)

  return findAllCartsController
}