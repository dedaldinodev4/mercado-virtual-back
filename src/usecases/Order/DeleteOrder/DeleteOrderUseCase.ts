import { IOrderRepository } from "../../../repositories/IOrderRepository";


export class DeleteOrderUseCase {

  constructor(
    private orderRepository: IOrderRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const orderExists = await this.orderRepository.findById(id);

    if (!orderExists) {
      throw new Error('Order does not exists.');
    }
    const result = await this.orderRepository.delete(id);

    return result;
  }
}