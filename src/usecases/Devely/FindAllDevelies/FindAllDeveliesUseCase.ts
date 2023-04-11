import { IDevelyRepository } from "../../../repositories/IDevelyRepository";
import { IDevely } from "./FindAllDeveliesDTO";


export class FindAllDeveliesUseCase {

  constructor(
    private develyRepository: IDevelyRepository
  ) { }

  async execute(): Promise<IDevely[]> {

    const develies = await this.develyRepository.findAll();
    return develies;
  }
}