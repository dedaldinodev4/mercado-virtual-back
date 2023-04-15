import { IProductShopOrderRepository } from "../../../repositories/IProductShopOrderRepository";
import { IProductShopOrder } from "./FindByIdProductShopOrderDTO";


export class FindByIdProductShopOrderUseCase {

  constructor(
    private productShopOrderRepository: IProductShopOrderRepository
  ) { }

  async execute(id: string): Promise<IProductShopOrder | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const productShopOrder = await this.productShopOrderRepository.findById(id);

    if (!productShopOrder) {
      throw new Error('ProductShopOrder does not exists.');
    }

    return productShopOrder;
  }
}