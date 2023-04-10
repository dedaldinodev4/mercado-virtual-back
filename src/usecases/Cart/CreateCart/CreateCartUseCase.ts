import { ICartRepository } from "../../../repositories/ICartRepository";
import { ICreateCart, ICreateCartRequest } from "./CreateCartDTO";


export class CreateCartUseCase {

  constructor(
    private cartRepository: ICartRepository
  ) { }

  async execute(data: ICreateCartRequest): Promise<ICreateCart | Error> {
    const cartExists = await this.cartRepository.findByToken(data.token);

    if (!data) {
      throw new Error('Data is required.')
    }

    if (cartExists) {
      throw new Error('Cart already exists.')
    }
    const result = await this.cartRepository.create(data);

    return result;
  }
}