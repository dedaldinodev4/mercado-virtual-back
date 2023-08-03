import { IProductDetailRepository } from "../../../repositories/IProductDetailRepository";
import { IProductDetail } from "./FindByIdProductDetailDTO";


export class FindByIdProductDetailUseCase {

  constructor(
    private productDetailRepository: IProductDetailRepository
  ) { }

  async execute(id: string): Promise<IProductDetail | Error> {

    if (!id) {
      throw new Error('Id is required.')
    }

    const productDetail = await this.productDetailRepository.findById(id);

    if (!productDetail) {
      throw new Error('Não existem detalhes do produto.');
    }

    return productDetail;
  }
}