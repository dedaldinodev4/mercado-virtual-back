import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IProductCategory } from "./FindByCategoryProductCategoryDTO";


export class FindByCategoryProductCategoryUseCase {

  constructor(
    private productCategoryRepository: IProductCategoryRepository
  ) { }

  async execute(id_category: string): Promise<IProductCategory[]> {

    if (!id_category) {
      throw new Error('Id is required.')
    }

    const productCategories = await this.productCategoryRepository.findByCategory(id_category);

    return productCategories;
  }
}