import { IProductImageRepository } from "../../../repositories/IProductImageRepository";


export class DeleteProductImageUseCase {

  constructor(
    private productImageRepository: IProductImageRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const productImageExists = await this.productImageRepository.findById(id);

    if (!productImageExists) {
      throw new Error('ProductImage does not exists.');
    }
    const result = await this.productImageRepository.delete(id);

    return result;
  }
}