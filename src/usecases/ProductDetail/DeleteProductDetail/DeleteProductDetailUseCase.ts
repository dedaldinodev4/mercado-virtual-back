import { IProductDetailRepository } from "../../../repositories/IProductDetailRepository";


export class DeleteProductDetailUseCase {

  constructor(
    private productDetailRepository: IProductDetailRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const productDetailExists = await this.productDetailRepository.findById(id);

    if (!productDetailExists) {
      throw new Error('Não existe detalhes do produto.');
    }
    const result = await this.productDetailRepository.delete(id);

    return result;
  }
}