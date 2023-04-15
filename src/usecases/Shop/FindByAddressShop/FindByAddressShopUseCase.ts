import { IShopRepository } from "../../../repositories/IShopRepository";
import { IShop } from "./FindByAddressShopDTO";


export class FindByAddressShopUseCase {

  constructor(
    private shopRepository: IShopRepository
  ) { }

  async execute(id_address: string): Promise<IShop[]> {

    if (!id_address) {
      throw new Error('Id is required.')
    }

    const shopies = await this.shopRepository.findByAddress(id_address);
    return shopies;
  }
}