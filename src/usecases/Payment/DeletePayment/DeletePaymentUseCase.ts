import { IPaymentRepository } from "../../../repositories/IPaymentRepository";


export class DeletePaymentUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const paymentExists = await this.paymentRepository.findById(id);

    if (!paymentExists) {
      throw new Error('Payment does not exists.');
    }
    const result = await this.paymentRepository.delete(id);

    return result;
  }
}