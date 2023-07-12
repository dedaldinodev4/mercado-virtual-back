import { IProductRepository } from "../../../repositories/IProductRepository";
import { IProduct } from "./FindByOfferProductDTO";


export class FindByOfferProductUseCase {

  constructor(
    private productRepository: IProductRepository
  ) { }

  async execute(): Promise<IProduct[]> {
   
    const products = await this.productRepository.findByIsOffer();

    return products;
  }
}