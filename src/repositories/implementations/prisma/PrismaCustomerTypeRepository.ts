import { prismaClient } from "../../../utils/prismaClient";
import { ICustomerType, ICustomerTypeRequest } from "../../../dtos/CustomerType";
import { ICustomerTypeRepository } from "../../ICustomerTypeRepository";


export class PrismaCustomerTypeRepository implements ICustomerTypeRepository {
  private repository = prismaClient;


  async findById(id: string): Promise<ICustomerType | null> {
    const customerType = await this.repository.customerType.findFirst(
      {
        where: { id }
      });
      return customerType
  }


  async findByName(name: string): Promise<ICustomerType | null> {
    const customerType = await this.repository.customerType.findFirst(
      {
        where: { name }
      });
    return customerType;
  }

  async findAll(): Promise<ICustomerType[]> {
    const customerTypes = await this.repository.customerType.findMany({});
    return customerTypes;
  }

  async create(data: ICustomerTypeRequest): Promise<ICustomerType> {
    const newCustomerType = await this.repository.customerType.create({
      data
    })
    return newCustomerType;
  }

  async update(id: string, customerType: ICustomerTypeRequest): Promise<ICustomerType> {
    const customerTypeUpdate = await this.repository.customerType.update({
      data: customerType,
      where: { id }
    })
    return customerTypeUpdate;
  }

  async delete(id: string): Promise<void> {
    const customerTypeDelete = await this.repository.customerType.delete({
      where: {
        id
      }
    })
  }

}