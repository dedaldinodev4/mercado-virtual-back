import { IDiscountRepository } from "../../../repositories/IDiscountRepository";
import { IUpdateDiscount, IUpdateDiscountRequest } from "./UpdateDiscountDTO";


export class UpdateDiscountUseCase {

    constructor(
        private discountRepository: IDiscountRepository
    ){}

    async execute(id: string, data: IUpdateDiscountRequest): Promise<IUpdateDiscount | Error> {
        const discountExists = await this.discountRepository.findById(id);

        if (!discountExists) {
          throw new Error('Discount does not exists.')
        }
        const result = await this.discountRepository.update(id, data);

        return result;
    }
}