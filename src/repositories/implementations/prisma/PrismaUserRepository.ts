import { prismaClient } from "../../../utils/prismaClient";
import { IUser, IUserRequest } from "../../../dtos/User";
import { IUserRepository } from "../../IUserRepository";


export class PrismaUserRepository implements IUserRepository {
    private repository = prismaClient;


    async findById(id: string): Promise<IUser | null> {
        const user = await this.repository.user.findFirst(
          { where: { id }
        });
        return user;
    }

    async findByEmail(email: string): Promise<IUser | Error> {
        const user = await this.repository.user.findFirst(
          { where: { email }
        });
        return user !!;
    }

    async findAll(): Promise<IUser[]> {
      const users = await this.repository.user.findMany({});
      return users;
    }
     
    async update(id: string, user: IUserRequest): Promise<IUser> {
        const userUpdate = await this.repository.user.update({
          data: user,
          where: {
            id
          }
        })

        return userUpdate;
    }

    async delete(id: string): Promise<void> {
        const userDelete = await this.repository.user.delete({
          where: {
            id
          }
        })
    }

}