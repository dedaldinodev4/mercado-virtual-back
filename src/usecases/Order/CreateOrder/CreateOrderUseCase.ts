import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { ICreateOrder, ICreateOrderRequest } from "./CreateOrderDTO";


export class CreateOrderUseCase {

  constructor(
    private orderRepository: IOrderRepository,
    private customerRepository: ICustomerRepository
  ) { }

  async execute(data: ICreateOrderRequest): Promise<ICreateOrder | Error> {
    const orderExists = await this.orderRepository.findByToken(data.token);
    const customerExists = await this.customerRepository.findById(data.id_customer);

    if (!data) {
      throw new Error('Data is required.')
    }

    if (orderExists) {
      throw new Error('Order already exists.')
    }

    if (!customerExists) {
      throw new Error('Customer does not exists.')
    }

    const result = await this.orderRepository.create(data);

    return result;
  }
}