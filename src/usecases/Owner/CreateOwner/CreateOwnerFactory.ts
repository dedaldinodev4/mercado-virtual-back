import {
  PrismaOwnerRepository
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { PrismaUserRepository } from '../../../repositories/implementations/prisma/PrismaUserRepository';
import { CreateOwnerController } from './CreateOwnerController'
import { CreateOwnerUseCase } from './CreateOwnerUseCase'


export const createOwnerFactory = () => {
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const prismaUserRepository = new PrismaUserRepository();
  const createOwnerUseCase = new CreateOwnerUseCase(
    prismaOwnerRepository,
    prismaUserRepository
  )
  const createOwnerController = new CreateOwnerController(createOwnerUseCase)

  return createOwnerController
}