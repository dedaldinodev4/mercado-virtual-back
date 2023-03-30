import { prismaClient } from "../../../utils/prismaClient";
import { IPayment, IPaymentRequest, IPaymentUpdateRequest } from "../../../dtos/Payment";
import { IPaymentRepository } from "../../IPaymentRepository";


export class PrismaPaymentRepository implements IPaymentRepository {
  private repository = prismaClient;

  async findByCode(code: string): Promise<IPayment | null> {
    const payment = await this.repository.payment.findFirst(
      {
        where: { code }
      });
    return payment;
  }

  async findById(id: string): Promise<IPayment | null> {
    const payment = await this.repository.payment.findFirst(
      {
        where: { id }
      });
      return payment
  }


  async findAll(): Promise<IPayment[]> {
    const payments = await this.repository.payment.findMany({});
    return payments;
  }

  async findByOrder(id_order: string): Promise<IPayment | null> {
    const payments = await this.repository.payment.findFirst({
      where: { id_order }
    });
    return payments;
  }

  async create(data: IPaymentRequest): Promise<IPayment> {
    const newPayment = await this.repository.payment.create({
      data
    })
    return newPayment;
  }

  async update(id: string, payment: IPaymentUpdateRequest): Promise<IPayment> {
    const paymentUpdate = await this.repository.payment.update({
      data: payment,
      where: { id }
    })
    return paymentUpdate;
  }

  async delete(id: string): Promise<void> {
    const paymentDelete = await this.repository.payment.delete({
      where: {
        id
      }
    })
  }

}