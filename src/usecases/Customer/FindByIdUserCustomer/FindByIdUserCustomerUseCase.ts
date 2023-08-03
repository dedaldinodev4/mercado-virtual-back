import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { ICustomer } from "./FindByIdUserCustomerDTO";


export class FindByIdUserCustomerUseCase {

    constructor(
        private customerRepository: ICustomerRepository
    ){}

    async execute(id_user: string): Promise<ICustomer | Error> {

      if (!id_user) {
        throw new Error('Necessita passar o Id.')  
      }
      
      const customer = await this.customerRepository.findByIdUser(id_user);

      if (!customer) {
        throw new Error('Cliente não existe no sistema.');
      }

      return customer;
    }
}