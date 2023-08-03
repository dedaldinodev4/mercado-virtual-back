import jwt from 'jsonwebtoken'
import { prismaClient } from "../../../utils/prismaClient";
import { ICurrentUser, ISignInRequest, ISignUpRequest, IUser } from "../../../dtos/Auth";
import { IAuthRepository } from "../../IAuthRepository";
import { hashPassword, checkUnEncryptedPasswordIsValid } from '../../../utils/auth';


export class PrismaAuthRepository implements IAuthRepository {
    private repository = prismaClient;


    async signIn(credentials: ISignInRequest): Promise<ICurrentUser| Error> {
      const { email, password } = credentials
      
      const user = await this.repository.user.findFirst(
        { where: { email }
      });

      if (user) {
        if (checkUnEncryptedPasswordIsValid(password, user.password)) {
          
          const userCurrent: IUser = {
            email: user.email,
            id: user.id,
            role: user.role,
            status: user.status,
            username: user.username
          }

          const token = jwt.sign(
            { user:  userCurrent }, 
            process.env.JWT_KEY ?? 'secret',
            { expiresIn: "30d"}
          );

          return {
            user: userCurrent,
            token
          }
        }
      }
      return new Error('Email ou Senha inválido.');
    }

        
    async signUp(user: ISignUpRequest): Promise<ICurrentUser | Error> {
      const { email, role, username, password } = user;
    
      const userExists = await this.repository.user.findFirst(
        { where: { email }
      });


      if (userExists) {
        return new Error('Já existe um usuário com este Email.');
      }
      const newUser = await this.repository.user.create({
        data: {
          email,
          password: hashPassword(password),
          role,
          username,
          status: true,
          avatar: ''
        }
      })

      const userCurrent: IUser = {
        email: newUser.email,
        id: newUser.id,
        role: newUser.role,
        status: newUser.status,
        username: user.username
      }

      const token = jwt.sign(
        { user:  userCurrent }, 
        process.env.JWT_KEY ?? 'secret',
        { expiresIn: "30d"}
      );

      return {
        user: userCurrent,
        token
      };
    }
    

}