import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IOwner } from "./FindByIdentityOwnerDTO";


export class FindByIdentityOwnerUseCase {

  constructor(
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(identity: string): Promise<IOwner | Error> {

    if (!identity) {
      throw new Error('Precisa passar a identidade')
    }

    const owner = await this.ownerRepository.findByIdentity(identity);

    if (!owner) {
      throw new Error('Proprietário não existe no sistema.');
    }

    return owner;
  }
}