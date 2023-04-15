import { IPaymentTypeRepository } from "../../../repositories/IPaymentTypeRepository";
import { IPaymentType } from "./FindByIdPaymentTypeDTO";


export class FindByIdPaymentTypeUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(id: string): Promise<IPaymentType | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const paymentType = await this.paymentTypeRepository.findById(id);

    if (!paymentType) {
      throw new Error('PaymentType does not exists.');
    }

    return paymentType;
  }
}