import { IProductImageRepository } from "../../../repositories/IProductImageRepository";
import { IProductImage } from "./FindByIdProductImageDTO";


export class FindByIdProductImageUseCase {

  constructor(
    private productImageRepository: IProductImageRepository
  ) { }

  async execute(id: string): Promise<IProductImage | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const productImage = await this.productImageRepository.findById(id);

    if (!productImage) {
      throw new Error('ProductImage does not exists.');
    }

    return productImage;
  }
}