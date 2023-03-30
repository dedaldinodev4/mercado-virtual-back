import { prismaClient } from "../../../utils/prismaClient";
import { IOrder, IOrderRequest, IOrderUpdateRequest } from "../../../dtos/Order";
import { IOrderRepository } from "../../IOrderRepository";


export class PrismaOrderRepository implements IOrderRepository {
  private repository = prismaClient;

  async findByToken(token: string): Promise<IOrder | null> {
    const order = await this.repository.order.findFirst(
      {
        where: { token }
      });
    return order;
  }

  async findById(id: string): Promise<IOrder | null> {
    const order = await this.repository.order.findFirst(
      {
        where: { id }
      });
      return order
  }


  async findAll(): Promise<IOrder[]> {
    const orders = await this.repository.order.findMany({});
    return orders;
  }

  async findByCustomer(id_customer: string): Promise<IOrder[]> {
    const orders = await this.repository.order.findMany({
      where: { id_customer }
    });
    return orders;
  }

  async create(data: IOrderRequest): Promise<IOrder> {
    const newOrder = await this.repository.order.create({
      data
    })
    return newOrder;
  }

  async update(id: string, order: IOrderUpdateRequest): Promise<IOrder> {
    const orderUpdate = await this.repository.order.update({
      data: order,
      where: { id }
    })
    return orderUpdate;
  }

  async delete(id: string): Promise<void> {
    const orderDelete = await this.repository.order.delete({
      where: {
        id
      }
    })
  }

}