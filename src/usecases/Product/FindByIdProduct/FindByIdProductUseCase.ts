import { IProductRepository } from "../../../repositories/IProductRepository";
import { IProduct } from "./FindByIdProductDTO";


export class FindByIdProductUseCase {

  constructor(
    private productRepository: IProductRepository
  ) { }

  async execute(id: string): Promise<IProduct | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const product = await this.productRepository.findById(id);

    if (!product) {
      throw new Error('Product does not exists.');
    }

    return product;
  }
}