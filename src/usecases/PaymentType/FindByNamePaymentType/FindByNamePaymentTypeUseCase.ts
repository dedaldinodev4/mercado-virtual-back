import { IPaymentTypeRepository } from "../../../repositories/IPaymentTypeRepository";
import { IPaymentType } from "./FindByNamePaymentTypeDTO";


export class FindByNamePaymentTypeUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(name: string): Promise<IPaymentType | Error> {

    if (!name) {
      throw new Error('Name is required.')
    }

    const paymentType = await this.paymentTypeRepository.findByName(name);

    if (!paymentType) {
      throw new Error('PaymentType does not exists.');
    }

    return paymentType;
  }
}