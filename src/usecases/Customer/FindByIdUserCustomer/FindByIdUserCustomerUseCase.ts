import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { ICustomer } from "./FindByIdUserCustomerDTO";


export class FindByIdUserCustomerUseCase {

    constructor(
        private customerRepository: ICustomerRepository
    ){}

    async execute(id_user: string): Promise<ICustomer | Error> {

      if (!id_user) {
        throw new Error('Id is required.')  
      }
      
      const customer = await this.customerRepository.findByIdUser(id_user);

      if (!customer) {
        throw new Error('customer does not exists.');
      }

      return customer;
    }
}