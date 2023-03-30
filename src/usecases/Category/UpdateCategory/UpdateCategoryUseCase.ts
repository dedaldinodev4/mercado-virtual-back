import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { IUpdateCategory, IUpdateCategoryRequest } from "./UpdateCategoryDTO";


export class UpdateCategoryUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(id: string, data: IUpdateCategoryRequest): Promise<IUpdateCategory | Error> {
        const categoryExists = await this.categoryRepository.findById(id);

        if (categoryExists) {
          throw new Error('Category already exists.')
        }
        const result = await this.categoryRepository.update(id, data);

        return result;
    }
}