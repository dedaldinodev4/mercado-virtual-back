import { prismaClient } from "../../../utils/prismaClient";
import { ICustomer, ICustomerRequest, ICustomerUpdateRequest } from "../../../dtos/Customer";
import { ICustomerRepository } from "../../ICustomerRepository";


export class PrismaCustomerRepository implements ICustomerRepository {
  private repository = prismaClient;


  async findById(id: string): Promise<ICustomer | null> {
    const customer = await this.repository.customer.findFirst(
      {
        where: { id }
      });
      return customer
  }


  async findByIdentity(identity: string): Promise<ICustomer | null> {
    const customer = await this.repository.customer.findFirst(
      {
        where: { identity }
      });
    return customer;
  }

  async findAll(): Promise<ICustomer[]> {
    const customers = await this.repository.customer.findMany({});
    return customers;
  }

  async findByType(id_customerType: string): Promise<ICustomer[]> {
    const customers = await this.repository.customer.findMany({
      where: { id_customerType }
    });
    return customers;
  }

  async findByIdUser(id_user: string): Promise<ICustomer | null> {
    const customer = await this.repository.customer.findFirst({
      where: {
        id_user
      }
    });
    return customer;
  }

  async create(data: ICustomerRequest): Promise<ICustomer> {
    const newCustomer = await this.repository.customer.create({
      data
    })
    return newCustomer;
  }

  async update(id: string, customer: ICustomerUpdateRequest): Promise<ICustomer> {
    const customerUpdate = await this.repository.customer.update({
      data: customer,
      where: { id }
    })
    return customerUpdate;
  }

  async delete(id: string): Promise<void> {
    const customerDelete = await this.repository.customer.delete({
      where: {
        id
      }
    })
  }

}