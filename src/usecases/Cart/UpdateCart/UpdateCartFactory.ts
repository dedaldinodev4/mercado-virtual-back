import { 
  PrismaCartRepository 
} from '../../../repositories/implementations/prisma/PrismaCartRepository'
import { UpdateCartController } from './UpdateCartController'
import { UpdateCartUseCase } from './UpdateCartUseCase'


export const updateCartFactory = () => {
  const prismaCartRepository = new PrismaCartRepository();
  const updateCartUseCase = new UpdateCartUseCase(prismaCartRepository)
  const updateCartController = new UpdateCartController(updateCartUseCase)

  return updateCartController
}