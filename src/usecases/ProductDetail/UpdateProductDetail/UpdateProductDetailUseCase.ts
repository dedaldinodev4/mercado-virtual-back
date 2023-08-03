import { IProductDetailRepository } from "../../../repositories/IProductDetailRepository";
import { IUpdateProductDetail, IUpdateProductDetailRequest } from "./UpdateProductDetailDTO";


export class UpdateProductDetailUseCase {

    constructor(
        private productDetailRepository: IProductDetailRepository
    ) { }

    async execute(id: string, data: IUpdateProductDetailRequest): 
        Promise<IUpdateProductDetail | Error> 
    {
        const productDetailExists = await this.productDetailRepository.findById(id);

        if (!productDetailExists) {
            throw new Error('Não existe detalhes pra este producto.')
        }
        const result = await this.productDetailRepository.update(id, data);

        return result;
    }
}