import { ICustomerTypeRepository } from "../../../repositories/ICustomerTypeRepository";
import { ICustomerType } from "./FindByIdCustomerTypeDTO";


export class FindByIdCustomerTypeUseCase {

  constructor(
    private customerTypeRepository: ICustomerTypeRepository
  ) { }

  async execute(id: string): Promise<ICustomerType | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const customerType = await this.customerTypeRepository.findById(id);

    if (!customerType) {
      throw new Error('CustomerType does not exists.');
    }

    return customerType;
  }
}