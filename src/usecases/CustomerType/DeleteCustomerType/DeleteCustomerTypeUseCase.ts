import { ICustomerTypeRepository } from "../../../repositories/ICustomerTypeRepository";


export class DeleteCustomerTypeUseCase {

  constructor(
    private customerTypeRepository: ICustomerTypeRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const customerTypeExists = await this.customerTypeRepository.findById(id);

    if (!customerTypeExists) {
      throw new Error('CustomerType does not exists.');
    }
    const result = await this.customerTypeRepository.delete(id);

    return result;
  }
}