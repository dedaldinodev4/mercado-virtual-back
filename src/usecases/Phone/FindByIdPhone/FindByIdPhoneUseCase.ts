import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { IPhone } from "./FindByIdPhoneDTO";


export class FindByIdPhoneUseCase {

    constructor(
        private phoneRepository: IPhoneRepository
    ){}

    async execute(id: string): Promise<IPhone | Error> {

      if (!id) {
        throw new Error('Id is required.')  
      }
      
      const phone = await this.phoneRepository.findById(id);

      if (!phone) {
        throw new Error('Número de telefone não existe no sistema.');
      }

      return phone;
    }
}