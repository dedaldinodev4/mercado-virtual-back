import { ICustomerRepository } from "../../../repositories/ICustomerRepository";


export class DeleteCustomerUseCase {

    constructor(
        private customerRepository: ICustomerRepository
    ){}

    async execute(id: string): Promise<void | Error> {
      
      const customerExists = await this.customerRepository.findById(id);

      if (!customerExists) {
        throw new Error('Customer does not exists.');
      }
      const result = await this.customerRepository.delete(id);

      return result;
    }
}