import { IPaymentRepository } from "../../../repositories/IPaymentRepository";
import { IPayment } from "./FindAllPaymentsDTO";


export class FindAllPaymentsUseCase {

  constructor(
    private paymentRepository: IPaymentRepository
  ) { }

  async execute(): Promise<IPayment[]> {

    const payments = await this.paymentRepository.findAll();
    return payments;
  }
}