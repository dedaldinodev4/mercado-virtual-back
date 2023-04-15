import { IPaymentRepository } from "../../../repositories/IPaymentRepository";
import { IOrderRepository } from "../../../repositories/IOrderRepository";
import { ICreatePayment, ICreatePaymentRequest } from "./CreatePaymentDTO";


export class CreatePaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository,
    private orderRepository: IOrderRepository
  ) { }

  async execute(data: ICreatePaymentRequest): Promise<ICreatePayment | Error> {

    const paymentExists = await this.paymentRepository.findByCode(data.code);

    if (!data) {
      throw new Error('Data is required.')
    }

    if (paymentExists) {
      throw new Error('Payment Code already exists.')
    }

    const orderExists = await this.orderRepository.findById(data.id_order)

    if (!orderExists) {
      throw new Error('Order does not exists.')
    }

    const result = await this.paymentRepository.create(data);
    return result;
  }
}