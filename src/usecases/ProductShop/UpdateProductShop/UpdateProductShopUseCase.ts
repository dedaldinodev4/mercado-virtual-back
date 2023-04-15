import { IProductShopRepository } from "../../../repositories/IProductShopRepository";
import { IUpdateProductShop, IUpdateProductShopRequest } from "./UpdateProductShopDTO";


export class UpdateProductShopUseCase {

    constructor(
        private productShopRepository: IProductShopRepository
    ) { }

    async execute(id: string, data: IUpdateProductShopRequest): 
        Promise<IUpdateProductShop | Error> 
    {
        const productShopExists = await this.productShopRepository.findById(id);

        if (!productShopExists) {
            throw new Error('ProductShop does not exists.')
        }
        const result = await this.productShopRepository.update(id, data);

        return result;
    }
}