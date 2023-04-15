import { IPaymentRepository } from "../../../repositories/IPaymentRepository";
import { IPayment } from "./FindByIdPaymentDTO";


export class FindByIdPaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(id: string): Promise<IPayment | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const payment = await this.paymentRepository.findById(id);

    if (!payment) {
      throw new Error('Payment does not exists.');
    }

    return payment;
  }
}