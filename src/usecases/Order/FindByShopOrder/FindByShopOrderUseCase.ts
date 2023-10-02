import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IOrder } from "./FindByShopOrderDTO";


export class FindByShopOrderUseCase {

  constructor(
    private orderRepository: IOrderRepository
  ) { }

  async execute(id_shop: string): Promise<IOrder[]> {

    if (!id_shop) {
      throw new Error('ID is required.')
    }
    const order = await this.orderRepository.findByShop(id_shop);

    return order;
  }
}