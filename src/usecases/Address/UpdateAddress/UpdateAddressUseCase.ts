import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { IUpdateAddress, IUpdateAddressRequest } from "./UpdateAddressDTO";


export class UpdateAddressUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){}

    async execute(id: string, data: IUpdateAddressRequest): Promise<IUpdateAddress | Error> {
        const addressExists = await this.addressRepository.findById(id);

        if (!addressExists) {
          throw new Error('address does not exists.')
        }
        const result = await this.addressRepository.update(id, data);

        return result;
    }
}