import {
  PrismaUserRepository
} from '../../../repositories/implementations/prisma/PrismaUserRepository'
import { UpdateUserCredentialsController } from './UpdateUserCredentialsController'
import { UpdateUserCredentialsUseCase } from './UpdateUserCredentialsUseCase'


export const updateUserCredentialsFactory = () => {
  const prismaUserRepository = new PrismaUserRepository();
  const updateUserCredentialsUseCase = new UpdateUserCredentialsUseCase(prismaUserRepository)
  const updateUserCredentialsController = new UpdateUserCredentialsController(updateUserCredentialsUseCase)

  return updateUserCredentialsController
}