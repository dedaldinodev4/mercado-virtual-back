import { IProductImageRepository } from "../../../repositories/IProductImageRepository";
import { IUpdateProductImage, IUpdateProductImageRequest } from "./UpdateProductImageDTO";


export class UpdateProductImageUseCase {

    constructor(
        private productImageRepository: IProductImageRepository
    ) { }

    async execute(id: string, data: IUpdateProductImageRequest): 
        Promise<IUpdateProductImage | Error> 
    {
        const productImageExists = await this.productImageRepository.findById(id);

        if (!productImageExists) {
            throw new Error('ProductImage does not exists.')
        }
        const result = await this.productImageRepository.update(id, data);

        return result;
    }
}