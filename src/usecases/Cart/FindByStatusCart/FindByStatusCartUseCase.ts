import { ICartRepository } from "../../../repositories/ICartRepository";
import { ICart } from "./FindByStatusCartDTO";


export class FindByStatusCartUseCase {

  constructor(
    private cartRepository: ICartRepository
  ) { }

  async execute(status: string): Promise<ICart[]> {

    if (!status) {
      throw new Error('Status is required.')
    }

    const cart = await this.cartRepository.findByStatus(status);

    return cart;
  }
}