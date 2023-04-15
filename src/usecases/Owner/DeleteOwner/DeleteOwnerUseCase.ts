import { IOwnerRepository } from "../../../repositories/IOwnerRepository";


export class DeleteOwnerUseCase {

    constructor(
        private ownerRepository: IOwnerRepository
    ){}

    async execute(id: string): Promise<void | Error> {
      
      const ownerExists = await this.ownerRepository.findById(id);

      if (!ownerExists) {
        throw new Error('Owner does not exists.');
      }
      const result = await this.ownerRepository.delete(id);

      return result;
    }
}