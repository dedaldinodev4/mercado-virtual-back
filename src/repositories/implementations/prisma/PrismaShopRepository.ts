import { prismaClient } from "../../../utils/prismaClient";
import { IShop, IShopRequest, IShopUpdateRequest } from "../../../dtos/Shop";
import { IShopRepository } from "../../IShopRepository";


export class PrismaShopRepository implements IShopRepository {
  private repository = prismaClient;

  async findByName(name: string): Promise<IShop | null> {
    const shop = await this.repository.shop.findFirst(
      {
        where: { name }
      });
    return shop;
  }

  async findById(id: string): Promise<IShop | null> {
    const shop = await this.repository.shop.findFirst(
      {
        where: { id }
      });
      return shop
  }


  async findAll(): Promise<IShop[]> {
    const shopies = await this.repository.shop.findMany({});
    return shopies;
  }

  async findByAddress(id_address: string): Promise<IShop[]> {
    const shopies = await this.repository.shop.findMany({
      where: { id_address }
    });
    return shopies;
  }

  async findByOwner(id_owner: string): Promise<IShop[]> {
    const shopies = await this.repository.shop.findMany({
      where: { id_owner }
    });
    return shopies;
  }

  async create(data: IShopRequest): Promise<IShop> {
    const newShop = await this.repository.shop.create({
      data
    })
    return newShop;
  }

  async update(id: string, shop: IShopUpdateRequest): Promise<IShop> {
    const shopUpdate = await this.repository.shop.update({
      data: shop,
      where: { id }
    })
    return shopUpdate;
  }

  async delete(id: string): Promise<void> {
    const shopDelete = await this.repository.shop.delete({
      where: {
        id
      }
    })
  }

}