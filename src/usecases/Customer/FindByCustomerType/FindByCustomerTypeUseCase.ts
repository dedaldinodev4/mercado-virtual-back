import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { ICustomer } from "./FindByCustomerTypeDTO";


export class FindByCustomerTypeUseCase {

  constructor(
    private customerRepository: ICustomerRepository
  ) { }

  async execute(id_custmerType: string): Promise<ICustomer[]> {

    const customers = await this.customerRepository.findByType(id_custmerType);
    return customers;
  }
}