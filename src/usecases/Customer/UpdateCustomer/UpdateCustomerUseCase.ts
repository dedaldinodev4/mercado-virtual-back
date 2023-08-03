import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { IUpdateCustomer, IUpdateCustomerRequest } from "./UpdateCustomerDTO";


export class UpdateCustomerUseCase {

    constructor(
        private customerRepository: ICustomerRepository
    ){}

    async execute(id: string, data: IUpdateCustomerRequest): Promise<IUpdateCustomer | Error> {
        const customerExists = await this.customerRepository.findById(id);

        if (!customerExists) {
          throw new Error('Cliente não existe no sistema.')
        }
        const result = await this.customerRepository.update(id, data);

        return result;
    }
}