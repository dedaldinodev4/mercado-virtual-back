import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { ICategory } from "./FindByIdCategoryDTO";


export class FindByIdCategoryUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(id: string): Promise<ICategory | Error> {

      if (!id) {
        throw new Error('Id is required.')  
      }
      
      const category = await this.categoryRepository.findById(id);

      if (!category) {
        throw new Error('Category does not exists.');
      }

      return category;
    }
}