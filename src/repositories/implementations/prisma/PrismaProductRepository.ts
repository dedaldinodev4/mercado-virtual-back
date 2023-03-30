import { prismaClient } from "../../../utils/prismaClient";
import { IProduct, IProductRequest, IProductUpdateRequest } from "../../../dtos/Product";
import { IProductRepository } from "../../IProductRepository";


export class PrismaProductRepository implements IProductRepository {
  private repository = prismaClient;


  async findById(id: string): Promise<IProduct | null> {
    const product = await this.repository.product.findFirst(
      {
        where: { id }
      });
    return product;
  }


  async findByName(name: string): Promise<IProduct | null> {
    const product = await this.repository.product.findFirst(
      {
        where: { name }
      });
    return product;
  }

  async findAll(): Promise<IProduct[]> {
    const products = await this.repository.product.findMany({});
    return products;
  }

  async findByCategory(id_category: string): Promise<IProduct[]> {
    const products = await this.repository.product.findMany({
      where: {
        id_category
      }
    });
    return products;
  }

  async create(data: IProductRequest): Promise<IProduct> {
    const newProduct = await this.repository.product.create({
      data
    })
    return newProduct;
  }

  async update(id: string, product: IProductUpdateRequest): Promise<IProduct> {
    const productUpdate = await this.repository.product.update({
      data: product,
      where: { id }
    })
    return productUpdate;
  }

  async delete(id: string): Promise<void> {
    const productDelete = await this.repository.product.delete({
      where: {
        id
      }
    })
  }

}