import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { ICustomer } from "./FindByIdCustomerDTO";


export class FindByIdCustomerUseCase {

  constructor(
    private customerRepository: ICustomerRepository
  ) { }

  async execute(id: string): Promise<ICustomer | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const customer = await this.customerRepository.findById(id);

    if (!customer) {
      throw new Error('Customer does not exists.');
    }

    return customer;
  }
}