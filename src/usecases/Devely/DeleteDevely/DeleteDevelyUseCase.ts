import { IDevelyRepository } from "../../../repositories/IDevelyRepository";


export class DeleteDevelyUseCase {

  constructor(
    private develyRepository: IDevelyRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const develyExists = await this.develyRepository.findById(id);

    if (!develyExists) {
      throw new Error('Devely does not exists.');
    }
    const result = await this.develyRepository.delete(id);

    return result;
  }
}