import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { IAddress } from "./FindByIdUserAddressDTO";


export class FindByIdUserAddressUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){}

    async execute(id_user: string): Promise<IAddress | Error> {

      if (!id_user) {
        throw new Error('Id is required.')  
      }
      
      const address = await this.addressRepository.findByIdUser(id_user);

      if (!address) {
        throw new Error('Address does not exists.');
      }

      return address;
    }
}