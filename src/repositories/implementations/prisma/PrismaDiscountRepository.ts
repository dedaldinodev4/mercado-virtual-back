import { prismaClient } from "../../../utils/prismaClient";
import { IDiscount, IDiscountRequest } from "../../../dtos/Discount";
import { IDiscountRepository } from "../../IDiscountRepository";


export class PrismaDiscountRepository implements IDiscountRepository {
  private repository = prismaClient.discount;


  async findById(id: string): Promise<IDiscount | null> {
    const discount = await this.repository.findFirst(
      {
        where: { id }
      });
    return discount ?? null;
  }


  async findByName(name: string): Promise<IDiscount | null> {
    const discount = await this.repository.findFirst(
      {
        where: { name }
      });
    return discount ?? null;
  }

  async findAll(): Promise<IDiscount[]> {
    const discounts = await this.repository.findMany({});
    return discounts ?? [];
  }

  async create(data: IDiscountRequest): Promise<IDiscount> {
    const newDiscount = await this.repository.create({
      data
    })
    return newDiscount;
  }

  async update(id: string, discount: IDiscountRequest): Promise<IDiscount> {
    const discountUpdate = await this.repository.update({
      data: discount,
      where: { id }
    })
    return discountUpdate;
  }

  async delete(id: string): Promise<void> {
    const discountDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}