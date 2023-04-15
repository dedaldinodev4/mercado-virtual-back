import {
  PrismaOwnerRepository
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { DeleteOwnerController } from './DeleteOwnerController'
import { DeleteOwnerUseCase } from './DeleteOwnerUseCase'


export const deleteOwnerFactory = () => {
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const deleteOwnerUseCase = new DeleteOwnerUseCase(prismaOwnerRepository)
  const deleteOwnerController = new DeleteOwnerController(deleteOwnerUseCase)

  return deleteOwnerController
}