import {
  PrismaOwnerRepository
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { FindByIdentityOwnerController } from './FindByIdentityOwnerController'
import { FindByIdentityOwnerUseCase } from './FindByIdentityOwnerUseCase'


export const findByIdentityOwnerFactory = () => {
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const findByIdentityOwnerUseCase = new FindByIdentityOwnerUseCase(prismaOwnerRepository)
  const findByIdentityOwnerController = new FindByIdentityOwnerController(findByIdentityOwnerUseCase)

  return findByIdentityOwnerController
}