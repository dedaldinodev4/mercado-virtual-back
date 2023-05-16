import { prismaClient } from "../../../utils/prismaClient";
import { IPaymentType, IPaymentTypeRequest } from "../../../dtos/PaymentType";
import { IPaymentTypeRepository } from "../../IPaymentTypeRepository";


export class PrismaPaymentTypeRepository implements IPaymentTypeRepository {
  private repository = prismaClient.paymentType;


  async findById(id: string): Promise<IPaymentType | null> {
    const paymentType = await this.repository.findFirst(
      {
        where: { id }
      });
      return paymentType ?? null;
  }


  async findByName(name: string): Promise<IPaymentType | null> {
    const paymentType = await this.repository.findFirst(
      {
        where: { name }
      });
    return paymentType ?? null;
  }

  async findAll(): Promise<IPaymentType[]> {
    const paymentTypes = await this.repository.findMany({});
    return paymentTypes ?? [];
  }

  async create(data: IPaymentTypeRequest): Promise<IPaymentType> {
    const newPaymentType = await this.repository.create({
      data
    })
    return newPaymentType;
  }

  async update(id: string, paymentType: IPaymentTypeRequest): Promise<IPaymentType> {
    const paymentTypeUpdate = await this.repository.update({
      data: paymentType,
      where: { id }
    })
    return paymentTypeUpdate;
  }

  async delete(id: string): Promise<void> {
    const paymentTypeDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}