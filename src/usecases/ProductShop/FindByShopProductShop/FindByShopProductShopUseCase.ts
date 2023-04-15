import { IProductShopRepository } from "../../../repositories/IProductShopRepository";
import { IProductShop } from "./FindByShopProductShopDTO";


export class FindByShopProductShopUseCase {

  constructor(
    private productShopRepository: IProductShopRepository
  ) { }

  async execute(id_shop: string): Promise<IProductShop[]> {

    if (!id_shop) {
      throw new Error('Id is required.')
    }

    const productShopies = await this.productShopRepository.findByShop(id_shop);

    return productShopies;
  }
}