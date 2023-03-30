import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { ISignInRequest } from "./SignInDTO";
import { ICurrentUser } from "../../../dtos/Auth";


export class SignInUseCase {

    constructor(
        private authRepository: IAuthRepository
    ){}

    async execute(data: ISignInRequest): Promise<ICurrentUser | Error> {
      
        if (!data) {
          throw new Error('Email or password is required.')  
        }
        
        const user = await this.authRepository.signIn(data);
        return user;
    }
}