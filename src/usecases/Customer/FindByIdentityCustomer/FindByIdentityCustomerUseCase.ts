import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { ICustomer } from "./FindByIdentityCustomerDTO";


export class FindByIdentityCustomerUseCase {

  constructor(
    private customerRepository: ICustomerRepository
  ) { }

  async execute(identity: string): Promise<ICustomer | Error> {

    if (!identity) {
      throw new Error('Identity is required.')
    }

    const customer = await this.customerRepository.findByIdentity(identity);

    if (!customer) {
      throw new Error('Customer does not exists.');
    }

    return customer;
  }
}