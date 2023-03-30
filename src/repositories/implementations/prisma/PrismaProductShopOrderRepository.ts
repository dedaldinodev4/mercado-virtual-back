import { prismaClient } from "../../../utils/prismaClient";
import { IProductShopOrder, IProductShopOrderRequest } from "../../../dtos/ProductShopOrder";
import { IProductShopOrderRepository } from "../../IProductShopOrderRepository";


export class PrismaProductShopRepository implements IProductShopOrderRepository {
  private repository = prismaClient;

  async findById(id: string): Promise<IProductShopOrder | null> {
    const productShopOrder = await this.repository.productShopOrder.findFirst(
      {
        where: { id }
      });
      return productShopOrder
  }


  async findAll(): Promise<IProductShopOrder[]> {
    const productShopies = await this.repository.productShopOrder.findMany({});
    return productShopies;
  }

  async findByProductShop(id_productShop: string): Promise<IProductShopOrder[]> {
    const productShopies = await this.repository.productShopOrder.findMany({
      where: { id_productShop }
    });
    return productShopies;
  }

  async findByOrder(id_order: string): Promise<IProductShopOrder[]> {
    const productShopies = await this.repository.productShopOrder.findMany({
      where: { id_order }
    });
    return productShopies;
  }

  async create(data: IProductShopOrderRequest): Promise<IProductShopOrder> {
    const newProductShopOrder = await this.repository.productShopOrder.create({
      data
    })
    return newProductShopOrder;
  }

  async update(id: string, productShopOrder: IProductShopOrderRequest): Promise<IProductShopOrder> {
    const productShopOrderUpdate = await this.repository.productShopOrder.update({
      data: productShopOrder,
      where: { id }
    })
    return productShopOrderUpdate;
  }

  async delete(id: string): Promise<void> {
    const productShopOrderDelete = await this.repository.productShopOrder.delete({
      where: {
        id
      }
    })
  }

}