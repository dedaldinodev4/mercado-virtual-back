import { IPhoneRepository } from "../../../repositories/IPhoneRepository";


export class DeletePhoneUseCase {

    constructor(
        private phoneRepository: IPhoneRepository
    ){}

    async execute(id: string): Promise<void | Error> {
      
      const phoneExists = await this.phoneRepository.findById(id);

      if (!phoneExists) {
        throw new Error('Phone does not exists.');
      }
      const result = await this.phoneRepository.delete(id);

      return result;
    }
}