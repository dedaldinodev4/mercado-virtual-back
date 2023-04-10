import { ICartRepository } from "../../../repositories/ICartRepository";
import { IUpdateCart, IUpdateCartRequest } from "./UpdateCartDTO";


export class UpdateCartUseCase {

    constructor(
        private cartRepository: ICartRepository
    ) { }

    async execute(id: string, data: IUpdateCartRequest): Promise<IUpdateCart | Error> {
        const cartExists = await this.cartRepository.findById(id);

        if (!cartExists) {
            throw new Error('cart does not exists.')
        }
        const result = await this.cartRepository.update(id, data);

        return result;
    }
}