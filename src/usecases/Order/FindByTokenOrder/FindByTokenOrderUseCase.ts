import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IOrder } from "./FindByTokenOrderDTO";


export class FindByTokenOrderUseCase {

  constructor(
    private orderRepository: IOrderRepository
  ) { }

  async execute(token: string): Promise<IOrder | Error> {

    if (!token) {
      throw new Error('Token is required.')
    }

    const order = await this.orderRepository.findByToken(token);

    if (!order) {
      throw new Error('Order does not exists.');
    }

    return order;
  }
}