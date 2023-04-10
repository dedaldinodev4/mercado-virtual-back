import {
  PrismaCartRepository
} from '../../../repositories/implementations/prisma/PrismaCartRepository'
import { DeleteCartController } from './DeleteCartController'
import { DeleteCartUseCase } from './DeleteCartUseCase'


export const deleteCartFactory = () => {
  const prismaCartRepository = new PrismaCartRepository();
  const deleteCartUseCase = new DeleteCartUseCase(prismaCartRepository)
  const deleteCartController = new DeleteCartController(deleteCartUseCase)

  return deleteCartController
}