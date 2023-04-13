import { IDevelyRepository } from "../../../repositories/IDevelyRepository";
import { IDevely } from "./FindByOrderDevelyDTO";


export class FindByOrderDevelyUseCase {

  constructor(
    private develyRepository: IDevelyRepository
  ) { }

  async execute(id_order: string): Promise<IDevely | Error> {

    if (!id_order) {
      throw new Error('Id is required.')
    }

    const devely = await this.develyRepository.findByOrder(id_order);

    if (!devely) {
      throw new Error('Devely does not exists.');
    }

    return devely;
  }
}