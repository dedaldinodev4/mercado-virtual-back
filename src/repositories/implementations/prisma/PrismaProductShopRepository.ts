import { prismaClient } from "../../../utils/prismaClient";
import { IProductShop, IProductShopRequest, IProductShopUpdateRequest } from "../../../dtos/ProductShop";
import { IProductShopRepository } from "../../IProductShopRepository";


export class PrismaProductShopRepository implements IProductShopRepository {
  private repository = prismaClient;

  async findById(id: string): Promise<IProductShop | null> {
    const productShop = await this.repository.productShop.findFirst(
      {
        where: { id }
      });
      return productShop
  }


  async findAll(): Promise<IProductShop[]> {
    const productShopies = await this.repository.productShop.findMany({});
    return productShopies;
  }

  async findByProduct(id_product: string): Promise<IProductShop[]> {
    const productShopies = await this.repository.productShop.findMany({
      where: { id_product }
    });
    return productShopies;
  }

  async findByShop(id_shop: string): Promise<IProductShop[]> {
    const productShopies = await this.repository.productShop.findMany({
      where: { id_shop }
    });
    return productShopies;
  }

  async create(data: IProductShopRequest): Promise<IProductShop> {
    const newProductShop = await this.repository.productShop.create({
      data
    })
    return newProductShop;
  }

  async update(id: string, productShop: IProductShopUpdateRequest): Promise<IProductShop> {
    const productShopUpdate = await this.repository.productShop.update({
      data: productShop,
      where: { id }
    })
    return productShopUpdate;
  }

  async delete(id: string): Promise<void> {
    const productShopDelete = await this.repository.productShop.delete({
      where: {
        id
      }
    })
  }

}