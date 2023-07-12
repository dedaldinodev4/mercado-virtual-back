import { IProductCategoryRepository } from "../../../repositories/IProductCategoryRepository";
import { IUpdateProductCategory, IUpdateProductCategoryRequest } from "./UpdateProductCategoryDTO";


export class UpdateProductCategoryUseCase {

    constructor(
        private productCategoryRepository: IProductCategoryRepository
    ) { }

    async execute(id: string, data: IUpdateProductCategoryRequest): 
        Promise<IUpdateProductCategory | Error> 
    {
        const productCategoryExists = await this.productCategoryRepository.findById(id);

        if (!productCategoryExists) {
            throw new Error('ProductCategory does not exists.')
        }
        const result = await this.productCategoryRepository.update(id, data);

        return result;
    }
}