import { IProductDetailRepository } from "../../../repositories/IProductDetailRepository";
import { IProductDetail } from "./FindAllProductDetailsDTO";


export class FindAllProductDetailsUseCase {

  constructor(
    private productDetailRepository: IProductDetailRepository
  ) { }

  async execute(): Promise<IProductDetail[]> {

    const productDetails = await this.productDetailRepository.findAll();
    return productDetails;
  }
}