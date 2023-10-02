import { prismaClient } from "../../../utils/prismaClient";
import { IOrder, IOrderRequest, IOrderUpdateRequest } from "../../../dtos/Order";
import { IOrderRepository } from "../../IOrderRepository";


export class PrismaOrderRepository implements IOrderRepository {
  private repository = prismaClient.order;

  async findByToken(token: string): Promise<IOrder | null> {
    const order = await this.repository.findFirst(
      {
        where: { token },
        include: {
          Payments: true,
          Delives: true,
          ProductShopOrders: true,
          customer: true
        }
      });
    return order ?? null;
  }

  async findById(id: string): Promise<IOrder | null> {
    const order = await this.repository.findFirst(
      {
        where: { id },
        include: {
          Payments: true,
          Delives: true,
          ProductShopOrders: true,
          customer: true
        }
      });
      return order ?? null;
  }


  async findAll(): Promise<IOrder[]> {
    const orders = await this.repository.findMany({
      include: {
        Payments: true,
        Delives: true,
        ProductShopOrders: true,
        customer: true
      }
    });
    return orders ?? [];
  }

  async findByCustomer(id_customer: string): Promise<IOrder[]> {
    const orders = await this.repository.findMany({
      where: { id_customer },
      include: {
        Payments: true,
        Delives: true,
        ProductShopOrders: true,
        customer: true
      }
    });
    return orders ?? [];
  }

  async findByShop(id_shop: string): Promise<IOrder[]> {
    const orders = await this.repository.findMany({
      where: { ProductShopOrders: { some: { productShop: { id_shop }}} },
      include: {
        Payments: true,
        Delives: true,
        ProductShopOrders: true,
        customer: true
      }
    });
    return orders ?? [];
  }

  async create(data: IOrderRequest): Promise<IOrder> {
    const newOrder = await this.repository.create({
      data
    })
    return newOrder;
  }

  async update(id: string, order: IOrderUpdateRequest): Promise<IOrder> {
    const orderUpdate = await this.repository.update({
      data: order,
      where: { id }
    })
    return orderUpdate;
  }

  async delete(id: string): Promise<void> {
    const orderDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}