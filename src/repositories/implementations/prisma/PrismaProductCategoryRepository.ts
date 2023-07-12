import { prismaClient } from "../../../utils/prismaClient";
import { IProductCategory, IProductCategoryRequest, IProductCategoryUpdateRequest } from "../../../dtos/ProductCategory";
import { IProductCategoryRepository } from "../../IProductCategoryRepository";


export class PrismaProductCategoryRepository implements IProductCategoryRepository {
  private repository = prismaClient.productCategory;

  async findById(id: string): Promise<IProductCategory | null> {
    const productCategory = await this.repository.findFirst(
      {
        where: { id }
      });
      return productCategory ?? null;
  }


  async findAll(): Promise<IProductCategory[]> {
    const productCategoryies = await this.repository.findMany({});
    return productCategoryies ?? [];
  }

  async findByProduct(id_product: string): Promise<IProductCategory[]> {
    const productCategories = await this.repository.findMany({
      where: { id_product }
    });
    return productCategories ?? [];
  }

  async findByCategory(id_category: string): Promise<IProductCategory[]> {
    const productCategories = await this.repository.findMany({
      where: { id_category }
    });
    return productCategories ?? [];
  }

  async create(data: IProductCategoryRequest): Promise<IProductCategory> {
    const newProductCategory = await this.repository.create({
      data
    })
    return newProductCategory;
  }

  async update(id: string, productCategory: IProductCategoryUpdateRequest): Promise<IProductCategory> {
    const productCategoryUpdate = await this.repository.update({
      data: productCategory,
      where: { id }
    })
    return productCategoryUpdate;
  }

  async delete(id: string): Promise<void> {
    const productCategoryDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}