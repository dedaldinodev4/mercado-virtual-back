import { IPaymentTypeRepository } from "../../../repositories/IPaymentTypeRepository";


export class DeletePaymentTypeUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const paymentTypeExists = await this.paymentTypeRepository.findById(id);

    if (!paymentTypeExists) {
      throw new Error('PaymentType does not exists.');
    }
    const result = await this.paymentTypeRepository.delete(id);

    return result;
  }
}