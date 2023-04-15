import { IProductShopRepository } from "../../../repositories/IProductShopRepository";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { IShopRepository } from "../../../repositories/IShopRepository";
import { ICreateProductShop, ICreateProductShopRequest } from "./CreateProductShopDTO";


export class CreateProductShopUseCase {

  constructor(
    private productShopRepository: IProductShopRepository,
    private productRepository: IProductRepository,
    private shopRepository: IShopRepository
  ) { }

  async execute(data: ICreateProductShopRequest): Promise<ICreateProductShop | Error> {
    const productExists = await this.productRepository.findById(data.id_product)
    const shopExists = await this.shopRepository.findById(data.id_shop)

    if (!data) {
      throw new Error('Data is required.')
    }

    if (!productExists) {
      throw new Error('Product does not exists.')
    }

    if (!shopExists) {
      throw new Error('Shop does not exists.')
    }

    const result = await this.productShopRepository.create(data);
    return result;
  }
}