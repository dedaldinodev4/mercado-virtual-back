import { IProductDetailRepository } from "../../../repositories/IProductDetailRepository";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductDetail, ICreateProductDetailRequest } from "./CreateProductDetailDTO";


export class CreateProductDetailUseCase {

  constructor(
    private productDetailRepository: IProductDetailRepository,
    private productRepository: IProductRepository
  ) { }

  async execute(data: ICreateProductDetailRequest): Promise<ICreateProductDetail | Error> {

    if (!data) {
      throw new Error('Data is required.')
    }

    const productExists = await this.productRepository.findById(data.id_product)

    if (!productExists) {
      throw new Error('Produto não existe no banco de dados.')
    }

    const result = await this.productDetailRepository.create(data);
    return result;
  }
}