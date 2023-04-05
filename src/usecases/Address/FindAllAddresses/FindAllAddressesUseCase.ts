import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { IAddress } from "./FindAllAddressesDTO";


export class FindAllAddressesUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){}

    async execute(): Promise<IAddress[]> {

      const addressses = await this.addressRepository.findAll();
      return addressses;
    }
}