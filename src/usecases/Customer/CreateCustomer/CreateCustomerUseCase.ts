import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICustomerTypeRepository } from "../../../repositories/ICustomerTypeRepository";
import { ICreateCustomer, ICreateCustomerRequest } from "./CreateCustomerDTO";


export class CreateCustomerUseCase {

    constructor(
        private customerRepository: ICustomerRepository,
        private userRepository: IUserRepository,
        private customerTypeRepository: ICustomerTypeRepository
    ){}

    async execute(data: ICreateCustomerRequest): Promise<ICreateCustomer | Error> {
        const customerExists = await this.customerRepository.findByIdentity(data.identity);
        const userExists = await this.userRepository.findById(data.id_user);
        const customerTypeExists = await this.customerTypeRepository.findById(data.id_customerType);
        
        if (!data) {
          throw new Error('Data is required.')  
        }

        if (!userExists) {
          throw new Error('User does not exists.')  
        }

        if (!customerTypeExists) {
          throw new Error('Customer type does not exists.')  
        }

        if (customerExists) {
          throw new Error('Customer already exists.')
        }

        const result = await this.customerRepository.create(data);

        return result;
    }
}