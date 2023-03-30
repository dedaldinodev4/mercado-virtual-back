import { IDiscountRepository } from "../../../repositories/IDiscountRepository";
import { IDiscount } from "./FindAllDiscountsDTO";


export class FindAllDiscountsUseCase {

    constructor(
        private discountRepository: IDiscountRepository
    ){}

    async execute(): Promise<IDiscount[]> {

      const discounts = await this.discountRepository.findAll();
      return discounts;
    }
}