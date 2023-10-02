import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { ISignUpRequest } from "./SignUpDTO";
import { ICurrentUser } from "../../../dtos/Auth";

import { ICustomerRepository } from "../../../repositories/ICustomerRepository";
import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { ICustomerTypeRepository } from "../../../repositories/ICustomerTypeRepository";

export class SignUpUseCase {

    constructor(
        private authRepository: IAuthRepository,
        private customerRepository: ICustomerRepository,
        private ownerRepository: IOwnerRepository,
        private addressRepository: IAddressRepository,
        private phoneRepository: IPhoneRepository,
        private customerTypeRepository: ICustomerTypeRepository
    ){}

    async execute(data: ISignUpRequest): Promise<ICurrentUser | Error> {
      
        if (!data) {
          throw new Error('Email é um campo obrigatório.')  
        }
        
        const user = await this.authRepository.signUp(data);

        if (user instanceof Error) {
            throw new Error('Já existe um usuário com este Email.') 
        }

        if (user.user.id && (user.user.role === 'client' || user.user.role === 'owner')) {
            const id_user = user.user.id
            if (user.user.role === 'client') {
                
                const customerType = await this.customerTypeRepository.findAll();
                const customer = await this.customerRepository.create({ 
                    id_user, id_customerType: customerType[0].id, gender: null
                })
            } else {
                const owner = await this.ownerRepository.create({ 
                    id_user, gender: null
                })
            }
            const address = await this.addressRepository.create({ contry: "Angola", id_user});
            const phone = await this.phoneRepository.create({ id_user });

        }

        return user;
    }
}