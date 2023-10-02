import { prismaClient } from "../../../utils/prismaClient";
import { IProductShopOrder, IProductShopOrderRequest, IProductShopOrderArrayRequest } from "../../../dtos/ProductShopOrder";
import { IProductShopOrderRepository } from "../../IProductShopOrderRepository";


export class PrismaProductShopOrderRepository implements IProductShopOrderRepository {
  private repository = prismaClient.productShopOrder;

  async findById(id: string): Promise<IProductShopOrder | null> {
    const productShopOrder = await this.repository.findFirst(
      {
        where: { id },
        include: {
          productShop: true,
          order: {
            include: {
              Payments: true,
              Delives: true,
              ProductShopOrders: true,
              customer: true
            }
          }
        }
      });
      return productShopOrder ?? null;
  }


  async findAll(): Promise<IProductShopOrder[]> {
    const productShopies = await this.repository.findMany({
      include: {
        productShop: true,
        order: {
          include: {
            Payments: true,
            Delives: true,
            ProductShopOrders: true,
            customer: true
          }
        }
      }
    });
    return productShopies ?? [];
  }

  async findByProductShop(id_productShop: string): Promise<IProductShopOrder[]> {
    const productShopies = await this.repository.findMany({
      where: { id_productShop },
      include: {
        productShop: true,
        order: {
          include: {
            Payments: true,
            Delives: true,
            ProductShopOrders: true,
            customer: true
          }
        }
      }
    });
    return productShopies ?? [];
  }

  async findByShop(id_shop: string): Promise<IProductShopOrder[]> {
    const productShopies = await this.repository.findMany({
      where: { productShop : { shop: { id: id_shop } }  },
      include: {
        productShop: true,
        order: {
          include: {
            Payments: true,
            Delives: true,
            ProductShopOrders: true,
            customer: true
          }
        }
      }
    });
    return productShopies ?? [];
  }

  async findByOrder(id_order: string): Promise<IProductShopOrder[]> {
    const productShopies = await this.repository.findMany({
      where: { id_order },
      include: {
          productShop: true,
          order: {
            include: {
              Payments: true,
              Delives: true,
              ProductShopOrders: true,
              customer: true
            }
          }
        }
    });
    return productShopies ?? [];
  }

  async create(data: IProductShopOrderRequest): Promise<IProductShopOrder> {
    const newProductShopOrder = await this.repository.create({
      data
    })
    return newProductShopOrder;
  }

  async createWithArray(data: IProductShopOrderArrayRequest): Promise<void> {

    if (data) {
      const { products, id_order } = data

      products.forEach(async item => {
        await this.repository.create({
          data: {
            id_order,
            id_productShop: item
          }
        })

      })
    }
  }

  async update(id: string, productShopOrder: IProductShopOrderRequest): Promise<IProductShopOrder> {
    const productShopOrderUpdate = await this.repository.update({
      data: productShopOrder,
      where: { id }
    })
    return productShopOrderUpdate;
  }

  async delete(id: string): Promise<void> {
    const productShopOrderDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}