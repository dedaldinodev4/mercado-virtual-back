import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateOwner, ICreateOwnerRequest } from "./CreateOwnerDTO";


export class CreateOwnerUseCase {

  constructor(
    private ownerRepository: IOwnerRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateOwnerRequest): Promise<ICreateOwner | Error> {
    const ownerExists = await this.ownerRepository.findByIdentity(data.identity);
  

    if (!data) {
      throw new Error('Data is required.')
    }

    if (ownerExists) {
      throw new Error('Owner already exists.')
    }

    const result = await this.ownerRepository.create(data);

    return result;
  }
}