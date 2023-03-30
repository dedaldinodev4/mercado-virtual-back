import { prismaClient } from "../../../utils/prismaClient";
import { IDevely, IDevelyRequest, IDevelyUpdateRequest } from "../../../dtos/Devely";
import { IDevelyRepository } from "../../IDevelyRepository";


export class PrismaDevelyRepository implements IDevelyRepository {
  private repository = prismaClient;

  async findByLocation(location: string): Promise<IDevely | null> {
    const devely = await this.repository.delivy.findFirst(
      {
        where: { location }
      });
    return devely;
  }

  async findById(id: string): Promise<IDevely | null> {
    const devely = await this.repository.delivy.findFirst(
      {
        where: { id }
      });
      return devely
  }


  async findAll(): Promise<IDevely[]> {
    const develies = await this.repository.delivy.findMany({});
    return develies;
  }

  async findByStatus(status: string): Promise<IDevely[]> {
    const develies = await this.repository.delivy.findMany({
      where: { status }
    });
    return develies;
  }

  async findByOrder(id_order: string): Promise<IDevely | null> {
    const devely = await this.repository.delivy.findFirst({
      where: { id_order }
    });
    return devely;
  }

  async create(data: IDevelyRequest): Promise<IDevely> {
    const newDevely = await this.repository.delivy.create({
      data
    })
    return newDevely;
  }

  async update(id: string, devely: IDevelyUpdateRequest): Promise<IDevely> {
    const develyUpdate = await this.repository.delivy.update({
      data: devely,
      where: { id }
    })
    return develyUpdate;
  }

  async delete(id: string): Promise<void> {
    const develyDelete = await this.repository.delivy.delete({
      where: {
        id
      }
    })
  }

}