import { IProductShopRepository } from "../../../repositories/IProductShopRepository";
import { IProductShop } from "./FindByIdProductShopDTO";


export class FindByIdProductShopUseCase {

  constructor(
    private productShopRepository: IProductShopRepository
  ) { }

  async execute(id: string): Promise<IProductShop | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const productShop = await this.productShopRepository.findById(id);

    if (!productShop) {
      throw new Error('ProductShop does not exists.');
    }

    return productShop;
  }
}