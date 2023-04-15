import {
  PrismaOwnerRepository
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { UpdateOwnerController } from './UpdateOwnerController'
import { UpdateOwnerUseCase } from './UpdateOwnerUseCase'


export const updateOwnerFactory = () => {
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const updateOwnerUseCase = new UpdateOwnerUseCase(prismaOwnerRepository)
  const updateOwnerController = new UpdateOwnerController(updateOwnerUseCase)

  return updateOwnerController
}