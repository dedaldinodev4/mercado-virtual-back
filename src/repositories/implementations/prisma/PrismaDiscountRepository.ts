import { prismaClient } from "../../../utils/prismaClient";
import { IDiscount, IDiscountRequest } from "../../../dtos/Discount";
import { IDiscountRepository } from "../../IDiscountRepository";


export class PrismaDiscountRepository implements IDiscountRepository {
  private repository = prismaClient;


  async findById(id: string): Promise<IDiscount | null> {
    const discount = await this.repository.discount.findFirst(
      {
        where: { id }
      });
    return discount;
  }


  async findByName(name: string): Promise<IDiscount | null> {
    const discount = await this.repository.discount.findFirst(
      {
        where: { name }
      });
    return discount;
  }

  async findAll(): Promise<IDiscount[]> {
    const discounts = await this.repository.discount.findMany({});
    return discounts;
  }

  async create(data: IDiscountRequest): Promise<IDiscount> {
    const newDiscount = await this.repository.discount.create({
      data
    })
    return newDiscount;
  }

  async update(id: string, discount: IDiscountRequest): Promise<IDiscount> {
    const discountUpdate = await this.repository.discount.update({
      data: discount,
      where: { id }
    })
    return discountUpdate;
  }

  async delete(id: string): Promise<void> {
    const discountDelete = await this.repository.discount.delete({
      where: {
        id
      }
    })
  }

}