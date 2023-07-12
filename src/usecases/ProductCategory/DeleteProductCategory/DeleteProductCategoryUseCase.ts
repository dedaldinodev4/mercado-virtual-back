import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";


export class DeleteProductCategoryUseCase {

  constructor(
    private productCategoryRepository: IProductCategoryRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const productCategoryExists = await this.productCategoryRepository.findById(id);

    if (!productCategoryExists) {
      throw new Error('ProductCategory does not exists.');
    }
    const result = await this.productCategoryRepository.delete(id);

    return result;
  }
}