import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { ICreateAddress, ICreateAddressRequest } from "./CreateAddressDTO";


export class CreateAddressUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){}

    async execute(data: ICreateAddressRequest): Promise<ICreateAddress | Error> {


        if (data.postal_code) {
            const addressExists = await this.addressRepository.findByPostalCode(data.postal_code);

            if (addressExists) {
                throw new Error('Endereço já existe, use um outro código postal.')  
            }
        }

        const result = await this.addressRepository.create(data);
        return result;
    }
}