import { IProductShopRepository } from "../../../repositories/IProductShopRepository";
import { IProductShop } from "./FindAllProductShopiesDTO";


export class FindAllProductShopiesUseCase {

  constructor(
    private productShopRepository: IProductShopRepository
  ) { }

  async execute(): Promise<IProductShop[]> {

    const productShopies = await this.productShopRepository.findAll();
    return productShopies;
  }
}