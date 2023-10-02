import { prismaClient } from "../../../utils/prismaClient";
import { IShop, IShopRequest, IShopUpdateRequest } from "../../../dtos/Shop";
import { IShopRepository } from "../../IShopRepository";


export class PrismaShopRepository implements IShopRepository {
  private repository = prismaClient.shop;

  async findByName(name: string): Promise<IShop | null> {
    const shop = await this.repository.findFirst(
      {
        where: { name },
        include: { owner: true, address: true }
      });
    return shop ?? null;
  }

  async findById(id: string): Promise<IShop | null> {
    const shop = await this.repository.findFirst(
      {
        where: { id },
        include: { owner: true, address: true }
      });
      return shop ?? null;
  }


  async findAll(): Promise<IShop[]> {
    const shopies = await this.repository.findMany({
      include: { owner: true, address: true }
    });
    return shopies ?? [];
  }

  async findByAddress(id_address: string): Promise<IShop[]> {
    const shopies = await this.repository.findMany({
      where: { id_address },
      include: { owner: true, address: true }
    });
    return shopies ?? [];
  }

  async findByOwner(id_owner: string): Promise<IShop[]> {
    const shopies = await this.repository.findMany({
      where: { id_owner },
      include: { owner: true, address: true }
    });
    return shopies ?? [];
  }

  async create(data: IShopRequest): Promise<IShop> {
    const newShop = await this.repository.create({
      data
    })
    return newShop;
  }

  async update(id: string, shop: IShopUpdateRequest): Promise<IShop> {
    const shopUpdate = await this.repository.update({
      data: shop,
      where: { id }
    })
    return shopUpdate;
  }

  async delete(id: string): Promise<void> {
    const shopDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}