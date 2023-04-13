import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IOrder } from "./FindByIdOrderDTO";


export class FindByIdOrderUseCase {

  constructor(
    private orderRepository: IOrderRepository
  ) { }

  async execute(id: string): Promise<IOrder | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const order = await this.orderRepository.findById(id);

    if (!order) {
      throw new Error('Order does not exists.');
    }

    return order;
  }
}