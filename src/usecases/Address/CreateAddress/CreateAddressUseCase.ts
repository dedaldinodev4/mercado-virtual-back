import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { ICreateAddress, ICreateAddressRequest } from "./CreateAddressDTO";


export class CreateAddressUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){}

    async execute(data: ICreateAddressRequest): Promise<ICreateAddress | Error> {

        const addressExists = await this.addressRepository.findByPostalCode(data.postal_code);

        if (!data) {
            throw new Error('Data is required.')  
        }

        if (addressExists) {
            throw new Error('Address already exists.')  
        }

        const result = await this.addressRepository.create(data);
        return result;
    }
}