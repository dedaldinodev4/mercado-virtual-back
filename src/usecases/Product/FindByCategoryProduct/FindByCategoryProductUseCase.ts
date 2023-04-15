import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { IProduct } from "./FindByCategoryProductDTO";


export class FindByCategoryProductUseCase {

  constructor(
    private productRepository: IProductRepository,
    private categoryRepository: ICategoryRepository
  ) { }

  async execute(id_category: string): Promise<IProduct[]> {
    const categoryExists = await this.categoryRepository.findById(id_category);

    if (!id_category) {
      throw new Error('Id is required.')
    }

    if (!categoryExists) {
      throw new Error('Category does not exists.')
    }

    const products = await this.productRepository.findByCategory(id_category);

    return products;
  }
}