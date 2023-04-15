import {
  PrismaOwnerRepository
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { FindByIdUserOwnerController } from './FindByIdUserOwnerController'
import { FindByIdUserOwnerUseCase } from './FindByIdUserOwnerUseCase'


export const findByIdUserOwnerFactory = () => {
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const findByIdUserOwnerUseCase = new FindByIdUserOwnerUseCase(prismaOwnerRepository)
  const findByIdUserOwnerController = new FindByIdUserOwnerController(findByIdUserOwnerUseCase)

  return findByIdUserOwnerController
}