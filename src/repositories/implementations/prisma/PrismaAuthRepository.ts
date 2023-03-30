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
            status: user.status
          }

          const token = jwt.sign(
            { user:  userCurrent }, 
            process.env.JWT_KEY ?? 'secret',
            { expiresIn: "2h"}
          );

          return {
            user: userCurrent,
            token
          }
        }
      }
      return new Error('Email or password invalid');
    }

        
    async signUp(user: ISignUpRequest): Promise<ICurrentUser> {
      const { email, role, status, username, password, avatar } = user;
      
      const newUser = await this.repository.user.create({
        data: {
          email,
          password: hashPassword(password),
          role,
          username,
          status,
          avatar
        }
      })

      const userCurrent: IUser = {
        email: newUser.email,
        id: newUser.id,
        role: newUser.role,
        status: newUser.status
      }

      const token = jwt.sign(
        { user:  userCurrent }, 
        process.env.JWT_KEY ?? 'secret',
        { expiresIn: "2h"}
      );

      return {
        user: userCurrent,
        token
      };
    }
    

}