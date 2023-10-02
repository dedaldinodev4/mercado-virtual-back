import { 
  PrismaAuthRepository 
} from '../../../repositories/implementations/prisma/PrismaAuthRepository'
import { 
  PrismaCustomerRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerRepository'
import { 
  PrismaOwnerRepository 
} from '../../../repositories/implementations/prisma/PrismaOwnerRepository'
import { 
  PrismaAddressRepository 
} from '../../../repositories/implementations/prisma/PrismaAddressRepository'
import { 
  PrismaPhoneRepository 
} from '../../../repositories/implementations/prisma/PrismaPhoneRepository'
import { 
  PrismaCustomerTypeRepository 
} from '../../../repositories/implementations/prisma/PrismaCustomerTypeRepository'

import { SignUpController } from './SignUpController'
import { SignUpUseCase } from './SignUpUseCase'


export const signUpFactory = () => {
  const prismaAuthRepository = new PrismaAuthRepository();
  const prismaCustomerRepository = new PrismaCustomerRepository();
  const prismaOwnerRepository = new PrismaOwnerRepository();
  const prismaAddressRepository = new PrismaAddressRepository();
  const prismaPhoneRepository = new PrismaPhoneRepository();
  const prismaCustomerTypeRepository = new PrismaCustomerTypeRepository();

  const signUpUseCase = new SignUpUseCase(
    prismaAuthRepository, prismaCustomerRepository,
    prismaOwnerRepository, prismaAddressRepository,
    prismaPhoneRepository, prismaCustomerTypeRepository
  )
  const signUpController = new SignUpController(signUpUseCase)

  return signUpController
}