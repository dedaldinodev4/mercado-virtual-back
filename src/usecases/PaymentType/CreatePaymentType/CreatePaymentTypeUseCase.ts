import { IPaymentTypeRepository } from "../../../repositories/IPaymentTypeRepository";
import { ICreatePaymentType, ICreatePaymentTypeRequest } from "./CreatePaymentTypeDTO";


export class CreatePaymentTypeUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(data: ICreatePaymentTypeRequest): Promise<ICreatePaymentType | Error> {
    const paymentTypeExists = await this.paymentTypeRepository.findByName(data.name);

    if (!data) {
      throw new Error('Data is required.')
    }

    if (paymentTypeExists) {
      throw new Error('paymentType already exists.')
    }

    const result = await this.paymentTypeRepository.create(data);

    return result;
  }
}