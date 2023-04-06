import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { ICustomer } from "./FindAllCustomersDTO";


export class FindAllCustomersUseCase {

  constructor(
    private customerRepository: ICustomerRepository
  ) { }

  async execute(): Promise<ICustomer[]> {

    const customers = await this.customerRepository.findAll();
    return customers;
  }
}