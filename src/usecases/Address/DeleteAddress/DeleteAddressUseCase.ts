import { IAddressRepository } from "../../../repositories/IAddressRepository";


export class DeleteAddressUseCase {

    constructor(
        private addressRepository: IAddressRepository
    ){}

    async execute(id: string): Promise<void | Error> {
      
      const addressExists = await this.addressRepository.findById(id);

      if (!addressExists) {
        throw new Error('Address does not exists.');
      }
      const result = await this.addressRepository.delete(id);

      return result;
    }
}