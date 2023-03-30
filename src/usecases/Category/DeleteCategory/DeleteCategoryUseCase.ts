import { ICategoryRepository } from "../../../repositories/ICategoryRepository";


export class DeleteCategoryUseCase {

    constructor(
        private categoryRepository: ICategoryRepository
    ){}

    async execute(id: string): Promise<void | Error> {
      
      const categoryExists = await this.categoryRepository.findById(id);

      if (!categoryExists) {
        throw new Error('Category does not exists.');
      }
      const result = await this.categoryRepository.delete(id);

      return result;
    }
}