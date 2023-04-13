import { IDevelyRepository } from "../../../repositories/IDevelyRepository";
import { IDevely } from "./FindByIdDevelyDTO";


export class FindByIdDevelyUseCase {

  constructor(
    private develyRepository: IDevelyRepository
  ) { }

  async execute(id: string): Promise<IDevely | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const devely = await this.develyRepository.findById(id);

    if (!devely) {
      throw new Error('Devely does not exists.');
    }

    return devely;
  }
}