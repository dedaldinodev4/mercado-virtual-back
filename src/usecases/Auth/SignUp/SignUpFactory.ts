import { 
  PrismaAuthRepository 
} from '../../../repositories/implementations/prisma/PrismaAuthRepository'
import { SignUpController } from './SignUpController'
import { SignUpUseCase } from './SignUpUseCase'


export const signUpFactory = () => {
  const prismaAuthRepository = new PrismaAuthRepository();
  const signUpUseCase = new SignUpUseCase(prismaAuthRepository)
  const signUpController = new SignUpController(signUpUseCase)

  return signUpController
}