import { IShopRepository } from "../../../repositories/IShopRepository";
import { IShop } from "./FindAllShopiesDTO";


export class FindAllShopiesUseCase {

  constructor(
    private shopRepository: IShopRepository
  ) { }

  async execute(): Promise<IShop[]> {

    const shopies = await this.shopRepository.findAll();
    return shopies;
  }
}