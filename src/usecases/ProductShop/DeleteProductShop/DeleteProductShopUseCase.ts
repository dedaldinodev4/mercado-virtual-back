import { IProductShopRepository } from "../../../repositories/IProductShopRepository";


export class DeleteProductShopUseCase {

  constructor(
    private productShopRepository: IProductShopRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const productShopExists = await this.productShopRepository.findById(id);

    if (!productShopExists) {
      throw new Error('ProductShop does not exists.');
    }
    const result = await this.productShopRepository.delete(id);

    return result;
  }
}