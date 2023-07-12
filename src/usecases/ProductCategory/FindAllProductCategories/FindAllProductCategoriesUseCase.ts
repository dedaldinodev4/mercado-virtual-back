import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IProductCategory } from "./FindAllProductCategoriesDTO";


export class FindAllProductCategoriesUseCase {

  constructor(
    private productCategoryRepository: IProductCategoryRepository
  ) { }

  async execute(): Promise<IProductCategory[]> {

    const productCategories = await this.productCategoryRepository.findAll();
    return productCategories;
  }
}