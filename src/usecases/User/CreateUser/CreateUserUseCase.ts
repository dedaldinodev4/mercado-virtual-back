import { IUserRepository } from "../../../repositories/IUserRepository";
import { ICreateUser, ICreateUserRequest } from "./CreateUserDTO";


export class CreateUserUseCase {

    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute(data: ICreateUserRequest): Promise<ICreateUser | Error> {
        
        const result = await this.userRepository.create(data);
        return result;
    }
}