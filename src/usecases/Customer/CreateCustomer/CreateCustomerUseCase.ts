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
        
        const userExists = await this.userRepository.findById(data.id_user);
        const customerTypeExists = await this.customerTypeRepository.findById(data.id_customerType);
        
        if (!data) {
          throw new Error('Data is required.')  
        }

        if (!userExists) {
          throw new Error('Usuário não existe no sistema.')  
        }

        if (!customerTypeExists) {
          throw new Error('Tipo de cliente invalido.')  
        }

        if (data.identity) {
          const customerExists = await this.customerRepository.findByIdentity(data.identity);
          if (customerExists) {
            throw new Error('Cliente já existe no sistema.')
          }
        }

        const result = await this.customerRepository.create(data);

        return result;
    }
}