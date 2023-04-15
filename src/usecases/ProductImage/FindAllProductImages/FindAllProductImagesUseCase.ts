import { IProductImageRepository } from "../../../repositories/IProductImageRepository";
import { IProductImage } from "./FindAllProductImagesDTO";


export class FindAllProductImagesUseCase {

  constructor(
    private productImageRepository: IProductImageRepository
  ) { }

  async execute(): Promise<IProductImage[]> {

    const productImages = await this.productImageRepository.findAll();
    return productImages;
  }
}