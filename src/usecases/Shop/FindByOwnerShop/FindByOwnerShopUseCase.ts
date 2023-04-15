import { IShopRepository } from "../../../repositories/IShopRepository";
import { IShop } from "./FindByOwnerShopDTO";


export class FindByOwnerShopUseCase {

  constructor(
    private shopRepository: IShopRepository
  ) { }

  async execute(id_owner: string): Promise<IShop[]> {

    if (!id_owner) {
      throw new Error('Id is required.')
    }

    const shop = await this.shopRepository.findByOwner(id_owner);

    return shop;
  }
}