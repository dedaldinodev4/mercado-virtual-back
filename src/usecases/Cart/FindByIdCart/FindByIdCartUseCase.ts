import { ICartRepository } from "../../../repositories/ICartRepository";
import { ICart } from "./FindByIdCartDTO";


export class FindByIdCartUseCase {

    constructor(
        private cartRepository: ICartRepository
    ){}

    async execute(id: string): Promise<ICart | Error> {

      if (!id) {
        throw new Error('Id is required.')  
      }
      
      const cart = await this.cartRepository.findById(id);

      if (!cart) {
        throw new Error('cart does not exists.');
      }

      return cart;
    }
}