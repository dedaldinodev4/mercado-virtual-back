import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IProductCategory } from "./FindByIdProductCategoryDTO";


export class FindByIdProductCategoryUseCase {

  constructor(
    private productCategoryRepository: IProductCategoryRepository
  ) { }

  async execute(id: string): Promise<IProductCategory | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const productCategory = await this.productCategoryRepository.findById(id);

    if (!productCategory) {
      throw new Error('ProductShop does not exists.');
    }

    return productCategory;
  }
}