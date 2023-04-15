import { IProductRepository } from "../../../repositories/IProductRepository";


export class DeleteProductUseCase {

  constructor(
    private productRepository: IProductRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const productExists = await this.productRepository.findById(id);

    if (!productExists) {
      throw new Error('Product does not exists.');
    }
    const result = await this.productRepository.delete(id);

    return result;
  }
}