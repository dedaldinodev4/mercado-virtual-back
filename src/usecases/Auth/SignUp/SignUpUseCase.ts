import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { ISignUpRequest } from "./SignUpDTO";
import { ICurrentUser } from "../../../dtos/Auth";


export class SignUpUseCase {

    constructor(
        private authRepository: IAuthRepository
    ){}

    async execute(data: ISignUpRequest): Promise<ICurrentUser | Error> {
      
        if (!data) {
          throw new Error('Email é um campo obrigatório.')  
        }

        
        const user = await this.authRepository.signUp(data);

        if (user instanceof Error) {
            throw new Error('Já existe um usuário com este Email.') 
        }

        return user;
    }
}