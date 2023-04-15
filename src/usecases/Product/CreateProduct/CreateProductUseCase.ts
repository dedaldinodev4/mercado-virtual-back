import { IProductRepository } from "../../../repositories/IProductRepository";
import { IDiscountRepository } from "../../../repositories/IDiscountRepository";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { ICreateProduct, ICreateProductRequest } from "./CreateProductDTO";


export class CreateProductUseCase {

  constructor(
    private productRepository: IProductRepository,
    private categoryRepository: ICategoryRepository,
    private discountRepository: IDiscountRepository
  ) { }

  async execute(data: ICreateProductRequest): Promise<ICreateProduct | Error> {

    const productExists = await this.productRepository.findByName(data.name);
    const categoryExists = await this.categoryRepository.findById(data.id_category);
    const discountExists = await this.discountRepository.findById(data.id_discount);

    if (!data) {
      throw new Error('Data is required.')
    }

    if (productExists) {
      throw new Error('Product already exists.')
    }

    if (!categoryExists) {
      throw new Error('Category does not exists.')
    }

    if (!discountExists) {
      throw new Error('Discount does not exists.')
    }

    const result = await this.productRepository.create(data);
    return result;
  }
}