import { IProductShopRepository } from "../../../repositories/IProductShopRepository";
import { IProductShopOrderRepository } from "../../../repositories/IProductShopOrderRepository";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { ICreateProductShopOrder, ICreateProductShopOrderRequest } from "./CreateProductShopOrderDTO";


export class CreateProductShopOrderUseCase {

  constructor(
    private productShopOrderRepository: IProductShopOrderRepository,
    private productShopRepository: IProductShopRepository,
    private orderRepository: IOrderRepository
  ) { }

  async execute(data: ICreateProductShopOrderRequest): Promise<ICreateProductShopOrder | Error> {
    const productShopExists = await this.productShopRepository.findById(data.id_productShop)
    const orderExists = await this.orderRepository.findById(data.id_order)

    if (!data) {
      throw new Error('Data is required.')
    }

    if (!productShopExists) {
      throw new Error('ProductShop does not exists.')
    }

    if (!orderExists) {
      throw new Error('Order does not exists.')
    }

    const result = await this.productShopOrderRepository.create(data);
    return result;
  }
}