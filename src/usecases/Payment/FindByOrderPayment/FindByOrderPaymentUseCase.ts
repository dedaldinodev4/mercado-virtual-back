import { IPaymentRepository } from "../../../repositories/IPaymentRepository";
import { IPayment } from "./FindByOrderPaymentDTO";


export class FindByOrderPaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(id_order: string): Promise<IPayment | Error> {

    if (!id_order) {
      throw new Error('Id is required.')
    }

    const payment = await this.paymentRepository.findByOrder(id_order);

    if (!payment) {
      throw new Error('Payment does not exists.');
    }

    return payment;
  }
}