import {
  PrismaOwnerRepository
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { FindByIdOwnerController } from './FindByIdOwnerController'
import { FindByIdOwnerUseCase } from './FindByIdOwnerUseCase'


export const findByIdOwnerFactory = () => {
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const findByIdOwnerUseCase = new FindByIdOwnerUseCase(prismaOwnerRepository)
  const findByIdOwnerController = new FindByIdOwnerController(findByIdOwnerUseCase)

  return findByIdOwnerController
}