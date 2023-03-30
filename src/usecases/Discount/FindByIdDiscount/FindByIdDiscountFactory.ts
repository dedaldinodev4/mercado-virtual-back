import { 
  PrismaDiscountRepository 
} from '../../../repositories/implementations/prisma/PrismaDiscountRepository'
import { FindByIdDiscountController } from './FindByIdDiscountController'
import { FindByIdDiscountUseCase } from './FindByIdDiscountUseCase'


export const findByIdDiscountFactory = () => {
  const prismaDiscountRepository = new PrismaDiscountRepository();
  const findByIdDiscountUseCase = new FindByIdDiscountUseCase(prismaDiscountRepository)
  const findByIdDiscountController = new FindByIdDiscountController(findByIdDiscountUseCase)

  return findByIdDiscountController
}