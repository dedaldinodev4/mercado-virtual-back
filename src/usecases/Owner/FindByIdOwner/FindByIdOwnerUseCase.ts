import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IOwner } from "./FindByIdOwnerDTO";


export class FindByIdOwnerUseCase {

  constructor(
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(id: string): Promise<IOwner | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const owner = await this.ownerRepository.findById(id);

    if (!owner) {
      throw new Error('Propritário não existe.');
    }

    return owner;
  }
}