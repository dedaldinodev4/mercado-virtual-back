import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { IAddress } from "./FindByIdAddressDTO";


export class FindByIdAddressUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){}

    async execute(id: string): Promise<IAddress | Error> {

      if (!id) {
        throw new Error('Id is required.')  
      }
      
      const address = await this.addressRepository.findById(id);

      if (!address) {
        throw new Error('Address does not exists.');
      }

      return address;
    }
}