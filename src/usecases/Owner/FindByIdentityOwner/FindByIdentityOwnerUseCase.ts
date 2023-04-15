import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IOwner } from "./FindByIdentityOwnerDTO";


export class FindByIdentityOwnerUseCase {

  constructor(
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(identity: string): Promise<IOwner | Error> {

    if (!identity) {
      throw new Error('Identity is required.')
    }

    const owner = await this.ownerRepository.findByIdentity(identity);

    if (!owner) {
      throw new Error('Owner does not exists.');
    }

    return owner;
  }
}