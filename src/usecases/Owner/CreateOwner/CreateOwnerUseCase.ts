import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateOwner, ICreateOwnerRequest } from "./CreateOwnerDTO";


export class CreateOwnerUseCase {

  constructor(
    private ownerRepository: IOwnerRepository,
    private userRepository: IUserRepository
  ) { }

  async execute(data: ICreateOwnerRequest): Promise<ICreateOwner | Error> {
    
    
    if (!data) {
      throw new Error('Data is required.')
    }
    
    if (data.identity) {
      const ownerExists = await this.ownerRepository.findByIdentity(data.identity);

      if (ownerExists) {
        throw new Error('Proprietário já existe no sistema.')
      }
    }

    const result = await this.ownerRepository.create(data);
    return result;
  }
}