import { prismaClient } from "../../../utils/prismaClient";
import { IOwner, IOwnerRequest, IOwnerUpdateRequest } from "../../../dtos/Owner";
import { IOwnerRepository } from "../../IOwnerRepository";


export class PrismaOwnerRepository implements IOwnerRepository {
  private repository = prismaClient;


  async findById(id: string): Promise<IOwner | null> {
    const owner = await this.repository.owner.findFirst(
      {
        where: { id }
      });
      return owner
  }


  async findByIdentity(identity: string): Promise<IOwner | null> {
    const owner = await this.repository.owner.findFirst(
      {
        where: { identity }
      });
    return owner;
  }

  async findAll(): Promise<IOwner[]> {
    const owners = await this.repository.owner.findMany({});
    return owners;
  }


  async findByIdUser(id_user: string): Promise<IOwner | null> {
    const owner = await this.repository.owner.findFirst({
      where: {
        id_user
      }
    });
    return owner;
  }

  async create(data: IOwnerRequest): Promise<IOwner> {
    const newOwner = await this.repository.owner.create({
      data
    })
    return newOwner;
  }

  async update(id: string, owner: IOwnerUpdateRequest): Promise<IOwner> {
    const ownerUpdate = await this.repository.owner.update({
      data: owner,
      where: { id }
    })
    return ownerUpdate;
  }

  async delete(id: string): Promise<void> {
    const ownerDelete = await this.repository.owner.delete({
      where: {
        id
      }
    })
  }

}