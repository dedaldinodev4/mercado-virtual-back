import { IProductShopOrderRepository } from "../../../repositories/IProductShopOrderRepository";
import { IProductShopOrder } from "./FindByShopProductShopOrderDTO";


export class FindByShopProductShopOrderUseCase {

  constructor(
    private productShopOrderRepository: IProductShopOrderRepository
  ) { }

  async execute(id_shop: string): Promise<IProductShopOrder[]> {

    if (!id_shop) {
      throw new Error('Id is required.')
    }

    const productShopOrder = await this.productShopOrderRepository.findByShop(id_shop);

    return productShopOrder;
  }
}