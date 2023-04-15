import { IProductShopOrderRepository } from "../../../repositories/IProductShopOrderRepository";


export class DeleteProductShopOrderUseCase {

  constructor(
    private productShopOrderRepository: IProductShopOrderRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const productShopOrderExists = await this.productShopOrderRepository.findById(id);

    if (!productShopOrderExists) {
      throw new Error('ProductShopOrder does not exists.');
    }
    const result = await this.productShopOrderRepository.delete(id);

    return result;
  }
}