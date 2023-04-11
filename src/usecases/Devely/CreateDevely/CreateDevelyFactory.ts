import {
  PrismaDevelyRepository
} from '../../../repositories/implementations/prisma/PrismaDevelyRepository'
import { PrismaOrderRepository } from '../../../repositories/implementations/prisma/PrismaOrderRepository'
import { CreateDevelyController } from './CreateDevelyController'
import { CreateDevelyUseCase } from './CreateDevelyUseCase'


export const createDevelyFactory = () => {
  const prismaDevelyRepository = new PrismaDevelyRepository();
  const prismaOrderRepository = new PrismaOrderRepository();
  const createDevelyUseCase = new CreateDevelyUseCase(prismaDevelyRepository, prismaOrderRepository)
  const createDevelyController = new CreateDevelyController(createDevelyUseCase)

  return createDevelyController
}