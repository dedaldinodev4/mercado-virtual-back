import { IProductImageRepository } from "../../../repositories/IProductImageRepository";
import { IProductImage } from "./FindByProductImagesDTO";


export class FindByProductImagesUseCase {

  constructor(
    private productImageRepository: IProductImageRepository
  ) { }

  async execute(id_product: string): Promise<IProductImage[]> {

    if (!id_product) {
      throw new Error('Id is required.')
    }

    const productImages = await this.productImageRepository.findByProduct(id_product);

    return productImages;
  }
}