import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUser } from "./FindByEmailUserDTO";


export class FindByEmailUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ){}

    async execute(email: string): Promise<IUser | Error> {

      if (!email) {
        throw new Error('Email is required.')  
      }
      
      const result = await this.userRepository.findByEmail(email);
      return result;
    }
}