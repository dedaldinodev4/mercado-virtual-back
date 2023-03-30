import { 
  PrismaDiscountRepository 
} from '../../../repositories/implementations/prisma/PrismaDiscountRepository'
import { FindAllDiscountsController } from './FindAllDiscountsController'
import { FindAllDiscountsUseCase } from './FindAllDiscountsUseCase'


export const findAllDiscountsFactory = () => {
  const prismaDiscountRepository = new PrismaDiscountRepository();
  const findAllDiscountsUseCase = new FindAllDiscountsUseCase(prismaDiscountRepository)
  const findAllDiscountsController = new FindAllDiscountsController(findAllDiscountsUseCase)

  return findAllDiscountsController
}