import { IProductImageRepository } from "../../../repositories/IProductImageRepository";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { ICreateProductImage, ICreateProductImageRequest } from "./CreateProductImageDTO";


export class CreateProductImageUseCase {

  constructor(
    private productImageRepository: IProductImageRepository,
    private productRepository: IProductRepository
  ) { }

  async execute(data: ICreateProductImageRequest): Promise<ICreateProductImage | Error> {

    const productImageExists = await this.productImageRepository.findByUrl(data.url);

    if (!data) {
      throw new Error('Data is required.')
    }

    if (productImageExists) {
      throw new Error('URL já existe.')
    }

    const productExists = await this.productRepository.findById(data.id_product)

    if (!productExists) {
      throw new Error('Produto não existe no banco de dados.')
    }

    const result = await this.productImageRepository.create(data);
    return result;
  }
}