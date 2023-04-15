
import {
  PrismaOwnerRepository
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { FindAllOwnersController } from './FindAllOwnersController'
import { FindAllOwnersUseCase } from './FindAllOwnersUseCase'


export const findAllOwnersFactory = () => {
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const findAllOwnersUseCase = new FindAllOwnersUseCase(prismaOwnerRepository)
  const findAllOwnersController = new FindAllOwnersController(findAllOwnersUseCase)

  return findAllOwnersController
}