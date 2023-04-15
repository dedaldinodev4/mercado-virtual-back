import { IShopRepository } from "../../../repositories/IShopRepository";
import { IUpdateShop, IUpdateShopRequest } from "./UpdateShopDTO";


export class UpdateShopUseCase {

    constructor(
        private shopRepository: IShopRepository
    ) { }

    async execute(id: string, data: IUpdateShopRequest): Promise<IUpdateShop | Error> {
        const shopExists = await this.shopRepository.findById(id);

        if (!shopExists) {
            throw new Error('Shop does not exists.')
        }
        const result = await this.shopRepository.update(id, data);

        return result;
    }
}