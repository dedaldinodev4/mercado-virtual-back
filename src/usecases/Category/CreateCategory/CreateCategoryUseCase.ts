import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { ICreateCategory, ICreateCategoryRequest } from "./CreateCategoryDTO";


export class CreateCategoryUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(data: ICreateCategoryRequest): Promise<ICreateCategory | Error> {
        const categoryExists = await this.categoryRepository.findByName(data.name);

        if (!data) {
            throw new Error('Data is required.')  
        }

        // if (categoryExists) {
        //   throw new Error('Category already exists.')
        // }
        const result = await this.categoryRepository.create(data);

        return result;
    }
}