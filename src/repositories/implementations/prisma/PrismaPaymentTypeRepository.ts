import { prismaClient } from "../../../utils/prismaClient";
import { IPaymentType, IPaymentTypeRequest } from "../../../dtos/PaymentType";
import { IPaymentTypeRepository } from "../../IPaymentTypeRepository";


export class PrismaPaymentTypeRepository implements IPaymentTypeRepository {
  private repository = prismaClient;


  async findById(id: string): Promise<IPaymentType | null> {
    const paymentType = await this.repository.paymentType.findFirst(
      {
        where: { id }
      });
      return paymentType
  }


  async findByName(name: string): Promise<IPaymentType | null> {
    const paymentType = await this.repository.paymentType.findFirst(
      {
        where: { name }
      });
    return paymentType;
  }

  async findAll(): Promise<IPaymentType[]> {
    const paymentTypes = await this.repository.paymentType.findMany({});
    return paymentTypes;
  }

  async create(data: IPaymentTypeRequest): Promise<IPaymentType> {
    const newPaymentType = await this.repository.paymentType.create({
      data
    })
    return newPaymentType;
  }

  async update(id: string, paymentType: IPaymentTypeRequest): Promise<IPaymentType> {
    const paymentTypeUpdate = await this.repository.paymentType.update({
      data: paymentType,
      where: { id }
    })
    return paymentTypeUpdate;
  }

  async delete(id: string): Promise<void> {
    const paymentTypeDelete = await this.repository.paymentType.delete({
      where: {
        id
      }
    })
  }

}