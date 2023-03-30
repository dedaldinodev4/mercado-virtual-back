import { prismaClient } from "../../../utils/prismaClient";
import { ICategory, ICategoryRequest } from "../../../dtos/Category";
import { ICategoryRepository } from "../../ICategoryRepository";


export class PrismaCategoryRepository implements ICategoryRepository {
    private repository = prismaClient;


    async findById(id: string): Promise<ICategory | null> {
        const category = await this.repository.category.findFirst(
          { where: { id }
        });
        return category;
    }


    async findByName(name: string): Promise<ICategory | null> {
        const category = await this.repository.category.findFirst(
          { where: { name }
        });
        return category;
    }

    async findAll(): Promise<ICategory[]> {
      const categories = await this.repository.category.findMany({});
      return categories;
    }
        
    async create(data: ICategoryRequest): Promise<ICategory> {
      const newCategory = await this.repository.category.create({
        data
      })
      return newCategory;
    }
    
    async update(id: string, category: ICategoryRequest): Promise<ICategory> {
      const categoryUpdate = await this.repository.category.update({
        data: category, 
        where: { id }
      })
      return categoryUpdate;
    }

    async delete(id: string): Promise<void> {
        const categoryDelete = await this.repository.category.delete({
          where: {
            id
          }
        })
    }

}