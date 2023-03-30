import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { ICategory } from "./FindAllCategoriesDTO";


export class FindAllCategoriesUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(): Promise<ICategory[]> {

      const categories = await this.categoryRepository.findAll();
      return categories;
    }
}