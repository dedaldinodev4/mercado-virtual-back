import { prismaClient } from "../../../utils/prismaClient";
import { IDevely, IDevelyRequest, IDevelyUpdateRequest } from "../../../dtos/Devely";
import { IDevelyRepository } from "../../IDevelyRepository";


export class PrismaDevelyRepository implements IDevelyRepository {
  private repository = prismaClient.delivy;

  async findByLocation(location: string): Promise<IDevely | null> {
    const devely = await this.repository.findFirst(
      {
        where: { location }
      });
    return devely ?? null;
  }

  async findById(id: string): Promise<IDevely | null> {
    const devely = await this.repository.findFirst(
      {
        where: { id }
      });
      return devely ?? null;
  }


  async findAll(): Promise<IDevely[]> {
    const develies = await this.repository.findMany({});
    return develies ?? [];
  }

  async findByStatus(status: string): Promise<IDevely[]> {
    const develies = await this.repository.findMany({
      where: { status }
    });
    return develies ?? [];
  }

  async findByOrder(id_order: string): Promise<IDevely | null> {
    const devely = await this.repository.findFirst({
      where: { id_order }
    });
    return devely ?? null;
  }

  async create(data: IDevelyRequest): Promise<IDevely> {
    const newDevely = await this.repository.create({
      data
    })
    return newDevely;
  }

  async update(id: string, devely: IDevelyUpdateRequest): Promise<IDevely> {
    const develyUpdate = await this.repository.update({
      data: devely,
      where: { id }
    })
    return develyUpdate;
  }

  async delete(id: string): Promise<void> {
    const develyDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}