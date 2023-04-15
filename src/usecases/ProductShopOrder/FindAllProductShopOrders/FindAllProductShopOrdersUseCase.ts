import { IProductShopOrderRepository } from "../../../repositories/IProductShopOrderRepository";
import { IProductShopOrder } from "./FindAllProductShopOrdersDTO";


export class FindAllProductShopOrdersUseCase {

  constructor(
    private productShopOrderRepository: IProductShopOrderRepository
  ) { }

  async execute(): Promise<IProductShopOrder[]> {

    const productShopOrders = await this.productShopOrderRepository.findAll();
    return productShopOrders;
  }
}