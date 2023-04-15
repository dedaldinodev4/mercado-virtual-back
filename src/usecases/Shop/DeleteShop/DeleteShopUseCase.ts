import { IShopRepository } from "../../../repositories/IShopRepository";


export class DeleteShopUseCase {

  constructor(
    private shopRepository: IShopRepository
  ) { }

  async execute(id: string): Promise<void | Error> {

    const shopExists = await this.shopRepository.findById(id);

    if (!shopExists) {
      throw new Error('Shop does not exists.');
    }
    const result = await this.shopRepository.delete(id);

    return result;
  }
}