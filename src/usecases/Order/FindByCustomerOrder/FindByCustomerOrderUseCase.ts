import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { IOrder } from "./FindByCustomerOrderDTO";


export class FindByCustomerOrderUseCase {

  constructor(
    private orderRepository: IOrderRepository
  ) { }

  async execute(id_customer: string): Promise<IOrder[]> {

    if (!id_customer) {
      throw new Error('ID is required.')
    }
    const order = await this.orderRepository.findByCustomer(id_customer);

    return order;
  }
}