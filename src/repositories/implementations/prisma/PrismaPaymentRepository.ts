import { prismaClient } from "../../../utils/prismaClient";
import { IPayment, IPaymentRequest, IPaymentUpdateRequest } from "../../../dtos/Payment";
import { IPaymentRepository } from "../../IPaymentRepository";


export class PrismaPaymentRepository implements IPaymentRepository {
  private repository = prismaClient.payment;

  async findByCode(code: string): Promise<IPayment | null> {
    const payment = await this.repository.findFirst(
      {
        where: { code }
      });
    return payment ?? null;
  }

  async findById(id: string): Promise<IPayment | null> {
    const payment = await this.repository.findFirst(
      {
        where: { id }
      });
      return payment ?? null;
  }


  async findAll(): Promise<IPayment[]> {
    const payments = await this.repository.findMany({});
    return payments ?? [];
  }

  async findByOrder(id_order: string): Promise<IPayment | null> {
    const payment = await this.repository.findFirst({
      where: { id_order }
    });
    return payment ?? null;
  }

  async create(data: IPaymentRequest): Promise<IPayment> {
    const newPayment = await this.repository.create({
      data
    })
    return newPayment;
  }

  async update(id: string, payment: IPaymentUpdateRequest): Promise<IPayment> {
    const paymentUpdate = await this.repository.update({
      data: payment,
      where: { id }
    })
    return paymentUpdate;
  }

  async delete(id: string): Promise<void> {
    const paymentDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}