import { IShopRepository } from "../../../repositories/IShopRepository";
import { IAddressRepository } from "../../../repositories/IAddressRepository";
import { IOwnerRepository } from "../../../repositories/IOwnerRepository";
import { ICreateShop, ICreateShopRequest } from "./CreateShopDTO";


export class CreateShopUseCase {

  constructor(
    private shopRepository: IShopRepository,
    private addressRepository: IAddressRepository,
    private ownerRepository: IOwnerRepository
  ) { }

  async execute(data: ICreateShopRequest): Promise<ICreateShop | Error> {

    const shopExists = await this.shopRepository.findByName(data.name);
    const addressExists = await this.addressRepository.findById(data.id_address)
    const ownerExists = await this.ownerRepository.findById(data.id_owner)

    if (!data) {
      throw new Error('Data is required.')
    }

    if (shopExists) {
      throw new Error('Payment Code already exists.')
    }

    if (!addressExists) {
      throw new Error('Address does not exists.')
    }

    if (!ownerExists) {
      throw new Error('Owner does not exists.')
    }
    
    const result = await this.shopRepository.create(data);
    return result;
  }
}