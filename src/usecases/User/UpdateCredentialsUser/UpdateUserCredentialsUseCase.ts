import { IUserRepository } from "../../../repositories/IUserRepository";
import { IUpdateUserCredentials, IUpdateUserCredentialsRequest } from "./UpdateUserCredentialsDTO";


export class UpdateUserCredentialsUseCase {

    constructor(
        private userRepository: IUserRepository
    ) { }

    async execute(id: string, data: IUpdateUserCredentialsRequest): Promise<IUpdateUserCredentials | Error> {
        const userExists = await this.userRepository.findById(id);

        if (!userExists) {
            throw new Error('user does not exists.')
        }
        const result = await this.userRepository.updateCredentials(id, data);

        return result; 
    }
}