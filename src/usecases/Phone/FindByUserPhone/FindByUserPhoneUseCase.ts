import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { IPhone } from "./FindByUserPhoneDTO";


export class FindByUserPhoneUseCase {

    constructor(
        private phoneRepository: IPhoneRepository
    ){}

    async execute(id_user: string): Promise<IPhone[]> {

      if (!id_user) {
        throw new Error('Id is required.')  
      }
      
      const phones = await this.phoneRepository.findByUser(id_user);
      return phones;
    }
}