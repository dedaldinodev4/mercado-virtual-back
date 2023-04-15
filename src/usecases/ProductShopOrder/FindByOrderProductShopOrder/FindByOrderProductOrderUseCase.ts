import { IProductShopOrderRepository } from "../../../repositories/IProductShopOrderRepository";
import { IProductShopOrder } from "./FindByOrderProductOrderDTO";


export class FindByOrderProductOrderUseCase {

  constructor(
    private productShopOrderRepository: IProductShopOrderRepository
  ) { }

  async execute(id_order: string): Promise<IProductShopOrder[]> {

    if (!id_order) {
      throw new Error('Id is required.')
    }

    const productShopOrder = await this.productShopOrderRepository.findByOrder(id_order);

    return productShopOrder;
  }
}