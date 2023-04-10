import { ICartRepository } from "../../../repositories/ICartRepository";


export class DeleteCartUseCase {

  constructor(
    private cartRepository: ICartRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const cartExists = await this.cartRepository.findById(id);

    if (!cartExists) {
      throw new Error('Cart does not exists.');
    }
    const result = await this.cartRepository.delete(id);

    return result;
  }
}