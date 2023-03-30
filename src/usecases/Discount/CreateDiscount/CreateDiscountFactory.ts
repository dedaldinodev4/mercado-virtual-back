import { 
  PrismaDiscountRepository 
} from '../../../repositories/implementations/prisma/PrismaDiscountRepository'
import { CreateDiscountController } from './CreateDiscountController'
import { CreateDiscountUseCase } from './CreateDiscountUseCase'


export const createDiscountFactory = () => {
  const prismaDiscountRepository = new PrismaDiscountRepository();
  const createDiscountUseCase = new CreateDiscountUseCase(prismaDiscountRepository)
  const createDiscountController = new CreateDiscountController(createDiscountUseCase)

  return createDiscountController
}