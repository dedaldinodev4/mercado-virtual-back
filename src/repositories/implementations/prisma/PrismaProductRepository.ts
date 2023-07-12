import { prismaClient } from "../../../utils/prismaClient";
import { IProduct, IProductRequest, IProductUpdateRequest } from "../../../dtos/Product";
import { IProductRepository } from "../../IProductRepository";


export class PrismaProductRepository implements IProductRepository {
  private repository = prismaClient.product;


  async findById(id: string): Promise<IProduct | null> {
    const product = await this.repository.findFirst(
      {
        where: { id }
      });
    return product ?? null;
  }


  async findByName(name: string): Promise<IProduct | null> {
    const product = await this.repository.findFirst(
      {
        where: { name }
      });
    return product ?? null;
  }

  async findAll(): Promise<IProduct[]> {
    const products = await this.repository.findMany({});
    return products ?? [];
  }


  async findByIsOffer(): Promise<IProduct[]> {
    const products = await this.repository.findMany({
      where: {
        isOffer: true
      }
    });
    return products ?? [];
  }

  async create(data: IProductRequest): Promise<IProduct> {
    const newProduct = await this.repository.create({
      data
    })
    return newProduct;
  }

  async update(id: string, product: IProductUpdateRequest): Promise<IProduct> {
    const productUpdate = await this.repository.update({
      data: product,
      where: { id }
    })
    return productUpdate;
  }

  async delete(id: string): Promise<void> {
    const productDelete = await this.repository.delete({
      where: {
        id
      }
    })
  }

}