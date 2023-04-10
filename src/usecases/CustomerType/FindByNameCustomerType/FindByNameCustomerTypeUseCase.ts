import { ICustomerTypeRepository } from "../../../repositories/ICustomerTypeRepository";
import { ICustomerType } from "./FindByNameCustomerTypeDTO";


export class FindByNameCustomerTypeUseCase {

  constructor(
    private customerTypeRepository: ICustomerTypeRepository
  ) { }

  async execute(name: string): Promise<ICustomerType | Error> {

    if (!name) {
      throw new Error('Name is required.')
    }

    const customerType = await this.customerTypeRepository.findByName(name);

    if (!customerType) {
      throw new Error('CustomerType does not exists.');
    }

    return customerType;
  }
}