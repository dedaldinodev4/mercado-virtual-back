import { IProductImageRepository } from "../../../repositories/IProductImageRepository";
import { IProductImage } from "./GetProductImageDTO";


export class GetProductImageUseCase {

  constructor(
    private productImageRepository: IProductImageRepository
  ) { }

  async execute(url: string): Promise<any | Error> {

    if (!url) {
      throw new Error('URL is required.')
    }

    const productImage = await this.productImageRepository.findByUrl(url);

    if (!productImage) {
      throw new Error('ProductImage does not exists.');
    }

    return productImage;
  }
}