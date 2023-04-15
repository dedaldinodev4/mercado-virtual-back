import { IProductShopOrderRepository } from "../../../repositories/IProductShopOrderRepository";
import { IUpdateProductShopOrder, IUpdateProductShopOrderRequest } from "./UpdateProductShopOrderDTO";


export class UpdateProductShopOrderUseCase {

    constructor(
        private productShopOrderRepository: IProductShopOrderRepository
    ) { }

    async execute(id: string, data: IUpdateProductShopOrderRequest): 
        Promise<IUpdateProductShopOrder | Error> 
    {
        const productShopOrderExists = await this.productShopOrderRepository.findById(id);

        if (!productShopOrderExists) {
            throw new Error('ProductShopOrder does not exists.')
        }
        const result = await this.productShopOrderRepository.update(id, data);

        return result;
    }
}