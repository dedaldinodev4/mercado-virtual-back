import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IProductCategory } from "./FindByProductProductCategoryDTO";


export class FindByProductProductCategoryUseCase {

  constructor(
    private productCategoryRepository: IProductCategoryRepository
  ) { }

  async execute(id_product: string): Promise<IProductCategory[]> {

    if (!id_product) {
      throw new Error('Id is required.')
    }

    const productCategories = await this.productCategoryRepository.findByProduct(id_product);

    return productCategories;
  }
}