import { IPhoneRepository } from "../../../repositories/IPhoneRepository";
import { IPhone } from "./FindAllPhonesDTO";


export class FindAllPhonesUseCase {

    constructor(
        private phoneRepository: IPhoneRepository
    ){}

    async execute(): Promise<IPhone[]> {

      const phones = await this.phoneRepository.findAll();
      return phones;
    }
}