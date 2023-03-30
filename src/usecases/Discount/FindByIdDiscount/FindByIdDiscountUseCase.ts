import { IDiscountRepository } from "../../../repositories/IDiscountRepository";
import { IDiscount } from "./FindByIdDiscountDTO";


export class FindByIdDiscountUseCase {

    constructor(
        private discountRepository: IDiscountRepository
    ){}

    async execute(id: string): Promise<IDiscount | Error> {

      if (!id) {
        throw new Error('Id is required.')  
      }
      
      const discount = await this.discountRepository.findById(id);

      if (!discount) {
        throw new Error('Discount does not exists.');
      }

      return discount;
    }
}