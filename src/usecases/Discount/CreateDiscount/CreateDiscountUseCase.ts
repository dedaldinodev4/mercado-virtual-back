import { IDiscountRepository } from "../../../repositories/IDiscountRepository";
import { ICreateDiscount, ICreateDiscountRequest } from "./CreateDiscountDTO";


export class CreateDiscountUseCase {

    constructor(
        private discountRepository: IDiscountRepository
    ){}

    async execute(data: ICreateDiscountRequest): Promise<ICreateDiscount | Error> {
        const discountExists = await this.discountRepository.findByName(data.name);

        if (!data) {
            throw new Error('Data is required.')  
        }

        if (discountExists) {
          throw new Error('Discount already exists.')
        }
        const result = await this.discountRepository.create(data);

        return result;
    }
}