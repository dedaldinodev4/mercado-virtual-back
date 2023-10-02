import { IProductShopRepository } from "../../../repositories/IProductShopRepository";
import { IProductShopOrderRepository } from "../../../repositories/IProductShopOrderRepository";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { ICreateProductShopOrderWithArrayRequest } from "./CreateProductShopOrderWithArrayDTO";


export class CreateProductShopOrderWithArrayUseCase {

  constructor(
    private productShopOrderRepository: IProductShopOrderRepository,
    private productShopRepository: IProductShopRepository,
    private orderRepository: IOrderRepository
  ) { }

  async execute(data: ICreateProductShopOrderWithArrayRequest): Promise<void | Error> {
    const orderExists = await this.orderRepository.findById(data.id_order)

    if (!data) {
      throw new Error('Data is required.')
    }

    if (!orderExists) {
      throw new Error('Pedido não existe no banco de dados')
    }
    const result = await this.productShopOrderRepository.createWithArray(data);
    return result;
  }
}