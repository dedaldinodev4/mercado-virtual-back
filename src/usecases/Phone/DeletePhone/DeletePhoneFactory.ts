import { 
  PrismaPhoneRepository 
} from '../../../repositories/implementations/prisma/PrismaPhoneRepository'
import { DeletePhoneController } from './DeletePhoneController'
import { DeletePhoneUseCase } from './DeletePhoneUseCase'


export const deletePhoneFactory = () => {
  const prismaPhoneRepository = new PrismaPhoneRepository();
  const deletePhoneUseCase = new DeletePhoneUseCase(prismaPhoneRepository)
  const deletePhoneController = new DeletePhoneController(deletePhoneUseCase)

  return deletePhoneController
}