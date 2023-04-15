import { IProductRepository } from "../../../repositories/IProductRepository";
import { IProduct } from "./FindAllProductsDTO";


export class FindAllProductsUseCase {

  constructor(
    private productRepository: IProductRepository
  ) { }

  async execute(): Promise<IProduct[]> {

    const products = await this.productRepository.findAll();
    return products;
  }
}