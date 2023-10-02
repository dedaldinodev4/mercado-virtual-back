import { prismaClient } from "../../../utils/prismaClient";
import { IOwner, IOwnerRequest, IOwnerUpdateRequest } from "../../../dtos/Owner";
import { IOwnerRepository } from "../../IOwnerRepository";


export class PrismaOwnerRepository implements IOwnerRepository {
  private repository = prismaClient.owner;


  async findById(id: string): Promise<IOwner | null> {
    const owner = await this.repository.findFirst(
      {
        where: { id },
        include: { user: true }
      });
      return owner ?? null;
  }


  async findByIdentity(identity: string): Promise<IOwner | null> {
    const owner = await this.repository.findFirst(
      {
        where: { identity },
        include: { user: true }
      });
    return owner ?? null;
  }

  async findAll(): Promise<IOwner[]> {
    const owners = await this.repository.findMany({
      include: { user: true }
    });
    return owners ?? [];
  }


  async findByIdUser(id_user: string): Promise<IOwner | null> {
    const owner = await this.repository.findFirst({
      where: {
        id_user
      },
      include: { user: true }
    });
    return owner ?? null;
  }

  async create(owner: IOwnerRequest): Promise<IOwner> {
    const newOwner = await this.repository.create({
      data: owner
    })
    return newOwner;
  }

  async update(id: string, owner: IOwnerUpdateRequest): Promise<IOwner> {
    const ownerUpdate = await this.repository.update({
      data: owner,
      where: { id }
    })
    return ownerUpdate;
  }

  async delete(id: string): Promise<void> {
    const ownerDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}