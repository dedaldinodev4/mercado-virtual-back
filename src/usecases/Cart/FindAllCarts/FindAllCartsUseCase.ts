import { ICartRepository } from "../../../repositories/ICartRepository";
import { ICart } from "./FindAllCartsDTO";


export class FindAllCartsUseCase {

  constructor(
    private cartRepository: ICartRepository
  ) { }

  async execute(): Promise<ICart[]> {

    const carts = await this.cartRepository.findAll();
    return carts;
  }
}