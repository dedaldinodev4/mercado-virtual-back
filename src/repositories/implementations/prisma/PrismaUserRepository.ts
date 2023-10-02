import { prismaClient } from "../../../utils/prismaClient";
import { ICreateUserRequest, IUser, IUserCredentialsRequest, IUserCredentialsResponse, IUserRequest } from "../../../dtos/User";
import { IUserRepository } from "../../IUserRepository";
import { hashPassword } from '../../../utils/auth';
import { serializeUser } from '../../../utils/user';

export class PrismaUserRepository implements IUserRepository {
  private repository = prismaClient.user;

  async findById(id: string): Promise<IUser | null> {
    const user = await this.repository.findFirst(
      {
        where: { id }
    });

    if (user) {
      const response = serializeUser(user)
      return response;
    }

    return null;
  }

  async findByEmail(email: string): Promise<IUser | null> {
    const user = await this.repository.findFirst(
      {
        where: { email }
      });
      if (user) {
        const response = serializeUser(user)
        return response;
      }

      return null;
  }

  async findAll(): Promise<IUser[]> {
    const users = await this.repository.findMany({});
    const response = users.map((user) => {
      return serializeUser(user)
    })
    return  response ?? [];
  }

  async create(user: ICreateUserRequest): Promise<IUser> {
    const { email, username, password, role, status, avatar} = user
    const createUser = await this.repository.create({
      data: {
        email,
        username,
        status,
        avatar,
        role,
        password: hashPassword(password)
      }
    })
    return createUser;
  }
  async update(id: string, user: IUserRequest): Promise<IUser> {
    const userUpdate = await this.repository.update({
      data: user,
      where: {
        id
      }
    })

    return serializeUser(userUpdate);
  }

  async updateCredentials(id: string, credentials: IUserCredentialsRequest): Promise<IUserCredentialsResponse> {
    const { password, email } = credentials;
    const userUpdate = await this.repository.update({
      data: {
        email,
        password: hashPassword(password)
      },
      where: {
        id
      }
    })

    return {
      message: '',
      user: { email: userUpdate.email}
    }
  }

  async delete(id: string): Promise<void> {
    const userDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}