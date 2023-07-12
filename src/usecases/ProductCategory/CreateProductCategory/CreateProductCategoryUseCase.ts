import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { ICreateProductCategory, ICreateProductCategoryRequest } from "./CreateProductCategoryDTO";


export class CreateProductCategoryUseCase {

  constructor(
    private productCategoryRepository: IProductCategoryRepository,
    private productRepository: IProductRepository,
    private categoryRepository: ICategoryRepository
  ) { }

  async execute(data: ICreateProductCategoryRequest): Promise<ICreateProductCategory | Error> {
    const productExists = await this.productRepository.findById(data.id_product)
    const categoryExists = await this.categoryRepository.findById(data.id_category)

    if (!data) {
      throw new Error('Data is required.')
    }

    if (!productExists) {
      throw new Error('Product does not exists.')
    }

    if (!categoryExists) {
      throw new Error('Category does not exists.')
    }

    const result = await this.productCategoryRepository.create(data);
    return result;
  }
}