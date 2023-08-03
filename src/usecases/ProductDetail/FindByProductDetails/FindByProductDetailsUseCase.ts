import { IProductDetailRepository } from "../../../repositories/IProductDetailRepository";
import { IProductDetail } from "./FindByProductDetailsDTO";


export class FindByProductDetailsUseCase {

  constructor(
    private productDetailRepository: IProductDetailRepository
  ) { }

  async execute(id_product: string): Promise<IProductDetail | Error> {

    if (!id_product) {
      throw new Error('Id is required.')
    }

    const productDetail = await this.productDetailRepository.findByProduct(id_product);

    return productDetail!;
  }
}