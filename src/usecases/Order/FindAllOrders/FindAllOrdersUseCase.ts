import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IOrder } from "./FindAllOrdersDTO";


export class FindAllOrdersUseCase {

  constructor(
    private orderRepository: IOrderRepository
  ) { }

  async execute(): Promise<IOrder[]> {

    const orders = await this.orderRepository.findAll();
    return orders;
  }
}