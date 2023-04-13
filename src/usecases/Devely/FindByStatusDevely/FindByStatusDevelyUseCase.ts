import { IDevelyRepository } from "../../../repositories/IDevelyRepository";
import { IDevely } from "./FindByStatusDevelyDTO";


export class FindByStatusDevelyUseCase {

    constructor(
        private develyRepository: IDevelyRepository
    ){}

    async execute(status: string): Promise<IDevely[]> {

      if (!status) {
        throw new Error('Status is required.')  
      }
      const devely = await this.develyRepository.findByStatus(status);

      return devely;
    }
}