import { prismaClient } from "../../../utils/prismaClient";
import { ICustomerType, ICustomerTypeRequest } from "../../../dtos/CustomerType";
import { ICustomerTypeRepository } from "../../ICustomerTypeRepository";


export class PrismaCustomerTypeRepository implements ICustomerTypeRepository {
  private repository = prismaClient.customerType;


  async findById(id: string): Promise<ICustomerType | null> {
    const customerType = await this.repository.findFirst(
      {
        where: { id }
      });
      return customerType ?? null;
  }


  async findByName(name: string): Promise<ICustomerType | null> {
    const customerType = await this.repository.findFirst(
      {
        where: { name }
      });
    return customerType ?? null;
  }

  async findAll(): Promise<ICustomerType[]> {
    const customerTypes = await this.repository.findMany({});
    return customerTypes ?? [];
  }

  async create(data: ICustomerTypeRequest): Promise<ICustomerType> {
    const newCustomerType = await this.repository.create({
      data
    })
    return newCustomerType;
  }

  async update(id: string, customerType: ICustomerTypeRequest): Promise<ICustomerType> {
    const customerTypeUpdate = await this.repository.update({
      data: customerType,
      where: { id }
    })
    return customerTypeUpdate;
  }

  async delete(id: string): Promise<void> {
    const customerTypeDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}