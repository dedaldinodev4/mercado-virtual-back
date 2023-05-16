import { prismaClient } from "../../../utils/prismaClient";
import { ICategory, ICategoryRequest } from "../../../dtos/Category";
import { ICategoryRepository } from "../../ICategoryRepository";


export class PrismaCategoryRepository implements ICategoryRepository {
    private repository = prismaClient.category;


    async findById(id: string): Promise<ICategory | null> {
        const category = await this.repository.findFirst(
          { where: { id }
        });
        return category ?? null;
    }


    async findByName(name: string): Promise<ICategory | null> {
        const category = await this.repository.findFirst(
          { where: { name }
        });
        return category ?? null;
    }

    async findAll(): Promise<ICategory[]> {
      const categories = await this.repository.findMany({});
      return categories ?? [];
    }
        
    async create(category: ICategoryRequest): Promise<ICategory> {
      const { name, description } = category
      const newCategory = await this.repository.create({
        data: {
          name,
          description
        }
      })
      return newCategory;
    }
    
    async update(id: string, category: ICategoryRequest): Promise<ICategory> {
      const categoryUpdate = await this.repository.update({
        data: category, 
        where: { id }
      })
      return categoryUpdate;
    }

    async delete(id: string): Promise<void> {
        const categoryDelete = await this.repository.delete({
          where: {
            id
          }
        })
    }

}