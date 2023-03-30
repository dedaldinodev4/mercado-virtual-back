import { 
  PrismaDiscountRepository 
} from '../../../repositories/implementations/prisma/PrismaDiscountRepository'
import { UpdateDiscountController } from './UpdateDiscountController'
import { UpdateDiscountUseCase } from './UpdateDiscountUseCase'


export const updateDiscountFactory = () => {
  const prismaDiscountRepository = new PrismaDiscountRepository();
  const updateDiscountUseCase = new UpdateDiscountUseCase(prismaDiscountRepository)
  const updateDiscountController = new UpdateDiscountController(updateDiscountUseCase)

  return updateDiscountController
}