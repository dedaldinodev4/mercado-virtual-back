import { prismaClient } from "../../../utils/prismaClient";
import { IAddress, IAddressRequest, IAddressUpdateRequest } from "../../../dtos/Address";
import { IAddressRepository } from "../../IAddressRepository";


export class PrismaAddressRepository implements IAddressRepository {
  private repository = prismaClient.address;


  async findById(id: string): Promise<IAddress | null> {
    const address = await this.repository.findFirst(
      {
        where: { id }
      });
      return address ?? null;
  }


  async findByCity(city: string): Promise<IAddress | null> {
    const address = await this.repository.findFirst(
      {
        where: { city }
      });
    return address ?? null;
  }

  async findByPostalCode(postal_code: string): Promise<IAddress | null> {
    const address = await this.repository.findFirst(
      {
        where: { postal_code }
      });
    return address ?? null;
  }

  async findAll(): Promise<IAddress[]> {
    const addresses = await this.repository.findMany({});
    return addresses ?? [];
  }


  async findByIdUser(id_user: string): Promise<IAddress[]> {
    const addresses = await this.repository.findMany({
      where: {
        id_user
      }
    });
    return addresses ?? [];
  }

  async create(address: IAddressRequest): Promise<IAddress> {
    const { city, contry, hood, postal_code, id_user } = address
    const newAddress = await this.repository.create({
      data: {
        city, 
        contry,
        hood,
        postal_code,
        id_user
      }
    })
    return newAddress;
  }

  async update(id: string, address: IAddressUpdateRequest): Promise<IAddress> {
    const addressUpdate = await this.repository.update({
      data: address,
      where: { id }
    })
    return addressUpdate;
  }

  async delete(id: string): Promise<void> {
    const addressDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}