import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IOwner } from "./FindAllOwnersDTO";


export class FindAllOwnersUseCase {

  constructor(
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(): Promise<IOwner[]> {

    const owners = await this.ownerRepository.findAll();
    return owners;
  }
}