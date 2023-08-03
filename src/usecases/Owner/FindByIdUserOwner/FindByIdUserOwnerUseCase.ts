import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IOwner } from "./FindByIdUserOwnerDTO";


export class FindByIdUserOwnerUseCase {

  constructor(
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(id_user: string): Promise<IOwner | Error> {

    if (!id_user) {
      throw new Error('Id is required.')
    }

    const owner = await this.ownerRepository.findByIdUser(id_user);

    if (!owner) {
      throw new Error('Proprietário não existe no sistema.');
    }

    return owner;
  }
}