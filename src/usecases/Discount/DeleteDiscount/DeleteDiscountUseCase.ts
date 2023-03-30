import { IDiscountRepository } from "../../../repositories/IDiscountRepository";


export class DeleteDiscountUseCase {

  constructor(
    private discountRepository: IDiscountRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const discountExists = await this.discountRepository.findById(id);

    if (!discountExists) {
      throw new Error('Discount does not exists.');
    }
    const result = await this.discountRepository.delete(id);

    return result;
  }
}