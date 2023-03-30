import { 
  PrismaDiscountRepository 
} from '../../../repositories/implementations/prisma/PrismaDiscountRepository'
import { DeleteDiscountController } from './DeleteDiscountController'
import { DeleteDiscountUseCase } from './DeleteDiscountUseCase'


export const deleteDiscountFactory = () => {
  const prismaDiscountRepository = new PrismaDiscountRepository();
  const deleteDiscountUseCase = new DeleteDiscountUseCase(prismaDiscountRepository)
  const deleteDiscountController = new DeleteDiscountController(deleteDiscountUseCase)

  return deleteDiscountController
}