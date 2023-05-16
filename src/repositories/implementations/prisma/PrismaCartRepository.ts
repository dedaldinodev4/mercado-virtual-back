import { prismaClient } from "../../../utils/prismaClient";
import { ICart, ICartRequest, ICartUpdateRequest } from "../../../dtos/Cart";
import { ICartRepository } from "../../ICartRepository";


export class PrismaCartRepository implements ICartRepository {
  private repository = prismaClient.cart;

  async findByToken(token: string): Promise<ICart | null> {
    const cart = await this.repository.findFirst(
      {
        where: { token }
      });
    return cart ?? null;
  }

  async findById(id: string): Promise<ICart | null> {
    const cart = await this.repository.findFirst(
      {
        where: { id }
      });
      return cart ?? null;
  }


  async findAll(): Promise<ICart[]> {
    const carts = await this.repository.findMany({});
    return carts ?? [];
  }

  async findByStatus(status: string): Promise<ICart[]> {
    const carts = await this.repository.findMany({
      where: { status }
    });
    return carts ?? [];
  }

  async findByCustomer(id_customer: string): Promise<ICart[]> {
    const cart = await this.repository.findMany({
      where: { id_customer }
    });
    return cart ?? [];
  }

  async create(data: ICartRequest): Promise<ICart> {
    const newCart = await this.repository.create({
      data
    })
    return newCart;
  }

  async update(id: string, cart: ICartUpdateRequest): Promise<ICart> {
    const cartUpdate = await this.repository.update({
      data: cart,
      where: { id }
    })
    return cartUpdate;
  }

  async delete(id: string): Promise<void> {
    const cartDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}