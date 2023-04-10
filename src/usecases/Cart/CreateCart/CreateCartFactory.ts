import { 
  PrismaCartRepository 
} from '../../../repositories/implementations/prisma/PrismaCartRepository'
import { CreateCartController } from './CreateCartController'
import { CreateCartUseCase } from './CreateCartUseCase'


export const createCartFactory = () => {
  const prismaCartRepository = new PrismaCartRepository();
  const createCartUseCase = new CreateCartUseCase(prismaCartRepository)
  const createCartController = new CreateCartController(createCartUseCase)

  return createCartController
}