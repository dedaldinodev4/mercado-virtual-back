import { prismaClient } from "../../../utils/prismaClient";
import { IAddress, IAddressRequest, IAddressUpdateRequest } from "../../../dtos/Address";
import { IAddressRepository } from "../../IAddressRepository";


export class PrismaAddressRepository implements IAddressRepository {
  private repository = prismaClient;


  async findById(id: string): Promise<IAddress | null> {
    const address = await this.repository.address.findFirst(
      {
        where: { id }
      });
      return address
  }


  async findByCity(city: string): Promise<IAddress | null> {
    const address = await this.repository.address.findFirst(
      {
        where: { city }
      });
    return address;
  }

  async findAll(): Promise<IAddress[]> {
    const addresses = await this.repository.address.findMany({});
    return addresses;
  }


  async findByIdUser(id_user: string): Promise<IAddress | null> {
    const address = await this.repository.address.findFirst({
      where: {
        id_user
      }
    });
    return address;
  }

  async create(data: IAddressRequest): Promise<IAddress> {
    const newAddress = await this.repository.address.create({
      data
    })
    return newAddress;
  }

  async update(id: string, address: IAddressUpdateRequest): Promise<IAddress> {
    const addressUpdate = await this.repository.address.update({
      data: address,
      where: { id }
    })
    return addressUpdate;
  }

  async delete(id: string): Promise<void> {
    const addressDelete = await this.repository.address.delete({
      where: {
        id
      }
    })
  }

}