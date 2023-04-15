import { IPaymentTypeRepository } from "../../../repositories/IPaymentTypeRepository";
import { IPaymentType } from "./FindAllPaymentTypesDTO";


export class FindAllPaymentTypesUseCase {

  constructor(
    private paymentTypeRepository: IPaymentTypeRepository
  ) { }

  async execute(): Promise<IPaymentType[]> {

    const paymentTypes = await this.paymentTypeRepository.findAll();
    return paymentTypes;
  }
}