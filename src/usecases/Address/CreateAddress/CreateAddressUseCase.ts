import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { ICreateAddress, ICreateAddressRequest } from "./CreateAddressDTO";


export class CreateAddressUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){}

    async execute(data: ICreateAddressRequest): Promise<ICreateAddress | Error> {

        if (!data) {
            throw new Error('Data is required.')  
        }

        const result = await this.addressRepository.create(data);

        return result;
    }
}