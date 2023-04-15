import { IShopRepository } from "../../../repositories/IShopRepository";
import { IShop } from "./FindByIdShopDTO";


export class FindByIdShopUseCase {

  constructor(
    private shopRepository: IShopRepository
  ) { }

  async execute(id: string): Promise<IShop | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const shop = await this.shopRepository.findById(id);

    if (!shop) {
      throw new Error('Shop does not exists.');
    }

    return shop;
  }
}